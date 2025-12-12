import * as fc from 'fast-check';
import {
  getTimeZoneFromCoordinates,
  convertToLocalTime,
  determineTripTimezone,
  formatDateWithTimezone,
  isValidTimezone,
  getTimezoneOffset,
} from '../../src/services/timezoneService';

/**
 * Property-Based Tests for Timezone Service
 */

describe('Timezone Service Property Tests', () => {
  /**
   * **Feature: boat-tracking-system, Property 44: Timezone Determination**
   * **Validates: Requirements 16.1**
   * 
   * For any valid GPS coordinates, the system should determine a valid timezone
   * based on the coordinates.
   */
  describe('Property 44: Timezone Determination', () => {
    test('should determine valid timezone from GPS coordinates', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            latitude: fc.float({ min: -90, max: 90 }).filter(n => !isNaN(n) && isFinite(n)),
            longitude: fc.float({ min: -180, max: 180 }).filter(n => !isNaN(n) && isFinite(n)),
          }),
          async (coordinates) => {
            const timezone = getTimeZoneFromCoordinates(coordinates.latitude, coordinates.longitude);
            
            // Timezone should be a valid string
            expect(typeof timezone).toBe('string');
            expect(timezone.length).toBeGreaterThan(0);
            
            // Should be a valid UTC offset format
            expect(isValidTimezone(timezone)).toBe(true);
            
            // Should start with UTC
            expect(timezone).toMatch(/^UTC[+-]?\d*$/);
            
            // Offset should be within valid range (-12 to +12)
            const offset = getTimezoneOffset(timezone);
            expect(offset).toBeGreaterThanOrEqual(-12);
            expect(offset).toBeLessThanOrEqual(12);
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle edge case coordinates correctly', async () => {
      // Test specific edge cases
      const edgeCases = [
        { latitude: 0, longitude: 0 }, // Equator, Prime Meridian
        { latitude: 90, longitude: 0 }, // North Pole
        { latitude: -90, longitude: 0 }, // South Pole
        { latitude: 0, longitude: 180 }, // International Date Line (East)
        { latitude: 0, longitude: -180 }, // International Date Line (West)
        { latitude: 0, longitude: 179.9 }, // Just before date line
        { latitude: 0, longitude: -179.9 }, // Just before date line (west)
      ];

      for (const coords of edgeCases) {
        const timezone = getTimeZoneFromCoordinates(coords.latitude, coords.longitude);
        expect(isValidTimezone(timezone)).toBe(true);
        
        const offset = getTimezoneOffset(timezone);
        expect(offset).toBeGreaterThanOrEqual(-12);
        expect(offset).toBeLessThanOrEqual(12);
      }
    });

    test('should reject invalid coordinates', async () => {
      const invalidCases = [
        { latitude: 91, longitude: 0 }, // Invalid latitude (too high)
        { latitude: -91, longitude: 0 }, // Invalid latitude (too low)
        { latitude: 0, longitude: 181 }, // Invalid longitude (too high)
        { latitude: 0, longitude: -181 }, // Invalid longitude (too low)
        { latitude: NaN, longitude: 0 }, // NaN latitude
        { latitude: 0, longitude: NaN }, // NaN longitude
        { latitude: Infinity, longitude: 0 }, // Infinite latitude
        { latitude: 0, longitude: Infinity }, // Infinite longitude
      ];

      for (const coords of invalidCases) {
        expect(() => {
          getTimeZoneFromCoordinates(coords.latitude, coords.longitude);
        }).toThrow();
      }
    });

    test('should determine timezone for trips with GPS data', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            latitude: fc.float({ min: -89, max: 89 }).filter(n => !isNaN(n) && isFinite(n)),
            longitude: fc.float({ min: -179, max: 179 }).filter(n => !isNaN(n) && isFinite(n)),
          }),
          async (coordinates) => {
            const timezone = determineTripTimezone(coordinates);
            
            // Should return a valid timezone
            expect(typeof timezone).toBe('string');
            expect(timezone.length).toBeGreaterThan(0);
            expect(isValidTimezone(timezone)).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should fallback to device timezone when no GPS coordinates provided', async () => {
      const timezone = determineTripTimezone();
      
      // Should return a valid timezone string
      expect(typeof timezone).toBe('string');
      expect(timezone.length).toBeGreaterThan(0);
      
      // Should be either a UTC offset or a named timezone
      const isUTCOffset = timezone.startsWith('UTC');
      const isNamedTimezone = !isUTCOffset && timezone.length > 0;
      
      expect(isUTCOffset || isNamedTimezone).toBe(true);
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 45: Timezone Display**
   * **Validates: Requirements 16.3**
   * 
   * For any trip time and timezone, the system should display times in the
   * appropriate timezone for that location.
   */
  describe('Property 45: Timezone Display', () => {
    test('should convert UTC time to local time correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31') }),
          fc.integer({ min: -12, max: 12 }),
          async (utcTime, offsetHours) => {
            const timezone = offsetHours >= 0 ? `UTC+${offsetHours}` : `UTC${offsetHours}`;
            const localTime = convertToLocalTime(utcTime, timezone);
            
            // Local time should be a valid Date
            expect(localTime instanceof Date).toBe(true);
            expect(isNaN(localTime.getTime())).toBe(false);
            
            // Time difference should match the offset
            const timeDiffMs = localTime.getTime() - utcTime.getTime();
            const expectedDiffMs = offsetHours * 60 * 60 * 1000;
            expect(timeDiffMs).toBe(expectedDiffMs);
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should format dates with timezone information', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31') }),
          fc.integer({ min: -12, max: 12 }),
          async (date, offsetHours) => {
            const timezone = offsetHours >= 0 ? `UTC+${offsetHours}` : `UTC${offsetHours}`;
            const formatted = formatDateWithTimezone(date, timezone);
            
            // Should be a string
            expect(typeof formatted).toBe('string');
            expect(formatted.length).toBeGreaterThan(0);
            
            // Should contain timezone offset information
            const offsetStr = offsetHours >= 0 
              ? `+${offsetHours.toString().padStart(2, '0')}:00`
              : `-${Math.abs(offsetHours).toString().padStart(2, '0')}:00`;
            expect(formatted).toContain(offsetStr);
            
            // Should be in ISO-like format
            expect(formatted).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/);
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle UTC+0 timezone correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31') }),
          async (utcTime) => {
            const localTime = convertToLocalTime(utcTime, 'UTC+0');
            
            // UTC+0 should not change the time
            expect(localTime.getTime()).toBe(utcTime.getTime());
            
            const formatted = formatDateWithTimezone(utcTime, 'UTC+0');
            expect(formatted).toContain('+00:00');
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 46: Timezone Preservation**
   * **Validates: Requirements 16.4**
   * 
   * For any trip data stored with timezone information, the timezone should be
   * preserved for accurate historical records.
   */
  describe('Property 46: Timezone Preservation', () => {
    test('should validate timezone identifiers correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.integer({ min: -12, max: 12 }),
          async (offset) => {
            const timezone = offset >= 0 ? `UTC+${offset}` : `UTC${offset}`;
            
            // Valid UTC offset should be accepted
            expect(isValidTimezone(timezone)).toBe(true);
            
            // Should extract correct offset
            const extractedOffset = getTimezoneOffset(timezone);
            expect(extractedOffset).toBe(offset);
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should reject invalid timezone formats', async () => {
      const invalidTimezones = [
        '', // Empty string
        'UTC+25', // Invalid offset (too high)
        'UTC-25', // Invalid offset (too low)
        'UTC+abc', // Non-numeric offset
        'INVALID', // Invalid format
        'UTC++5', // Double plus
        'UTC--5', // Double minus
      ];

      for (const timezone of invalidTimezones) {
        expect(isValidTimezone(timezone)).toBe(false);
      }
    });

    test('should handle timezone consistency across operations', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            latitude: fc.float({ min: -89, max: 89 }).filter(n => !isNaN(n) && isFinite(n)),
            longitude: fc.float({ min: -179, max: 179 }).filter(n => !isNaN(n) && isFinite(n)),
          }),
          fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31') }),
          async (coordinates, date) => {
            // Determine timezone from coordinates
            const timezone = getTimeZoneFromCoordinates(coordinates.latitude, coordinates.longitude);
            
            // Convert time using that timezone
            const localTime = convertToLocalTime(date, timezone);
            
            // Format with timezone
            const formatted = formatDateWithTimezone(date, timezone);
            
            // All operations should use the same timezone consistently
            const offset = getTimezoneOffset(timezone);
            const expectedDiffMs = offset * 60 * 60 * 1000;
            const actualDiffMs = localTime.getTime() - date.getTime();
            
            expect(actualDiffMs).toBe(expectedDiffMs);
            expect(isValidTimezone(timezone)).toBe(true);
            const expectedOffsetStr = offset >= 0 
              ? `+${offset.toString().padStart(2, '0')}:00`
              : `-${Math.abs(offset).toString().padStart(2, '0')}:00`;
            expect(formatted).toContain(expectedOffsetStr);
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should maintain timezone information through round-trip operations', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.integer({ min: -12, max: 12 }),
          async (originalOffset) => {
            const timezone = originalOffset >= 0 ? `UTC+${originalOffset}` : `UTC${originalOffset}`;
            
            // Extract offset from timezone
            const extractedOffset = getTimezoneOffset(timezone);
            
            // Should preserve the original offset
            expect(extractedOffset).toBe(originalOffset);
            
            // Validate the timezone
            expect(isValidTimezone(timezone)).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});