/**
 * Utility functions for proper data serialization
 */

/**
 * Safely convert a Date object to ISO string
 */
export function dateToISOString(date: any): string {
  if (!date) {
    return new Date().toISOString();
  }
  
  if (date instanceof Date) {
    return date.toISOString();
  }
  
  // Try to parse as date if it's a string
  if (typeof date === 'string') {
    const parsed = new Date(date);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  }
  
  // Fallback to current date
  return new Date().toISOString();
}

/**
 * Recursively serialize any object with proper date handling
 */
export function serializeWithDates(obj: any): any {
  if (obj === null || obj === undefined) {
    return obj;
  }
  
  if (obj instanceof Date) {
    return obj.toISOString();
  }
  
  if (Array.isArray(obj)) {
    return obj.map(serializeWithDates);
  }
  
  if (typeof obj === 'object') {
    const serialized: any = {};
    for (const [key, value] of Object.entries(obj)) {
      serialized[key] = serializeWithDates(value);
    }
    return serialized;
  }
  
  return obj;
}

/**
 * Create a safe JSON response with proper date serialization
 */
export function createJsonResponse(data: any): string {
  return JSON.stringify(serializeWithDates(data));
}

/**
 * Send a JSON response with proper date serialization
 */
export function sendJsonResponse(res: any, data: any, statusCode: number = 200): void {
  res.setHeader('Content-Type', 'application/json');
  res.status(statusCode).send(createJsonResponse(data));
}

/**
 * Serialize a boat object with proper date handling
 */
export function serializeBoat(boat: any): any {
  return {
    id: boat.id,
    name: boat.name,
    enabled: boat.enabled,
    isActive: boat.isActive,
    metadata: boat.metadata,
    createdAt: dateToISOString(boat.createdAt),
    updatedAt: dateToISOString(boat.updatedAt)
  };
}

/**
 * Serialize an array of boats with proper date handling
 */
export function serializeBoats(boats: any[]): any[] {
  return boats.map(serializeBoat);
}