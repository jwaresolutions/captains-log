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

  // Token is valid, attach userId to request for use in route handlers
  (req as any).userId = result.userId;

  // Proceed to next middleware
  next();
};

// Backward compatibility alias (deprecated)
export const authenticateApiKey = authenticateToken;
