import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { SensorService } from '../../src/services/sensorService';
import { BoatService } from '../../src/services/boatService';
import { TripService } from '../../src/services/tripService';

const prisma = new PrismaClient();
const sensorService = new SensorService();
const boatService = new BoatService();
const tripService = new TripService();

/**
 * Property-Based Tests for Sensor Service
 */

describe('Sensor Service Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.sensorReading.deleteMany();
    await prisma.sensorType.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.sensorReading.deleteMany();
    await prisma.sensorType.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 41: Sensor Data Relay**
   * **Validates: Requirements 13.2**
   * 
   * For any sensor data received from Arduino via Bluetooth, the data should be relayed
   * to the Backend API and be retrievable.
   */
  describe('Property 41: Sensor Data Relay', () => {
    test('should relay and store sensor data for retrieval', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            sensorTypeName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            sensorUnit: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
            loggingFrequency: fc.constantFrom('continuous', 'snapshot'),
            sensorValues: fc.array(
              fc.record({
                value: fc.float({ min: -1000, max: 1000, noNaN: true }),
                timestampOffset: fc.integer({ min: 0, max: 3600 }) // Offset in seconds from trip start
              }),
              { minLength: 1, maxLength: 10 }
            )
          }),
          async (testData) => {
            // Ensure database is clean
            await prisma.sensorReading.deleteMany();
            await prisma.sensorType.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();

            // Create a boat
            const boat = await boatService.createBoat({ name: testData.boatName });

            // Create a trip
            const tripStartTime = new Date();
            const tripEndTime = new Date(tripStartTime.getTime() + 3600000); // 1 hour later
            const trip = await tripService.createTrip({
              boatId: boat.id,
              startTime: tripStartTime,
              endTime: tripEndTime,
              waterType: 'inland',
              role: 'captain',
              gpsPoints: [] // Empty GPS points for sensor testing
            });

            // Register sensor type
            const sensorType = await sensorService.registerSensorType({
              name: testData.sensorTypeName,
              unit: testData.sensorUnit,
              loggingFrequency: testData.loggingFrequency as 'continuous' | 'snapshot'
            });

            // Record sensor data (simulating data received from Arduino via Bluetooth)
            const recordedReadings = [];
            for (const sensorValue of testData.sensorValues) {
              const timestamp = new Date(tripStartTime.getTime() + sensorValue.timestampOffset * 1000);
              
              const reading = await sensorService.recordSensorData({
                tripId: trip.id,
                sensorTypeName: testData.sensorTypeName,
                value: sensorValue.value,
                timestamp: timestamp
              });

              recordedReadings.push({
                ...reading,
                expectedValue: sensorValue.value,
                expectedTimestamp: timestamp
              });
            }

            // Retrieve sensor data and verify it matches what was recorded
            const retrievedReadings = await sensorService.getSensorData(trip.id, testData.sensorTypeName);

            // Verify all readings were stored and can be retrieved
            expect(retrievedReadings.length).toBe(testData.sensorValues.length);

            // Verify each reading matches what was recorded
            for (let i = 0; i < recordedReadings.length; i++) {
              const recorded = recordedReadings[i];
              const retrieved = retrievedReadings.find(r => r.id === recorded.id);

              expect(retrieved).toBeDefined();
              expect(retrieved!.tripId).toBe(trip.id);
              expect(retrieved!.sensorTypeId).toBe(sensorType.id);
              expect(retrieved!.value).toBeCloseTo(recorded.expectedValue, 10);
              expect(retrieved!.unit).toBe(testData.sensorUnit.trim());
              expect(retrieved!.timestamp.getTime()).toBe(recorded.expectedTimestamp.getTime());
            }

            // Verify sensor data can also be retrieved by sensor type ID
            const retrievedByTypeId = await sensorService.getSensorDataByTypeId(trip.id, sensorType.id);
            expect(retrievedByTypeId.length).toBe(testData.sensorValues.length);

            // Clean up
            await prisma.sensorReading.deleteMany();
            await prisma.sensorType.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle multiple sensor types for the same trip', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            sensorTypes: fc.array(
              fc.record({
                name: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
                unit: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
                loggingFrequency: fc.constantFrom('continuous', 'snapshot'),
                readings: fc.array(
                  fc.record({
                    value: fc.float({ min: -1000, max: 1000, noNaN: true }),
                    timestampOffset: fc.integer({ min: 0, max: 3600 })
                  }),
                  { minLength: 1, maxLength: 5 }
                )
              }),
              { minLength: 2, maxLength: 4 }
            ).filter(types => {
              // Ensure unique sensor type names
              const names = types.map(t => t.name);
              return new Set(names).size === names.length;
            })
          }),
          async (testData) => {
            // Ensure database is clean
            await prisma.sensorReading.deleteMany();
            await prisma.sensorType.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();

            // Create a boat and trip
            const boat = await boatService.createBoat({ name: testData.boatName });
            const tripStartTime = new Date();
            const tripEndTime = new Date(tripStartTime.getTime() + 3600000); // 1 hour later
            const trip = await tripService.createTrip({
              boatId: boat.id,
              startTime: tripStartTime,
              endTime: tripEndTime,
              waterType: 'inland',
              role: 'captain',
              gpsPoints: [] // Empty GPS points for sensor testing
            });

            // Register sensor types and record data
            const expectedReadingCounts: { [sensorTypeName: string]: number } = {};
            
            for (const sensorTypeData of testData.sensorTypes) {
              // Register sensor type
              await sensorService.registerSensorType({
                name: sensorTypeData.name,
                unit: sensorTypeData.unit,
                loggingFrequency: sensorTypeData.loggingFrequency as 'continuous' | 'snapshot'
              });

              expectedReadingCounts[sensorTypeData.name] = sensorTypeData.readings.length;

              // Record sensor readings
              for (const reading of sensorTypeData.readings) {
                const timestamp = new Date(tripStartTime.getTime() + reading.timestampOffset * 1000);
                
                await sensorService.recordSensorData({
                  tripId: trip.id,
                  sensorTypeName: sensorTypeData.name,
                  value: reading.value,
                  timestamp: timestamp
                });
              }
            }

            // Verify each sensor type's data can be retrieved independently
            for (const sensorTypeData of testData.sensorTypes) {
              const readings = await sensorService.getSensorData(trip.id, sensorTypeData.name);
              expect(readings.length).toBe(expectedReadingCounts[sensorTypeData.name]);
              
              // Verify all readings belong to the correct sensor type
              for (const reading of readings) {
                expect(reading.unit).toBe(sensorTypeData.unit.trim());
              }
            }

            // Verify all sensor data can be retrieved together
            const allReadings = await sensorService.getSensorData(trip.id);
            const totalExpectedReadings = Object.values(expectedReadingCounts).reduce((sum, count) => sum + count, 0);
            expect(allReadings.length).toBe(totalExpectedReadings);

            // Clean up
            await prisma.sensorReading.deleteMany();
            await prisma.sensorType.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should auto-register unknown sensor types during data recording', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            unknownSensorName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            sensorValue: fc.float({ min: -1000, max: 1000, noNaN: true })
          }),
          async (testData) => {
            // Ensure database is clean
            await prisma.sensorReading.deleteMany();
            await prisma.sensorType.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();

            // Create a boat and trip
            const boat = await boatService.createBoat({ name: testData.boatName });
            const tripStartTime = new Date();
            const tripEndTime = new Date(tripStartTime.getTime() + 3600000); // 1 hour later
            const trip = await tripService.createTrip({
              boatId: boat.id,
              startTime: tripStartTime,
              endTime: tripEndTime,
              waterType: 'inland',
              role: 'captain',
              gpsPoints: [] // Empty GPS points for sensor testing
            });

            // Verify sensor type doesn't exist initially
            const initialSensorType = await sensorService.getSensorTypeByName(testData.unknownSensorName);
            expect(initialSensorType).toBeNull();

            // Record data for unknown sensor type (should auto-register)
            const reading = await sensorService.recordSensorData({
              tripId: trip.id,
              sensorTypeName: testData.unknownSensorName,
              value: testData.sensorValue,
              timestamp: tripStartTime
            });

            // Verify sensor type was auto-registered
            const autoRegisteredSensorType = await sensorService.getSensorTypeByName(testData.unknownSensorName);
            expect(autoRegisteredSensorType).toBeDefined();
            expect(autoRegisteredSensorType!.name).toBe(testData.unknownSensorName.trim());
            expect(autoRegisteredSensorType!.unit).toBe('unknown');
            expect(autoRegisteredSensorType!.loggingFrequency).toBe('continuous');
            expect(autoRegisteredSensorType!.description).toBe('Auto-registered sensor type');

            // Verify reading was recorded correctly
            expect(reading.sensorTypeId).toBe(autoRegisteredSensorType!.id);
            expect(reading.value).toBeCloseTo(testData.sensorValue, 10);

            // Verify data can be retrieved
            const retrievedReadings = await sensorService.getSensorData(trip.id, testData.unknownSensorName);
            expect(retrievedReadings.length).toBe(1);
            expect(retrievedReadings[0].value).toBeCloseTo(testData.sensorValue, 10);

            // Clean up
            await prisma.sensorReading.deleteMany();
            await prisma.sensorType.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should maintain data integrity across sensor readings', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            sensorTypeName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            readings: fc.array(
              fc.record({
                value: fc.float({ min: -1000, max: 1000, noNaN: true }),
                timestampOffset: fc.integer({ min: 0, max: 3600 })
              }),
              { minLength: 5, maxLength: 20 }
            )
          }),
          async (testData) => {
            // Ensure database is clean
            await prisma.sensorReading.deleteMany();
            await prisma.sensorType.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();

            // Create a boat and trip
            const boat = await boatService.createBoat({ name: testData.boatName });
            const tripStartTime = new Date();
            const tripEndTime = new Date(tripStartTime.getTime() + 3600000); // 1 hour later
            const trip = await tripService.createTrip({
              boatId: boat.id,
              startTime: tripStartTime,
              endTime: tripEndTime,
              waterType: 'inland',
              role: 'captain',
              gpsPoints: [] // Empty GPS points for sensor testing
            });

            // Record all sensor readings
            const expectedReadings = [];
            for (const reading of testData.readings) {
              const timestamp = new Date(tripStartTime.getTime() + reading.timestampOffset * 1000);
              
              const recorded = await sensorService.recordSensorData({
                tripId: trip.id,
                sensorTypeName: testData.sensorTypeName,
                value: reading.value,
                timestamp: timestamp
              });

              expectedReadings.push({
                id: recorded.id,
                value: reading.value,
                timestamp: timestamp
              });
            }

            // Retrieve all readings
            const retrievedReadings = await sensorService.getSensorData(trip.id, testData.sensorTypeName);

            // Verify count matches
            expect(retrievedReadings.length).toBe(testData.readings.length);

            // Verify each reading maintains data integrity
            for (const expected of expectedReadings) {
              const retrieved = retrievedReadings.find(r => r.id === expected.id);
              expect(retrieved).toBeDefined();
              expect(retrieved!.value).toBeCloseTo(expected.value, 10);
              expect(retrieved!.timestamp.getTime()).toBe(expected.timestamp.getTime());
              expect(retrieved!.tripId).toBe(trip.id);
            }

            // Verify readings are ordered by timestamp
            for (let i = 1; i < retrievedReadings.length; i++) {
              expect(retrievedReadings[i].timestamp.getTime()).toBeGreaterThanOrEqual(
                retrievedReadings[i - 1].timestamp.getTime()
              );
            }

            // Clean up
            await prisma.sensorReading.deleteMany();
            await prisma.sensorType.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});