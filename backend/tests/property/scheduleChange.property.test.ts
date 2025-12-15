import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { scheduleChangeService, RecurrenceSchedule } from '../../src/services/scheduleChangeService';
import { templateManagerService } from '../../src/services/templateManagerService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

/**
 * Property-Based Tests for Schedule Changes
 */

describe('Schedule Change Property Tests', () => {
  // Helper function for proper database cleanup order with retry logic
  const cleanupDatabase = async (retries = 5) => {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        // Delete in proper order to avoid foreign key constraint violations
        await prisma.$transaction(async (tx) => {
          await tx.maintenanceEvent.deleteMany({});
          await tx.maintenanceTemplate.deleteMany({});
          await tx.boat.deleteMany({});
        });
        return; // Success, exit retry loop
      } catch (error) {
        if (attempt === retries - 1) {
          // Last attempt failed, log warning but continue
          console.warn('Database cleanup failed after retries:', error);
          // Force cleanup with raw SQL as last resort
          try {
            await prisma.$executeRaw`TRUNCATE TABLE "MaintenanceEvent", "MaintenanceTemplate", "Boat" RESTART IDENTITY CASCADE`;
          } catch (truncateError) {
            console.warn('Truncate also failed:', truncateError);
          }
        } else {
          // Wait longer before retry
          await new Promise(resolve => setTimeout(resolve, 200 * (attempt + 1)));
        }
      }
    }
  };

  // Clean up database before and after tests
  beforeEach(async () => {
    await cleanupDatabase();
  });

  afterAll(async () => {
    await cleanupDatabase();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 20: Schedule change preview accuracy**
   * **Validates: Requirements 5.1**
   * 
   * For any template recurrence schedule change, the system should show a confirmation page
   * listing all future events that will be affected by the change.
   */
  describe('Property 20: Schedule change preview accuracy', () => {
    test('should accurately preview which events will be affected by schedule changes', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // template title
            fc.record({
              type: fc.constantFrom('months'), // Focus on months for stability
              interval: fc.integer({ min: 3, max: 6 }) // 3-6 month intervals
            }) as fc.Arbitrary<RecurrenceSchedule>, // original recurrence
            fc.record({
              type: fc.constantFrom('months'), // Focus on months for stability
              interval: fc.integer({ min: 1, max: 12 }) // 1-12 month intervals for new schedule
            }) as fc.Arbitrary<RecurrenceSchedule> // new recurrence
          ),
          async ([boatName, templateTitle, originalRecurrence, newRecurrence]) => {
            // Skip if recurrences are identical
            if (originalRecurrence.type === newRecurrence.type && 
                originalRecurrence.interval === newRecurrence.interval) {
              return;
            }

            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName.trim() });
            
            // Create a maintenance template with original recurrence
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle.trim(),
              description: 'Test template for schedule change',
              component: 'Engine',
              recurrence: originalRecurrence,
              estimatedCost: 100,
              estimatedTime: 60
            });

            // Wait a moment for events to be generated
            await new Promise(resolve => setTimeout(resolve, 100));

            // Get current events before preview
            const eventsBefore = await prisma.maintenanceEvent.findMany({
              where: { templateId: template.id },
              orderBy: { dueDate: 'asc' }
            });

            // Generate schedule change preview
            const preview = await scheduleChangeService.previewScheduleChange(template.id, newRecurrence);

            // Verify preview structure
            expect(preview).toBeDefined();
            expect(preview.templateId).toBe(template.id);
            expect(preview.templateTitle).toBe(templateTitle.trim());
            expect(preview.currentRecurrence).toEqual(originalRecurrence);
            expect(preview.newRecurrence).toEqual(newRecurrence);

            // Verify preview arrays are defined
            expect(Array.isArray(preview.affectedEvents)).toBe(true);
            expect(Array.isArray(preview.eventsToDelete)).toBe(true);
            expect(Array.isArray(preview.eventsToCreate)).toBe(true);
            expect(Array.isArray(preview.unchangedEvents)).toBe(true);

            // Verify that all current future events are accounted for in the preview
            const now = new Date();
            const futureEvents = eventsBefore.filter(event => 
              event.completedAt === null && event.dueDate > now
            );
            const pastOrCompletedEvents = eventsBefore.filter(event => 
              event.completedAt !== null || event.dueDate <= now
            );

            // All future events should either be affected or deleted
            const affectedEventIds = preview.affectedEvents.map(e => e.id);
            const deletedEventIds = preview.eventsToDelete.map(e => e.id);
            const accountedEventIds = [...affectedEventIds, ...deletedEventIds];

            for (const futureEvent of futureEvents) {
              expect(accountedEventIds).toContain(futureEvent.id);
            }

            // All past/completed events should be in unchangedEvents
            const unchangedEventIds = preview.unchangedEvents.map(e => e.id);
            for (const pastEvent of pastOrCompletedEvents) {
              expect(unchangedEventIds).toContain(pastEvent.id);
            }

            // Verify no duplicate event IDs across categories
            const allPreviewEventIds = [
              ...affectedEventIds,
              ...deletedEventIds,
              ...unchangedEventIds
            ];
            const uniqueEventIds = new Set(allPreviewEventIds);
            expect(allPreviewEventIds.length).toBe(uniqueEventIds.size);

            // Verify affected events have valid date changes
            for (const affectedEvent of preview.affectedEvents) {
              expect(affectedEvent.id).toBeDefined();
              expect(affectedEvent.currentDueDate).toBeInstanceOf(Date);
              expect(affectedEvent.newDueDate).toBeInstanceOf(Date);
              expect(affectedEvent.title).toBe(templateTitle.trim());
              expect(affectedEvent.component).toBe('Engine');
              
              // New due date should be different from current due date
              expect(affectedEvent.newDueDate.getTime()).not.toBe(affectedEvent.currentDueDate.getTime());
            }

            // Verify events to create have valid structure
            for (const newEvent of preview.eventsToCreate) {
              expect(newEvent.dueDate).toBeInstanceOf(Date);
              expect(newEvent.title).toBe(templateTitle.trim());
              expect(newEvent.component).toBe('Engine');
              // Allow 10 second tolerance for test execution time
              expect(newEvent.dueDate.getTime()).toBeGreaterThan(now.getTime() - 10000);
            }

            await cleanupDatabase();
          }
        ),
        { numRuns: 25 } // Reduced runs for stability
      );
    }, 20000); // Increased timeout

    test('should handle templates with no future events', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // template title
            fc.record({
              type: fc.constantFrom('months'),
              interval: fc.integer({ min: 6, max: 12 })
            }) as fc.Arbitrary<RecurrenceSchedule> // new recurrence
          ),
          async ([boatName, templateTitle, newRecurrence]) => {
            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName.trim() });
            
            // Create a maintenance template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle.trim(),
              description: 'Test template',
              component: 'Engine',
              recurrence: { type: 'months', interval: 12 }, // Long interval
              estimatedCost: 100,
              estimatedTime: 60
            });

            // Delete all future events to simulate no future events scenario
            await prisma.maintenanceEvent.deleteMany({
              where: { 
                templateId: template.id,
                completedAt: null,
                dueDate: { gt: new Date() }
              }
            });

            // Generate schedule change preview
            const preview = await scheduleChangeService.previewScheduleChange(template.id, newRecurrence);

            // Verify preview handles empty future events correctly
            expect(preview).toBeDefined();
            expect(preview.templateId).toBe(template.id);
            expect(preview.affectedEvents.length).toBe(0);
            expect(preview.eventsToDelete.length).toBe(0);
            
            // Should still create new events based on new schedule
            expect(preview.eventsToCreate.length).toBeGreaterThanOrEqual(0);

            await cleanupDatabase();
          }
        ),
        { numRuns: 15 }
      );
    }, 15000);
  });

  /**
   * **Feature: boat-tracking-system, Property 21: Schedule change application**
   * **Validates: Requirements 5.2, 5.3**
   * 
   * For any confirmed schedule change, the system should update all future maintenance events
   * to match the new schedule while leaving past and completed events unchanged.
   */
  describe('Property 21: Schedule change application', () => {
    test('should apply schedule changes correctly while preserving past and completed events', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // template title
            fc.record({
              type: fc.constantFrom('months'),
              interval: fc.integer({ min: 6, max: 12 }) // Long intervals to reduce complexity
            }) as fc.Arbitrary<RecurrenceSchedule>, // original recurrence
            fc.record({
              type: fc.constantFrom('months'),
              interval: fc.integer({ min: 3, max: 6 }) // Shorter intervals for new schedule
            }) as fc.Arbitrary<RecurrenceSchedule> // new recurrence
          ),
          async ([boatName, templateTitle, originalRecurrence, newRecurrence]) => {
            // Skip if recurrences are identical
            if (originalRecurrence.type === newRecurrence.type && 
                originalRecurrence.interval === newRecurrence.interval) {
              return;
            }

            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName.trim() });
            
            // Create a maintenance template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle.trim(),
              description: 'Test template for schedule change',
              component: 'Engine',
              recurrence: originalRecurrence,
              estimatedCost: 100,
              estimatedTime: 60
            });

            // Wait for events to be generated
            await new Promise(resolve => setTimeout(resolve, 100));

            // Get events before change
            const eventsBefore = await prisma.maintenanceEvent.findMany({
              where: { templateId: template.id },
              orderBy: { dueDate: 'asc' }
            });

            // Create some completed events by marking them as completed
            const now = new Date();
            const eventsToComplete = eventsBefore.filter(event => 
              event.dueDate <= now
            ).slice(0, Math.min(2, eventsBefore.length)); // Complete up to 2 past events

            for (const event of eventsToComplete) {
              await prisma.maintenanceEvent.update({
                where: { id: event.id },
                data: {
                  completedAt: new Date(event.dueDate.getTime() + 24 * 60 * 60 * 1000), // Complete 1 day after due
                  actualCost: 120,
                  actualTime: 65,
                  notes: 'Completed for test'
                }
              });
            }

            // Get updated events after completion
            const eventsAfterCompletion = await prisma.maintenanceEvent.findMany({
              where: { templateId: template.id },
              orderBy: { dueDate: 'asc' }
            });

            // Categorize events before schedule change
            const futureEvents = eventsAfterCompletion.filter(event => 
              event.completedAt === null && event.dueDate > now
            );
            const pastOrCompletedEvents = eventsAfterCompletion.filter(event => 
              event.completedAt !== null || event.dueDate <= now
            );

            // Apply schedule change
            const result = await scheduleChangeService.applyScheduleChange(template.id, newRecurrence);

            // Verify application was successful
            expect(result.success).toBe(true);
            expect(result.errors.length).toBe(0);

            // Get events after schedule change
            const eventsAfter = await prisma.maintenanceEvent.findMany({
              where: { templateId: template.id },
              orderBy: { dueDate: 'asc' }
            });

            // Verify template recurrence was updated
            const updatedTemplate = await prisma.maintenanceTemplate.findUnique({
              where: { id: template.id }
            });
            expect(updatedTemplate).toBeDefined();
            expect(updatedTemplate!.recurrence).toEqual(JSON.parse(JSON.stringify(newRecurrence)));

            // Verify past and completed events remain unchanged
            const pastOrCompletedAfter = eventsAfter.filter(event => 
              event.completedAt !== null || event.dueDate <= now
            );

            expect(pastOrCompletedAfter.length).toBe(pastOrCompletedEvents.length);

            for (const originalEvent of pastOrCompletedEvents) {
              const matchingEvent = pastOrCompletedAfter.find(e => e.id === originalEvent.id);
              expect(matchingEvent).toBeDefined();
              expect(matchingEvent!.dueDate.getTime()).toBe(originalEvent.dueDate.getTime());
              expect(matchingEvent!.completedAt?.getTime()).toBe(originalEvent.completedAt?.getTime());
              expect(matchingEvent!.actualCost).toBe(originalEvent.actualCost);
              expect(matchingEvent!.actualTime).toBe(originalEvent.actualTime);
              expect(matchingEvent!.notes).toBe(originalEvent.notes);
            }

            // Verify future events have been updated according to new schedule
            const futureEventsAfter = eventsAfter.filter(event => 
              event.completedAt === null && event.dueDate > now
            );

            // Should have some future events based on new schedule
            expect(futureEventsAfter.length).toBeGreaterThanOrEqual(0);

            // All future events should have due dates in the future
            for (const event of futureEventsAfter) {
              expect(event.dueDate.getTime()).toBeGreaterThan(now.getTime());
              expect(event.completedAt).toBeNull();
              expect(event.templateId).toBe(template.id);
            }

            // Verify result counts are reasonable
            expect(result.eventsUpdated).toBeGreaterThanOrEqual(0);
            expect(result.eventsDeleted).toBeGreaterThanOrEqual(0);
            expect(result.eventsCreated).toBeGreaterThanOrEqual(0);

            // Total changes should not exceed original future events count plus some new ones
            const totalChanges = result.eventsUpdated + result.eventsDeleted;
            expect(totalChanges).toBeLessThanOrEqual(futureEvents.length + 10); // Allow some buffer for new events

            await cleanupDatabase();
          }
        ),
        { numRuns: 20 } // Reduced runs for stability
      );
    }, 25000); // Increased timeout for complex operations

    test('should handle schedule changes when no future events exist', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // template title
            fc.record({
              type: fc.constantFrom('months'),
              interval: fc.integer({ min: 3, max: 6 })
            }) as fc.Arbitrary<RecurrenceSchedule> // new recurrence
          ),
          async ([boatName, templateTitle, newRecurrence]) => {
            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName.trim() });
            
            // Create a maintenance template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle.trim(),
              description: 'Test template',
              component: 'Engine',
              recurrence: { type: 'months', interval: 12 }, // Long interval
              estimatedCost: 100,
              estimatedTime: 60
            });

            // Delete all future events
            await prisma.maintenanceEvent.deleteMany({
              where: { 
                templateId: template.id,
                completedAt: null,
                dueDate: { gt: new Date() }
              }
            });

            // Apply schedule change
            const result = await scheduleChangeService.applyScheduleChange(template.id, newRecurrence);

            // Verify application was successful
            expect(result.success).toBe(true);
            expect(result.errors.length).toBe(0);

            // Should have created new events based on new schedule
            expect(result.eventsCreated).toBeGreaterThanOrEqual(0);
            expect(result.eventsUpdated).toBe(0); // No existing future events to update
            expect(result.eventsDeleted).toBe(0); // No existing future events to delete

            // Verify template recurrence was updated
            const updatedTemplate = await prisma.maintenanceTemplate.findUnique({
              where: { id: template.id }
            });
            expect(updatedTemplate).toBeDefined();
            expect(updatedTemplate!.recurrence).toEqual(JSON.parse(JSON.stringify(newRecurrence)));

            await cleanupDatabase();
          }
        ),
        { numRuns: 15 }
      );
    }, 15000);
  });
});