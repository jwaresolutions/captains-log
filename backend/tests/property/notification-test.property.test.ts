import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { notificationService } from '../../src/services/notificationService';
import { maintenanceService } from '../../src/services/maintenanceService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

describe('Notification Service Property Tests', () => {
  const createDueDate = (daysUntilDue: number): Date => {
    const now = new Date();
    const dueDate = new Date();
    
    if (daysUntilDue === 0) {
      // For "due today", create a task that's overdue (in the past)
      // This will make Math.ceil((negative) / (1000 * 60 * 60 * 24)) = 0
      dueDate.setTime(now.getTime() - (1000 * 60 * 30)); // 30 minutes ago
    } else {
      dueDate.setDate(now.getDate() + daysUntilDue);
      dueDate.setHours(12, 0, 0, 0);
    }
    
    return dueDate;
  };

  beforeEach(async () => {
    await prisma.notification.deleteMany();
    await prisma.maintenanceCompletion.deleteMany();
    await prisma.maintenanceTask.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.notification.deleteMany();
    await prisma.maintenanceCompletion.deleteMany();
    await prisma.maintenanceTask.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
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
              name: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              enabled: fc.boolean(),
              taskTitle: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              daysUntilDue: fc.integer({ min: 1, max: 7 })
            }),
            { minLength: 2, maxLength: 5 }
          ).filter(boats => {
            // Ensure we have at least one enabled and one disabled boat
            const enabledCount = boats.filter(b => b.enabled).length;
            const disabledCount = boats.filter(b => !b.enabled).length;
            return enabledCount >= 1 && disabledCount >= 1;
          }),
          async (boatConfigs) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            const createdBoats = [];
            const createdTasks = [];
            
            // Create boats and maintenance tasks
            for (const config of boatConfigs) {
              // Create boat (initially enabled)
              const boat = await boatService.createBoat({ name: config.name });
              
              // Set the boat's enabled status
              if (!config.enabled) {
                await boatService.toggleBoatStatus(boat.id, false);
              }
              
              createdBoats.push({ ...boat, enabled: config.enabled });
              
              // Create maintenance task for this boat
              const dueDate = createDueDate(config.daysUntilDue);
              const task = await maintenanceService.createTask({
                boatId: boat.id,
                title: config.taskTitle,
                dueDate
              });
              
              createdTasks.push({ ...task, boatEnabled: config.enabled });
            }
            
            // Check maintenance due - should only create notifications for enabled boats
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Count expected notifications (only for enabled boats)
            const expectedNotificationCount = boatConfigs.filter(b => b.enabled).length;
            expect(notifications.length).toBe(expectedNotificationCount);
            
            // Verify each notification is for an enabled boat
            for (const notification of notifications) {
              expect(notification.type).toBe('maintenance_due');
              expect(notification.entityType).toBe('maintenance_task');
              
              // Find the corresponding task
              const task = createdTasks.find(t => t.id === notification.entityId);
              expect(task).toBeDefined();
              expect(task!.boatEnabled).toBe(true);
            }
            
            // Verify no notifications exist for disabled boats
            const allNotifications = await notificationService.getActiveNotifications();
            for (const notification of allNotifications) {
              if (notification.entityType === 'maintenance_task') {
                const task = createdTasks.find(t => t.id === notification.entityId);
                if (task) {
                  expect(task.boatEnabled).toBe(true);
                }
              }
            }
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should suppress existing notifications when boat is disabled', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task title
            fc.integer({ min: 1, max: 7 }) // days until due
          ),
          async ([boatName, taskTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create an enabled boat
            const boat = await boatService.createBoat({ name: boatName });
            expect(boat.enabled).toBe(true);
            
            // Create maintenance task for this boat
            const dueDate = createDueDate(daysUntilDue);
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate
            });
            
            // Generate notifications for enabled boat
            const notificationsBeforeDisable = await notificationService.checkMaintenanceDue(7);
            expect(notificationsBeforeDisable.length).toBe(1);
            expect(notificationsBeforeDisable[0].entityId).toBe(task.id);
            expect(notificationsBeforeDisable[0].type).toBe('maintenance_due');
            
            // Verify notification exists
            const activeNotificationsBefore = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_task',
              entityId: task.id
            });
            expect(activeNotificationsBefore.length).toBe(1);
            
            // Disable the boat - this should remove existing notifications
            await boatService.toggleBoatStatus(boat.id, false);
            
            // Verify existing notifications were removed
            const activeNotificationsAfter = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_task',
              entityId: task.id
            });
            expect(activeNotificationsAfter.length).toBe(0);
            
            // Verify no new notifications are created for disabled boat
            const notificationsAfterDisable = await notificationService.checkMaintenanceDue(7);
            expect(notificationsAfterDisable.length).toBe(0);
            
            // Verify boat is disabled but task still exists
            const retrievedBoat = await boatService.getBoat(boat.id);
            expect(retrievedBoat).toBeDefined();
            expect(retrievedBoat!.enabled).toBe(false);
            
            const retrievedTask = await maintenanceService.getTaskById(task.id);
            expect(retrievedTask).toBeDefined();
            expect(retrievedTask!.boat.enabled).toBe(false);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
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
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task title
            fc.integer({ min: 1, max: 7 }) // days until due
          ),
          async ([boatName, taskTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create an enabled boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create maintenance task for this boat
            const dueDate = createDueDate(daysUntilDue);
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate
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
            expect(notificationsAfterReEnable[0].entityId).toBe(task.id);
            expect(notificationsAfterReEnable[0].type).toBe('maintenance_due');
            
            // Verify boat is enabled
            const retrievedBoat = await boatService.getBoat(boat.id);
            expect(retrievedBoat).toBeDefined();
            expect(retrievedBoat!.enabled).toBe(true);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
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
    test('should create notifications for tasks due within 7 days and not for tasks beyond 7 days', async () => {
      await fc.assert(
        fc.asyncProperty(
          // Generate random maintenance tasks with various due dates
          fc.array(
            fc.record({
              boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              taskTitle: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              daysUntilDue: fc.integer({ min: -2, max: 15 }) // Include past due, within range, and beyond range
            }),
            { minLength: 3, maxLength: 8 }
          ).filter(tasks => {
            // Ensure we have tasks in different categories
            const withinRange = tasks.filter(t => t.daysUntilDue >= 0 && t.daysUntilDue <= 7).length;
            const beyondRange = tasks.filter(t => t.daysUntilDue > 7).length;
            return withinRange >= 1 && beyondRange >= 1;
          }),
          async (taskConfigs) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            const createdTasks = [];
            
            // Create boats and maintenance tasks
            for (const config of taskConfigs) {
              // Create enabled boat
              const boat = await boatService.createBoat({ name: config.boatName });
              
              // Create maintenance task with specific due date
              const dueDate = createDueDate(config.daysUntilDue);
              const task = await maintenanceService.createTask({
                boatId: boat.id,
                title: config.taskTitle,
                dueDate
              });
              
              createdTasks.push({
                ...task,
                daysUntilDue: config.daysUntilDue,
                boatName: config.boatName
              });
            }
            
            // Check maintenance due with 7-day window
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Count expected notifications (for overdue tasks and tasks due within 0-7 days)
            // Overdue tasks (negative days) should also get notifications
            const expectedTasks = taskConfigs.filter(t => t.daysUntilDue <= 7);
            expect(notifications.length).toBe(expectedTasks.length);
            
            // Verify each notification corresponds to a task within the 7-day window (including overdue)
            for (const notification of notifications) {
              expect(notification.type).toBe('maintenance_due');
              expect(notification.entityType).toBe('maintenance_task');
              expect(notification.title).toMatch(/Maintenance Due/);
              expect(notification.message).toBeTruthy();
              expect(notification.read).toBe(false);
              
              // Find the corresponding task
              const task = createdTasks.find(t => t.id === notification.entityId);
              expect(task).toBeDefined();
              // Include overdue tasks (negative days) and tasks due within 7 days
              expect(task!.daysUntilDue).toBeLessThanOrEqual(7);
              
              // Verify notification message contains boat name and task title
              expect(notification.message).toContain(task!.boatName);
              expect(notification.message).toContain(task!.title);
            }
            
            // Verify no notifications exist for tasks beyond 7 days
            const allNotifications = await notificationService.getActiveNotifications({
              type: 'maintenance_due'
            });
            
            for (const notification of allNotifications) {
              const task = createdTasks.find(t => t.id === notification.entityId);
              if (task) {
                // Should include overdue tasks and tasks due within 7 days
                expect(task.daysUntilDue).toBeLessThanOrEqual(7);
              }
            }
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
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
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // task title
            fc.integer({ min: 0, max: 7 }) // days until due (within notification window)
          ),
          async ([boatName, taskTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create enabled boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create maintenance task with specific due date
            const dueDate = createDueDate(daysUntilDue);
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate
            });
            
            // Check maintenance due
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Should create exactly one notification
            expect(notifications.length).toBe(1);
            const notification = notifications[0];
            
            // Verify notification properties
            expect(notification.type).toBe('maintenance_due');
            expect(notification.entityType).toBe('maintenance_task');
            expect(notification.entityId).toBe(task.id);
            expect(notification.read).toBe(false);
            
            // Verify notification title and message based on days until due
            if (daysUntilDue === 0) {
              expect(notification.title).toBe('Maintenance Due Today');
              expect(notification.message).toContain('is due today');
            } else if (daysUntilDue === 1) {
              expect(notification.title).toBe('Maintenance Due Tomorrow');
              expect(notification.message).toContain('is due tomorrow');
            } else {
              expect(notification.title).toBe('Maintenance Due Soon');
              expect(notification.message).toContain(`is due in ${daysUntilDue} days`);
            }
            
            // Verify message contains task title and boat name
            expect(notification.message).toContain(taskTitle);
            expect(notification.message).toContain(boatName);
            
            // Verify no duplicate notifications are created on subsequent checks
            const secondCheck = await notificationService.checkMaintenanceDue(7);
            expect(secondCheck.length).toBe(0); // No new notifications should be created
            
            // Verify total notifications remain the same
            const allNotifications = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_task',
              entityId: task.id
            });
            expect(allNotifications.length).toBe(1);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should not create notifications for tasks beyond 7-day window', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // boat name
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()), // task title
            fc.integer({ min: 8, max: 30 }) // days until due (beyond notification window)
          ),
          async ([boatName, taskTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create enabled boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create maintenance task with due date beyond 7 days
            const dueDate = createDueDate(daysUntilDue);
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate
            });
            
            // Check maintenance due with 7-day window
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Should not create any notifications for tasks beyond 7 days
            expect(notifications.length).toBe(0);
            
            // Verify no notifications exist for this task
            const taskNotifications = await notificationService.getActiveNotifications({
              type: 'maintenance_due',
              entityType: 'maintenance_task',
              entityId: task.id
            });
            expect(taskNotifications.length).toBe(0);
            
            // Verify task still exists but no notification
            const retrievedTask = await maintenanceService.getTaskById(task.id);
            expect(retrievedTask).toBeDefined();
            expect(retrievedTask!.title).toBe(taskTitle);
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
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
          // Generate random maintenance tasks and notifications
          fc.array(
            fc.record({
              boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              taskTitle: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()),
              daysUntilDue: fc.integer({ min: 0, max: 7 }) // Within notification window
            }),
            { minLength: 1, maxLength: 5 }
          ),
          async (taskConfigs) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            const createdTasks = [];
            
            // Create boats and maintenance tasks
            for (const config of taskConfigs) {
              // Create enabled boat
              const boat = await boatService.createBoat({ name: config.boatName });
              
              // Create maintenance task with specific due date
              const dueDate = createDueDate(config.daysUntilDue);
              const task = await maintenanceService.createTask({
                boatId: boat.id,
                title: config.taskTitle,
                dueDate
              });
              
              createdTasks.push({
                ...task,
                daysUntilDue: config.daysUntilDue,
                boatName: config.boatName,
                taskTitle: config.taskTitle
              });
            }
            
            // Generate notifications
            const notifications = await notificationService.checkMaintenanceDue(7);
            
            // Should create notifications for all tasks within 7 days
            expect(notifications.length).toBe(taskConfigs.length);
            
            // Verify each notification has all required fields and correct content
            for (const notification of notifications) {
              // Find the corresponding task
              const task = createdTasks.find(t => t.id === notification.entityId);
              expect(task).toBeDefined();
              
              // Verify all required notification fields are present
              expect(notification.id).toBeTruthy();
              expect(notification.type).toBe('maintenance_due');
              expect(notification.title).toBeTruthy();
              expect(notification.message).toBeTruthy();
              expect(notification.entityType).toBe('maintenance_task');
              expect(notification.entityId).toBe(task!.id);
              expect(notification.read).toBe(false);
              expect(notification.createdAt).toBeInstanceOf(Date);
              
              // Verify notification content includes task name, due date info, and boat name (Requirements 18.4)
              expect(notification.message).toContain(task!.taskTitle); // Task name
              expect(notification.message).toContain(task!.boatName);  // Boat name
              
              // Verify due date information is included in title and/or message
              const daysUntilDue = task!.daysUntilDue;
              if (daysUntilDue === 0) {
                expect(notification.title).toBe('Maintenance Due Today');
                expect(notification.message).toContain('is due today');
              } else if (daysUntilDue === 1) {
                expect(notification.title).toBe('Maintenance Due Tomorrow');
                expect(notification.message).toContain('is due tomorrow');
              } else {
                expect(notification.title).toBe('Maintenance Due Soon');
                expect(notification.message).toContain(`is due in ${daysUntilDue} days`);
              }
              
              // Verify notification content accuracy - message should match expected format
              const expectedMessagePattern = new RegExp(
                `${task!.taskTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} is due .* for ${task!.boatName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`
              );
              expect(notification.message).toMatch(expectedMessagePattern);
              
              // Verify notification data matches source maintenance task
              expect(notification.entityId).toBe(task!.id);
              expect(notification.entityType).toBe('maintenance_task');
            }
            
            // Clean up
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
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
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()), // task title
            fc.integer({ min: 0, max: 7 }) // days until due
          ),
          async ([boatName, taskTitle, daysUntilDue]) => {
            // Clean database before this iteration
            await prisma.notification.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create enabled boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create maintenance task
            const dueDate = createDueDate(daysUntilDue);
            await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate
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
            expect(notification.message).toContain(taskTitle);  // Task name
            expect(notification.message).toContain(boatName);   // Boat name
            
            // Verify due date information formatting
            if (daysUntilDue === 0) {
              expect(notification.title).toBe('Maintenance Due Today');
              expect(notification.message).toContain('today');
            } else if (daysUntilDue === 1) {
              expect(notification.title).toBe('Maintenance Due Tomorrow');
              expect(notification.message).toContain('tomorrow');
            } else {
              expect(notification.title).toBe('Maintenance Due Soon');
              expect(notification.message).toContain(`${daysUntilDue} days`);
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
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});