import { Request, Response, NextFunction } from 'express';
import { ValidationError } from './errorHandler';

/**
 * Input validation utilities
 */
export class InputValidator {
  /**
   * Validate required fields
   */
  static validateRequired(data: any, fields: string[]): void {
    const missing = fields.filter(field => {
      const value = data[field];
      return value === undefined || value === null || value === '';
    });

    if (missing.length > 0) {
      throw new ValidationError(`Missing required fields: ${missing.join(', ')}`, { missing });
    }
  }

  /**
   * Validate string length
   */
  static validateStringLength(value: string, fieldName: string, min?: number, max?: number): void {
    if (typeof value !== 'string') {
      throw new ValidationError(`${fieldName} must be a string`);
    }

    if (min !== undefined && value.length < min) {
      throw new ValidationError(`${fieldName} must be at least ${min} characters long`);
    }

    if (max !== undefined && value.length > max) {
      throw new ValidationError(`${fieldName} must be no more than ${max} characters long`);
    }
  }

  /**
   * Validate email format
   */
  static validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new ValidationError('Invalid email format');
    }
  }

  /**
   * Validate number range
   */
  static validateNumberRange(value: number, fieldName: string, min?: number, max?: number): void {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new ValidationError(`${fieldName} must be a valid number`);
    }

    if (min !== undefined && value < min) {
      throw new ValidationError(`${fieldName} must be at least ${min}`);
    }

    if (max !== undefined && value > max) {
      throw new ValidationError(`${fieldName} must be no more than ${max}`);
    }
  }

  /**
   * Validate GPS coordinates
   */
  static validateGPSCoordinates(latitude: number, longitude: number): void {
    this.validateNumberRange(latitude, 'latitude', -90, 90);
    this.validateNumberRange(longitude, 'longitude', -180, 180);
  }

  /**
   * Validate date
   */
  static validateDate(dateString: string, fieldName: string): Date {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new ValidationError(`${fieldName} must be a valid date`);
    }
    return date;
  }

  /**
   * Validate enum value
   */
  static validateEnum<T>(value: T, allowedValues: T[], fieldName: string): void {
    if (!allowedValues.includes(value)) {
      throw new ValidationError(`${fieldName} must be one of: ${allowedValues.join(', ')}`);
    }
  }

  /**
   * Sanitize string input (prevent XSS)
   */
  static sanitizeString(input: string): string {
    if (typeof input !== 'string') return input;
    
    return input
      .replace(/[<>]/g, '') // Remove < and > characters
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
      .replace(/&lt;/g, '') // Remove HTML entity for <
      .replace(/&gt;/g, '') // Remove HTML entity for >
      .replace(/&quot;/g, '"') // Convert HTML entity for quotes back to quotes
      .replace(/&#x27;/g, "'") // Convert HTML entity for single quotes
      .replace(/&#x2F;/g, "/") // Convert HTML entity for forward slash
      .trim(); // Remove leading/trailing whitespace
  }

  /**
   * Sanitize HTML output to prevent XSS
   */
  static sanitizeHtmlOutput(input: string): string {
    if (typeof input !== 'string') return input;
    
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  /**
   * Validate and sanitize boat data
   */
  static validateBoatData(data: any): void {
    this.validateRequired(data, ['name']);
    this.validateStringLength(data.name, 'name', 1, 100);
    
    if (data.name) {
      data.name = this.sanitizeString(data.name);
    }
  }

  /**
   * Validate and sanitize trip data
   */
  static validateTripData(data: any): void {
    this.validateRequired(data, ['boatId', 'startTime']);
    
    if (data.waterType) {
      this.validateEnum(data.waterType, ['inland', 'coastal', 'offshore'], 'waterType');
    }
    
    if (data.role) {
      this.validateEnum(data.role, ['captain', 'crew', 'observer'], 'role');
    }

    if (data.startTime) {
      this.validateDate(data.startTime, 'startTime');
    }

    if (data.endTime) {
      this.validateDate(data.endTime, 'endTime');
    }
  }

  /**
   * Validate GPS point data
   */
  static validateGPSPointData(data: any): void {
    this.validateRequired(data, ['latitude', 'longitude', 'timestamp']);
    this.validateGPSCoordinates(data.latitude, data.longitude);
    this.validateDate(data.timestamp, 'timestamp');

    if (data.speed !== undefined && data.speed !== null) {
      this.validateNumberRange(data.speed, 'speed', 0, 200); // Max 200 knots
    }

    if (data.heading !== undefined && data.heading !== null) {
      this.validateNumberRange(data.heading, 'heading', 0, 360);
    }
  }

  /**
   * Validate note data
   */
  static validateNoteData(data: any): void {
    this.validateRequired(data, ['content', 'type']);
    this.validateStringLength(data.content, 'content', 1, 10000);
    this.validateEnum(data.type, ['general', 'boat', 'trip'], 'type');
    
    if (data.content) {
      data.content = this.sanitizeString(data.content);
    }
  }

  /**
   * Validate maintenance template data
   */
  static validateMaintenanceTemplateData(data: any): void {
    this.validateRequired(data, ['boatId', 'title', 'description', 'component']);
    this.validateStringLength(data.title, 'title', 1, 200);
    this.validateStringLength(data.description, 'description', 1, 2000);
    this.validateStringLength(data.component, 'component', 1, 100);

    if (data.estimatedCost !== undefined) {
      this.validateNumberRange(data.estimatedCost, 'estimatedCost', 0, 1000000);
    }

    if (data.estimatedTime !== undefined) {
      this.validateNumberRange(data.estimatedTime, 'estimatedTime', 0, 1000);
    }

    // Sanitize text fields
    if (data.title) data.title = this.sanitizeString(data.title);
    if (data.description) data.description = this.sanitizeString(data.description);
    if (data.component) data.component = this.sanitizeString(data.component);
  }
}

/**
 * Middleware to validate request body size
 */
export const validateRequestSize = (maxSizeBytes: number = 50 * 1024 * 1024) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const contentLength = parseInt(req.get('content-length') || '0');
    
    if (contentLength > maxSizeBytes) {
      throw new ValidationError(`Request body too large. Maximum size: ${maxSizeBytes} bytes`);
    }
    
    next();
  };
};

/**
 * Middleware to validate pagination parameters
 */
export const validatePagination = (req: Request, _res: Response, next: NextFunction) => {
  const { page, limit } = req.query;
  
  if (page !== undefined) {
    const pageNum = parseInt(page as string);
    if (isNaN(pageNum) || pageNum < 1) {
      throw new ValidationError('Page must be a positive integer');
    }
    if (pageNum > 10000) {
      throw new ValidationError('Page number too large');
    }
  }
  
  if (limit !== undefined) {
    const limitNum = parseInt(limit as string);
    if (isNaN(limitNum) || limitNum < 1) {
      throw new ValidationError('Limit must be a positive integer');
    }
    if (limitNum > 1000) {
      throw new ValidationError('Limit too large. Maximum: 1000');
    }
  }
  
  next();
};

/**
 * Middleware to sanitize response data to prevent XSS
 */
export const sanitizeResponse = (_req: Request, res: Response, next: NextFunction) => {
  const originalJson = res.json;
  
  res.json = function(data: any) {
    // Only sanitize string fields in the response
    const sanitizedData = sanitizeObjectStrings(data);
    return originalJson.call(this, sanitizedData);
  };
  
  next();
};

/**
 * Recursively sanitize string values in an object
 */
function sanitizeObjectStrings(obj: any): any {
  // Handle null and undefined
  if (obj === null || obj === undefined) {
    return obj;
  }
  
  // Handle strings
  if (typeof obj === 'string') {
    return InputValidator.sanitizeHtmlOutput(obj);
  }
  
  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(sanitizeObjectStrings);
  }
  
  // Handle Date objects - preserve them as-is
  if (obj instanceof Date) {
    return obj;
  }
  
  // Handle other objects
  if (typeof obj === 'object') {
    // For plain objects, sanitize their properties
    if (obj.constructor === Object || obj.constructor === undefined) {
      const sanitized: any = {};
      for (const [key, value] of Object.entries(obj)) {
        sanitized[key] = sanitizeObjectStrings(value);
      }
      return sanitized;
    }
    
    // For other object types (like custom classes), return as-is
    return obj;
  }
  
  // For primitives (numbers, booleans, etc.), return as-is
  return obj;
}