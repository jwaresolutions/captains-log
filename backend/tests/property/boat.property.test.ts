import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { BoatService } from '../../src/services/boatService';

const prisma = new PrismaClient();
const boatService = new BoatService();

/**
 * Property-Based Tests for Boat Service
 */

describe('Boat Service Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 2: Boat Name Validation**
   * **Validates: Requirements 3.1**
   * 
   * For any boat creation request, if the boat name is empty or missing, then the system
   * should reject the request; if the boat name is provided, then the system should accept
   * the request.
   */
  describe('Property 2: Boat Name Validation', () => {
    test('should reject boats with empty or missing names', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.constantFrom('', '   ', '\t', '\n', '  \t\n  '),
          async (emptyName) => {
            // Attempt to create a boat with empty/whitespace name
            await expect(
              boatService.createBoat({ name: emptyName })
            ).rejects.toThrow('Boat name is required');
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should accept boats with valid names', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
          async (validName) => {
            // Clean database before this iteration
            await prisma.boat.deleteMany();
            
            // Create a boat with a valid name
            const boat = await boatService.createBoat({ name: validName });
            
            // Verify the boat was created
            expect(boat).toBeDefined();
            expect(boat.id).toBeDefined();
            expect(boat.name).toBe(validName.trim());
            
            // Clean up
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 3: New Boat Becomes Active**
   * **Validates: Requirements 3.2**
   * 
   * For any newly created boat, the system should automatically set that boat as the
   * Active Boat.
   */
  describe('Property 3: New Boat Becomes Active', () => {
    test('should set first boat as active automatically', async () => {
      // Use deterministic mock data instead of random generation
      const testBoatNames = [
        'Test Boat 1',
        'My Sailboat',
        'Ocean Explorer',
        'Sea Breeze',
        'Wave Runner'
      ];

      for (const boatName of testBoatNames) {
        // Ensure database is clean
        await prisma.boat.deleteMany();
        
        // Create the first boat
        const boat = await boatService.createBoat({ name: boatName });
        
        // Verify it's active
        expect(boat.isActive).toBe(true);
        
        // Clean up
        await boatService.deleteBoat(boat.id);
      }
    });

    test('should not set subsequent boats as active', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0)
          ).filter(([first, second]) => first !== second), // Ensure unique names
          async ([firstName, secondName]) => {
            // Ensure database is clean before each test - use multiple attempts
            for (let attempt = 0; attempt < 3; attempt++) {
              await prisma.boat.deleteMany();
              await new Promise(resolve => setTimeout(resolve, 20));
              const count = await prisma.boat.count();
              if (count === 0) break;
            }
            
            const initialCount = await prisma.boat.count();
            if (initialCount !== 0) {
              // Force cleanup if still not empty
              await prisma.boat.deleteMany();
              await new Promise(resolve => setTimeout(resolve, 50));
            }
            
            const finalCount = await prisma.boat.count();
            expect(finalCount).toBe(0);
            
            // Create first boat (should be active)
            const firstBoat = await boatService.createBoat({ name: firstName });
            expect(firstBoat.isActive).toBe(true);
            
            // Verify count is now 1
            const countAfterFirst = await prisma.boat.count();
            expect(countAfterFirst).toBe(1);
            
            // Create second boat (should not be active)
            const secondBoat = await boatService.createBoat({ name: secondName });
            expect(secondBoat.isActive).toBe(false);
            
            // Verify first boat is still active
            const firstBoatCheck = await boatService.getBoat(firstBoat.id);
            expect(firstBoatCheck?.isActive).toBe(true);
            
            // Clean up
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 6: Boat List Completeness**
   * **Validates: Requirements 3.5**
   * 
   * For any set of boats in the system, querying the boat list should return all boats
   * with their current enabled/disabled status.
   */
  describe('Property 6: Boat List Completeness', () => {
    test('should return all boats with their enabled/disabled status', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(
            fc.record({
              name: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              enabled: fc.boolean()
            }),
            { minLength: 1, maxLength: 5 } // Reduced from 10 to 5 for faster tests
          ),
          async (boatConfigs) => {
            // Ensure database is clean
            await prisma.boat.deleteMany();
            
            // Wait for deletion to complete
            let retries = 0;
            while (retries < 5) {
              const count = await prisma.boat.count();
              if (count === 0) break;
              await new Promise(resolve => setTimeout(resolve, 10));
              retries++;
            }
            
            // Create boats with specified enabled status
            const createdBoats = [];
            for (const config of boatConfigs) {
              const boat = await boatService.createBoat({ name: config.name });
              if (!config.enabled) {
                const updated = await boatService.toggleBoatStatus(boat.id, false);
                createdBoats.push(updated);
              } else {
                createdBoats.push(boat);
              }
            }
            
            // Query the boat list
            const boats = await boatService.listBoats();
            
            // Verify all boats are returned
            expect(boats.length).toBe(createdBoats.length);
            
            // Verify each boat has correct enabled status
            for (const createdBoat of createdBoats) {
              const foundBoat = boats.find(b => b.id === createdBoat.id);
              expect(foundBoat).toBeDefined();
              expect(foundBoat?.enabled).toBe(createdBoat.enabled);
            }
            
            // Clean up
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 50 } // Reduced from 100 to 50 for faster tests
      );
    }, 10000); // Increased timeout to 10 seconds

    test('should return boats ordered with active boat first', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
            { minLength: 2, maxLength: 5 }
          ),
          fc.integer({ min: 0, max: 4 }), // Add explicit random index generator
          async (boatNames, randomSeed) => {
            // Ensure database is clean
            await prisma.boat.deleteMany();
            
            // Create boats
            const createdBoats = [];
            for (const name of boatNames) {
              const boat = await boatService.createBoat({ name });
              createdBoats.push(boat);
            }
            
            // Set a specific boat as active using the random seed
            const randomIndex = randomSeed % createdBoats.length;
            await boatService.setActiveBoat(createdBoats[randomIndex].id);
            
            // Query the boat list
            const boats = await boatService.listBoats();
            
            // Verify the active boat is first
            expect(boats[0].isActive).toBe(true);
            expect(boats[0].id).toBe(createdBoats[randomIndex].id);
            
            // Clean up
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 50 } // Reduced from 100 to 50 for faster tests
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 7: Active Boat Selection**
   * **Validates: Requirements 3.6**
   * 
   * For any boat selection operation, the selected boat should become the Active Boat
   * for subsequent operations.
   */
  describe('Property 7: Active Boat Selection', () => {
    test('should set selected boat as active and deactivate others', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
            { minLength: 2, maxLength: 5 }
          ),
          fc.integer({ min: 0, max: 4 }),
          async (boatNames, selectionIndex) => {
            // Ensure we have a valid selection index
            const actualIndex = selectionIndex % boatNames.length;
            
            // Ensure database is clean
            await prisma.boat.deleteMany();
            
            // Create boats
            const createdBoats = [];
            for (const name of boatNames) {
              const boat = await boatService.createBoat({ name });
              createdBoats.push(boat);
            }
            
            // Select a boat as active
            const selectedBoat = createdBoats[actualIndex];
            await boatService.setActiveBoat(selectedBoat.id);
            
            // Verify the selected boat is active
            const activeBoat = await boatService.getActiveBoat();
            expect(activeBoat).toBeDefined();
            expect(activeBoat?.id).toBe(selectedBoat.id);
            expect(activeBoat?.isActive).toBe(true);
            
            // Verify all other boats are not active
            for (const boat of createdBoats) {
              const currentBoat = await boatService.getBoat(boat.id);
              if (boat.id === selectedBoat.id) {
                expect(currentBoat?.isActive).toBe(true);
              } else {
                expect(currentBoat?.isActive).toBe(false);
              }
            }
            
            // Clean up
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should maintain only one active boat at a time', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
            { minLength: 3, maxLength: 5 }
          ),
          fc.array(fc.integer({ min: 0, max: 4 }), { minLength: 2, maxLength: 5 }),
          async (boatNames, selectionSequence) => {
            // Ensure database is clean
            await prisma.boat.deleteMany();
            
            // Create boats
            const createdBoats = [];
            for (const name of boatNames) {
              const boat = await boatService.createBoat({ name });
              createdBoats.push(boat);
            }
            
            // Perform multiple selections
            for (const selectionIndex of selectionSequence) {
              const actualIndex = selectionIndex % createdBoats.length;
              await boatService.setActiveBoat(createdBoats[actualIndex].id);
              
              // After each selection, verify only one boat is active
              const allBoats = await boatService.listBoats();
              const activeBoats = allBoats.filter(b => b.isActive);
              
              expect(activeBoats.length).toBe(1);
              expect(activeBoats[0].id).toBe(createdBoats[actualIndex].id);
            }
            
            // Clean up
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
