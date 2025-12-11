#!/usr/bin/env node
/**
 * CLI script to seed the database with test data
 * Creates sample boats, trips with GPS data, and other entities for development/testing
 * 
 * Usage: npm run seed-db
 * Or via docker: docker-compose exec backend npm run seed-db
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    console.log('Seeding database with test data...');
    console.log('');

    // Create sample boats
    console.log('Creating sample boats...');
    const boat1 = await prisma.boat.create({
      data: {
        name: 'Sea Breeze',
        enabled: true,
        isActive: true,
        metadata: {
          make: 'Boston Whaler',
          model: 'Montauk',
          year: 2018,
          length: 21,
          registration: 'CA-1234-AB'
        }
      }
    });

    const boat2 = await prisma.boat.create({
      data: {
        name: 'Wave Runner',
        enabled: true,
        isActive: false,
        metadata: {
          make: 'Grady-White',
          model: 'Freedom 285',
          year: 2020,
          length: 28,
          registration: 'CA-5678-CD'
        }
      }
    });

    const boat3 = await prisma.boat.create({
      data: {
        name: 'Sunset Cruiser',
        enabled: false,
        isActive: false,
        metadata: {
          make: 'Sea Ray',
          model: 'Sundancer 320',
          year: 2015,
          length: 32,
          registration: 'CA-9012-EF'
        }
      }
    });

    console.log(`✓ Created 3 boats: ${boat1.name}, ${boat2.name}, ${boat3.name}`);

    // Create sample trips with GPS data
    console.log('Creating sample trips...');

    // Trip 1: Short coastal trip (2 hours)
    const trip1StartTime = new Date('2024-12-01T09:00:00Z');
    const trip1EndTime = new Date('2024-12-01T11:00:00Z');
    
    const trip1 = await prisma.trip.create({
      data: {
        boatId: boat1.id,
        startTime: trip1StartTime,
        endTime: trip1EndTime,
        waterType: 'coastal',
        role: 'captain',
        timezone: 'America/Los_Angeles',
        durationSeconds: 7200,
        distanceMeters: 18520, // ~10 nautical miles
        averageSpeedKnots: 5.0,
        maxSpeedKnots: 8.5,
        engineHours: 2.1,
        fuelConsumed: 8.5,
        weatherConditions: 'Sunny, light breeze',
        numberOfPassengers: 3,
        destination: 'Marina Bay'
      }
    });

    // Generate GPS points for trip 1 (every 5 seconds for 2 hours = 1440 points)
    // Simplified: create points every 5 minutes instead for demo
    const trip1GpsPoints = [];
    const startLat = 37.8;
    const startLon = -122.4;
    for (let i = 0; i < 24; i++) {
      const timestamp = new Date(trip1StartTime.getTime() + i * 5 * 60 * 1000);
      trip1GpsPoints.push({
        tripId: trip1.id,
        latitude: startLat + (i * 0.001),
        longitude: startLon + (i * 0.001),
        altitude: 0,
        accuracy: 5,
        speed: 5.0 + Math.random() * 2,
        heading: 45 + Math.random() * 10,
        timestamp,
        isStopPoint: i === 12 // Stop point in the middle
      });
    }

    await prisma.gPSPoint.createMany({
      data: trip1GpsPoints
    });

    // Trip 2: Longer inland trip (5 hours)
    const trip2StartTime = new Date('2024-12-02T08:00:00Z');
    const trip2EndTime = new Date('2024-12-02T13:00:00Z');
    
    const trip2 = await prisma.trip.create({
      data: {
        boatId: boat1.id,
        startTime: trip2StartTime,
        endTime: trip2EndTime,
        waterType: 'inland',
        role: 'captain',
        timezone: 'America/Los_Angeles',
        durationSeconds: 18000,
        distanceMeters: 46300, // ~25 nautical miles
        averageSpeedKnots: 5.5,
        maxSpeedKnots: 12.0,
        engineHours: 5.2,
        fuelConsumed: 22.0,
        weatherConditions: 'Partly cloudy',
        numberOfPassengers: 2,
        destination: 'Lake Point'
      }
    });

    // Generate GPS points for trip 2
    const trip2GpsPoints = [];
    const start2Lat = 38.0;
    const start2Lon = -122.0;
    for (let i = 0; i < 60; i++) {
      const timestamp = new Date(trip2StartTime.getTime() + i * 5 * 60 * 1000);
      trip2GpsPoints.push({
        tripId: trip2.id,
        latitude: start2Lat + (i * 0.002),
        longitude: start2Lon - (i * 0.001),
        altitude: 0,
        accuracy: 5,
        speed: 5.5 + Math.random() * 3,
        heading: 90 + Math.random() * 20,
        timestamp,
        isStopPoint: i === 30 || i === 45 // Two stop points
      });
    }

    await prisma.gPSPoint.createMany({
      data: trip2GpsPoints
    });

    // Trip 3: Recent trip on boat 2
    const trip3StartTime = new Date('2024-12-07T14:00:00Z');
    const trip3EndTime = new Date('2024-12-07T17:30:00Z');
    
    const trip3 = await prisma.trip.create({
      data: {
        boatId: boat2.id,
        startTime: trip3StartTime,
        endTime: trip3EndTime,
        waterType: 'offshore',
        role: 'captain',
        timezone: 'America/Los_Angeles',
        durationSeconds: 12600,
        distanceMeters: 37040, // ~20 nautical miles
        averageSpeedKnots: 6.0,
        maxSpeedKnots: 15.0,
        engineHours: 3.5,
        fuelConsumed: 18.0,
        weatherConditions: 'Clear skies, moderate wind',
        numberOfPassengers: 4,
        destination: 'Offshore fishing grounds'
      }
    });

    // Generate GPS points for trip 3
    const trip3GpsPoints = [];
    const start3Lat = 37.5;
    const start3Lon = -122.8;
    for (let i = 0; i < 42; i++) {
      const timestamp = new Date(trip3StartTime.getTime() + i * 5 * 60 * 1000);
      trip3GpsPoints.push({
        tripId: trip3.id,
        latitude: start3Lat - (i * 0.003),
        longitude: start3Lon + (i * 0.002),
        altitude: 0,
        accuracy: 8,
        speed: 6.0 + Math.random() * 4,
        heading: 180 + Math.random() * 30,
        timestamp,
        isStopPoint: i === 20 // One stop point
      });
    }

    await prisma.gPSPoint.createMany({
      data: trip3GpsPoints
    });

    // Trip 4: Active trip (no end time)
    const trip4StartTime = new Date();
    
    const trip4 = await prisma.trip.create({
      data: {
        boatId: boat1.id,
        startTime: trip4StartTime,
        endTime: null,
        waterType: 'coastal',
        role: 'captain',
        timezone: 'America/Los_Angeles'
      }
    });

    // Generate a few GPS points for the active trip
    const trip4GpsPoints = [];
    const start4Lat = 37.7;
    const start4Lon = -122.5;
    for (let i = 0; i < 5; i++) {
      const timestamp = new Date(trip4StartTime.getTime() + i * 5 * 60 * 1000);
      trip4GpsPoints.push({
        tripId: trip4.id,
        latitude: start4Lat + (i * 0.0005),
        longitude: start4Lon + (i * 0.0005),
        altitude: 0,
        accuracy: 5,
        speed: 4.0 + Math.random(),
        heading: 30 + Math.random() * 10,
        timestamp,
        isStopPoint: false
      });
    }

    await prisma.gPSPoint.createMany({
      data: trip4GpsPoints
    });

    console.log(`✓ Created 4 trips with GPS data`);
    console.log(`  - Trip 1: ${trip1.waterType} (${(trip1.durationSeconds ?? 0) / 3600}h, ${((trip1.distanceMeters ?? 0) / 1852).toFixed(1)} nm)`);
    console.log(`  - Trip 2: ${trip2.waterType} (${(trip2.durationSeconds ?? 0) / 3600}h, ${((trip2.distanceMeters ?? 0) / 1852).toFixed(1)} nm)`);
    console.log(`  - Trip 3: ${trip3.waterType} (${(trip3.durationSeconds ?? 0) / 3600}h, ${((trip3.distanceMeters ?? 0) / 1852).toFixed(1)} nm)`);
    console.log(`  - Trip 4: Active trip (in progress)`);

    console.log('');
    console.log('✓ Database seeded successfully');
    console.log('');
    console.log('Summary:');
    console.log(`  - 3 boats (1 active, 1 enabled, 1 disabled)`);
    console.log(`  - 4 trips (3 completed, 1 active)`);
    console.log(`  - ${trip1GpsPoints.length + trip2GpsPoints.length + trip3GpsPoints.length + trip4GpsPoints.length} GPS points`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
