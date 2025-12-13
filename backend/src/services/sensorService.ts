import { PrismaClient, SensorType, SensorReading } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface SensorTypeCreateDTO {
  name: string;
  unit: string;
  loggingFrequency: 'continuous' | 'snapshot';
  description?: string;
}

export interface SensorTypeUpdateDTO {
  name?: string;
  unit?: string;
  loggingFrequency?: 'continuous' | 'snapshot';
  description?: string;
}

export interface SensorReadingCreateDTO {
  tripId: string;
  sensorTypeId: string;
  value: number;
  timestamp: Date;
}

export interface SensorDataDTO {
  tripId: string;
  sensorTypeName: string;
  value: number;
  timestamp: Date;
}

export class SensorService {
  /**
   * Register a new sensor type
   */
  async registerSensorType(data: SensorTypeCreateDTO): Promise<SensorType> {
    if (!data.name || data.name.trim() === '') {
      throw new Error('Sensor type name is required');
    }

    if (!data.unit || data.unit.trim() === '') {
      throw new Error('Sensor unit is required');
    }

    if (!['continuous', 'snapshot'].includes(data.loggingFrequency)) {
      throw new Error('Logging frequency must be either "continuous" or "snapshot"');
    }

    // Check if sensor type already exists
    const existing = await prisma.sensorType.findUnique({
      where: { name: data.name.trim() }
    });

    if (existing) {
      throw new Error(`Sensor type "${data.name}" already exists`);
    }

    const sensorType = await prisma.sensorType.create({
      data: {
        name: data.name.trim(),
        unit: data.unit.trim(),
        loggingFrequency: data.loggingFrequency,
        description: data.description?.trim() || undefined
      }
    });

    logger.info('Sensor type registered', { 
      sensorTypeId: sensorType.id, 
      name: sensorType.name, 
      unit: sensorType.unit,
      loggingFrequency: sensorType.loggingFrequency
    });

    return sensorType;
  }

  /**
   * Get a sensor type by ID
   */
  async getSensorType(id: string): Promise<SensorType | null> {
    const sensorType = await prisma.sensorType.findUnique({
      where: { id }
    });

    return sensorType;
  }

  /**
   * Get a sensor type by name
   */
  async getSensorTypeByName(name: string): Promise<SensorType | null> {
    const sensorType = await prisma.sensorType.findUnique({
      where: { name: name.trim() }
    });

    return sensorType;
  }

  /**
   * List all sensor types
   */
  async listSensorTypes(): Promise<SensorType[]> {
    const sensorTypes = await prisma.sensorType.findMany({
      orderBy: { name: 'asc' }
    });

    return sensorTypes;
  }

  /**
   * Update a sensor type
   */
  async updateSensorType(id: string, data: SensorTypeUpdateDTO): Promise<SensorType> {
    const sensorType = await prisma.sensorType.findUnique({ where: { id } });

    if (!sensorType) {
      throw new Error('Sensor type not found');
    }

    if (data.name !== undefined && data.name.trim() === '') {
      throw new Error('Sensor type name cannot be empty');
    }

    if (data.unit !== undefined && data.unit.trim() === '') {
      throw new Error('Sensor unit cannot be empty');
    }

    if (data.loggingFrequency !== undefined && !['continuous', 'snapshot'].includes(data.loggingFrequency)) {
      throw new Error('Logging frequency must be either "continuous" or "snapshot"');
    }

    // Check for name conflicts if name is being changed
    if (data.name && data.name !== sensorType.name) {
      const existing = await prisma.sensorType.findUnique({
        where: { name: data.name.trim() }
      });

      if (existing) {
        throw new Error(`Sensor type "${data.name}" already exists`);
      }
    }

    const updated = await prisma.sensorType.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name.trim() }),
        ...(data.unit !== undefined && { unit: data.unit.trim() }),
        ...(data.loggingFrequency !== undefined && { loggingFrequency: data.loggingFrequency }),
        ...(data.description !== undefined && { description: data.description?.trim() || null })
      }
    });

    logger.info('Sensor type updated', { sensorTypeId: id });

    return updated;
  }

  /**
   * Record sensor data
   */
  async recordSensorData(data: SensorDataDTO): Promise<SensorReading> {
    if (!data.tripId) {
      throw new Error('Trip ID is required');
    }

    if (!data.sensorTypeName || data.sensorTypeName.trim() === '') {
      throw new Error('Sensor type name is required');
    }

    if (typeof data.value !== 'number' || isNaN(data.value)) {
      throw new Error('Sensor value must be a valid number');
    }

    if (!data.timestamp || !(data.timestamp instanceof Date)) {
      throw new Error('Valid timestamp is required');
    }

    // Verify trip exists
    const trip = await prisma.trip.findUnique({
      where: { id: data.tripId }
    });

    if (!trip) {
      throw new Error('Trip not found');
    }

    // Get or create sensor type
    let sensorType = await this.getSensorTypeByName(data.sensorTypeName);
    
    if (!sensorType) {
      // Auto-register unknown sensor types with default settings
      sensorType = await this.registerSensorType({
        name: data.sensorTypeName,
        unit: 'unknown', // Will need to be updated later
        loggingFrequency: 'continuous',
        description: 'Auto-registered sensor type'
      });

      logger.info('Auto-registered sensor type', { 
        name: data.sensorTypeName,
        tripId: data.tripId 
      });
    }

    const sensorReading = await prisma.sensorReading.create({
      data: {
        tripId: data.tripId,
        sensorTypeId: sensorType.id,
        value: data.value,
        unit: sensorType.unit,
        timestamp: data.timestamp
      }
    });

    logger.debug('Sensor reading recorded', { 
      sensorReadingId: sensorReading.id,
      tripId: data.tripId,
      sensorType: data.sensorTypeName,
      value: data.value,
      timestamp: data.timestamp
    });

    return sensorReading;
  }

  /**
   * Get sensor data for a trip
   */
  async getSensorData(tripId: string, sensorTypeName?: string): Promise<SensorReading[]> {
    const whereClause: any = { tripId };

    if (sensorTypeName) {
      const sensorType = await this.getSensorTypeByName(sensorTypeName);
      if (!sensorType) {
        return []; // Return empty array if sensor type doesn't exist
      }
      whereClause.sensorTypeId = sensorType.id;
    }

    const sensorReadings = await prisma.sensorReading.findMany({
      where: whereClause,
      include: {
        sensorType: true
      },
      orderBy: { timestamp: 'asc' }
    });

    return sensorReadings;
  }

  /**
   * Get sensor data for a trip by sensor type ID
   */
  async getSensorDataByTypeId(tripId: string, sensorTypeId: string): Promise<SensorReading[]> {
    const sensorReadings = await prisma.sensorReading.findMany({
      where: {
        tripId,
        sensorTypeId
      },
      include: {
        sensorType: true
      },
      orderBy: { timestamp: 'asc' }
    });

    return sensorReadings;
  }

  /**
   * Delete sensor readings for a trip (for testing purposes)
   */
  async deleteSensorReadingsForTrip(tripId: string): Promise<void> {
    await prisma.sensorReading.deleteMany({
      where: { tripId }
    });

    logger.info('Sensor readings deleted for trip', { tripId });
  }

  /**
   * Delete a sensor type (for testing purposes)
   */
  async deleteSensorType(id: string): Promise<void> {
    await prisma.sensorType.delete({
      where: { id }
    });

    logger.info('Sensor type deleted', { sensorTypeId: id });
  }
}

export const sensorService = new SensorService();