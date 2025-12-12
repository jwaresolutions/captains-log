import { PrismaClient, MarkedLocation } from '@prisma/client';

const prisma = new PrismaClient();

export interface MarkedLocationCreateDTO {
  name: string;
  latitude: number;
  longitude: number;
  category: 'fishing' | 'marina' | 'anchorage' | 'hazard' | 'other';
  notes?: string;
  tags?: string[];
}

export interface MarkedLocationUpdateDTO {
  name?: string;
  latitude?: number;
  longitude?: number;
  category?: 'fishing' | 'marina' | 'anchorage' | 'hazard' | 'other';
  notes?: string;
  tags?: string[];
}

export interface LocationFilters {
  category?: string;
  tags?: string[];
  search?: string;
}

export interface GPSCoordinate {
  latitude: number;
  longitude: number;
}

export interface MarkedLocationWithDistance extends MarkedLocation {
  distanceMeters?: number;
}

/**
 * Calculate the distance between two GPS coordinates using the Haversine formula
 * @param point1 First GPS coordinate
 * @param point2 Second GPS coordinate
 * @returns Distance in meters
 */
export function calculateDistance(point1: GPSCoordinate, point2: GPSCoordinate): number {
  const R = 6371000; // Earth's radius in meters
  const lat1Rad = (point1.latitude * Math.PI) / 180;
  const lat2Rad = (point2.latitude * Math.PI) / 180;
  const deltaLatRad = ((point2.latitude - point1.latitude) * Math.PI) / 180;
  const deltaLonRad = ((point2.longitude - point1.longitude) * Math.PI) / 180;

  const a = Math.sin(deltaLatRad / 2) * Math.sin(deltaLatRad / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
    Math.sin(deltaLonRad / 2) * Math.sin(deltaLonRad / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return R * c;
}

/**
 * Create a new marked location
 */
export async function createMarkedLocation(data: MarkedLocationCreateDTO): Promise<MarkedLocation> {
  return await prisma.markedLocation.create({
    data: {
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      category: data.category,
      notes: data.notes,
      tags: data.tags || [],
    },
  });
}

/**
 * Update an existing marked location
 */
export async function updateMarkedLocation(id: string, data: MarkedLocationUpdateDTO): Promise<MarkedLocation> {
  return await prisma.markedLocation.update({
    where: { id },
    data: {
      ...(data.name !== undefined && { name: data.name }),
      ...(data.latitude !== undefined && { latitude: data.latitude }),
      ...(data.longitude !== undefined && { longitude: data.longitude }),
      ...(data.category !== undefined && { category: data.category }),
      ...(data.notes !== undefined && { notes: data.notes }),
      ...(data.tags !== undefined && { tags: data.tags }),
    },
  });
}

/**
 * Get a marked location by ID
 */
export async function getMarkedLocation(id: string): Promise<MarkedLocation | null> {
  return await prisma.markedLocation.findUnique({
    where: { id },
  });
}

/**
 * Delete a marked location
 */
export async function deleteMarkedLocation(id: string): Promise<void> {
  await prisma.markedLocation.delete({
    where: { id },
  });
}

/**
 * List marked locations with optional filters
 */
export async function listMarkedLocations(filters: LocationFilters = {}): Promise<MarkedLocation[]> {
  const where: any = {};

  if (filters.category) {
    where.category = filters.category;
  }

  if (filters.tags && filters.tags.length > 0) {
    where.tags = {
      hasSome: filters.tags,
    };
  }

  if (filters.search) {
    where.OR = [
      { name: { contains: filters.search, mode: 'insensitive' } },
      { notes: { contains: filters.search, mode: 'insensitive' } },
    ];
  }

  return await prisma.markedLocation.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
}

/**
 * Find marked locations within a specified radius of a center point
 */
export async function findNearbyLocations(
  center: GPSCoordinate,
  radiusMeters: number
): Promise<MarkedLocationWithDistance[]> {
  // Get all locations first (we'll filter by distance in memory for simplicity)
  // For production with large datasets, consider using PostGIS for spatial queries
  const allLocations = await prisma.markedLocation.findMany();

  const nearbyLocations: MarkedLocationWithDistance[] = [];

  for (const location of allLocations) {
    const distance = calculateDistance(center, {
      latitude: location.latitude,
      longitude: location.longitude,
    });

    if (distance <= radiusMeters) {
      nearbyLocations.push({
        ...location,
        distanceMeters: distance,
      });
    }
  }

  // Sort by distance (closest first)
  return nearbyLocations.sort((a, b) => (a.distanceMeters || 0) - (b.distanceMeters || 0));
}

/**
 * Get marked locations with distances from a reference point
 */
export async function getMarkedLocationsWithDistance(
  referencePoint: GPSCoordinate,
  filters: LocationFilters = {}
): Promise<MarkedLocationWithDistance[]> {
  const locations = await listMarkedLocations(filters);

  return locations.map(location => ({
    ...location,
    distanceMeters: calculateDistance(referencePoint, {
      latitude: location.latitude,
      longitude: location.longitude,
    }),
  })).sort((a, b) => (a.distanceMeters || 0) - (b.distanceMeters || 0));
}