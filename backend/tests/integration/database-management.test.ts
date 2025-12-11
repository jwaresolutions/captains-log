/**
 * Integration tests for database management CLI commands
 * Tests reset-db and seed-db functionality
 */

import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

describe('Database Management CLI Commands', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('reset-db command', () => {
    it('should reset database and create default user when credentials provided', async () => {
      // Run reset-db with username and password
      const output = execSync(
        'npm run reset-db -- --username testadmin --password testpass456',
        { encoding: 'utf-8', cwd: process.cwd() }
      );

      // Verify output contains success messages
      expect(output).toContain('All tables dropped and schema recreated');
      expect(output).toContain('Default user created successfully');
      expect(output).toContain('Username: testadmin');
      expect(output).toContain('Database reset complete');

      // Verify user was created in database
      const user = await prisma.user.findUnique({
        where: { username: 'testadmin' }
      });

      expect(user).toBeDefined();
      expect(user?.username).toBe('testadmin');
      expect(user?.passwordHash).toBeDefined();
      expect(user?.passwordHash.length).toBeGreaterThan(0);

      // Verify database is empty except for the user
      const boats = await prisma.boat.count();
      const trips = await prisma.trip.count();
      const gpsPoints = await prisma.gPSPoint.count();

      expect(boats).toBe(0);
      expect(trips).toBe(0);
      expect(gpsPoints).toBe(0);
    });

    it('should reset database without creating user when credentials not provided', async () => {
      // First create a user
      await execSync(
        'npm run create-user -- --username tempuser --password temppass',
        { encoding: 'utf-8', cwd: process.cwd() }
      );

      // Run reset-db without credentials
      const output = execSync('npm run reset-db', {
        encoding: 'utf-8',
        cwd: process.cwd()
      });

      // Verify output
      expect(output).toContain('All tables dropped and schema recreated');
      expect(output).toContain('No default user created');
      expect(output).toContain('Database reset complete');

      // Verify no users exist
      const userCount = await prisma.user.count();
      expect(userCount).toBe(0);
    });
  });

  describe('seed-db command', () => {
    beforeEach(async () => {
      // Reset database before each seed test
      execSync('npm run reset-db', {
        encoding: 'utf-8',
        cwd: process.cwd()
      });
    });

    it('should seed database with test data', async () => {
      // Run seed-db
      const output = execSync('npm run seed-db', {
        encoding: 'utf-8',
        cwd: process.cwd()
      });

      // Verify output contains success messages
      expect(output).toContain('Seeding database with test data');
      expect(output).toContain('Created 3 boats');
      expect(output).toContain('Created 4 trips with GPS data');
      expect(output).toContain('Database seeded successfully');

      // Verify boats were created
      const boats = await prisma.boat.findMany();
      expect(boats.length).toBe(3);
      expect(boats.map(b => b.name)).toContain('Sea Breeze');
      expect(boats.map(b => b.name)).toContain('Wave Runner');
      expect(boats.map(b => b.name)).toContain('Sunset Cruiser');

      // Verify one boat is active
      const activeBoats = boats.filter(b => b.isActive);
      expect(activeBoats.length).toBe(1);
      expect(activeBoats[0].name).toBe('Sea Breeze');

      // Verify one boat is disabled
      const disabledBoats = boats.filter(b => !b.enabled);
      expect(disabledBoats.length).toBe(1);
      expect(disabledBoats[0].name).toBe('Sunset Cruiser');

      // Verify trips were created
      const trips = await prisma.trip.findMany();
      expect(trips.length).toBe(4);

      // Verify completed trips have statistics
      const completedTrips = trips.filter(t => t.endTime !== null);
      expect(completedTrips.length).toBe(3);
      completedTrips.forEach(trip => {
        expect(trip.durationSeconds).toBeGreaterThan(0);
        expect(trip.distanceMeters).toBeGreaterThan(0);
        expect(trip.averageSpeedKnots).toBeGreaterThan(0);
        expect(trip.maxSpeedKnots).toBeGreaterThan(0);
      });

      // Verify active trip exists
      const activeTrips = trips.filter(t => t.endTime === null);
      expect(activeTrips.length).toBe(1);

      // Verify GPS points were created
      const gpsPoints = await prisma.gPSPoint.count();
      expect(gpsPoints).toBeGreaterThan(100); // Should have 131 points

      // Verify stop points exist
      const stopPoints = await prisma.gPSPoint.findMany({
        where: { isStopPoint: true }
      });
      expect(stopPoints.length).toBeGreaterThan(0);
    });

    it('should create trips with different water types', async () => {
      execSync('npm run seed-db', {
        encoding: 'utf-8',
        cwd: process.cwd()
      });

      const trips = await prisma.trip.findMany();
      const waterTypes = trips.map(t => t.waterType);

      expect(waterTypes).toContain('coastal');
      expect(waterTypes).toContain('inland');
      expect(waterTypes).toContain('offshore');
    });

    it('should create trips with manual data', async () => {
      execSync('npm run seed-db', {
        encoding: 'utf-8',
        cwd: process.cwd()
      });

      const tripsWithManualData = await prisma.trip.findMany({
        where: {
          engineHours: { not: null }
        }
      });

      expect(tripsWithManualData.length).toBeGreaterThan(0);
      tripsWithManualData.forEach(trip => {
        expect(trip.engineHours).toBeGreaterThan(0);
        expect(trip.fuelConsumed).toBeGreaterThan(0);
        expect(trip.weatherConditions).toBeDefined();
        expect(trip.numberOfPassengers).toBeGreaterThan(0);
        expect(trip.destination).toBeDefined();
      });
    });
  });

  describe('reset-db and seed-db workflow', () => {
    it('should work together to reset and populate database', async () => {
      // Reset database with a user
      execSync(
        'npm run reset-db -- --username admin --password adminpass',
        { encoding: 'utf-8', cwd: process.cwd() }
      );

      // Verify database is empty except for user
      let boats = await prisma.boat.count();
      let trips = await prisma.trip.count();
      let users = await prisma.user.count();

      expect(boats).toBe(0);
      expect(trips).toBe(0);
      expect(users).toBe(1);

      // Seed database
      execSync('npm run seed-db', {
        encoding: 'utf-8',
        cwd: process.cwd()
      });

      // Verify database now has test data
      boats = await prisma.boat.count();
      trips = await prisma.trip.count();
      const gpsPoints = await prisma.gPSPoint.count();
      users = await prisma.user.count();

      expect(boats).toBe(3);
      expect(trips).toBe(4);
      expect(gpsPoints).toBeGreaterThan(100);
      expect(users).toBe(1); // User should still exist

      // Verify user is still accessible
      const user = await prisma.user.findUnique({
        where: { username: 'admin' }
      });
      expect(user).toBeDefined();
    });
  });
});
