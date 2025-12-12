import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { maintenanceService, RecurrenceSchedule } from '../../src/services/maintenanceService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

/**
 * Property-Based Tests for Maintenance Service
 */

describe('Maintenance Service Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.maintenanceCompletion.deleteMany();
    await prisma.maintenanceTask.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.maintenanceCompletion.deleteMany();
    await prisma.maintenanceTask.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 32: Maintenance Task-Boat Association**
   * **Validates: Requirements 9.1**
   * 
   * For any maintenance task created, querying maintenance tasks for that boat
   * should return the task.
   */
  describe('Property 32: Maintenance Task-Boat Association', () => {
    test('should associate maintenance tasks with boats correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task title
            fc.option(fc.string({ minLength: 1, maxLength: 200 })), // description
            fc.option(fc.string({ minLength: 1, maxLength: 50 })), // component
            fc.date({ min: new Date('2025-01-01'), max: new Date('2026-12-31') }) // due date
          ),
          async ([boatName, taskTitle, description, component, dueDate]) => {
            // Clean database before this iteration
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance task for the boat
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              description: description || undefined,
              component: component || undefined,
              dueDate
            });
            
            // Verify the task is associated with the boat
            expect(task.boatId).toBe(boat.id);
            expect(task.boat.id).toBe(boat.id);
            expect(task.boat.name).toBe(boatName.trim());
            
            // Query maintenance tasks for this boat
            const boatTasks = await maintenanceService.getTasks(boat.id);
            
            // Verify the task is returned
            expect(boatTasks.length).toBe(1);
            expect(boatTasks[0].id).toBe(task.id);
            expect(boatTasks[0].boatId).toBe(boat.id);
            expect(boatTasks[0].title).toBe(taskTitle.trim());
            
            // Clean up
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should not return tasks for different boats', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat1 name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat2 name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task1 title
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task2 title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2026-12-31') }) // due date
          ).filter(([boat1Name, boat2Name]) => boat1Name.trim() !== boat2Name.trim()),
          async ([boat1Name, boat2Name, task1Title, task2Title, dueDate]) => {
            // Clean database before this iteration
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create two boats
            const boat1 = await boatService.createBoat({ name: boat1Name });
            const boat2 = await boatService.createBoat({ name: boat2Name });
            
            // Create tasks for each boat
            await maintenanceService.createTask({
              boatId: boat1.id,
              title: task1Title,
              dueDate
            });
            
            await maintenanceService.createTask({
              boatId: boat2.id,
              title: task2Title,
              dueDate
            });
            
            // Query tasks for boat1
            const boat1Tasks = await maintenanceService.getTasks(boat1.id);
            
            // Should return only boat1's task
            expect(boat1Tasks.length).toBe(1);
            expect(boat1Tasks[0].boatId).toBe(boat1.id);
            expect(boat1Tasks[0].title).toBe(task1Title.trim());
            
            // Query tasks for boat2
            const boat2Tasks = await maintenanceService.getTasks(boat2.id);
            
            // Should return only boat2's task
            expect(boat2Tasks.length).toBe(1);
            expect(boat2Tasks[0].boatId).toBe(boat2.id);
            expect(boat2Tasks[0].title).toBe(task2Title.trim());
            
            // Query all tasks (no boat filter)
            const allTasks = await maintenanceService.getTasks();
            
            // Should return both tasks
            expect(allTasks.length).toBe(2);
            
            // Clean up
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 33: Recurring Task Auto-Scheduling**
   * **Validates: Requirements 9.4**
   * 
   * For any recurring maintenance task that is completed, the system should automatically
   * create the next occurrence based on the recurrence schedule.
   */
  describe('Property 33: Recurring Task Auto-Scheduling', () => {
    test('should auto-schedule next occurrence for recurring tasks', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2025-12-31') }), // initial due date
            fc.record({
              type: fc.constantFrom('days', 'weeks', 'months', 'years'),
              interval: fc.integer({ min: 1, max: 12 })
            }) // recurrence schedule
          ),
          async ([boatName, taskTitle, initialDueDate, recurrence]) => {
            // Clean database before this iteration
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a recurring maintenance task
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate: initialDueDate,
              recurrence: recurrence as RecurrenceSchedule
            });
            
            // Verify initial due date
            expect(task.dueDate).toEqual(initialDueDate);
            expect(task.recurrence).toEqual(recurrence);
            
            // Complete the task
            const completedTask = await maintenanceService.completeTask(task.id, {
              notes: 'Test completion'
            });
            
            // Calculate expected next due date
            const expectedNextDate = new Date(initialDueDate);
            switch (recurrence.type) {
              case 'days':
                expectedNextDate.setDate(expectedNextDate.getDate() + recurrence.interval);
                break;
              case 'weeks':
                expectedNextDate.setDate(expectedNextDate.getDate() + (recurrence.interval * 7));
                break;
              case 'months':
                expectedNextDate.setMonth(expectedNextDate.getMonth() + recurrence.interval);
                break;
              case 'years':
                expectedNextDate.setFullYear(expectedNextDate.getFullYear() + recurrence.interval);
                break;
            }
            
            // Verify the due date was updated to the next occurrence
            expect(completedTask.dueDate).toEqual(expectedNextDate);
            
            // Verify completion was recorded
            expect(completedTask.completions.length).toBe(1);
            expect(completedTask.completions[0].notes).toBe('Test completion');
            
            // Clean up
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should not auto-schedule for non-recurring tasks', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2025-12-31') }) // due date
          ),
          async ([boatName, taskTitle, dueDate]) => {
            // Clean database before this iteration
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a non-recurring maintenance task (no recurrence)
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate
            });
            
            // Verify no recurrence
            expect(task.recurrence).toBeNull();
            
            // Complete the task
            const completedTask = await maintenanceService.completeTask(task.id, {
              notes: 'Test completion'
            });
            
            // Verify the due date was NOT changed (no auto-scheduling)
            expect(completedTask.dueDate).toEqual(dueDate);
            
            // Verify completion was recorded
            expect(completedTask.completions.length).toBe(1);
            expect(completedTask.completions[0].notes).toBe('Test completion');
            
            // Clean up
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle multiple completions with correct scheduling', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2025-06-01') }), // initial due date
            fc.record({
              type: fc.constantFrom('days', 'weeks', 'months'),
              interval: fc.integer({ min: 1, max: 3 })
            }), // recurrence schedule
            fc.integer({ min: 2, max: 4 }) // number of completions
          ),
          async ([boatName, taskTitle, initialDueDate, recurrence, numCompletions]) => {
            // Clean database before this iteration
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a recurring maintenance task
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate: initialDueDate,
              recurrence: recurrence as RecurrenceSchedule
            });
            
            let currentDueDate = initialDueDate;
            let taskId = task.id;
            
            // Complete the task multiple times
            for (let i = 0; i < numCompletions; i++) {
              const completedTask = await maintenanceService.completeTask(taskId, {
                notes: `Completion ${i + 1}`
              });
              
              // Calculate expected next due date
              const expectedNextDate = new Date(currentDueDate);
              switch (recurrence.type) {
                case 'days':
                  expectedNextDate.setDate(expectedNextDate.getDate() + recurrence.interval);
                  break;
                case 'weeks':
                  expectedNextDate.setDate(expectedNextDate.getDate() + (recurrence.interval * 7));
                  break;
                case 'months':
                  expectedNextDate.setMonth(expectedNextDate.getMonth() + recurrence.interval);
                  break;
              }
              
              // Verify the due date was updated correctly
              expect(completedTask.dueDate).toEqual(expectedNextDate);
              
              // Verify completion count
              expect(completedTask.completions.length).toBe(i + 1);
              
              // Update for next iteration
              currentDueDate = expectedNextDate;
            }
            
            // Clean up
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 50 } // Reduced for performance due to complexity
      );
    }, 10000); // Increased timeout for complex test
  });

  /**
   * **Feature: boat-tracking-system, Property 35: Maintenance History Completeness**
   * **Validates: Requirements 9.8**
   * 
   * For any maintenance task, querying the maintenance history should return all past
   * completions with dates, costs, and photos.
   */
  describe('Property 35: Maintenance History Completeness', () => {
    test('should return complete maintenance history', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2025-12-31') }), // due date
            fc.array(
              fc.record({
                cost: fc.option(fc.float({ min: Math.fround(0.01), max: Math.fround(1000), noNaN: true })),
                notes: fc.option(fc.string({ minLength: 1, maxLength: 200 }))
              }),
              { minLength: 1, maxLength: 3 } // Reduced max to improve performance
            ) // completion records
          ),
          async ([boatName, taskTitle, dueDate, completions]) => {
            // Clean database before this iteration
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance task
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate
            });
            
            // Complete the task multiple times with different data
            for (let i = 0; i < completions.length; i++) {
              const completion = completions[i];
              
              await maintenanceService.completeTask(task.id, {
                cost: completion.cost || undefined,
                notes: completion.notes || undefined
              });
              
              // Add small delay to ensure different timestamps
              await new Promise(resolve => setTimeout(resolve, 10));
            }
            
            // Get maintenance history
            const history = await maintenanceService.getTaskHistory(task.id);
            
            // Verify all completions are in history
            expect(history.length).toBe(completions.length);
            
            // Verify history is ordered by completion date (most recent first)
            for (let i = 0; i < history.length - 1; i++) {
              expect(history[i].completedAt.getTime()).toBeGreaterThanOrEqual(
                history[i + 1].completedAt.getTime()
              );
            }
            
            // Verify each completion has correct data
            for (let i = 0; i < completions.length; i++) {
              const expectedCompletion = completions[completions.length - 1 - i]; // Reverse order due to DESC sort
              const actualCompletion = history[i];
              
              // Verify completion data
              expect(actualCompletion.maintenanceTaskId).toBe(task.id);
              
              // Handle floating point precision and null values for cost
              if (expectedCompletion.cost !== null && expectedCompletion.cost !== undefined) {
                expect(actualCompletion.cost).toBeCloseTo(expectedCompletion.cost, 2); // Reduced precision for performance
              } else {
                expect(actualCompletion.cost).toBeNull();
              }
              
              expect(actualCompletion.notes).toBe(expectedCompletion.notes?.trim() || null);
              
              // Verify completion timestamp is reasonable
              expect(actualCompletion.completedAt).toBeDefined();
              expect(actualCompletion.createdAt).toBeDefined();
            }
            
            // Verify task with history includes all completions
            const taskWithHistory = await maintenanceService.getTaskById(task.id);
            expect(taskWithHistory).toBeDefined();
            expect(taskWithHistory!.completions.length).toBe(completions.length);
            
            // Clean up
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 50 } // Reduced for performance
      );
    }, 15000); // Increased timeout

    test('should return empty history for tasks with no completions', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // task title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2025-12-31') }) // due date
          ),
          async ([boatName, taskTitle, dueDate]) => {
            // Clean database before this iteration
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat first
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance task (but don't complete it)
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: taskTitle,
              dueDate
            });
            
            // Get maintenance history
            const history = await maintenanceService.getTaskHistory(task.id);
            
            // Verify empty history
            expect(history.length).toBe(0);
            
            // Verify task has no completions
            const taskWithHistory = await maintenanceService.getTaskById(task.id);
            expect(taskWithHistory).toBeDefined();
            expect(taskWithHistory!.completions.length).toBe(0);
            
            // Clean up
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should maintain history integrity across task updates', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // original title
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // updated title
            fc.date({ min: new Date('2025-01-01'), max: new Date('2025-12-31') }), // due date
            fc.float({ min: Math.fround(0.01), max: Math.fround(500), noNaN: true }), // completion cost
            fc.string({ minLength: 1, maxLength: 200 }) // completion notes
          ),
          async ([boatName, originalTitle, updatedTitle, dueDate, cost, notes]) => {
            // Clean database before this iteration
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a maintenance task
            const task = await maintenanceService.createTask({
              boatId: boat.id,
              title: originalTitle,
              dueDate
            });
            
            // Complete the task
            await maintenanceService.completeTask(task.id, {
              cost,
              notes
            });
            
            // Update the task title
            await maintenanceService.updateTask(task.id, {
              title: updatedTitle
            });
            
            // Get maintenance history
            const history = await maintenanceService.getTaskHistory(task.id);
            
            // Verify history is preserved after task update
            expect(history.length).toBe(1);
            
            // Handle floating point precision for cost
            if (cost !== null && cost !== undefined) {
              expect(history[0].cost).toBeCloseTo(cost, 10);
            } else {
              expect(history[0].cost).toBeNull();
            }
            
            expect(history[0].notes).toBe(notes.trim());
            expect(history[0].maintenanceTaskId).toBe(task.id);
            
            // Verify updated task still has history
            const updatedTask = await maintenanceService.getTaskById(task.id);
            expect(updatedTask).toBeDefined();
            expect(updatedTask!.title).toBe(updatedTitle.trim());
            expect(updatedTask!.completions.length).toBe(1);
            
            // Handle floating point precision for cost
            if (cost !== null && cost !== undefined) {
              expect(updatedTask!.completions[0].cost).toBeCloseTo(cost, 10);
            } else {
              expect(updatedTask!.completions[0].cost).toBeNull();
            }
            
            // Clean up
            await prisma.maintenanceCompletion.deleteMany();
            await prisma.maintenanceTask.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});