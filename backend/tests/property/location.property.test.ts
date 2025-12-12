import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import {
  createMarkedLocation,
  updateMarkedLocation,
  getMarkedLocation,
  listMarkedLocations,
  findNearbyLocations,
  calculateDistance,
  MarkedLocationCreateDTO,
  MarkedLocationUpdateDTO,
} from '../../src/services/locationService';

const prisma = new PrismaClient();

// Helper generators for valid coordinates
const validLatitude = fc.float({ min: -89, max: 89 }).filter(n => !isNaN(n) && isFinite(n));
const validLongitude = fc.float({ min: -179, max: 179 }).filter(n => !isNaN(n) && isFinite(n));
const validCategory = fc.constantFrom('fishing', 'marina', 'anchorage', 'hazard', 'other') as fc.Arbitrary<'fishing' | 'marina' | 'anchorage' | 'hazard' | 'other'>;

/**
 * Property-Based Tests for Location Service
 */

describe('Location Service Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.markedLocation.deleteMany();
  });

  afterAll(async () => {
    await prisma.markedLocation.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 36: Marked Location Storage**
   * **Validates: Requirements 10.2**
   * 
   * For any marked location data, when saved to the system, the location should be
   * retrievable with all its original data intact.
   */
  describe('Property 36: Marked Location Storage', () => {
    test('should store and retrieve marked locations with all data intact', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            name: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
            latitude: validLatitude,
            longitude: validLongitude,
            category: validCategory,
            notes: fc.option(fc.string({ maxLength: 500 })),
            tags: fc.array(fc.string({ minLength: 1, maxLength: 50 }), { maxLength: 10 }),
          }),
          async (locationData) => {
            // Clean database before this iteration
            await prisma.markedLocation.deleteMany();
            
            // Create the location
            const createData: MarkedLocationCreateDTO = {
              name: locationData.name.trim(),
              latitude: locationData.latitude,
              longitude: locationData.longitude,
              category: locationData.category,
              notes: locationData.notes || undefined,
              tags: locationData.tags,
            };
            
            const createdLocation = await createMarkedLocation(createData);
            
            // Verify the location was created
            expect(createdLocation).toBeDefined();
            expect(createdLocation.id).toBeDefined();
            expect(createdLocation.name).toBe(createData.name);
            expect(createdLocation.latitude).toBeCloseTo(createData.latitude, 10);
            expect(createdLocation.longitude).toBeCloseTo(createData.longitude, 10);
            expect(createdLocation.category).toBe(createData.category);
            expect(createdLocation.notes).toBe(createData.notes || null);
            expect(createdLocation.tags).toEqual(createData.tags);
            expect(createdLocation.createdAt).toBeDefined();
            expect(createdLocation.updatedAt).toBeDefined();
            
            // Retrieve the location and verify data integrity
            const retrievedLocation = await getMarkedLocation(createdLocation.id);
            expect(retrievedLocation).toBeDefined();
            expect(retrievedLocation?.id).toBe(createdLocation.id);
            expect(retrievedLocation?.name).toBe(createdLocation.name);
            expect(retrievedLocation?.latitude).toBeCloseTo(createdLocation.latitude, 10);
            expect(retrievedLocation?.longitude).toBeCloseTo(createdLocation.longitude, 10);
            expect(retrievedLocation?.category).toBe(createdLocation.category);
            expect(retrievedLocation?.notes).toBe(createdLocation.notes);
            expect(retrievedLocation?.tags).toEqual(createdLocation.tags);
            
            // Clean up
            await prisma.markedLocation.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle location updates correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            name: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
            latitude: validLatitude,
            longitude: validLongitude,
            category: validCategory,
            notes: fc.option(fc.string({ maxLength: 500 })),
            tags: fc.array(fc.string({ minLength: 1, maxLength: 50 }), { maxLength: 10 }),
          }),
          fc.record({
            name: fc.option(fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0)),
            latitude: fc.option(validLatitude),
            longitude: fc.option(validLongitude),
            category: fc.option(validCategory),
            notes: fc.option(fc.string({ maxLength: 500 })),
            tags: fc.option(fc.array(fc.string({ minLength: 1, maxLength: 50 }), { maxLength: 10 })),
          }),
          async (originalData, updateData) => {
            // Clean database before this iteration
            await prisma.markedLocation.deleteMany();
            
            // Create the original location
            const createData: MarkedLocationCreateDTO = {
              name: originalData.name.trim(),
              latitude: originalData.latitude,
              longitude: originalData.longitude,
              category: originalData.category,
              notes: originalData.notes || undefined,
              tags: originalData.tags,
            };
            
            const createdLocation = await createMarkedLocation(createData);
            
            // Filter out null values and create proper update data
            const filteredUpdateData: MarkedLocationUpdateDTO = {};
            if (updateData.name !== null && updateData.name !== undefined) {
              filteredUpdateData.name = updateData.name;
            }
            if (updateData.latitude !== null && updateData.latitude !== undefined && !isNaN(updateData.latitude)) {
              filteredUpdateData.latitude = updateData.latitude;
            }
            if (updateData.longitude !== null && updateData.longitude !== undefined && !isNaN(updateData.longitude)) {
              filteredUpdateData.longitude = updateData.longitude;
            }
            if (updateData.category !== null && updateData.category !== undefined) {
              filteredUpdateData.category = updateData.category;
            }
            if (updateData.notes !== null && updateData.notes !== undefined) {
              filteredUpdateData.notes = updateData.notes;
            }
            if (updateData.tags !== null && updateData.tags !== undefined) {
              filteredUpdateData.tags = updateData.tags;
            }

            // Update the location
            const updatedLocation = await updateMarkedLocation(createdLocation.id, filteredUpdateData);
            
            // Verify the update was applied correctly
            expect(updatedLocation.id).toBe(createdLocation.id);
            expect(updatedLocation.name).toBe(filteredUpdateData.name ?? createdLocation.name);
            if (filteredUpdateData.latitude !== undefined) {
              expect(updatedLocation.latitude).toBeCloseTo(filteredUpdateData.latitude, 10);
            } else {
              expect(updatedLocation.latitude).toBeCloseTo(createdLocation.latitude, 10);
            }
            if (filteredUpdateData.longitude !== undefined) {
              expect(updatedLocation.longitude).toBeCloseTo(filteredUpdateData.longitude, 10);
            } else {
              expect(updatedLocation.longitude).toBeCloseTo(createdLocation.longitude, 10);
            }
            expect(updatedLocation.category).toBe(filteredUpdateData.category ?? createdLocation.category);
            expect(updatedLocation.notes).toBe(filteredUpdateData.notes !== undefined ? filteredUpdateData.notes : createdLocation.notes);
            expect(updatedLocation.tags).toEqual(filteredUpdateData.tags ?? createdLocation.tags);
            
            // Clean up
            await prisma.markedLocation.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should list locations with correct filtering', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(
            fc.record({
              name: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              latitude: validLatitude,
              longitude: validLongitude,
              category: validCategory,
              notes: fc.option(fc.string({ maxLength: 500 })),
              tags: fc.array(fc.string({ minLength: 1, maxLength: 50 }), { maxLength: 5 }),
            }),
            { minLength: 1, maxLength: 10 }
          ),
          validCategory,
          async (locationDataArray, filterCategory) => {
            // Clean database before this iteration
            await prisma.markedLocation.deleteMany();
            
            // Create locations
            const createdLocations = [];
            for (const locationData of locationDataArray) {
              const createData: MarkedLocationCreateDTO = {
                name: locationData.name.trim(),
                latitude: locationData.latitude,
                longitude: locationData.longitude,
                category: locationData.category,
                notes: locationData.notes || undefined,
                tags: locationData.tags,
              };
              
              const location = await createMarkedLocation(createData);
              createdLocations.push(location);
            }
            
            // Filter by category
            const filteredLocations = await listMarkedLocations({ category: filterCategory });
            
            // Verify filtering works correctly
            const expectedCount = createdLocations.filter(loc => loc.category === filterCategory).length;
            expect(filteredLocations.length).toBe(expectedCount);
            
            for (const location of filteredLocations) {
              expect(location.category).toBe(filterCategory);
            }
            
            // Clean up
            await prisma.markedLocation.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 37: Distance Calculation**
   * **Validates: Requirements 10.5**
   * 
   * For any two GPS coordinates, the calculated distance should be accurate and
   * consistent with the Haversine formula.
   */
  describe('Property 37: Distance Calculation', () => {
    test('should calculate distance accurately using Haversine formula', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            latitude: validLatitude,
            longitude: validLongitude,
          }),
          fc.record({
            latitude: validLatitude,
            longitude: validLongitude,
          }),
          async (point1, point2) => {
            const distance = calculateDistance(point1, point2);
            
            // Distance should be non-negative
            expect(distance).toBeGreaterThanOrEqual(0);
            
            // Distance should be finite
            expect(Number.isFinite(distance)).toBe(true);
            
            // Distance from a point to itself should be 0
            const samePointDistance = calculateDistance(point1, point1);
            expect(samePointDistance).toBeCloseTo(0, 5);
            
            // Distance should be symmetric (A to B = B to A)
            const reverseDistance = calculateDistance(point2, point1);
            expect(distance).toBeCloseTo(reverseDistance, 5);
            
            // Distance should be reasonable (not exceed Earth's circumference)
            const maxEarthDistance = 20037508.34; // Half of Earth's circumference in meters
            expect(distance).toBeLessThanOrEqual(maxEarthDistance);
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should find nearby locations within specified radius', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            latitude: validLatitude,
            longitude: validLongitude,
          }),
          fc.array(
            fc.record({
              name: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              latitude: validLatitude,
              longitude: validLongitude,
              category: validCategory,
            }),
            { minLength: 1, maxLength: 10 }
          ),
          fc.integer({ min: 1000, max: 100000 }), // Radius in meters
          async (centerPoint, locationDataArray, radiusMeters) => {
            // Clean database before this iteration
            await prisma.markedLocation.deleteMany();
            
            // Create locations
            const createdLocations = [];
            for (const locationData of locationDataArray) {
              const createData: MarkedLocationCreateDTO = {
                name: locationData.name.trim(),
                latitude: locationData.latitude,
                longitude: locationData.longitude,
                category: locationData.category,
              };
              
              const location = await createMarkedLocation(createData);
              createdLocations.push(location);
            }
            
            // Find nearby locations
            const nearbyLocations = await findNearbyLocations(centerPoint, radiusMeters);
            
            // Verify all returned locations are within the radius
            for (const location of nearbyLocations) {
              const distance = calculateDistance(centerPoint, {
                latitude: location.latitude,
                longitude: location.longitude,
              });
              
              expect(distance).toBeLessThanOrEqual(radiusMeters);
              expect(location.distanceMeters).toBeCloseTo(distance, 1);
            }
            
            // Verify no locations outside the radius are returned
            for (const createdLocation of createdLocations) {
              const distance = calculateDistance(centerPoint, {
                latitude: createdLocation.latitude,
                longitude: createdLocation.longitude,
              });
              
              const isInResults = nearbyLocations.some(loc => loc.id === createdLocation.id);
              
              if (distance <= radiusMeters) {
                expect(isInResults).toBe(true);
              } else {
                expect(isInResults).toBe(false);
              }
            }
            
            // Verify results are sorted by distance (closest first)
            for (let i = 1; i < nearbyLocations.length; i++) {
              expect(nearbyLocations[i].distanceMeters).toBeGreaterThanOrEqual(
                nearbyLocations[i - 1].distanceMeters || 0
              );
            }
            
            // Clean up
            await prisma.markedLocation.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle edge cases in distance calculation', async () => {
      // Test known distances for validation
      const testCases = [
        // Same point
        { point1: { latitude: 0, longitude: 0 }, point2: { latitude: 0, longitude: 0 }, expectedDistance: 0 },
        // Equator to North Pole (approximately 10,001,965 meters)
        { point1: { latitude: 0, longitude: 0 }, point2: { latitude: 90, longitude: 0 }, expectedDistance: 10001965 },
        // Antipodal points (approximately 20,003,931 meters)
        { point1: { latitude: 0, longitude: 0 }, point2: { latitude: 0, longitude: 180 }, expectedDistance: 20003931 },
      ];

      for (const testCase of testCases) {
        const distance = calculateDistance(testCase.point1, testCase.point2);
        
        if (testCase.expectedDistance === 0) {
          expect(distance).toBeCloseTo(0, 5);
        } else {
          // Allow 1% tolerance for known distances
          const tolerance = testCase.expectedDistance * 0.01;
          expect(Math.abs(distance - testCase.expectedDistance)).toBeLessThan(tolerance);
        }
      }
    });
  });
});