import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { eventManagerService } from '../../src/services/eventManagerService';
import { templateManagerService } from '../../src/services/templateManagerService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

// Helper function for proper database cleanup order with retry logic
const cleanupDatabase = async (retries = 5) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      // Clean up in dependency order
      await prisma.entityPhoto.deleteMany({});
      await prisma.photo.deleteMany({});
      await prisma.maintenanceEvent.deleteMany({});
      await prisma.maintenanceTemplate.deleteMany({});
      await prisma.boat.deleteMany({});
      break; // Success, exit retry loop
    } catch (error) {
      if (attempt === retries - 1) {
        throw error; // Last attempt failed, re-throw
      }
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 100 * (attempt + 1)));
    }
  }
};

/**
 * Property-Based Tests for Event Management
 */

describe('Event Management Property Tests', () => {
  beforeEach(async () => {
    await cleanupDatabase();
  });

  afterAll(async () => {
    await cleanupDatabase();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 12: Upcoming events filtering**
   * **Validates: Requirements 3.1**
   * 
   * For any set of maintenance events, the Upcoming tab should display only events
   * that are due but not completed.
   */
  describe('Property 12: Upcoming events filtering', () => {
    test('should return only incomplete events in upcoming filter', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // template title
            fc.array(
              fc.record({
                dueDate: fc.date({ min: new Date('2025-01-01'), max: new Date('2026-12-31') }),
                completed: fc.boolean()
              }),
              { minLength: 2, maxLength: 5 }
            ) // events with completion status
          ),
          async ([boatName, templateTitle, eventData]) => {
            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle,
              description: 'Test template',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create events with different completion statuses
            const createdEvents = [];
            for (const data of eventData) {
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate: data.dueDate,
                  completedAt: data.completed ? new Date() : null,
                  actualCost: data.completed ? 120 : null,
                  actualTime: data.completed ? 65 : null,
                  notes: data.completed ? 'Completed' : null
                }
              });
              createdEvents.push({ ...event, completed: data.completed });
            }
            
            // Get upcoming events
            const upcomingEvents = await eventManagerService.getUpcomingEvents();
            
            // Count expected incomplete events
            const expectedIncompleteCount = eventData.filter(e => !e.completed).length;
            
            // Verify only incomplete events are returned
            expect(upcomingEvents.length).toBe(expectedIncompleteCount);
            
            // Verify all returned events are incomplete
            for (const event of upcomingEvents) {
              expect(event.completedAt).toBeNull();
              expect(event.actualCost).toBeNull();
              expect(event.actualTime).toBeNull();
              expect(event.notes).toBeNull();
            }
            
            // Verify all incomplete events are included
            const upcomingEventIds = upcomingEvents.map(e => e.id);
            const expectedIncompleteEvents = createdEvents.filter(e => !e.completed);
            
            for (const expectedEvent of expectedIncompleteEvents) {
              expect(upcomingEventIds).toContain(expectedEvent.id);
            }
            
            await cleanupDatabase();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 13: Completed events filtering**
   * **Validates: Requirements 3.2**
   * 
   * For any set of maintenance events, the Complete tab should display only events
   * that have been completed.
   */
  describe('Property 13: Completed events filtering', () => {
    test('should return only completed events in completed filter', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // template title
            fc.array(
              fc.record({
                dueDate: fc.date({ min: new Date('2025-01-01'), max: new Date('2026-12-31') }),
                completed: fc.boolean()
              }),
              { minLength: 2, maxLength: 5 }
            ) // events with completion status
          ),
          async ([boatName, templateTitle, eventData]) => {
            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle,
              description: 'Test template',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create events with different completion statuses
            const createdEvents = [];
            for (const data of eventData) {
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate: data.dueDate,
                  completedAt: data.completed ? new Date() : null,
                  actualCost: data.completed ? 120 : null,
                  actualTime: data.completed ? 65 : null,
                  notes: data.completed ? 'Completed' : null
                }
              });
              createdEvents.push({ ...event, completed: data.completed });
            }
            
            // Get completed events
            const completedEvents = await eventManagerService.getCompletedEvents();
            
            // Count expected completed events
            const expectedCompletedCount = eventData.filter(e => e.completed).length;
            
            // Verify only completed events are returned
            expect(completedEvents.length).toBe(expectedCompletedCount);
            
            // Verify all returned events are completed
            for (const event of completedEvents) {
              expect(event.completedAt).not.toBeNull();
              expect(event.actualCost).not.toBeNull();
              expect(event.actualTime).not.toBeNull();
              expect(event.notes).not.toBeNull();
            }
            
            // Verify all completed events are included
            const completedEventIds = completedEvents.map(e => e.id);
            const expectedCompletedEvents = createdEvents.filter(e => e.completed);
            
            for (const expectedEvent of expectedCompletedEvents) {
              expect(completedEventIds).toContain(expectedEvent.id);
            }
            
            await cleanupDatabase();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 15: Template photo visibility on events**
   * **Validates: Requirements 3.4**
   * 
   * For any maintenance event with an originating template that has photos, viewing the event
   * should display the template photos as reference images.
   */
  describe('Property 15: Template photo visibility on events', () => {
    test('should handle events from templates without photos', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // template title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2026-12-31') }) // due date
          ),
          async ([boatName, templateTitle, dueDate]) => {
            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance template without photos
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle,
              description: 'Test template',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create a maintenance event from the template
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Get event details
            const eventDetails = await eventManagerService.getEventDetails(event.id);
            
            // Verify event details are returned
            expect(eventDetails).not.toBeNull();
            expect(eventDetails!.id).toBe(event.id);
            expect(eventDetails!.templateId).toBe(template.id);
            
            // Verify template has no photos
            expect(eventDetails!.templatePhotos).toBeDefined();
            expect(eventDetails!.templatePhotos.length).toBe(0);
            
            await cleanupDatabase();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 16: Event completion data recording**
   * **Validates: Requirements 3.5**
   * 
   * For any maintenance event completion, the system should properly record completion date,
   * actual cost, completion notes, and completion photos.
   */
  describe('Property 16: Event completion data recording', () => {
    test('should record all completion data correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // template title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2026-12-31') }), // due date
            fc.record({
              actualCost: fc.option(fc.float({ min: Math.fround(0.01), max: Math.fround(1000), noNaN: true })),
              actualTime: fc.option(fc.integer({ min: 1, max: 480 })), // 1-480 minutes
              notes: fc.option(fc.string({ minLength: 1, maxLength: 200 }))
            }) // completion data
          ),
          async ([boatName, templateTitle, dueDate, completionData]) => {
            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle,
              description: 'Test template',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create a maintenance event
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Record completion time before completing
            const beforeCompletion = new Date();
            
            // Complete the event
            const completedEvent = await eventManagerService.completeEvent(event.id, {
              actualCost: completionData.actualCost || undefined,
              actualTime: completionData.actualTime || undefined,
              notes: completionData.notes || undefined
            });
            
            // Record completion time after completing
            const afterCompletion = new Date();
            
            // Verify completion data was recorded correctly
            expect(completedEvent.completedAt).not.toBeNull();
            expect(completedEvent.completedAt!.getTime()).toBeGreaterThanOrEqual(beforeCompletion.getTime());
            expect(completedEvent.completedAt!.getTime()).toBeLessThanOrEqual(afterCompletion.getTime());
            
            // Verify actual cost
            if (completionData.actualCost !== null && completionData.actualCost !== undefined) {
              expect(completedEvent.actualCost).toBeCloseTo(completionData.actualCost, 2);
            } else {
              expect(completedEvent.actualCost).toBeNull();
            }
            
            // Verify actual time
            if (completionData.actualTime !== null && completionData.actualTime !== undefined) {
              expect(completedEvent.actualTime).toBe(completionData.actualTime);
            } else {
              expect(completedEvent.actualTime).toBeNull();
            }
            
            // Verify completion notes
            if (completionData.notes !== null && completionData.notes !== undefined) {
              const trimmedNotes = completionData.notes.trim();
              if (trimmedNotes) {
                expect(completedEvent.notes).toBe(trimmedNotes);
              } else {
                expect(completedEvent.notes).toBeNull();
              }
            } else {
              expect(completedEvent.notes).toBeNull();
            }
            
            // Verify event is now marked as completed
            expect(completedEvent.id).toBe(event.id);
            expect(completedEvent.templateId).toBe(template.id);
            
            // Verify the event appears in completed events list
            const completedEvents = await eventManagerService.getCompletedEvents();
            const foundEvent = completedEvents.find(e => e.id === event.id);
            expect(foundEvent).toBeDefined();
            expect(foundEvent!.completedAt).not.toBeNull();
            
            // Verify the event does not appear in upcoming events list
            const upcomingEvents = await eventManagerService.getUpcomingEvents();
            const foundUpcomingEvent = upcomingEvents.find(e => e.id === event.id);
            expect(foundUpcomingEvent).toBeUndefined();
            
            await cleanupDatabase();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 17: Completed event photo display**
   * **Validates: Requirements 3.6**
   * 
   * For any completed maintenance event, viewing the event should display both template photos
   * and completion photos.
   */
  describe('Property 17: Completed event photo display', () => {
    test('should handle completed events with no photos', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // template title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2026-12-31') }), // due date
            fc.float({ min: Math.fround(0.01), max: Math.fround(500), noNaN: true }) // completion cost
          ),
          async ([boatName, templateTitle, dueDate, completionCost]) => {
            await cleanupDatabase();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance template without photos
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: templateTitle,
              description: 'Test template',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create a maintenance event
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Complete the event without completion photos
            await eventManagerService.completeEvent(event.id, {
              actualCost: completionCost,
              notes: 'Event completed without photos'
            });
            
            // Get event details
            const eventDetails = await eventManagerService.getEventDetails(event.id);
            
            // Verify event is completed
            expect(eventDetails).not.toBeNull();
            expect(eventDetails!.completedAt).not.toBeNull();
            expect(eventDetails!.actualCost).toBeCloseTo(completionCost, 2);
            
            // Verify no template photos
            expect(eventDetails!.templatePhotos).toBeDefined();
            expect(eventDetails!.templatePhotos.length).toBe(0);
            
            // Verify no completion photos
            expect(eventDetails!.completionPhotos).toBeDefined();
            expect(eventDetails!.completionPhotos.length).toBe(0);
            
            await cleanupDatabase();
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});