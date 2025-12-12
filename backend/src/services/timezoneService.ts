/**
 * Time Zone Service
 * 
 * Provides time zone determination from GPS coordinates and time zone handling utilities.
 * For production use, consider integrating with a proper timezone API service.
 */

export interface GPSCoordinate {
  latitude: number;
  longitude: number;
}



/**
 * Get timezone from GPS coordinates using a simple longitude-based approximation
 * This is a basic implementation that approximates timezone based on longitude.
 * For production use, integrate with a proper timezone API.
 * 
 * @param latitude GPS latitude (-90 to 90)
 * @param longitude GPS longitude (-180 to 180)
 * @returns Timezone identifier string
 */
export function getTimeZoneFromCoordinates(latitude: number, longitude: number): string {
  // Validate coordinates
  if (typeof latitude !== 'number' || typeof longitude !== 'number' || 
      isNaN(latitude) || isNaN(longitude) || 
      !isFinite(latitude) || !isFinite(longitude)) {
    throw new Error('Invalid coordinates: must be finite numbers');
  }
  if (latitude < -90 || latitude > 90) {
    throw new Error('Invalid latitude: must be between -90 and 90');
  }
  if (longitude < -180 || longitude > 180) {
    throw new Error('Invalid longitude: must be between -180 and 180');
  }

  // Simple timezone approximation based on longitude
  // Each 15 degrees of longitude represents approximately 1 hour of time difference
  const timezoneOffset = Math.round(longitude / 15);
  
  // Clamp to valid timezone range (-12 to +12)
  const clampedOffset = Math.max(-12, Math.min(12, timezoneOffset));
  
  // Format as UTC offset string
  if (clampedOffset === 0) {
    return 'UTC+0';
  } else if (clampedOffset > 0) {
    return `UTC+${clampedOffset}`;
  } else {
    return `UTC${clampedOffset}`; // Negative sign is included in the number
  }
}

/**
 * Get the device's current timezone
 * This is used as a fallback when GPS coordinates are not available
 * 
 * @returns Timezone identifier string
 */
export function getDeviceTimeZone(): string {
  try {
    // Use Intl.DateTimeFormat to get the device timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timezone;
  } catch (error) {
    // Fallback to UTC if timezone detection fails
    console.warn('Failed to detect device timezone, falling back to UTC:', error);
    return 'UTC+0';
  }
}

/**
 * Convert UTC time to local time for a given timezone
 * This is a basic implementation for UTC offset timezones
 * 
 * @param utcTime UTC timestamp
 * @param timezone Timezone identifier (e.g., 'UTC+5', 'UTC-8')
 * @returns Local time adjusted for timezone
 */
export function convertToLocalTime(utcTime: Date, timezone: string): Date {
  // Handle standard timezone names by converting to UTC offset
  let offsetHours = 0;
  
  if (timezone.startsWith('UTC')) {
    // Parse UTC offset format (e.g., 'UTC+5', 'UTC-8')
    const offsetStr = timezone.substring(3);
    if (offsetStr === '+0' || offsetStr === '') {
      offsetHours = 0;
    } else {
      offsetHours = parseInt(offsetStr, 10);
      if (isNaN(offsetHours)) {
        console.warn(`Invalid timezone format: ${timezone}, using UTC`);
        offsetHours = 0;
      }
    }
  } else {
    // For named timezones, we'd need a proper timezone library
    // For now, just use UTC
    console.warn(`Named timezone not supported: ${timezone}, using UTC`);
    offsetHours = 0;
  }
  
  // Create new date with timezone offset applied
  const localTime = new Date(utcTime.getTime() + (offsetHours * 60 * 60 * 1000));
  return localTime;
}

/**
 * Get timezone offset in hours for a given timezone identifier
 * 
 * @param timezone Timezone identifier
 * @returns Offset in hours from UTC
 */
export function getTimezoneOffset(timezone: string): number {
  if (timezone.startsWith('UTC')) {
    const offsetStr = timezone.substring(3);
    if (offsetStr === '+0' || offsetStr === '') {
      return 0;
    }
    const offset = parseInt(offsetStr, 10);
    return isNaN(offset) ? 0 : offset;
  }
  
  // For named timezones, return 0 (UTC) as fallback
  return 0;
}

/**
 * Determine timezone for a trip based on GPS coordinates or device timezone
 * This function implements the business logic for timezone determination
 * 
 * @param gpsCoordinates Optional GPS coordinates from the trip
 * @returns Timezone identifier string
 */
export function determineTripTimezone(gpsCoordinates?: GPSCoordinate): string {
  if (gpsCoordinates) {
    try {
      return getTimeZoneFromCoordinates(gpsCoordinates.latitude, gpsCoordinates.longitude);
    } catch (error) {
      console.warn('Failed to determine timezone from GPS coordinates:', error);
    }
  }
  
  // Fallback to device timezone
  return getDeviceTimeZone();
}

/**
 * Format a date with timezone information for display
 * 
 * @param date Date to format
 * @param timezone Timezone identifier
 * @returns Formatted date string with timezone
 */
export function formatDateWithTimezone(date: Date, timezone: string): string {
  const localTime = convertToLocalTime(date, timezone);
  const offset = getTimezoneOffset(timezone);
  
  // Format offset properly for negative numbers
  let offsetStr: string;
  if (offset === 0) {
    offsetStr = '+00:00';
  } else if (offset > 0) {
    offsetStr = `+${offset.toString().padStart(2, '0')}:00`;
  } else {
    // For negative offsets, format as -XX:00
    const absOffset = Math.abs(offset);
    offsetStr = `-${absOffset.toString().padStart(2, '0')}:00`;
  }
  
  return `${localTime.toISOString().slice(0, 19)}${offsetStr}`;
}

/**
 * Validate timezone identifier
 * 
 * @param timezone Timezone identifier to validate
 * @returns True if timezone is valid
 */
export function isValidTimezone(timezone: string): boolean {
  if (!timezone || typeof timezone !== 'string') {
    return false;
  }
  
  if (timezone.startsWith('UTC')) {
    const offsetStr = timezone.substring(3);
    if (offsetStr === '+0' || offsetStr === '' || offsetStr === '0') {
      return true;
    }
    
    // Check for valid offset format
    if (!/^[+-]?\d+$/.test(offsetStr)) {
      return false;
    }
    
    const offset = parseInt(offsetStr, 10);
    return !isNaN(offset) && offset >= -12 && offset <= 12;
  }
  
  // For named timezones, we only accept specific known formats for this implementation
  // In production, use a proper timezone library like moment-timezone or date-fns-tz
  // For now, only accept UTC-based timezones
  return false;
}