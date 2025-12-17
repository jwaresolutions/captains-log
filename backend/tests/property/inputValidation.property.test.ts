/**
 * Property-based tests for input validation
 * **Feature: boat-tracking-system, Property 54: Input Validation**
 */

import fc from 'fast-check';
import { InputValidator } from '../../src/middleware/validation';

describe('Input Validation Properties', () => {
  /**
   * Property 54: Input Validation
   * **Validates: Requirements 19.6**
   * 
   * For any input data, the system should reject invalid inputs appropriately
   * and accept valid inputs without error.
   */
  describe('Property 54: Input Validation', () => {
    test('should reject inputs with missing required fields', () => {
      fc.assert(fc.property(
        fc.record({
          name: fc.option(fc.string(), { nil: undefined }),
          email: fc.option(fc.string(), { nil: undefined }),
          age: fc.option(fc.integer(), { nil: undefined })
        }),
        fc.array(fc.constantFrom('name', 'email', 'age'), { minLength: 1, maxLength: 3 }),
        (data, requiredFields) => {
          // Remove some required fields to make data invalid
          const invalidData = { ...data } as any;
          const missingField = requiredFields[0];
          delete invalidData[missingField];
          
          // Should throw ValidationError for missing required fields
          expect(() => {
            InputValidator.validateRequired(invalidData, requiredFields);
          }).toThrow();
        }
      ), { numRuns: 100 });
    });

    test('should accept inputs with all required fields present', () => {
      fc.assert(fc.property(
        fc.record({
          name: fc.string({ minLength: 1 }),
          email: fc.string({ minLength: 1 }),
          age: fc.integer({ min: 0 })
        }),
        fc.array(fc.constantFrom('name', 'email', 'age'), { minLength: 1, maxLength: 3 }),
        (data, requiredFields) => {
          // Should not throw for valid data with all required fields
          expect(() => {
            InputValidator.validateRequired(data, requiredFields);
          }).not.toThrow();
        }
      ), { numRuns: 100 });
    });

    test('should reject strings that exceed maximum length', () => {
      fc.assert(fc.property(
        fc.string({ minLength: 101 }), // Strings longer than 100 chars
        fc.integer({ min: 1, max: 100 }), // Max length between 1-100
        (longString, maxLength) => {
          expect(() => {
            InputValidator.validateStringLength(longString, 'testField', undefined, maxLength);
          }).toThrow('testField must be no more than');
        }
      ), { numRuns: 100 });
    });

    test('should reject strings shorter than minimum length', () => {
      fc.assert(fc.property(
        fc.string({ maxLength: 4 }), // Short strings
        fc.integer({ min: 5, max: 20 }), // Min length between 5-20
        (shortString, minLength) => {
          expect(() => {
            InputValidator.validateStringLength(shortString, 'testField', minLength, undefined);
          }).toThrow('testField must be at least');
        }
      ), { numRuns: 100 });
    });

    test('should accept strings within valid length range', () => {
      fc.assert(fc.property(
        fc.integer({ min: 5, max: 50 }),
        fc.integer({ min: 51, max: 100 }),
        (minLength, maxLength) => {
          const validString = 'a'.repeat(minLength + Math.floor((maxLength - minLength) / 2));
          
          expect(() => {
            InputValidator.validateStringLength(validString, 'testField', minLength, maxLength);
          }).not.toThrow();
        }
      ), { numRuns: 100 });
    });

    test('should reject invalid email formats', () => {
      fc.assert(fc.property(
        fc.oneof(
          fc.string().filter(s => !s.includes('@')), // No @ symbol
          fc.string().filter(s => s.includes('@') && !s.includes('.')), // @ but no dot
          fc.constant(''), // Empty string
          fc.constant('@'), // Just @
          fc.constant('user@'), // Missing domain
          fc.constant('@domain.com'), // Missing user
          fc.constant('user@domain'), // Missing TLD
        ),
        (invalidEmail) => {
          expect(() => {
            InputValidator.validateEmail(invalidEmail);
          }).toThrow('Invalid email format');
        }
      ), { numRuns: 100 });
    });

    test('should accept valid email formats', () => {
      fc.assert(fc.property(
        fc.emailAddress(),
        (validEmail) => {
          expect(() => {
            InputValidator.validateEmail(validEmail);
          }).not.toThrow();
        }
      ), { numRuns: 100 });
    });

    test('should reject numbers outside valid range', () => {
      fc.assert(fc.property(
        fc.integer({ min: -1000, max: -1 }), // Numbers below range
        fc.integer({ min: 0, max: 100 }), // Valid range min
        fc.integer({ min: 101, max: 200 }), // Valid range max
        (belowRange, rangeMin, rangeMax) => {
          // Test number below range
          expect(() => {
            InputValidator.validateNumberRange(belowRange, 'testField', rangeMin, rangeMax);
          }).toThrow('testField must be at least');
          
          // Test number above range
          const aboveRange = rangeMax + Math.abs(belowRange);
          expect(() => {
            InputValidator.validateNumberRange(aboveRange, 'testField', rangeMin, rangeMax);
          }).toThrow('testField must be no more than');
        }
      ), { numRuns: 100 });
    });

    test('should accept numbers within valid range', () => {
      fc.assert(fc.property(
        fc.integer({ min: 0, max: 50 }),
        fc.integer({ min: 51, max: 100 }),
        (rangeMin, rangeMax) => {
          const validNumber = rangeMin + Math.floor((rangeMax - rangeMin) / 2);
          
          expect(() => {
            InputValidator.validateNumberRange(validNumber, 'testField', rangeMin, rangeMax);
          }).not.toThrow();
        }
      ), { numRuns: 100 });
    });

    test('should reject invalid GPS coordinates', () => {
      fc.assert(fc.property(
        fc.oneof(
          fc.double({ min: -180, max: -90.1, noNaN: true }), // Invalid latitude (too low)
          fc.double({ min: 90.1, max: 180, noNaN: true }), // Invalid latitude (too high)
        ),
        fc.oneof(
          fc.double({ min: -360, max: -180.1, noNaN: true }), // Invalid longitude (too low)
          fc.double({ min: 180.1, max: 360, noNaN: true }), // Invalid longitude (too high)
        ),
        (invalidLat, invalidLon) => {
          expect(() => {
            InputValidator.validateGPSCoordinates(invalidLat, 0); // Invalid latitude
          }).toThrow();
          
          expect(() => {
            InputValidator.validateGPSCoordinates(0, invalidLon); // Invalid longitude
          }).toThrow();
        }
      ), { numRuns: 100 });
    });

    test('should accept valid GPS coordinates', () => {
      fc.assert(fc.property(
        fc.double({ min: -90, max: 90, noNaN: true }), // Valid latitude
        fc.double({ min: -180, max: 180, noNaN: true }), // Valid longitude
        (validLat, validLon) => {
          expect(() => {
            InputValidator.validateGPSCoordinates(validLat, validLon);
          }).not.toThrow();
        }
      ), { numRuns: 100 });
    });

    test('should reject invalid enum values', () => {
      fc.assert(fc.property(
        fc.string().filter(s => !['option1', 'option2', 'option3'].includes(s)),
        (invalidValue) => {
          const allowedValues = ['option1', 'option2', 'option3'];
          
          expect(() => {
            InputValidator.validateEnum(invalidValue, allowedValues, 'testField');
          }).toThrow('testField must be one of');
        }
      ), { numRuns: 100 });
    });

    test('should accept valid enum values', () => {
      fc.assert(fc.property(
        fc.constantFrom('option1', 'option2', 'option3'),
        (validValue) => {
          const allowedValues = ['option1', 'option2', 'option3'];
          
          expect(() => {
            InputValidator.validateEnum(validValue, allowedValues, 'testField');
          }).not.toThrow();
        }
      ), { numRuns: 100 });
    });

    test('should sanitize potentially dangerous strings', () => {
      fc.assert(fc.property(
        fc.string(),
        fc.array(fc.constantFrom('<', '>', '<script>', '</script>', '<img>', '<div>')),
        (baseString, dangerousChars) => {
          const dangerousString = baseString + dangerousChars.join('');
          const sanitized = InputValidator.sanitizeString(dangerousString);
          
          // Sanitized string should not contain < or > characters
          expect(sanitized).not.toMatch(/[<>]/);
          
          // Should still contain the base string content (minus dangerous chars)
          const expectedContent = baseString.replace(/[<>]/g, '').trim();
          if (expectedContent.length > 0) {
            expect(sanitized).toContain(expectedContent);
          }
        }
      ), { numRuns: 100 });
    });

    test('should validate boat data correctly', () => {
      fc.assert(fc.property(
        fc.record({
          name: fc.option(fc.string({ minLength: 1, maxLength: 100 })),
          metadata: fc.option(fc.object())
        }),
        (boatData) => {
          if (boatData.name && boatData.name.length > 0 && boatData.name.length <= 100) {
            // Valid boat data should not throw
            expect(() => {
              InputValidator.validateBoatData(boatData);
            }).not.toThrow();
          } else {
            // Invalid boat data should throw
            expect(() => {
              InputValidator.validateBoatData(boatData);
            }).toThrow();
          }
        }
      ), { numRuns: 100 });
    });

    test('should validate trip data correctly', () => {
      fc.assert(fc.property(
        fc.record({
          boatId: fc.option(fc.uuid()),
          startTime: fc.option(fc.date().map(d => d.toISOString())),
          waterType: fc.option(fc.constantFrom('inland', 'coastal', 'offshore')),
          role: fc.option(fc.constantFrom('captain', 'crew', 'observer'))
        }),
        (tripData) => {
          if (tripData.boatId && tripData.startTime) {
            // Valid trip data should not throw
            expect(() => {
              InputValidator.validateTripData(tripData);
            }).not.toThrow();
          } else {
            // Invalid trip data should throw
            expect(() => {
              InputValidator.validateTripData(tripData);
            }).toThrow();
          }
        }
      ), { numRuns: 100 });
    });

    test('should validate GPS point data correctly', () => {
      fc.assert(fc.property(
        fc.record({
          latitude: fc.option(fc.double({ min: -90, max: 90, noNaN: true })),
          longitude: fc.option(fc.double({ min: -180, max: 180, noNaN: true })),
          timestamp: fc.option(fc.date().map(d => d.toISOString())),
          speed: fc.option(fc.double({ min: 0, max: 200, noNaN: true })),
          heading: fc.option(fc.double({ min: 0, max: 360, noNaN: true }))
        }),
        (gpsData) => {
          const hasRequiredFields = gpsData.latitude !== undefined && gpsData.latitude !== null &&
                                   gpsData.longitude !== undefined && gpsData.longitude !== null &&
                                   gpsData.timestamp !== undefined && gpsData.timestamp !== null;
          
          const hasValidCoordinates = hasRequiredFields &&
                                     !isNaN(gpsData.latitude!) && gpsData.latitude! >= -90 && gpsData.latitude! <= 90 &&
                                     !isNaN(gpsData.longitude!) && gpsData.longitude! >= -180 && gpsData.longitude! <= 180;
          
          const hasValidOptionalFields = (gpsData.speed === undefined || gpsData.speed === null || 
                                         (!isNaN(gpsData.speed) && gpsData.speed >= 0 && gpsData.speed <= 200)) &&
                                        (gpsData.heading === undefined || gpsData.heading === null || 
                                         (!isNaN(gpsData.heading) && gpsData.heading >= 0 && gpsData.heading <= 360));
          
          if (hasRequiredFields && hasValidCoordinates && hasValidOptionalFields) {
            // Valid GPS data should not throw
            expect(() => {
              InputValidator.validateGPSPointData(gpsData);
            }).not.toThrow();
          } else {
            // Invalid GPS data should throw
            expect(() => {
              InputValidator.validateGPSPointData(gpsData);
            }).toThrow();
          }
        }
      ), { numRuns: 100 });
    });
  });
});