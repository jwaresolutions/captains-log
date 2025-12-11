import { PrismaClient } from '@prisma/client';
import { TripService, GPSPointDTO } from '../../src/services/tripService';
import { BoatService } from '../../src/services/boatService';

const prisma = new PrismaClient();
const tripService = new TripService();
const boatService = new BoatService();

/**
 * Property-Based Tests for Trip Service
 */

describe('Trip Service Property Tests', () => {
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

    const boat = await boatService.createBoat({ name: 'Test Boat' });
    testBoatId = boat.id;
    
    // Verify boat was created
    const verifyBoat = await boatService.getBoat(testBoatId);
    if (!verifyBoat) {
      throw new Error('Failed to create test boat');
    }
  });

  // Clean up database before each test
  beforeEach(async () => {
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
  });

  afterAll(async () => {
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 8: Trip Statistics Calculation**
   * **Validates: Requirements 4.3**
   * 
   * For any trip with GPS points, ending the trip should produce statistics including
   * duration, distance, average speed, and heading data derived from the GPS points.
   */
  describe('Property 8: Trip Statistics Calculation', () => {
    test('should calculate statistics for any valid GPS point sequence', async () => {
      // Use deterministic mock GPS data representing realistic trips
      const mockTripScenarios = [
        // Scenario 1: Short trip around a harbor
        {
          points: [
            { lat: 40.7128, lon: -74.0060, time: new Date('2024-01-01T10:00:00Z') },
            { lat: 40.7138, lon: -74.0070, time: new Date('2024-01-01T10:05:00Z') },
            { lat: 40.7148, lon: -74.0080, time: new Date('2024-01-01T10:10:00Z') },
            { lat: 40.7158, lon: -74.0090, time: new Date('2024-01-01T10:15:00Z') }
          ]
        },
        // Scenario 2: Longer coastal trip
        {
          points: [
            { lat: 37.7749, lon: -122.4194, time: new Date('2024-02-01T08:00:00Z') },
            { lat: 37.7849, lon: -122.4294, time: new Date('2024-02-01T08:30:00Z') },
            { lat: 37.7949, lon: -122.4394, time: new Date('2024-02-01T09:00:00Z') },
            { lat: 37.8049, lon: -122.4494, time: new Date('2024-02-01T09:30:00Z') },
            { lat: 37.8149, lon: -122.4594, time: new Date('2024-02-01T10:00:00Z') }
          ]
        },
        // Scenario 3: Quick trip with frequent updates
        {
          points: [
            { lat: 25.7617, lon: -80.1918, time: new Date('2024-03-01T14:00:00Z') },
            { lat: 25.7627, lon: -80.1928, time: new Date('2024-03-01T14:01:00Z') },
            { lat: 25.7637, lon: -80.1938, time: new Date('2024-03-01T14:02:00Z') }
          ]
        }
      ];

      for (const scenario of mockTripScenarios) {
        // Verify boat exists before creating trip
        const boat = await boatService.getBoat(testBoatId);
        if (!boat) {
          throw new Error(`Test boat ${testBoatId} not found`);
        }
        
        const gpsPoints: GPSPointDTO[] = scenario.points.map(p => ({
          latitude: p.lat,
          longitude: p.lon,
          timestamp: p.time
        }));

        const startTime = gpsPoints[0].timestamp;
        const endTime = gpsPoints[gpsPoints.length - 1].timestamp;

        const trip = await tripService.createTrip({
          boatId: testBoatId,
          startTime,
          endTime,
          gpsPoints
        });

        // Verify statistics are calculated
        expect(trip.durationSeconds).toBeDefined();
        expect(trip.distanceMeters).toBeDefined();
        expect(trip.averageSpeedKnots).toBeDefined();
        expect(trip.maxSpeedKnots).toBeDefined();

        // Verify statistics are non-negative
        expect(trip.durationSeconds).toBeGreaterThanOrEqual(0);
        expect(trip.distanceMeters).toBeGreaterThanOrEqual(0);
        expect(trip.averageSpeedKnots).toBeGreaterThanOrEqual(0);
        expect(trip.maxSpeedKnots).toBeGreaterThanOrEqual(0);

        // Verify duration matches time difference
        const expectedDuration = (endTime.getTime() - startTime.getTime()) / 1000;
        expect(Math.abs(trip.durationSeconds! - expectedDuration)).toBeLessThan(1);

        // Clean up
        await tripService.deleteTrip(trip.id);
      }
    });

    test('should calculate consistent statistics regardless of point order in input', async () => {
      // Use deterministic mock data
      const mockPoints = [
        { lat: 40.7128, lon: -74.0060, time: new Date('2024-01-01T10:00:00Z') },
        { lat: 40.7138, lon: -74.0070, time: new Date('2024-01-01T10:05:00Z') },
        { lat: 40.7148, lon: -74.0080, time: new Date('2024-01-01T10:10:00Z') },
        { lat: 40.7158, lon: -74.0090, time: new Date('2024-01-01T10:15:00Z') },
        { lat: 40.7168, lon: -74.0100, time: new Date('2024-01-01T10:20:00Z') }
      ];

      const sortedPoints = mockPoints.map(p => ({
        latitude: p.lat,
        longitude: p.lon,
        timestamp: p.time
      }));

      // Shuffle the points
      const shuffledPoints = [...sortedPoints];
      for (let i = shuffledPoints.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPoints[i], shuffledPoints[j]] = [shuffledPoints[j], shuffledPoints[i]];
      }

      const startTime = mockPoints[0].time;
      const endTime = mockPoints[mockPoints.length - 1].time;

      // Verify boat exists
      const boat = await boatService.getBoat(testBoatId);
      if (!boat) {
        throw new Error(`Test boat ${testBoatId} not found`);
      }
      
      // Create trips with both orderings
      const trip1 = await tripService.createTrip({
        boatId: testBoatId,
        startTime,
        endTime,
        gpsPoints: sortedPoints
      });

      const trip2 = await tripService.createTrip({
        boatId: testBoatId,
        startTime,
        endTime,
        gpsPoints: shuffledPoints
      });

      // Statistics should be the same regardless of input order
      expect(trip1.durationSeconds).toBe(trip2.durationSeconds);
      expect(Math.abs(trip1.distanceMeters! - trip2.distanceMeters!)).toBeLessThan(0.01);
      expect(Math.abs(trip1.averageSpeedKnots! - trip2.averageSpeedKnots!)).toBeLessThan(0.01);
      expect(Math.abs(trip1.maxSpeedKnots! - trip2.maxSpeedKnots!)).toBeLessThan(0.01);

      // Clean up
      await tripService.deleteTrip(trip1.id);
      await tripService.deleteTrip(trip2.id);
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 9: Stop Point Detection**
   * **Validates: Requirements 4.4**
   * 
   * For any sequence of GPS points where the boat remains within a 45-foot radius for
   * at least 5 minutes, the system should mark that location as a Stop Point.
   */
  describe('Property 9: Stop Point Detection', () => {
    test('should detect stop points when boat stays in 45-foot radius for 5+ minutes', async () => {
      // Create a controlled scenario with a known stop
      const baseTime = new Date('2024-01-01T10:00:00Z');
      const baseLatitude = 40.7128;
      const baseLongitude = -74.0060;

      // Verify boat exists
      const boat = await boatService.getBoat(testBoatId);
      if (!boat) {
        throw new Error(`Test boat ${testBoatId} not found`);
      }

      // Create points that stay within 45 feet (13.716 meters) for 6 minutes
      const gpsPoints: GPSPointDTO[] = [];
      for (let i = 0; i <= 12; i++) {
        // 30-second intervals for 6 minutes
        gpsPoints.push({
          latitude: baseLatitude + (Math.random() - 0.5) * 0.0001, // ~11 meters variation
          longitude: baseLongitude + (Math.random() - 0.5) * 0.0001,
          timestamp: new Date(baseTime.getTime() + i * 30000)
        });
      }

      const trip = await tripService.createTrip({
        boatId: testBoatId,
        startTime: gpsPoints[0].timestamp,
        endTime: gpsPoints[gpsPoints.length - 1].timestamp,
        gpsPoints
      });

      // Fetch the trip with GPS points
      const tripWithPoints = await tripService.getTrip(trip.id);
      expect(tripWithPoints).toBeDefined();

      // At least one point should be marked as a stop point
      const stopPoints = tripWithPoints!.gpsPoints.filter(p => p.isStopPoint);
      expect(stopPoints.length).toBeGreaterThan(0);

      // Clean up
      await tripService.deleteTrip(trip.id);
    });

    test('should not detect stop points when boat moves continuously', async () => {
      // Verify boat exists
      const boat = await boatService.getBoat(testBoatId);
      if (!boat) {
        throw new Error(`Test boat ${testBoatId} not found`);
      }

      // Create a scenario where the boat is always moving
      const baseTime = new Date('2024-01-01T10:00:00Z');
      let latitude = 40.7128;
      let longitude = -74.0060;

      const gpsPoints: GPSPointDTO[] = [];
      for (let i = 0; i <= 12; i++) {
        gpsPoints.push({
          latitude: latitude,
          longitude: longitude,
          timestamp: new Date(baseTime.getTime() + i * 30000)
        });
        // Move significantly (about 100 meters each time)
        latitude += 0.001;
        longitude += 0.001;
      }

      const trip = await tripService.createTrip({
        boatId: testBoatId,
        startTime: gpsPoints[0].timestamp,
        endTime: gpsPoints[gpsPoints.length - 1].timestamp,
        gpsPoints
      });

      // Fetch the trip with GPS points
      const tripWithPoints = await tripService.getTrip(trip.id);
      expect(tripWithPoints).toBeDefined();

      // No points should be marked as stop points
      const stopPoints = tripWithPoints!.gpsPoints.filter(p => p.isStopPoint);
      expect(stopPoints.length).toBe(0);

      // Clean up
      await tripService.deleteTrip(trip.id);
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 10: Trip Required Fields**
   * **Validates: Requirements 4.5**
   * 
   * For any created trip, the trip should contain start time, end time, GPS route,
   * water type, and associated Boat Entity.
   */
  describe('Property 10: Trip Required Fields', () => {
    test('should include all required fields for any valid trip', async () => {
      // Use deterministic mock data for different water types
      const mockScenarios = [
        {
          waterType: 'inland' as const,
          points: [
            { lat: 40.7128, lon: -74.0060, time: new Date('2024-01-01T10:00:00Z') },
            { lat: 40.7138, lon: -74.0070, time: new Date('2024-01-01T10:05:00Z') }
          ]
        },
        {
          waterType: 'coastal' as const,
          points: [
            { lat: 37.7749, lon: -122.4194, time: new Date('2024-02-01T08:00:00Z') },
            { lat: 37.7849, lon: -122.4294, time: new Date('2024-02-01T08:30:00Z') }
          ]
        },
        {
          waterType: 'offshore' as const,
          points: [
            { lat: 25.7617, lon: -80.1918, time: new Date('2024-03-01T14:00:00Z') },
            { lat: 25.7717, lon: -80.2018, time: new Date('2024-03-01T14:30:00Z') }
          ]
        }
      ];

      // Verify boat exists
      const boat = await boatService.getBoat(testBoatId);
      if (!boat) {
        throw new Error(`Test boat ${testBoatId} not found`);
      }

      for (const scenario of mockScenarios) {
        const gpsPoints: GPSPointDTO[] = scenario.points.map(p => ({
          latitude: p.lat,
          longitude: p.lon,
          timestamp: p.time
        }));

        const startTime = gpsPoints[0].timestamp;
        const endTime = new Date(gpsPoints[gpsPoints.length - 1].timestamp.getTime() + 60000);

        const trip = await tripService.createTrip({
          boatId: testBoatId,
          startTime,
          endTime,
          waterType: scenario.waterType,
          gpsPoints
        });

        // Verify all required fields are present
        expect(trip.id).toBeDefined();
        expect(trip.boatId).toBe(testBoatId);
        expect(trip.startTime).toEqual(startTime);
        expect(trip.endTime).toEqual(endTime);
        expect(trip.waterType).toBe(scenario.waterType);
        expect(trip.gpsPoints).toBeDefined();
        expect(trip.gpsPoints.length).toBe(gpsPoints.length);

        // Clean up
        await tripService.deleteTrip(trip.id);
      }
    });

    test('should default water type to inland when not specified', async () => {
      // Verify boat exists
      const boat = await boatService.getBoat(testBoatId);
      if (!boat) {
        throw new Error(`Test boat ${testBoatId} not found`);
      }

      // Use deterministic mock data
      const mockPoints = [
        { lat: 40.7128, lon: -74.0060, time: new Date('2024-01-01T10:00:00Z') },
        { lat: 40.7138, lon: -74.0070, time: new Date('2024-01-01T10:05:00Z') },
        { lat: 40.7148, lon: -74.0080, time: new Date('2024-01-01T10:10:00Z') }
      ];

      const gpsPoints: GPSPointDTO[] = mockPoints.map(p => ({
        latitude: p.lat,
        longitude: p.lon,
        timestamp: p.time
      }));

      const startTime = gpsPoints[0].timestamp;
      const endTime = new Date(gpsPoints[gpsPoints.length - 1].timestamp.getTime() + 60000);

      const trip = await tripService.createTrip({
        boatId: testBoatId,
        startTime,
        endTime,
        gpsPoints
        // waterType not specified
      });

      // Should default to 'inland'
      expect(trip.waterType).toBe('inland');

      // Clean up
      await tripService.deleteTrip(trip.id);
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 11: Speed and Heading Derivation**
   * **Validates: Requirements 4.8**
   * 
   * For any two consecutive GPS points with timestamps, the system should calculate
   * speed and heading from the position and time differences.
   */
  describe('Property 11: Speed and Heading Derivation', () => {
    test('should derive speed and heading for consecutive GPS points', async () => {
      // Verify boat exists
      const boat = await boatService.getBoat(testBoatId);
      if (!boat) {
        throw new Error(`Test boat ${testBoatId} not found`);
      }

      // Use deterministic mock data
      const mockPoints = [
        { lat: 40.7128, lon: -74.0060, time: new Date('2024-01-01T10:00:00Z') },
        { lat: 40.7138, lon: -74.0070, time: new Date('2024-01-01T10:05:00Z') },
        { lat: 40.7148, lon: -74.0080, time: new Date('2024-01-01T10:10:00Z') },
        { lat: 40.7158, lon: -74.0090, time: new Date('2024-01-01T10:15:00Z') }
      ];

      const gpsPoints: GPSPointDTO[] = mockPoints.map(p => ({
        latitude: p.lat,
        longitude: p.lon,
        timestamp: p.time
        // speed and heading not provided
      }));

      const startTime = gpsPoints[0].timestamp;
      const endTime = new Date(gpsPoints[gpsPoints.length - 1].timestamp.getTime() + 60000);

      const trip = await tripService.createTrip({
        boatId: testBoatId,
        startTime,
        endTime,
        gpsPoints
      });

      // Fetch the trip with GPS points
      const tripWithPoints = await tripService.getTrip(trip.id);
      expect(tripWithPoints).toBeDefined();

      // All points except the first should have speed and heading derived
      for (let i = 1; i < tripWithPoints!.gpsPoints.length; i++) {
        const point = tripWithPoints!.gpsPoints[i];
        expect(point.speed).toBeDefined();
        expect(point.heading).toBeDefined();
        expect(point.speed).toBeGreaterThanOrEqual(0);
        expect(point.heading).toBeGreaterThanOrEqual(0);
        expect(point.heading).toBeLessThan(360);
      }

      // Clean up
      await tripService.deleteTrip(trip.id);
    }, 10000);

    test('should use provided speed and heading when available', async () => {
      // Verify boat exists
      const boat = await boatService.getBoat(testBoatId);
      if (!boat) {
        throw new Error(`Test boat ${testBoatId} not found`);
      }

      // Use deterministic mock data with known speed and heading values
      const mockPoints = [
        { lat: 40.7128, lon: -74.0060, speed: 5.5, heading: 45, time: new Date('2024-01-01T10:00:00Z') },
        { lat: 40.7138, lon: -74.0070, speed: 6.2, heading: 90, time: new Date('2024-01-01T10:05:00Z') },
        { lat: 40.7148, lon: -74.0080, speed: 7.1, heading: 135, time: new Date('2024-01-01T10:10:00Z') }
      ];

      const gpsPoints: GPSPointDTO[] = mockPoints.map(p => ({
        latitude: p.lat,
        longitude: p.lon,
        speed: p.speed,
        heading: p.heading,
        timestamp: p.time
      }));

      const startTime = gpsPoints[0].timestamp;
      const endTime = new Date(gpsPoints[gpsPoints.length - 1].timestamp.getTime() + 60000);

      const trip = await tripService.createTrip({
        boatId: testBoatId,
        startTime,
        endTime,
        gpsPoints
      });

      // Fetch the trip with GPS points
      const tripWithPoints = await tripService.getTrip(trip.id);
      expect(tripWithPoints).toBeDefined();

      // All points should have the provided speed and heading
      for (let i = 0; i < tripWithPoints!.gpsPoints.length; i++) {
        const point = tripWithPoints!.gpsPoints[i];
        const originalPoint = mockPoints[i];
        
        expect(point.speed).toBeDefined();
        expect(point.heading).toBeDefined();
        
        // Should be close to the provided values (allowing for small floating point differences)
        expect(Math.abs(point.speed! - originalPoint.speed)).toBeLessThan(0.01);
        expect(Math.abs(point.heading! - originalPoint.heading)).toBeLessThan(0.01);
      }

      // Clean up
      await tripService.deleteTrip(trip.id);
    });
  });
});
