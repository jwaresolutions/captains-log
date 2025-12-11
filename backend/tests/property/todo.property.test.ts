import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { todoService } from '../../src/services/todoService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

/**
 * Property-Based Tests for Todo Service
 */

describe('Todo Service Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.todoItem.deleteMany();
    await prisma.todoList.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.todoItem.deleteMany();
    await prisma.todoList.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 27: Todo List Title Validation**
   * **Validates: Requirements 8.1**
   * 
   * For any to-do list creation request, if the title is empty or missing, then the system
   * should reject the request; if the title is provided, then the system should accept
   * the request.
   */
  describe('Property 27: Todo List Title Validation', () => {
    test('should reject todo lists with empty or missing titles', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.constantFrom('', '   ', '\t', '\n', '  \t\n  '),
          async (emptyTitle) => {
            // Attempt to create a todo list with empty/whitespace title
            await expect(
              todoService.createList({ title: emptyTitle })
            ).rejects.toThrow('Todo list title is required');
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should accept todo lists with valid titles', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
          async (validTitle) => {
            // Clean database before this iteration
            await prisma.todoList.deleteMany();
            
            // Create a todo list with a valid title
            const todoList = await todoService.createList({ title: validTitle });
            
            // Verify the todo list was created
            expect(todoList).toBeDefined();
            expect(todoList.id).toBeDefined();
            expect(todoList.title).toBe(validTitle.trim());
            
            // Clean up
            await prisma.todoList.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 28: Boat-Specific Todo Association**
   * **Validates: Requirements 8.2**
   * 
   * For any to-do list created as boat-specific, querying to-do lists for that boat
   * should return the list.
   */
  describe('Property 28: Boat-Specific Todo Association', () => {
    test('should associate todo lists with boats correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0)  // todo title
          ),
          async ([boatName, todoTitle]) => {
            // Clean database before this iteration
            await prisma.todoList.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a boat-specific todo list
            const todoList = await todoService.createList({ 
              title: todoTitle, 
              boatId: boat.id 
            });
            
            // Verify the todo list is associated with the boat
            expect(todoList.boatId).toBe(boat.id);
            expect(todoList.boat?.id).toBe(boat.id);
            expect(todoList.boat?.name).toBe(boatName.trim());
            
            // Query todo lists for this boat
            const boatTodoLists = await todoService.getLists(boat.id);
            
            // Verify the todo list is returned
            expect(boatTodoLists.length).toBe(1);
            expect(boatTodoLists[0].id).toBe(todoList.id);
            expect(boatTodoLists[0].boatId).toBe(boat.id);
            
            // Clean up
            await prisma.todoList.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should not return boat-specific lists when querying general lists', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat todo title
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0)  // general todo title
          ),
          async ([boatName, boatTodoTitle, generalTodoTitle]) => {
            // Clean database before this iteration
            await prisma.todoList.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a boat-specific todo list
            await todoService.createList({ 
              title: boatTodoTitle, 
              boatId: boat.id 
            });
            
            // Create a general todo list
            const generalTodoList = await todoService.createList({ 
              title: generalTodoTitle 
            });
            
            // Query all todo lists (no boat filter)
            const allTodoLists = await todoService.getLists();
            
            // Should return both lists
            expect(allTodoLists.length).toBe(2);
            
            // Query todo lists for the specific boat
            const boatTodoLists = await todoService.getLists(boat.id);
            
            // Should return only the boat-specific list
            expect(boatTodoLists.length).toBe(1);
            expect(boatTodoLists[0].boatId).toBe(boat.id);
            
            // Verify general list is not associated with boat
            expect(generalTodoList.boatId).toBeNull();
            
            // Clean up
            await prisma.todoList.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 29: Todo Item Storage**
   * **Validates: Requirements 8.3**
   * 
   * For any item added to a to-do list, the item should be retrievable with its
   * completion status.
   */
  describe('Property 29: Todo Item Storage', () => {
    test('should store and retrieve todo items with completion status', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // todo title
            fc.array(
              fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
              { minLength: 1, maxLength: 5 }
            ) // item contents
          ),
          async ([todoTitle, itemContents]) => {
            // Clean database before this iteration
            await prisma.todoItem.deleteMany();
            await prisma.todoList.deleteMany();
            
            // Create a todo list
            const todoList = await todoService.createList({ title: todoTitle });
            
            // Add items to the list
            const createdItems = [];
            for (const content of itemContents) {
              const item = await todoService.addItem(todoList.id, { content });
              createdItems.push(item);
            }
            
            // Retrieve the todo list with items
            const retrievedList = await todoService.getListById(todoList.id);
            
            // Verify all items are stored and retrievable
            expect(retrievedList).toBeDefined();
            expect(retrievedList!.items.length).toBe(itemContents.length);
            
            // Verify each item has correct content and default completion status
            for (let i = 0; i < itemContents.length; i++) {
              const retrievedItem = retrievedList!.items.find(item => 
                item.content === itemContents[i].trim()
              );
              expect(retrievedItem).toBeDefined();
              expect(retrievedItem!.completed).toBe(false);
              expect(retrievedItem!.completedAt).toBeNull();
              expect(retrievedItem!.todoListId).toBe(todoList.id);
            }
            
            // Clean up
            await prisma.todoItem.deleteMany();
            await prisma.todoList.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 30: Todo Item Completion**
   * **Validates: Requirements 8.4**
   * 
   * For any to-do item marked as complete, the item should have completed=true and
   * a completion timestamp.
   */
  describe('Property 30: Todo Item Completion', () => {
    test('should set completion status and timestamp when marking items complete', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // todo title
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0)  // item content
          ),
          async ([todoTitle, itemContent]) => {
            // Clean database before this iteration
            await prisma.todoItem.deleteMany();
            await prisma.todoList.deleteMany();
            
            // Create a todo list and item
            const todoList = await todoService.createList({ title: todoTitle });
            const item = await todoService.addItem(todoList.id, { content: itemContent });
            
            // Verify initial state
            expect(item.completed).toBe(false);
            expect(item.completedAt).toBeNull();
            
            // Mark item as complete
            const beforeCompletion = new Date();
            const completedItem = await todoService.toggleItemCompletion(item.id);
            const afterCompletion = new Date();
            
            // Verify completion status and timestamp
            expect(completedItem.completed).toBe(true);
            expect(completedItem.completedAt).toBeDefined();
            expect(completedItem.completedAt).not.toBeNull();
            
            // Verify timestamp is reasonable (within test execution window)
            const completionTime = completedItem.completedAt!.getTime();
            expect(completionTime).toBeGreaterThanOrEqual(beforeCompletion.getTime());
            expect(completionTime).toBeLessThanOrEqual(afterCompletion.getTime());
            
            // Toggle back to incomplete
            const incompletedItem = await todoService.toggleItemCompletion(item.id);
            
            // Verify incomplete state
            expect(incompletedItem.completed).toBe(false);
            expect(incompletedItem.completedAt).toBeNull();
            
            // Clean up
            await prisma.todoItem.deleteMany();
            await prisma.todoList.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should maintain completion status across multiple toggles', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // todo title
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0), // item content
            fc.array(fc.boolean(), { minLength: 1, maxLength: 10 }) // sequence of completion states
          ),
          async ([todoTitle, itemContent, toggleSequence]) => {
            // Clean database before this iteration
            await prisma.todoItem.deleteMany();
            await prisma.todoList.deleteMany();
            
            // Create a todo list and item
            const todoList = await todoService.createList({ title: todoTitle });
            let item = await todoService.addItem(todoList.id, { content: itemContent });
            
            // Apply toggle sequence
            let expectedCompleted = false; // Start with incomplete
            for (const shouldBeCompleted of toggleSequence) {
              if (shouldBeCompleted !== expectedCompleted) {
                item = await todoService.toggleItemCompletion(item.id);
                expectedCompleted = !expectedCompleted;
              }
              
              // Verify current state matches expectation
              expect(item.completed).toBe(expectedCompleted);
              if (expectedCompleted) {
                expect(item.completedAt).not.toBeNull();
              } else {
                expect(item.completedAt).toBeNull();
              }
            }
            
            // Clean up
            await prisma.todoItem.deleteMany();
            await prisma.todoList.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 31: Todo List Display Completeness**
   * **Validates: Requirements 8.5**
   * 
   * For any to-do list query, the system should return all lists with their associated
   * boat (if applicable) and completion status.
   */
  describe('Property 31: Todo List Display Completeness', () => {
    test('should return all todo lists with complete information', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(
            fc.record({
              title: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              hasBoat: fc.boolean(),
              boatName: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              items: fc.array(
                fc.record({
                  content: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
                  completed: fc.boolean()
                }),
                { minLength: 0, maxLength: 3 }
              )
            }),
            { minLength: 1, maxLength: 5 }
          ),
          async (todoConfigs) => {
            // Clean database before this iteration
            await prisma.todoItem.deleteMany();
            await prisma.todoList.deleteMany();
            await prisma.boat.deleteMany();
            
            // Create boats for boat-specific todos
            const boats = new Map();
            for (const config of todoConfigs) {
              if (config.hasBoat && !boats.has(config.boatName)) {
                const boat = await boatService.createBoat({ name: config.boatName });
                boats.set(config.boatName, boat);
              }
            }
            
            // Create todo lists
            const createdLists = [];
            for (const config of todoConfigs) {
              const boatId = config.hasBoat ? boats.get(config.boatName)?.id : undefined;
              const todoList = await todoService.createList({ 
                title: config.title, 
                boatId 
              });
              
              // Add items to the list
              for (const itemConfig of config.items) {
                const item = await todoService.addItem(todoList.id, { 
                  content: itemConfig.content 
                });
                
                // Set completion status if needed
                if (itemConfig.completed) {
                  await todoService.toggleItemCompletion(item.id);
                }
              }
              
              createdLists.push({ ...todoList, config });
            }
            
            // Query all todo lists
            const retrievedLists = await todoService.getLists();
            
            // Verify all lists are returned
            expect(retrievedLists.length).toBe(createdLists.length);
            
            // Verify each list has complete information
            for (const createdList of createdLists) {
              const retrievedList = retrievedLists.find(l => l.id === createdList.id);
              expect(retrievedList).toBeDefined();
              
              // Verify basic properties
              expect(retrievedList!.title).toBe(createdList.config.title.trim());
              
              // Verify boat association
              if (createdList.config.hasBoat) {
                expect(retrievedList!.boatId).toBeDefined();
                expect(retrievedList!.boat).toBeDefined();
                expect(retrievedList!.boat!.name).toBe(createdList.config.boatName.trim());
              } else {
                expect(retrievedList!.boatId).toBeNull();
                expect(retrievedList!.boat).toBeNull();
              }
              
              // Verify items and their completion status
              expect(retrievedList!.items.length).toBe(createdList.config.items.length);
              for (const itemConfig of createdList.config.items) {
                const retrievedItem = retrievedList!.items.find(i => 
                  i.content === itemConfig.content.trim()
                );
                expect(retrievedItem).toBeDefined();
                expect(retrievedItem!.completed).toBe(itemConfig.completed);
                
                if (itemConfig.completed) {
                  expect(retrievedItem!.completedAt).not.toBeNull();
                } else {
                  expect(retrievedItem!.completedAt).toBeNull();
                }
              }
            }
            
            // Clean up
            await prisma.todoItem.deleteMany();
            await prisma.todoList.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 50 } // Reduced for performance due to complexity
      );
    }, 15000); // Increased timeout for complex test
  });
});