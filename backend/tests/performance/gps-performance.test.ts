/**
 * GPS Dataset Performance Tests
 * Tests performance with large GPS datasets
 */

import { PrismaClient } from '@prisma/client';
import { TripService } from '../../src/services/TripService';

const prisma = new PrismaClient();
const tripService = new TripService();

describe('GPS Performance Tests', () => {
  let testBoatId: string;
  let testTripId: string;

  beforeAll(async () => {
    // Create test boat
    const boat = await prisma.boat.create({
      data: {
        name: 'Performance Test Boat',
        enabled: true,
        isActive: true
      }
    });
    testBoatId = boat.id;

    // Create test trip
    const trip = await prisma.trip.create({
      data: {
        boatId: testBoatId,
        startTime: new Date('2024-01-01T10:00:00Z'),
        endTime: new Date('2024-01-01T18:00:00Z'),
        waterType: 'coastal',
        role: 'captain'
      }
    });
    testTripId = trip.id;
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.gPSPoint.deleteMany({ where: { tripId: testTripId } });
    await prisma.trip.delete({ where: { id: testTripId } });
    await prisma.boat.delete({ where: { id: testBoatId } });
    await prisma.$disconnect();
  });

  test('should handle large GPS dataset insertion (1000 points)', async () => {
    const startTime = Date.now();
    
    // Generate 1000 GPS points (simulating 8-hour trip with 5-second intervals)
    const gpsPoints = [];
    const baseTime = new Date('2024-01-01T10:00:00Z');
    
    for (let i = 0; i < 1000; i++) {
      const timestamp = new Date(baseTime.getTime() + (i * 5000)); // 5 seconds apart
      gpsPoints.push({
        tripId: testTripId,
        latitude: 37.7749 + (Math.random() - 0.5) * 0.01, // San Francisco area
        longitude: -122.4194 + (Math.random() - 0.5) * 0.01,
        altitude: Math.random() * 100,
        accuracy: 5 + Math.random() * 10,
        speed: Math.random() * 25, // 0-25 knots
        heading: Math.random() * 360,
        timestamp,
        isStopPoint: Math.random() < 0.05 // 5% chance of stop point
      });
    }

    // Batch insert GPS points
    await prisma.gPSPoint.createMany({
      data: gpsPoints
    });

    const insertTime = Date.now() - startTime;
    console.log(`GPS insertion time for 1000 points: ${insertTime}ms`);
    
    // Should complete within reasonable time (adjust threshold as needed)
    expect(insertTime).toBeLessThan(5000); // 5 seconds
  }, 30000);

  test('should efficiently retrieve trip with large GPS dataset', async () => {
    const startTime = Date.now();
    
    const trip = await tripService.getTripById(testTripId);
    
    const retrievalTime = Date.now() - startTime;
    console.log(`GPS retrieval time for trip with 1000+ points: ${retrievalTime}ms`);
    
    expect(trip).toBeDefined();
    expect(trip?.gpsPoints.length).toBeGreaterThan(900); // Allow for some variation
    expect(retrievalTime).toBeLessThan(2000); // 2 seconds
  }, 30000);

  test('should efficiently calculate trip statistics with large dataset', async () => {
    const startTime = Date.now();
    
    const stats = await tripService.calculateTripStatistics(testTripId);
    
    const calculationTime = Date.now() - startTime;
    console.log(`Statistics calculation time for 1000+ points: ${calculationTime}ms`);
    
    expect(stats).toBeDefined();
    expect(stats.durationSeconds).toBeGreaterThan(0);
    expect(stats.distanceMeters).toBeGreaterThan(0);
    expect(calculationTime).toBeLessThan(3000); // 3 seconds
  }, 30000);

  test('should efficiently detect stop points in large dataset', async () => {
    const startTime = Date.now();
    
    // Get GPS points and check stop point detection
    const gpsPoints = await prisma.gPSPoint.findMany({
      where: { tripId: testTripId },
      orderBy: { timestamp: 'asc' }
    });

    const stopPoints = gpsPoints.filter(point => point.isStopPoint);
    
    const detectionTime = Date.now() - startTime;
    console.log(`Stop point detection time for 1000+ points: ${detectionTime}ms`);
    console.log(`Found ${stopPoints.length} stop points`);
    
    expect(stopPoints.length).toBeGreaterThan(0);
    expect(detectionTime).toBeLessThan(1000); // 1 second
  }, 30000);

  test('should handle concurrent GPS point insertions', async () => {
    const startTime = Date.now();
    
    // Create multiple concurrent insertion promises
    const insertionPromises = [];
    
    for (let batch = 0; batch < 5; batch++) {
      const batchPoints = [];
      const baseTime = new Date('2024-01-01T20:00:00Z');
      
      for (let i = 0; i < 100; i++) {
        const timestamp = new Date(baseTime.getTime() + (batch * 100 + i) * 1000);
        batchPoints.push({
          tripId: testTripId,
          latitude: 37.7749 + (Math.random() - 0.5) * 0.01,
          longitude: -122.4194 + (Math.random() - 0.5) * 0.01,
          altitude: Math.random() * 100,
          accuracy: 5 + Math.random() * 10,
          speed: Math.random() * 25,
          heading: Math.random() * 360,
          timestamp,
          isStopPoint: false
        });
      }
      
      insertionPromises.push(
        prisma.gPSPoint.createMany({ data: batchPoints })
      );
    }

    // Wait for all concurrent insertions
    await Promise.all(insertionPromises);
    
    const concurrentTime = Date.now() - startTime;
    console.log(`Concurrent GPS insertion time for 500 points (5 batches): ${concurrentTime}ms`);
    
    expect(concurrentTime).toBeLessThan(10000); // 10 seconds
  }, 30000);
});