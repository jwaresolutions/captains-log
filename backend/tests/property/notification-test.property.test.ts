import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { notificationService } from '../../src/services/notificationService';
import { templateManagerService } from '../../src/services/templateManagerService';

import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

describe('Notification Service Property Tests', () => {
  const createDueDate = (daysUntilDue: number): Date => {
    const now = new Date();
    const dueDate = new Date();
    
    if (daysUntilDue === 0) {
      // For "due today", create an event that's due now or slightly overdue
      // This ensures Math.ceil calculation results in 0 days
      dueDate.setTime(now.getTime() - (1000 * 60 * 5)); // 5 minutes ago (overdue but still "today")
    } else if (daysUntilDue === 1) {
      // For "due tomorrow", ensure it's clearly in the next day
      // Set to tomorrow at noon to ensure Math.ceil calculation results in exactly 1 day
      dueDate.setDate(now.getDate() + 1);
      dueDate.setHours(12, 0, 0, 0);
    } else if (daysUntilDue < 0) {
      // For overdue events
      dueDate.setDate(now.getDate() + daysUntilDue);
      dueDate.setHours(12, 0, 0, 0);
    } else {
      // For future events - set to noon to avoid timezone/timing issues
      dueDate.setDate(now.getDate() + daysUntilDue);
      dueDate.setHours(12, 0, 0, 0);
    }
    
    return dueDate;
  };

  // Helper to safely clean database in proper order
  const cleanDatabase = async (): Promise<void> => {
    try {
      // Clean up in proper order to avoid foreign key constraint violations
      await prisma.notification.deleteMany();
      await prisma.maintenanceEvent.deleteMany();
      await prisma.maintenanceTemplate.deleteMany();
      await prisma.gPSPoint.deleteMany();
      await prisma.trip.deleteMany();
      await prisma.boat.deleteMany();
      
      // Add a small delay to ensure cleanup is complete
      await new Promise(resolve => setTimeout(resolve, 50));
    } catch (error) {
      console.warn('Database cleanup warning:', error);
      // Continue with test execution even if cleanup has issues
    }
  };

  // Helper to create a boat with proper error handling
  const createTestBoat = async (name: string): Promise<any> => {
    try {
      const boat = await boatService.createBoat({ name: name.trim() });
      // Ensure boat exists in database before returning
      const retrievedBoat = await boatService.getBoat(boat.id);
      if (!retrievedBoat) {
        throw new Error(`Failed to create boat: ${name}`);
      }
      return retrievedBoat;
    } catch (error) {
      console.error(`Error creating test boat "${name}":`, error);
      throw error;
    }
  };

  // Helper to create a maintenance template with proper error handling
  const createTestTemplate = async (boatId: string, title: string): Promise<any> => {
    try {
      // Verify boat exists before creating template
      const boat = await boatService.getBoat(boatId);
      if (!boat) {
        throw new Error(`Boat not found for template creation: ${boatId}`);
      }
      
      return await templateManagerService.createTemplate({
        boatId,
        title: title.trim(),
        description: 'Test maintenance template',
        component: 'Engine',
        recurrence: { type: 'days', interval: 30 },
        estimatedCost: 100,
        estimatedTime: 60
      });
    } catch (error) {
      console.error(`Error creating test template "${title}" for boat ${boatId}:`, error);
      throw error;
    }
  };

  // Helper to create maintenance event with proper error handling
  const createTestEvent = async (templateId: string, daysUntilDue: number): Promise<any> => {
    try {
      const dueDate = createDueDate(daysUntilDue);
      return await prisma.maintenanceEvent.create({
        data: {
          templateId,
          dueDate
        }
      });
    } catch (error) {
      console.error(`Error creating test event for template ${templateId}:`, error);
      throw error;
    }
  };

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 4: Disabled Boat Notification Suppression**
   * **Validates: Requirements 3.3, 9.7, 18.3**
   */
  describe('Property 4: Disabled Boat Notification Suppression', () => {
    test('should only generate notifications for enabled boats', async () => {
      await fc.assert(
        fc.asyncProperty(
          // Generate random boats with enabled/disabled status
          fc.array(
            fc.record({
              name: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
              enabled: fc.boolean(),
              templateTitle: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
              daysUntilDue: fc.integer({ min: 1, max: 7 })
            }),
            { minLength: 2, maxLength: 3 } // Reduced complexity
          ).filter(boats => {
            // Ensure we have at least one enabled and one disabled boat
            const enabledCount = boats.filter(b => b.enabled).length;
            const disabledCount = boats.filter(b => !b.enabled).length;
            return enabledCount >= 1 && disabledCount >= 1;
          }),
          async (boatConfigs) => {
            // Clean database before this iteration
            await cleanDatabase();
            
            const createdBoats = [];
            const createdEvents = [];
            
            try {
              // Create boats, templates, and events
              for (const config of boatConfigs) {
                // Create boat (initially enabled)
                const boat = await createTestBoat(config.name);
                
                // Set the boat's enabled status
                if (!config.enabled) {
                  await boatService.toggleBoatStatus(boat.id, false);
                }
                
                createdBoats.push({ ...boat, enabled: config.enabled });
                
                // Create maintenance template for this boat
                const template = await createTestTemplate(boat.id, config.templateTitle);
                
                // Create maintenance event for this template
                const event = await createTestEvent(template.id, config.daysUntilDue);
                
                createdEvents.push({ ...event, boatEnabled: config.enabled });
              }
              
              // Check maintenance due - should only create notifications for enabled boats
              const notifications = await notificationService.checkMaintenanceDue(7);
              
              // Count expected notifications (only for enabled boats)
              const expectedNotificationCount = boatConfigs.filter(b => b.enabled).length;
              expect(notifications.length).toBe(expectedNotificationCount);
              
              // Verify each notification is for an enabled boat
              for (const notification of notifications) {
                expect(notification.type).toBe('maintenance_due');
                expect(notification.entityType).toBe('maintenance_event');
                
                // Find the corresponding event
                const event = createdEvents.find(e => e.id === notification.entityId);
                expect(event).toBeDefined();
                expect(event!.boatEnabled).toBe(true);
              }
              
              // Verify no notifications exist for disabled boats
              const allNotifications = await notificationService.getActiveNotifications();
              for (const notification of allNotifications) {
                if (notification.entityType === 'maintenance_event') {
                  const event = createdEvents.find(e => e.id === notification.entityId);
                  if (event) {
                    expect(event.boatEnabled).toBe(true);
                  }
                }
              }
            } finally {
              // Clean up after test iteration
              await cleanDatabase();
            }
          }
        ),
        { numRuns: 100 }
      );
    }, 20000); // 20 second timeout

    test('should suppress existing notifications when boat is disabled', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // template title
            fc.integer({ min: 1, max: 7 }) // days until due
          ),
          async ([boatName, templateTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create an enabled boat
            const boat = await createTestBoat(boatName);
            expect(boat.enabled).toBe(true);
            
            // Create maintenance template for this boat
            const template = await createTestTemplate(boat.id, templateTitle);
            
            // Create maintenance event for this template
            const dueDate = createDueDate(daysUntilDue);
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Generate notifications for enabled boat
            const notificationsBeforeDisable = await notificationService.checkMaintenanceDue(7);
            expect(notificationsBeforeDisable.length).toBe(1);
            expect(notificationsBeforeDisable[0].entityId).toBe(event.id);
            expect(notificationsBeforeDisable[0].type).toBe('maintenance_due');
            
            // Verify notification exists
            const activeNotificationsBefore = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_event',
              entityId: event.id
            });
            expect(activeNotificationsBefore.length).toBe(1);
            
            // Disable the boat - this should remove existing notifications
            await boatService.toggleBoatStatus(boat.id, false);
            
            // Verify existing notifications were removed
            const activeNotificationsAfter = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_event',
              entityId: event.id
            });
            expect(activeNotificationsAfter.length).toBe(0);
            
            // Verify no new notifications are created for disabled boat
            const notificationsAfterDisable = await notificationService.checkMaintenanceDue(7);
            expect(notificationsAfterDisable.length).toBe(0);
            
            // Verify boat is disabled but template and event still exist
            const retrievedBoat = await boatService.getBoat(boat.id);
            expect(retrievedBoat).toBeDefined();
            expect(retrievedBoat!.enabled).toBe(false);
            
            const retrievedTemplates = await templateManagerService.getTemplates(boat.id);
            const retrievedTemplate = retrievedTemplates.find(t => t.id === template.id);
            expect(retrievedTemplate).toBeDefined();
            expect(retrievedTemplate!.boat.enabled).toBe(false);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should restore notifications when boat is re-enabled', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // template title
            fc.integer({ min: 1, max: 7 }) // days until due
          ),
          async ([boatName, templateTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create an enabled boat
            const boat = await createTestBoat(boatName);
            
            // Create maintenance template for this boat
            const template = await createTestTemplate(boat.id, templateTitle);
            
            // Create maintenance event for this template
            const dueDate = createDueDate(daysUntilDue);
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Disable the boat
            await boatService.toggleBoatStatus(boat.id, false);
            
            // Verify no notifications for disabled boat
            const notificationsWhileDisabled = await notificationService.checkMaintenanceDue(7);
            expect(notificationsWhileDisabled.length).toBe(0);
            
            // Re-enable the boat
            await boatService.toggleBoatStatus(boat.id, true);
            
            // Verify notifications are created again for enabled boat
            const notificationsAfterReEnable = await notificationService.checkMaintenanceDue(7);
            expect(notificationsAfterReEnable.length).toBe(1);
            expect(notificationsAfterReEnable[0].entityId).toBe(event.id);
            expect(notificationsAfterReEnable[0].type).toBe('maintenance_due');
            
            // Verify boat is enabled
            const retrievedBoat = await boatService.getBoat(boat.id);
            expect(retrievedBoat).toBeDefined();
            expect(retrievedBoat!.enabled).toBe(true);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 34: Maintenance Due Notifications**
   * **Validates: Requirements 9.6, 18.1, 18.2**
   */
  describe('Property 34: Maintenance Due Notifications', () => {
    test('should create notifications for events due within 7 days and not for events beyond 7 days', async () => {
      await fc.assert(
        fc.asyncProperty(
          // Generate random maintenance events with various due dates
          fc.array(
            fc.record({
              boatName: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              templateTitle: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              daysUntilDue: fc.integer({ min: -2, max: 15 }) // Include past due, within range, and beyond range
            }),
            { minLength: 2, maxLength: 4 }
          ).filter(events => {
            // Ensure we have events in different categories
            const withinRange = events.filter(e => e.daysUntilDue >= 0 && e.daysUntilDue <= 7).length;
            const beyondRange = events.filter(e => e.daysUntilDue > 7).length;
            return withinRange >= 1 && beyondRange >= 1;
          }),
          async (eventConfigs) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            const createdEvents = [];
            
            // Create boats, templates, and maintenance events
            for (const config of eventConfigs) {
              // Create enabled boat
              const boat = await createTestBoat(config.boatName);
              
              // Create maintenance template
              const template = await createTestTemplate(boat.id, config.templateTitle);
              
              // Create maintenance event with specific due date
              const dueDate = createDueDate(config.daysUntilDue);
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate
                }
              });
              
              createdEvents.push({
                ...event,
                daysUntilDue: config.daysUntilDue,
                boatName: config.boatName
              });
            }
            
            // Check maintenance due with 7-day window
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Count expected notifications (for overdue events and events due within 0-7 days)
            // Overdue events (negative days) should also get notifications
            const expectedEvents = eventConfigs.filter(e => e.daysUntilDue <= 7);
            expect(notifications.length).toBe(expectedEvents.length);
            
            // Verify each notification corresponds to an event within the 7-day window (including overdue)
            for (const notification of notifications) {
              expect(notification.type).toBe('maintenance_due');
              expect(notification.entityType).toBe('maintenance_event');
              expect(notification.title).toMatch(/Maintenance Due/);
              expect(notification.message).toBeTruthy();
              expect(notification.read).toBe(false);
              
              // Find the corresponding event
              const event = createdEvents.find(e => e.id === notification.entityId);
              expect(event).toBeDefined();
              // Include overdue events (negative days) and events due within 7 days
              expect(event!.daysUntilDue).toBeLessThanOrEqual(7);
              
              // Verify notification message contains boat name
              expect(notification.message).toContain(event!.boatName);
            }
            
            // Verify no notifications exist for events beyond 7 days
            const allNotifications = await notificationService.getActiveNotifications({
              type: 'maintenance_due'
            });
            
            for (const notification of allNotifications) {
              const event = createdEvents.find(e => e.id === notification.entityId);
              if (event) {
                // Should include overdue events and events due within 7 days
                expect(event.daysUntilDue).toBeLessThanOrEqual(7);
              }
            }
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should verify notification timing accuracy for different due dates', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // boat name
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // template title
            fc.integer({ min: 0, max: 7 }) // days until due (within notification window)
          ),
          async ([boatName, templateTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create enabled boat
            const boat = await createTestBoat(boatName);
            
            // Create maintenance template
            const template = await createTestTemplate(boat.id, templateTitle);
            
            // Create maintenance event with specific due date
            const dueDate = createDueDate(daysUntilDue);
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Check maintenance due
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Should create exactly one notification
            expect(notifications.length).toBe(1);
            const notification = notifications[0];
            
            // Verify notification properties
            expect(notification.type).toBe('maintenance_due');
            expect(notification.entityType).toBe('maintenance_event');
            expect(notification.entityId).toBe(event.id);
            expect(notification.read).toBe(false);
            
            // Verify notification title and message based on days until due
            // Recalculate daysUntilDue to match what the service would calculate
            const now = new Date();
            const actualDaysUntilDue = Math.ceil((event.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            
            if (actualDaysUntilDue <= 0) {
              expect(notification.title).toBe('Maintenance Due Today');
              expect(notification.message).toContain('is due today');
            } else if (actualDaysUntilDue === 1) {
              expect(notification.title).toBe('Maintenance Due Tomorrow');
              expect(notification.message).toContain('is due tomorrow');
            } else {
              expect(notification.title).toBe('Maintenance Due Soon');
              expect(notification.message).toContain(`is due in ${actualDaysUntilDue} days`);
            }
            
            // Verify message contains template title and boat name
            expect(notification.message).toContain(templateTitle);
            expect(notification.message).toContain(boatName);
            
            // Verify no duplicate notifications are created on subsequent checks
            const secondCheck = await notificationService.checkMaintenanceDue(7);
            expect(secondCheck.length).toBe(0); // No new notifications should be created
            
            // Verify total notifications remain the same
            const allNotifications = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_event',
              entityId: event.id
            });
            expect(allNotifications.length).toBe(1);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should not create notifications for events beyond 7-day window', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // boat name
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // template title
            fc.integer({ min: 8, max: 30 }) // days until due (beyond notification window)
          ),
          async ([boatName, templateTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create enabled boat
            const boat = await createTestBoat(boatName);
            
            // Create maintenance template
            const template = await createTestTemplate(boat.id, templateTitle);
            
            // Create maintenance event with due date beyond 7 days
            const dueDate = createDueDate(daysUntilDue);
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Check maintenance due with 7-day window
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Should not create any notifications for events beyond 7 days
            expect(notifications.length).toBe(0);
            
            // Verify no notifications exist for this event
            const eventNotifications = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_event',
              entityId: event.id
            });
            expect(eventNotifications.length).toBe(0);
            
            // Verify event still exists but no notification
            const retrievedEvent = await prisma.maintenanceEvent.findUnique({
              where: { id: event.id },
              include: {
                template: true
              }
            });
            expect(retrievedEvent).toBeDefined();
            expect(retrievedEvent!.template.title).toBe(templateTitle);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 47: Notification Content Completeness**
   * **Validates: Requirements 18.4**
   */
  describe('Property 47: Notification Content Completeness', () => {
    test('should include all required notification fields (title, message, boat info, due date)', async () => {
      await fc.assert(
        fc.asyncProperty(
          // Generate random maintenance events and notifications
          fc.array(
            fc.record({
              boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              templateTitle: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              daysUntilDue: fc.integer({ min: 0, max: 7 }) // Within notification window
            }),
            { minLength: 1, maxLength: 5 }
          ),
          async (eventConfigs) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            const createdEvents = [];
            
            // Create boats, templates, and maintenance events
            for (const config of eventConfigs) {
              // Create enabled boat
              const boat = await createTestBoat(config.boatName);
              
              // Create maintenance template
              const template = await createTestTemplate(boat.id, config.templateTitle);
              
              // Create maintenance event with specific due date
              const dueDate = createDueDate(config.daysUntilDue);
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate
                }
              });
              
              createdEvents.push({
                ...event,
                daysUntilDue: config.daysUntilDue,
                boatName: config.boatName,
                templateTitle: config.templateTitle
              });
            }
            
            // Generate notifications
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Should create notifications for all events within 7 days
            expect(notifications.length).toBe(eventConfigs.length);
            
            // Verify each notification has all required fields and correct content
            for (const notification of notifications) {
              // Find the corresponding event
              const event = createdEvents.find(e => e.id === notification.entityId);
              expect(event).toBeDefined();
              
              // Verify all required notification fields are present
              expect(notification.id).toBeTruthy();
              expect(notification.type).toBe('maintenance_due');
              expect(notification.title).toBeTruthy();
              expect(notification.message).toBeTruthy();
              expect(notification.entityType).toBe('maintenance_event');
              expect(notification.entityId).toBe(event!.id);
              expect(notification.read).toBe(false);
              expect(notification.createdAt).toBeInstanceOf(Date);
              
              // Verify notification content includes template title, due date info, and boat name (Requirements 18.4)
              expect(notification.message).toContain(event!.templateTitle); // Template title
              expect(notification.message).toContain(event!.boatName);  // Boat name
              
              // Verify due date information is included in title and/or message
              // Recalculate daysUntilDue to match what the service would calculate
              const now = new Date();
              const actualDaysUntilDue = Math.ceil((event!.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
              
              if (actualDaysUntilDue <= 0) {
                expect(notification.title).toBe('Maintenance Due Today');
                expect(notification.message).toContain('is due today');
              } else if (actualDaysUntilDue === 1) {
                expect(notification.title).toBe('Maintenance Due Tomorrow');
                expect(notification.message).toContain('is due tomorrow');
              } else {
                expect(notification.title).toBe('Maintenance Due Soon');
                expect(notification.message).toContain(`is due in ${actualDaysUntilDue} days`);
              }
              
              // Verify notification content accuracy - message should match expected format
              const expectedMessagePattern = new RegExp(
                `${event!.templateTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} is due .* for ${event!.boatName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`
              );
              expect(notification.message).toMatch(expectedMessagePattern);
              
              // Verify notification data matches source maintenance event
              expect(notification.entityId).toBe(event!.id);
              expect(notification.entityType).toBe('maintenance_event');
            }
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should verify notification formatting consistency across different due dates', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()), // template title
            fc.integer({ min: 0, max: 7 }) // days until due
          ),
          async ([boatName, templateTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create enabled boat
            const boat = await createTestBoat(boatName);
            
            // Create maintenance template
            const template = await createTestTemplate(boat.id, templateTitle);
            
            // Create maintenance event
            const dueDate = createDueDate(daysUntilDue);
            await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Generate notification
            const notifications = await notificationService.checkMaintenanceDue(7);
            expect(notifications.length).toBe(1);
            
            const notification = notifications[0];
            
            // Verify notification content completeness and formatting
            expect(notification.title).toBeTruthy();
            expect(notification.message).toBeTruthy();
            expect(typeof notification.title).toBe('string');
            expect(typeof notification.message).toBe('string');
            expect(notification.title.length).toBeGreaterThan(0);
            expect(notification.message.length).toBeGreaterThan(0);
            
            // Verify required content is present (Requirements 18.4)
            expect(notification.message).toContain(templateTitle);  // Template title
            expect(notification.message).toContain(boatName);   // Boat name
            
            // Verify due date information formatting
            // Recalculate daysUntilDue to match what the service would calculate
            const now = new Date();
            const actualDaysUntilDue = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            
            if (actualDaysUntilDue <= 0) {
              expect(notification.title).toBe('Maintenance Due Today');
              expect(notification.message).toContain('today');
            } else if (actualDaysUntilDue === 1) {
              expect(notification.title).toBe('Maintenance Due Tomorrow');
              expect(notification.message).toContain('tomorrow');
            } else {
              expect(notification.title).toBe('Maintenance Due Soon');
              expect(notification.message).toContain(`${actualDaysUntilDue} days`);
            }
            
            // Verify message structure follows expected pattern
            const messageWords = notification.message.split(' ');
            expect(messageWords).toContain('is');
            expect(messageWords).toContain('due');
            expect(messageWords).toContain('for');
            
            // Verify no extra whitespace or formatting issues
            expect(notification.title.trim()).toBe(notification.title);
            expect(notification.message.trim()).toBe(notification.message);
            expect(notification.title).not.toContain('  '); // No double spaces
            expect(notification.message).not.toContain('  '); // No double spaces
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 31: Maintenance notification generation**
   * **Validates: Requirements 12.1, 12.2**
   */
  describe('Property 31: Maintenance notification generation', () => {
    test('should send notifications to both Android and Web applications with event title, due date, boat name, and event link', async () => {
      await fc.assert(
        fc.asyncProperty(
          // Generate random maintenance events due within one week
          fc.array(
            fc.record({
              boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              templateTitle: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              daysUntilDue: fc.integer({ min: 0, max: 7 }) // Within one week
            }),
            { minLength: 1, maxLength: 5 }
          ),
          async (eventConfigs) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            const createdEvents = [];
            
            // Create boats, templates, and maintenance events
            for (const config of eventConfigs) {
              // Create enabled boat
              const boat = await createTestBoat(config.boatName);
              
              // Create maintenance template
              const template = await createTestTemplate(boat.id, config.templateTitle);
              
              // Create maintenance event due within one week
              const dueDate = createDueDate(config.daysUntilDue);
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate
                }
              });
              
              createdEvents.push({
                ...event,
                boatName: config.boatName,
                templateTitle: config.templateTitle,
                daysUntilDue: config.daysUntilDue
              });
            }
            
            // Generate notifications for events due within one week
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Should create notifications for all events within one week
            expect(notifications.length).toBe(eventConfigs.length);
            
            // Verify each notification has required content for both Android and Web applications
            for (const notification of notifications) {
              const event = createdEvents.find(e => e.id === notification.entityId);
              expect(event).toBeDefined();
              
              // Verify notification type and basic properties
              expect(notification.type).toBe('maintenance_due');
              expect(notification.entityType).toBe('maintenance_event');
              expect(notification.entityId).toBe(event!.id);
              expect(notification.read).toBe(false);
              
              // Verify notification contains event title (template title)
              expect(notification.message).toContain(event!.templateTitle);
              
              // Verify notification contains boat name
              expect(notification.message).toContain(event!.boatName);
              
              // Verify notification contains due date information
              // Recalculate daysUntilDue to match what the service would calculate
              const now = new Date();
              const actualDaysUntilDue = Math.ceil((event!.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
              
              if (actualDaysUntilDue <= 0) {
                expect(notification.title).toBe('Maintenance Due Today');
                expect(notification.message).toContain('today');
              } else if (actualDaysUntilDue === 1) {
                expect(notification.title).toBe('Maintenance Due Tomorrow');
                expect(notification.message).toContain('tomorrow');
              } else {
                expect(notification.title).toBe('Maintenance Due Soon');
                expect(notification.message).toContain(`${actualDaysUntilDue} days`);
              }
              
              // Verify notification provides event link (entityId for linking)
              expect(notification.entityId).toBeTruthy();
              expect(notification.entityType).toBe('maintenance_event');
              
              // Verify notification is accessible for both Android and Web applications
              // (notifications are stored in database and accessible via API)
              const retrievedNotification = await notificationService.getActiveNotifications({
                type: 'maintenance_due',
                entityType: 'maintenance_event',
                entityId: event!.id
              });
              expect(retrievedNotification.length).toBe(1);
              expect(retrievedNotification[0].id).toBe(notification.id);
            }
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should not create duplicate notifications for the same event', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()), // template title
            fc.integer({ min: 1, max: 7 }) // days until due
          ),
          async ([boatName, templateTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create enabled boat
            const boat = await createTestBoat(boatName);
            
            // Create maintenance template
            const template = await createTestTemplate(boat.id, templateTitle);
            
            // Create maintenance event
            const dueDate = createDueDate(daysUntilDue);
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // First check - should create one notification
            const firstCheck = await notificationService.checkMaintenanceDue(7);
            expect(firstCheck.length).toBe(1);
            expect(firstCheck[0].entityId).toBe(event.id);
            
            // Second check - should not create duplicate notification
            const secondCheck = await notificationService.checkMaintenanceDue(7);
            expect(secondCheck.length).toBe(0); // No new notifications
            
            // Verify only one notification exists total
            const allNotifications = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_event',
              entityId: event.id
            });
            expect(allNotifications.length).toBe(1);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 32: Notification management**
   * **Validates: Requirements 12.3, 12.4**
   */
  describe('Property 32: Notification management', () => {
    test('should suppress maintenance notifications for disabled boats and remove notifications when events are completed', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(
            fc.record({
              boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              templateTitle: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              daysUntilDue: fc.integer({ min: 1, max: 7 }),
              shouldDisableBoat: fc.boolean(),
              shouldCompleteEvent: fc.boolean()
            }),
            { minLength: 2, maxLength: 4 }
          ).filter(configs => {
            // Ensure we have at least one boat to disable and one event to complete
            const hasDisabledBoat = configs.some(c => c.shouldDisableBoat);
            const hasCompletedEvent = configs.some(c => c.shouldCompleteEvent);
            return hasDisabledBoat && hasCompletedEvent;
          }),
          async (eventConfigs) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            const createdEvents = [];
            
            // Create boats, templates, and maintenance events
            for (const config of eventConfigs) {
              // Create enabled boat
              const boat = await boatService.createBoat({ name: config.boatName });
              
              // Create maintenance template
              const template = await templateManagerService.createTemplate({
                boatId: boat.id,
                title: config.templateTitle,
                description: 'Test maintenance template',
                component: 'Engine',
                recurrence: { type: 'days', interval: 30 },
                estimatedCost: 100,
                estimatedTime: 60
              });
              
              // Create maintenance event
              const dueDate = createDueDate(config.daysUntilDue);
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate
                }
              });
              
              createdEvents.push({
                ...event,
                boatId: boat.id,
                templateId: template.id,
                boatName: config.boatName,
                shouldDisableBoat: config.shouldDisableBoat,
                shouldCompleteEvent: config.shouldCompleteEvent
              });
            }
            
            // Generate initial notifications for all events
            const initialNotifications = await notificationService.checkMaintenanceDue(7);
            expect(initialNotifications.length).toBe(eventConfigs.length);
            
            // Disable boats as specified
            for (const event of createdEvents) {
              if (event.shouldDisableBoat) {
                await boatService.toggleBoatStatus(event.boatId, false);
              }
            }
            
            // Complete events as specified (using eventManagerService)
            const { eventManagerService } = await import('../../src/services/eventManagerService');
            for (const event of createdEvents) {
              if (event.shouldCompleteEvent) {
                await eventManagerService.completeEvent(event.id, {
                  actualCost: 100,
                  notes: 'Test completion'
                });
              }
            }
            
            // Check notifications after boat disabling and event completion
            const finalNotifications = await notificationService.getActiveNotifications({
              type: 'maintenance_due'
            });
            
            // Count expected remaining notifications
            const expectedNotifications = createdEvents.filter(event => 
              !event.shouldDisableBoat && !event.shouldCompleteEvent
            );
            expect(finalNotifications.length).toBe(expectedNotifications.length);
            
            // Verify no notifications exist for disabled boats
            for (const event of createdEvents) {
              if (event.shouldDisableBoat) {
                const disabledBoatNotifications = await notificationService.getActiveNotifications({
                  type: 'maintenance_due',
                  entityType: 'maintenance_event',
                  entityId: event.id
                });
                expect(disabledBoatNotifications.length).toBe(0);
              }
            }
            
            // Verify no notifications exist for completed events
            for (const event of createdEvents) {
              if (event.shouldCompleteEvent) {
                const completedEventNotifications = await notificationService.getActiveNotifications({
                  type: 'maintenance_due',
                  entityType: 'maintenance_event',
                  entityId: event.id
                });
                expect(completedEventNotifications.length).toBe(0);
              }
            }
            
            // Verify remaining notifications are only for enabled boats with incomplete events
            for (const notification of finalNotifications) {
              const event = createdEvents.find(e => e.id === notification.entityId);
              expect(event).toBeDefined();
              expect(event!.shouldDisableBoat).toBe(false);
              expect(event!.shouldCompleteEvent).toBe(false);
            }
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should restore notifications when disabled boats are re-enabled', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()), // template title
            fc.integer({ min: 1, max: 7 }) // days until due
          ),
          async ([boatName, templateTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create enabled boat
            const boat = await createTestBoat(boatName);
            
            // Create maintenance template
            const template = await createTestTemplate(boat.id, templateTitle);
            
            // Create maintenance event
            const dueDate = createDueDate(daysUntilDue);
            const event = await prisma.maintenanceEvent.create({
              data: {
                templateId: template.id,
                dueDate
              }
            });
            
            // Generate initial notification
            const initialNotifications = await notificationService.checkMaintenanceDue(7);
            expect(initialNotifications.length).toBe(1);
            expect(initialNotifications[0].entityId).toBe(event.id);
            
            // Disable the boat - should suppress notifications
            await boatService.toggleBoatStatus(boat.id, false);
            
            // Verify notifications are suppressed for disabled boat
            const notificationsAfterDisable = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_event',
              entityId: event.id
            });
            expect(notificationsAfterDisable.length).toBe(0);
            
            // Re-enable the boat
            await boatService.toggleBoatStatus(boat.id, true);
            
            // Generate notifications again - should restore notifications for re-enabled boat
            const notificationsAfterReEnable = await notificationService.checkMaintenanceDue(7);
            expect(notificationsAfterReEnable.length).toBe(1);
            expect(notificationsAfterReEnable[0].entityId).toBe(event.id);
            
            // Verify notification content is correct
            const notification = notificationsAfterReEnable[0];
            expect(notification.type).toBe('maintenance_due');
            expect(notification.message).toContain(templateTitle);
            expect(notification.message).toContain(boatName);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceEvent.deleteMany();
            await prisma.maintenanceTemplate.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});