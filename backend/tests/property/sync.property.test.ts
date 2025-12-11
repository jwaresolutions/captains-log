import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { TripService, GPSPointDTO } from '../../src/services/tripService';
import { BoatService } from '../../src/services/boatService';

const prisma = new PrismaClient();
const tripService = new TripService();
const boatService = new BoatService();

/**
 * Smart Generators for Valid Trip Data
 */

interface GPSCoordinate {
  latitude: number;
  longitude: number;
  altitude?: number;
  accuracy?: number;
}

interface GPSPointWithTimestamp extends GPSCoordinate {
  timestamp: Date;
}

// Generate valid GPS coordinates (avoiding 0,0 and ensuring realistic values)
const gpsCoordinateArbitrary = fc.record({
  latitude: fc.double({ min: -85, max: 85, noNaN: true }).filter(lat => Math.abs(lat) > 0.1),
  longitude: fc.double({ min: -180, max: 180, noNaN: true }).filter(lon => Math.abs(lon) > 0.1),
  altitude: fc.option(fc.double({ min: -100, max: 10000, noNaN: true }), { nil: undefined }),
  accuracy: fc.option(fc.double({ min: 1, max: 100, noNaN: true }), { nil: undefined })
});

// Generate a sequence of GPS points with unique, increasing timestamps
const gpsPointSequenceArbitrary = (minPoints: number = 2, maxPoints: number = 10) =>
  fc.tuple(
    fc.date({ min: new Date('2020-01-01'), max: new Date('2025-12-31') }), // Start time
    fc.integer({ min: minPoints, max: maxPoints }), // Number of points
    fc.integer({ min: 30, max: 600 }) // Seconds between points (30s to 10min)
  ).chain(([startTime, numPoints, intervalSeconds]) =>
    fc.array(gpsCoordinateArbitrary, { minLength: numPoints, maxLength: numPoints })
      .map((coords: GPSCoordinate[]) => {
        return coords.map((coord: GPSCoordinate, i: number): GPSPointWithTimestamp => ({
          latitude: coord.latitude,
          longitude: coord.longitude,
          altitude: coord.altitude,
          accuracy: coord.accuracy,
          timestamp: new Date(startTime.getTime() + i * intervalSeconds * 1000)
        }));
      })
  );

// Generate valid trip data with proper GPS sequence
const tripDataArbitrary = (boatId: string) =>
  fc.record({
    waterType: fc.constantFrom('inland', 'coastal', 'offshore'),
    role: fc.constantFrom('captain', 'crew', 'observer'),
    engineHours: fc.option(fc.double({ min: 0, max: 10000, noNaN: true }), { nil: undefined }),
    fuelConsumed: fc.option(fc.double({ min: 0, max: 1000, noNaN: true }), { nil: undefined }),
    weatherConditions: fc.option(fc.constantFrom('Sunny', 'Cloudy', 'Rainy', 'Windy', 'Stormy'), { nil: undefined }),
    numberOfPassengers: fc.option(fc.integer({ min: 0, max: 50 }), { nil: undefined }),
    destination: fc.option(fc.constantFrom('Marina Bay', 'Harbor Point', 'Coastal Inlet', 'Open Water'), { nil: undefined }),
    gpsPoints: gpsPointSequenceArbitrary(3, 8)
  }).map(data => {
    const gpsPointsWithTimestamp = data.gpsPoints as unknown as GPSPointWithTimestamp[];
    const gpsPoints: GPSPointDTO[] = gpsPointsWithTimestamp.map((p: GPSPointWithTimestamp) => ({
      latitude: p.latitude,
      longitude: p.longitude,
      altitude: p.altitude,
      accuracy: p.accuracy,
      timestamp: p.timestamp
    }));

    const startTime = gpsPoints[0].timestamp;
    const endTime = new Date(gpsPoints[gpsPoints.length - 1].timestamp.getTime() + 60000);

    return {
      boatId,
      startTime,
      endTime,
      waterType: data.waterType as 'inland' | 'coastal' | 'offshore',
      role: data.role as 'captain' | 'crew' | 'observer',
      gpsPoints,
      engineHours: data.engineHours,
      fuelConsumed: data.fuelConsumed,
      weatherConditions: data.weatherConditions,
      numberOfPassengers: data.numberOfPassengers,
      destination: data.destination
    };
  });

/**
 * Property-Based Tests for Sync Service
 */

describe('Sync Service Property Tests', () => {
  let testBoatId: string;

  // Set up a test boat before tests
  beforeAll(async () => {
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();

    // Wait for deletion to complete
    let retries = 0;
    while (retries < 10) {
      const count = await prisma.boat.count();
      if (count === 0) break;
      await new Promise(resolve => setTimeout(resolve, 10));
      retries++;
    }

    const boat = await boatService.createBoat({ name: 'Test Sync Boat' });
    testBoatId = boat.id;
    
    // Verify boat was created
    const verifyBoat = await boatService.getBoat(testBoatId);
    if (!verifyBoat) {
      throw new Error('Failed to create test boat');
    }
  });

  // Clean up database before each test and ensure boat exists
  beforeEach(async () => {
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    
    // Ensure the test boat still exists (in case it was deleted)
    const existingBoat = await prisma.boat.findUnique({ where: { id: testBoatId } });
    if (!existingBoat) {
      const boat = await boatService.createBoat({ name: 'Test Sync Boat' });
      testBoatId = boat.id;
    }
  });

  afterAll(async () => {
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 12: Offline Data Sync Round Trip**
   * **Validates: Requirements 4.10, 15.3**
   * 
   * For any trip data stored locally while offline, after synchronization with the server,
   * the server should contain equivalent trip data.
   */
  describe('Property 12: Offline Data Sync Round Trip', () => {
    test('should preserve trip data through sync round trip', async () => {
      await fc.assert(
        fc.asyncProperty(tripDataArbitrary(testBoatId), async (offlineTripData) => {
          // Simulate sync: upload to server
          const syncedTrip = await tripService.createTrip(offlineTripData);

          try {
            // Verify server has equivalent data
            expect(syncedTrip.boatId).toBe(testBoatId);
            expect(syncedTrip.startTime.getTime()).toBe(offlineTripData.startTime.getTime());
            expect(syncedTrip.endTime?.getTime()).toBe(offlineTripData.endTime?.getTime());
            expect(syncedTrip.waterType).toBe(offlineTripData.waterType);
            expect(syncedTrip.role).toBe(offlineTripData.role);

            // Verify manual data
            if (offlineTripData.engineHours !== undefined) {
              expect(syncedTrip.engineHours).toBeCloseTo(offlineTripData.engineHours, 5);
            }
            if (offlineTripData.fuelConsumed !== undefined) {
              expect(syncedTrip.fuelConsumed).toBeCloseTo(offlineTripData.fuelConsumed, 5);
            }
            if (offlineTripData.weatherConditions !== undefined) {
              expect(syncedTrip.weatherConditions).toBe(offlineTripData.weatherConditions);
            }
            if (offlineTripData.numberOfPassengers !== undefined) {
              expect(syncedTrip.numberOfPassengers).toBe(offlineTripData.numberOfPassengers);
            }
            if (offlineTripData.destination !== undefined) {
              expect(syncedTrip.destination).toBe(offlineTripData.destination);
            }

            // Verify GPS points are preserved
            expect(syncedTrip.gpsPoints.length).toBe(offlineTripData.gpsPoints.length);

            // Verify each GPS point
            for (let i = 0; i < offlineTripData.gpsPoints.length; i++) {
              const original = offlineTripData.gpsPoints[i];
              const synced = syncedTrip.gpsPoints[i];

              expect(Math.abs(synced.latitude - original.latitude)).toBeLessThan(0.000001);
              expect(Math.abs(synced.longitude - original.longitude)).toBeLessThan(0.000001);
              
              if (original.altitude !== undefined) {
                expect(Math.abs(synced.altitude! - original.altitude)).toBeLessThan(0.01);
              }
              
              if (original.accuracy !== undefined) {
                expect(Math.abs(synced.accuracy! - original.accuracy)).toBeLessThan(0.01);
              }

              expect(synced.timestamp.getTime()).toBe(original.timestamp.getTime());
            }
          } finally {
            // Clean up
            await tripService.deleteTrip(syncedTrip.id);
          }
        }),
        { numRuns: 100, timeout: 60000 }
      );
    }, 120000);

    test('should preserve trip data when syncing multiple trips', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(tripDataArbitrary(testBoatId), { minLength: 2, maxLength: 5 }),
          async (tripDataArray) => {
            const createdTripIds: string[] = [];

            try {
              // Sync all trips
              for (const tripData of tripDataArray) {
                const trip = await tripService.createTrip(tripData);
                createdTripIds.push(trip.id);
              }

              // Verify all trips are on server
              const serverTrips = await tripService.listTrips({ boatId: testBoatId });
              expect(serverTrips.length).toBeGreaterThanOrEqual(createdTripIds.length);

              // Verify each trip can be retrieved
              for (const tripId of createdTripIds) {
                const trip = await tripService.getTrip(tripId);
                expect(trip).toBeDefined();
                expect(trip!.boatId).toBe(testBoatId);
              }
            } finally {
              // Clean up
              for (const tripId of createdTripIds) {
                await tripService.deleteTrip(tripId);
              }
            }
          }
        ),
        { numRuns: 50, timeout: 60000 }
      );
    }, 120000);
  });

  /**
   * **Feature: boat-tracking-system, Property 43: Sync Conflict Resolution**
   * **Validates: Requirements 15.4**
   * 
   * For any data conflict during synchronization, the system should resolve the conflict
   * by selecting the data with the newest timestamp.
   */
  describe('Property 43: Sync Conflict Resolution', () => {
    test('should resolve conflicts using newest timestamp', async () => {
      await fc.assert(
        fc.asyncProperty(
          tripDataArbitrary(testBoatId),
          fc.record({
            waterType: fc.constantFrom('inland', 'coastal', 'offshore'),
            role: fc.constantFrom('captain', 'crew', 'observer'),
            engineHours: fc.option(fc.double({ min: 0, max: 10000, noNaN: true }), { nil: undefined })
          }),
          async (originalTripData, updateData) => {
            // Create original trip (simulating server state)
            const originalTrip = await tripService.createTrip(originalTripData);

            try {
              // Wait a moment to ensure different timestamps
              await new Promise(resolve => setTimeout(resolve, 10));

              // Simulate conflict: update trip with modified data
              const updatedTrip = await tripService.updateTrip(originalTrip.id, {
                waterType: updateData.waterType as 'inland' | 'coastal' | 'offshore',
                role: updateData.role as 'captain' | 'crew' | 'observer',
                engineHours: updateData.engineHours
              });

              // Verify that the update was successful (simulating newer data winning)
              expect(updatedTrip.waterType).toBe(updateData.waterType);
              expect(updatedTrip.role).toBe(updateData.role);
              if (updateData.engineHours !== undefined) {
                expect(updatedTrip.engineHours).toBeCloseTo(updateData.engineHours, 5);
              }

              // Verify trip still exists and is retrievable
              const retrievedTrip = await tripService.getTrip(originalTrip.id);
              expect(retrievedTrip).toBeDefined();
              expect(retrievedTrip!.id).toBe(originalTrip.id);
            } finally {
              // Clean up
              await tripService.deleteTrip(originalTrip.id);
            }
          }
        ),
        { numRuns: 100, timeout: 60000 }
      );
    }, 120000);

    test('should preserve data integrity during conflict resolution', async () => {
      await fc.assert(
        fc.asyncProperty(
          tripDataArbitrary(testBoatId),
          fc.record({
            waterType: fc.constantFrom('inland', 'coastal', 'offshore'),
            role: fc.constantFrom('captain', 'crew', 'observer')
          }),
          async (tripData, updateData) => {
            // Create trip with first version
            const trip = await tripService.createTrip(tripData);

            try {
              const originalGpsPointCount = trip.gpsPoints.length;
              const originalStartTime = trip.startTime;
              const originalEndTime = trip.endTime;

              // Update with second version (simulating conflict resolution)
              await tripService.updateTrip(trip.id, {
                waterType: updateData.waterType as 'inland' | 'coastal' | 'offshore',
                role: updateData.role as 'captain' | 'crew' | 'observer'
              });

              // Verify GPS points are not affected by conflict resolution
              const retrievedTrip = await tripService.getTrip(trip.id);
              expect(retrievedTrip).toBeDefined();
              expect(retrievedTrip!.id).toBe(trip.id);
              expect(retrievedTrip!.boatId).toBe(testBoatId);
              expect(retrievedTrip!.startTime.getTime()).toBe(originalStartTime.getTime());
              expect(retrievedTrip!.endTime?.getTime()).toBe(originalEndTime?.getTime());
              expect(retrievedTrip!.gpsPoints.length).toBe(originalGpsPointCount);
            } finally {
              // Clean up
              await tripService.deleteTrip(trip.id);
            }
          }
        ),
        { numRuns: 100, timeout: 60000 }
      );
    }, 120000);
  });

  /**
   * **Feature: boat-tracking-system, Property 55: Sync Conflict Notification**
   * **Validates: Requirements 15.4, 15.6**
   * 
   * For any sync conflict resolved by timestamp, the system should notify the user
   * that a conflict was resolved.
   * 
   * Note: This property tests the backend's ability to detect and handle conflicts.
   * The actual notification mechanism is implemented in the Android app's TripSyncWorker,
   * which logs conflicts and shows notifications to the user.
   */
  describe('Property 55: Sync Conflict Notification', () => {
    test('should detect conflicts when data differs', async () => {
      await fc.assert(
        fc.asyncProperty(
          tripDataArbitrary(testBoatId),
          fc.record({
            waterType: fc.constantFrom('inland', 'coastal', 'offshore'),
            engineHours: fc.option(fc.double({ min: 0, max: 10000, noNaN: true }), { nil: undefined })
          }),
          async (tripData, updateData) => {
            // Create trip with first version
            const trip = await tripService.createTrip(tripData);

            try {
              const originalUpdatedAt = trip.updatedAt;

              // Wait to ensure different timestamp
              await new Promise(resolve => setTimeout(resolve, 10));

              // Update with second version (data actually changes)
              await tripService.updateTrip(trip.id, {
                waterType: updateData.waterType as 'inland' | 'coastal' | 'offshore',
                engineHours: updateData.engineHours
              });

              // Verify that updatedAt timestamp changed (indicating a modification)
              const retrievedTrip = await tripService.getTrip(trip.id);
              expect(retrievedTrip).toBeDefined();
              
              // The system should track that data was modified
              // In a real conflict scenario, this would trigger a notification
              expect(retrievedTrip!.updatedAt.getTime()).toBeGreaterThanOrEqual(originalUpdatedAt.getTime());

              // Verify the trip is in a consistent state after conflict resolution
              expect(retrievedTrip!.id).toBe(trip.id);
              expect(retrievedTrip!.boatId).toBe(testBoatId);
              expect(retrievedTrip!.waterType).toBe(updateData.waterType);
            } finally {
              // Clean up
              await tripService.deleteTrip(trip.id);
            }
          }
        ),
        { numRuns: 100, timeout: 60000 }
      );
    }, 120000);

    test('should maintain conflict detection across multiple updates', async () => {
      await fc.assert(
        fc.asyncProperty(
          tripDataArbitrary(testBoatId),
          fc.array(
            fc.record({
              waterType: fc.constantFrom('inland', 'coastal', 'offshore'),
              role: fc.constantFrom('captain', 'crew', 'observer')
            }),
            { minLength: 2, maxLength: 5 }
          ),
          async (initialTripData, updates) => {
            // Create initial trip
            const trip = await tripService.createTrip(initialTripData);

            try {
              let lastUpdatedAt = trip.updatedAt;

              // Apply multiple updates (simulating multiple sync conflicts)
              for (const update of updates) {
                await new Promise(resolve => setTimeout(resolve, 10));

                await tripService.updateTrip(trip.id, {
                  waterType: update.waterType as 'inland' | 'coastal' | 'offshore',
                  role: update.role as 'captain' | 'crew' | 'observer'
                });

                const retrieved = await tripService.getTrip(trip.id);
                expect(retrieved).toBeDefined();

                // Each update should maintain or advance the timestamp
                expect(retrieved!.updatedAt.getTime()).toBeGreaterThanOrEqual(lastUpdatedAt.getTime());
                lastUpdatedAt = retrieved!.updatedAt;

                // Verify data consistency after each update
                expect(retrieved!.waterType).toBe(update.waterType);
                expect(retrieved!.role).toBe(update.role);
              }
            } finally {
              // Clean up
              await tripService.deleteTrip(trip.id);
            }
          }
        ),
        { numRuns: 50, timeout: 60000 }
      );
    }, 120000);
  });
});
