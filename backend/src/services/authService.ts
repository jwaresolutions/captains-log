import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
// Token expiration: 30 days (can be configured via JWT_EXPIRATION env var in future)

export interface LoginResult {
  user: {
    id: string;
    username: string;
  };
  token: string;
}

export interface TokenValidationResult {
  valid: boolean;
  userId?: string;
  error?: string;
}

export class AuthService {
  /**
   * Login with username and password
   * Validates credentials and issues a JWT session token
   */
  async login(username: string, password: string): Promise<LoginResult> {
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    // Find user by username
    const user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      logger.warn('Login attempt with invalid username', { username });
      throw new Error('Invalid credentials');
    }

    // Compare password with bcrypt hash
    const passwordValid = await this.comparePassword(password, user.passwordHash);

    if (!passwordValid) {
      logger.warn('Login attempt with invalid password', { username });
      throw new Error('Invalid credentials');
    }

    // Generate JWT token with unique identifier to prevent duplicates
    const token = jwt.sign(
      { 
        userId: user.id, 
        username: user.username,
        jti: `${user.id}-${Date.now()}-${Math.random().toString(36).substring(7)}` // Unique token ID
      },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    // Calculate expiration date (30 days from now)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    // Store session token in database
    await prisma.sessionToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
        isRevoked: false
      }
    });

    logger.info('User logged in successfully', { userId: user.id, username });

    return {
      user: {
        id: user.id,
        username: user.username
      },
      token
    };
  }

  /**
   * Validate a JWT session token
   * Checks signature, expiration, and revocation status
   */
  async validateToken(token: string): Promise<TokenValidationResult> {
    if (!token) {
      return { valid: false, error: 'Token is required' };
    }

    try {
      // Verify JWT signature and expiration
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; username: string };

      // Check if token exists in database and is not revoked
      const sessionToken = await prisma.sessionToken.findUnique({
        where: { token }
      });

      if (!sessionToken) {
        logger.warn('Token not found in database', { token: token.substring(0, 20) + '...' });
        return { valid: false, error: 'Invalid token' };
      }

      if (sessionToken.isRevoked) {
        logger.warn('Revoked token used', { token: token.substring(0, 20) + '...' });
        return { valid: false, error: 'Token has been revoked' };
      }

      if (sessionToken.expiresAt < new Date()) {
        logger.warn('Expired token used', { token: token.substring(0, 20) + '...' });
        return { valid: false, error: 'Token has expired' };
      }

      return { valid: true, userId: decoded.userId };
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        logger.warn('Invalid JWT token', { error: error.message });
        return { valid: false, error: 'Invalid token' };
      }
      if (error instanceof jwt.TokenExpiredError) {
        logger.warn('Expired JWT token', { error: error.message });
        return { valid: false, error: 'Token has expired' };
      }
      logger.error('Error validating token', { error });
      return { valid: false, error: 'Authentication error' };
    }
  }

  /**
   * Logout by invalidating the session token
   * Adds token to revocation list
   */
  async logout(token: string): Promise<void> {
    if (!token) {
      throw new Error('Token is required');
    }

    try {
      // Mark token as revoked
      await prisma.sessionToken.update({
        where: { token },
        data: { isRevoked: true }
      });

      logger.info('User logged out successfully', { token: token.substring(0, 20) + '...' });
    } catch (error) {
      logger.error('Error during logout', { error });
      throw new Error('Logout failed');
    }
  }

  /**
   * Change user password
   * Validates old password, hashes new password, and invalidates all existing tokens
   */
  async changePassword(userId: string, oldPassword: string, newPassword: string): Promise<void> {
    if (!userId || !oldPassword || !newPassword) {
      throw new Error('User ID, old password, and new password are required');
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Verify old password
    const passwordValid = await this.comparePassword(oldPassword, user.passwordHash);

    if (!passwordValid) {
      logger.warn('Password change attempt with invalid old password', { userId });
      throw new Error('Invalid old password');
    }

    // Hash new password
    const newPasswordHash = await this.hashPassword(newPassword);

    // Update password and invalidate all tokens
    await prisma.$transaction([
      // Update password
      prisma.user.update({
        where: { id: userId },
        data: { passwordHash: newPasswordHash }
      }),
      // Revoke all existing tokens for this user
      prisma.sessionToken.updateMany({
        where: { userId, isRevoked: false },
        data: { isRevoked: true }
      })
    ]);

    logger.info('Password changed successfully, all tokens invalidated', { userId });
  }

  /**
   * Hash a password using bcrypt
   */
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  /**
   * Compare a password with a bcrypt hash
   */
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}

// Singleton instance
export const authService = new AuthService();
