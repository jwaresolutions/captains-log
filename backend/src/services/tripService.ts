import { PrismaClient, Trip, GPSPoint } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface GPSPointDTO {
  latitude: number;
  longitude: number;
  altitude?: number;
  accuracy?: number;
  speed?: number;
  heading?: number;
  timestamp: Date;
}

export interface TripCreateDTO {
  boatId: string;
  startTime: Date;
  endTime: Date | null;
  waterType?: 'inland' | 'coastal' | 'offshore';
  role?: 'captain' | 'crew' | 'observer';
  timezone?: string;
  gpsPoints: GPSPointDTO[];
  engineHours?: number;
  fuelConsumed?: number;
  weatherConditions?: string;
  numberOfPassengers?: number;
  destination?: string;
}

export interface TripUpdateDTO {
  waterType?: 'inland' | 'coastal' | 'offshore';
  role?: 'captain' | 'crew' | 'observer';
  engineHours?: number;
  fuelConsumed?: number;
  weatherConditions?: string;
  numberOfPassengers?: number;
  destination?: string;
}

export interface TripFilters {
  boatId?: string;
  startDate?: Date;
  endDate?: Date;
  waterType?: string;
  role?: string;
}

export interface TripStatistics {
  durationSeconds: number;
  distanceMeters: number;
  averageSpeedKnots: number;
  maxSpeedKnots: number;
}

export interface StopPoint {
  latitude: number;
  longitude: number;
  startTime: Date;
  endTime: Date;
  durationSeconds: number;
}

export interface TripWithGPS extends Trip {
  gpsPoints: GPSPoint[];
}

export class TripService {
  /**
   * Calculate distance between two GPS points using Haversine formula
   * Returns distance in meters
   */
  private calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371000; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  /**
   * Calculate speed between two GPS points
   * Returns speed in knots
   */
  private calculateSpeed(
    lat1: number,
    lon1: number,
    time1: Date,
    lat2: number,
    lon2: number,
    time2: Date
  ): number {
    const distanceMeters = this.calculateDistance(lat1, lon1, lat2, lon2);
    const timeSeconds = (time2.getTime() - time1.getTime()) / 1000;

    if (timeSeconds === 0) return 0;

    const metersPerSecond = distanceMeters / timeSeconds;
    const knots = metersPerSecond * 1.94384; // Convert m/s to knots

    return knots;
  }

  /**
   * Calculate heading between two GPS points
   * Returns heading in degrees (0-360)
   */
  private calculateHeading(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x =
      Math.cos(φ1) * Math.sin(φ2) -
      Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const θ = Math.atan2(y, x);

    const heading = ((θ * 180) / Math.PI + 360) % 360;

    return heading;
  }

  /**
   * Detect stop points in GPS data
   * A stop point is where the boat stays within 45 feet (13.716 meters) for at least 5 minutes
   */
  private detectStopPoints(gpsPoints: GPSPointDTO[]): StopPoint[] {
    const stopPoints: StopPoint[] = [];
    const STOP_RADIUS_METERS = 13.716; // 45 feet
    const STOP_DURATION_SECONDS = 300; // 5 minutes

    if (gpsPoints.length < 2) return stopPoints;

    let potentialStopStart = 0;

    for (let i = 1; i < gpsPoints.length; i++) {
      const startPoint = gpsPoints[potentialStopStart];
      const currentPoint = gpsPoints[i];

      const distance = this.calculateDistance(
        startPoint.latitude,
        startPoint.longitude,
        currentPoint.latitude,
        currentPoint.longitude
      );

      // If we've moved outside the radius, check if we had a stop
      if (distance > STOP_RADIUS_METERS) {
        const duration =
          (gpsPoints[i - 1].timestamp.getTime() - startPoint.timestamp.getTime()) / 1000;

        if (duration >= STOP_DURATION_SECONDS) {
          stopPoints.push({
            latitude: startPoint.latitude,
            longitude: startPoint.longitude,
            startTime: startPoint.timestamp,
            endTime: gpsPoints[i - 1].timestamp,
            durationSeconds: duration
          });
        }

        potentialStopStart = i;
      }
    }

    // Check the last potential stop
    const startPoint = gpsPoints[potentialStopStart];
    const lastPoint = gpsPoints[gpsPoints.length - 1];
    const duration = (lastPoint.timestamp.getTime() - startPoint.timestamp.getTime()) / 1000;

    if (duration >= STOP_DURATION_SECONDS) {
      const distance = this.calculateDistance(
        startPoint.latitude,
        startPoint.longitude,
        lastPoint.latitude,
        lastPoint.longitude
      );

      if (distance <= STOP_RADIUS_METERS) {
        stopPoints.push({
          latitude: startPoint.latitude,
          longitude: startPoint.longitude,
          startTime: startPoint.timestamp,
          endTime: lastPoint.timestamp,
          durationSeconds: duration
        });
      }
    }

    return stopPoints;
  }

  /**
   * Calculate trip statistics from GPS points
   */
  calculateTripStatistics(gpsPoints: GPSPointDTO[]): TripStatistics {
    if (gpsPoints.length === 0) {
      return {
        durationSeconds: 0,
        distanceMeters: 0,
        averageSpeedKnots: 0,
        maxSpeedKnots: 0
      };
    }

    // Sort by timestamp to ensure correct order
    const sortedPoints = [...gpsPoints].sort(
      (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
    );

    let totalDistance = 0;
    let maxSpeed = 0;
    const speeds: number[] = [];

    // Calculate distance and speeds
    for (let i = 1; i < sortedPoints.length; i++) {
      const prev = sortedPoints[i - 1];
      const curr = sortedPoints[i];

      const distance = this.calculateDistance(
        prev.latitude,
        prev.longitude,
        curr.latitude,
        curr.longitude
      );

      totalDistance += distance;

      const speed = this.calculateSpeed(
        prev.latitude,
        prev.longitude,
        prev.timestamp,
        curr.latitude,
        curr.longitude,
        curr.timestamp
      );

      speeds.push(speed);
      maxSpeed = Math.max(maxSpeed, speed);
    }

    const duration =
      (sortedPoints[sortedPoints.length - 1].timestamp.getTime() -
        sortedPoints[0].timestamp.getTime()) /
      1000;

    const averageSpeed = speeds.length > 0
      ? speeds.reduce((sum, speed) => sum + speed, 0) / speeds.length
      : 0;

    return {
      durationSeconds: duration,
      distanceMeters: totalDistance,
      averageSpeedKnots: averageSpeed,
      maxSpeedKnots: maxSpeed
    };
  }

  /**
   * Create a new trip with GPS points
   */
  async createTrip(data: TripCreateDTO): Promise<TripWithGPS> {
    // Validate required fields
    if (!data.boatId) {
      throw new Error('Boat ID is required');
    }

    if (!data.startTime) {
      throw new Error('Start time is required');
    }

    // endTime is optional for trips in progress
    if (data.endTime && data.endTime <= data.startTime) {
      throw new Error('End time must be after start time');
    }

    // Verify boat exists
    const boat = await prisma.boat.findUnique({
      where: { id: data.boatId }
    });

    if (!boat) {
      throw new Error('Boat not found');
    }

    // Calculate statistics
    const statistics = this.calculateTripStatistics(data.gpsPoints);

    // Detect stop points
    const stopPoints = this.detectStopPoints(data.gpsPoints);

    // Create trip with GPS points in a transaction
    const trip = await prisma.$transaction(async (tx) => {
      const newTrip = await tx.trip.create({
        data: {
          boatId: data.boatId,
          startTime: data.startTime,
          endTime: data.endTime,
          waterType: data.waterType || 'inland',
          role: data.role || 'captain',
          timezone: data.timezone,
          durationSeconds: statistics.durationSeconds,
          distanceMeters: statistics.distanceMeters,
          averageSpeedKnots: statistics.averageSpeedKnots,
          maxSpeedKnots: statistics.maxSpeedKnots,
          engineHours: data.engineHours,
          fuelConsumed: data.fuelConsumed,
          weatherConditions: data.weatherConditions,
          numberOfPassengers: data.numberOfPassengers,
          destination: data.destination
        }
      });

      // Create GPS points with derived speed and heading
      const gpsPointsToCreate = data.gpsPoints.map((point, index) => {
        let speed = point.speed;
        let heading = point.heading;
        let isStopPoint = false;

        // Derive speed and heading from consecutive points if not provided
        if (index > 0 && (speed === undefined || heading === undefined)) {
          const prevPoint = data.gpsPoints[index - 1];

          if (speed === undefined) {
            speed = this.calculateSpeed(
              prevPoint.latitude,
              prevPoint.longitude,
              prevPoint.timestamp,
              point.latitude,
              point.longitude,
              point.timestamp
            );
          }

          if (heading === undefined) {
            heading = this.calculateHeading(
              prevPoint.latitude,
              prevPoint.longitude,
              point.latitude,
              point.longitude
            );
          }
        }

        // Check if this point is part of a stop point
        for (const stop of stopPoints) {
          if (
            point.timestamp >= stop.startTime &&
            point.timestamp <= stop.endTime
          ) {
            isStopPoint = true;
            break;
          }
        }

        return {
          tripId: newTrip.id,
          latitude: point.latitude,
          longitude: point.longitude,
          altitude: point.altitude,
          accuracy: point.accuracy,
          speed: speed || 0,
          heading: heading || 0,
          timestamp: point.timestamp,
          isStopPoint
        };
      });

      await tx.gPSPoint.createMany({
        data: gpsPointsToCreate
      });

      return newTrip;
    });

    logger.info('Trip created', {
      tripId: trip.id,
      boatId: trip.boatId,
      duration: statistics.durationSeconds,
      distance: statistics.distanceMeters,
      stopPoints: stopPoints.length
    });

    // Fetch the complete trip with GPS points
    const completeTrip = await this.getTrip(trip.id);

    if (!completeTrip) {
      throw new Error('Failed to retrieve created trip');
    }

    return completeTrip;
  }

  /**
   * Get a trip by ID with GPS points
   */
  async getTrip(id: string): Promise<TripWithGPS | null> {
    const trip = await prisma.trip.findUnique({
      where: { id },
      include: {
        gpsPoints: {
          orderBy: { timestamp: 'asc' }
        },
        boat: true
      }
    });

    return trip;
  }

  /**
   * List trips with optional filters
   */
  async listTrips(filters: TripFilters = {}): Promise<Trip[]> {
    const where: any = {};

    if (filters.boatId) {
      where.boatId = filters.boatId;
    }

    if (filters.startDate || filters.endDate) {
      where.startTime = {};
      if (filters.startDate) {
        where.startTime.gte = filters.startDate;
      }
      if (filters.endDate) {
        where.startTime.lte = filters.endDate;
      }
    }

    if (filters.waterType) {
      where.waterType = filters.waterType;
    }

    if (filters.role) {
      where.role = filters.role;
    }

    const trips = await prisma.trip.findMany({
      where,
      include: {
        boat: true
      },
      orderBy: { startTime: 'desc' }
    });

    return trips;
  }

  /**
   * Update a trip
   */
  async updateTrip(id: string, data: TripUpdateDTO): Promise<Trip> {
    const trip = await prisma.trip.findUnique({ where: { id } });

    if (!trip) {
      throw new Error('Trip not found');
    }

    const updated = await prisma.trip.update({
      where: { id },
      data: {
        ...(data.waterType !== undefined && { waterType: data.waterType }),
        ...(data.role !== undefined && { role: data.role }),
        ...(data.engineHours !== undefined && { engineHours: data.engineHours }),
        ...(data.fuelConsumed !== undefined && { fuelConsumed: data.fuelConsumed }),
        ...(data.weatherConditions !== undefined && { weatherConditions: data.weatherConditions }),
        ...(data.numberOfPassengers !== undefined && { numberOfPassengers: data.numberOfPassengers }),
        ...(data.destination !== undefined && { destination: data.destination })
      }
    });

    logger.info('Trip updated', { tripId: id });

    return updated;
  }

  /**
   * Delete a trip (for testing purposes)
   */
  async deleteTrip(id: string): Promise<void> {
    await prisma.trip.delete({
      where: { id }
    });

    logger.info('Trip deleted', { tripId: id });
  }
}

export const tripService = new TripService();
