import { Router, Request, Response } from 'express';
import { logger } from '../utils/logger';
import { authService } from '../services/authService';

const router = Router();

/**
 * POST /api/v1/auth/login
 * Login with username and password
 * Returns user info and JWT session token
 * Requirement 2.2
 */
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Username and password are required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Attempt login
    const result = await authService.login(username, password);

    // Return user info and token
    res.status(200).json({
      user: result.user,
      token: result.token,
      expiresIn: '30d'
    });
  } catch (error) {
    // Handle authentication errors
    if (error instanceof Error && error.message === 'Invalid credentials') {
      res.status(401).json({
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid username or password'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Handle unexpected errors
    logger.error('Login error', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An error occurred during login'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/auth/logout
 * Logout by invalidating the session token
 * Requires valid token in Authorization header
 * Requirement 2.7
 */
router.post('/logout', async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
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
    if (parts.length !== 2 || parts[0] !== 'Bearer' || !parts[1]) {
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

    // Invalidate the token
    await authService.logout(token);

    // Return success response
    res.status(200).json({
      message: 'Logged out successfully'
    });
  } catch (error) {
    // Handle logout errors
    if (error instanceof Error && error.message === 'Token is required') {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Token is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Handle unexpected errors
    logger.error('Logout error', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An error occurred during logout'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/auth/change-password
 * Change user password
 * Requires valid token in Authorization header
 * Invalidates all existing tokens for the user
 * Requirement 2.13
 */
router.post('/change-password', async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract passwords from request body first for validation
    const { currentPassword, newPassword } = req.body;

    // Validate input - check for missing or empty fields FIRST
    if (currentPassword === undefined || currentPassword === null || currentPassword === '' || 
        newPassword === undefined || newPassword === null || newPassword === '') {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Current password and new password are required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Validate new password strength (basic validation)
    if (newPassword.length < 8) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'New password must be at least 8 characters long'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Now validate token after input validation
    const authHeader = req.headers.authorization;

    if (!authHeader) {
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
    if (parts.length !== 2 || parts[0] !== 'Bearer' || !parts[1]) {
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

    // Validate token and get user ID
    const validation = await authService.validateToken(token);

    if (!validation.valid || !validation.userId) {
      res.status(401).json({
        error: {
          code: 'UNAUTHORIZED',
          message: validation.error || 'Invalid token'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Change password
    await authService.changePassword(validation.userId, currentPassword, newPassword);

    // Return success response
    res.status(200).json({
      message: 'Password changed successfully. All existing sessions have been invalidated. Please log in again.'
    });
  } catch (error) {
    // Handle invalid old password
    if (error instanceof Error && error.message === 'Invalid old password') {
      res.status(401).json({
        error: {
          code: 'INVALID_PASSWORD',
          message: 'Current password is incorrect'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Handle user not found
    if (error instanceof Error && error.message === 'User not found') {
      res.status(404).json({
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Handle validation errors
    if (error instanceof Error && error.message.includes('required')) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: error.message
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Handle unexpected errors
    logger.error('Password change error', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An error occurred while changing password'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * Middleware to reject any registration attempts via API
 * User creation is only allowed via CLI or initial setup wizard
 * Requirement 2.14: Public registration must be rejected
 */
const rejectRegistration = (req: Request, res: Response): void => {
  logger.warn('Registration attempt rejected', {
    path: req.path,
    ip: req.ip,
    userAgent: req.get('user-agent')
  });

  res.status(403).json({
    error: {
      code: 'FORBIDDEN',
      message: 'User registration is not available via API. Users can only be created via CLI command or initial setup wizard.'
    },
    timestamp: new Date().toISOString(),
    path: req.path
  });
};

// Explicitly reject registration attempts
router.post('/register', rejectRegistration);
router.post('/signup', rejectRegistration);
router.post('/create-user', rejectRegistration);
router.post('/create', rejectRegistration);
router.put('/register', rejectRegistration);
router.put('/signup', rejectRegistration);

export default router;
