import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService';
import { logger } from '../utils/logger';

/**
 * Middleware to authenticate API requests using JWT session token
 */
export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // Extract token from Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    logger.warn('Missing Authorization header', { path: req.path, ip: req.ip });
    res.status(401).json({
      error: {
        code: 'UNAUTHORIZED',
        message: 'Authorization header is required'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
    return;
  }

  // Expected format: "Bearer <token>"
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    logger.warn('Invalid Authorization header format', { path: req.path, ip: req.ip });
    res.status(401).json({
      error: {
        code: 'UNAUTHORIZED',
        message: 'Invalid Authorization header format. Expected: Bearer <token>'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
    return;
  }

  const token = parts[1];

  // Validate the JWT token
  const result = await authService.validateToken(token);

  if (!result.valid) {
    logger.warn('Invalid token', { path: req.path, ip: req.ip });
    res.status(401).json({
      error: {
        code: 'UNAUTHORIZED',
        message: result.error || 'Invalid token'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
    return;
  }

  // Token is valid, attach userId and role to request for use in route handlers
  (req as any).userId = result.userId;
  (req as any).userRole = result.role;

  // Proceed to next middleware
  next();
};

/**
 * Middleware to require specific roles for access
 * Must be used after authenticateToken
 */
export const requireRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const userRole = (req as any).userRole;

    if (!userRole || !roles.includes(userRole)) {
      res.status(403).json({
        error: {
          code: 'FORBIDDEN',
          message: 'You do not have permission to perform this action'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    next();
  };
};

// Backward compatibility alias (deprecated)
export const authenticateApiKey = authenticateToken;
