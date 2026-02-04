import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authService } from '../services/authService';
import { logger } from '../utils/logger';
import { requireRole } from '../middleware/auth';

const prisma = new PrismaClient();
const router = Router();

// All settings routes require ADMIN role
router.use(requireRole('ADMIN'));

/**
 * GET /api/v1/settings/viewer
 * Get viewer account status
 */
router.get('/viewer', async (req: Request, res: Response): Promise<void> => {
  try {
    const viewer = await prisma.user.findFirst({
      where: { role: 'VIEWER' }
    });

    res.status(200).json({
      data: {
        exists: !!viewer,
        enabled: viewer?.isEnabled ?? false,
        username: viewer?.username ?? '',
      },
      success: true
    });
  } catch (error) {
    logger.error('Error fetching viewer settings', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch viewer settings'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * PUT /api/v1/settings/viewer
 * Create or update viewer account
 */
router.put('/viewer', async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password, enabled } = req.body;

    const existing = await prisma.user.findFirst({
      where: { role: 'VIEWER' }
    });

    if (existing) {
      // Update existing viewer
      const updateData: any = {};
      if (username !== undefined) updateData.username = username.toLowerCase();
      if (password !== undefined) updateData.passwordHash = await authService.hashPassword(password);
      if (enabled !== undefined) updateData.isEnabled = enabled;

      await prisma.user.update({
        where: { id: existing.id },
        data: updateData
      });
    } else {
      // Create new viewer - username and password required
      if (!username || !password) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Username and password are required to create a viewer account'
          },
          timestamp: new Date().toISOString(),
          path: req.path
        });
        return;
      }

      await prisma.user.create({
        data: {
          username: username.toLowerCase(),
          passwordHash: await authService.hashPassword(password),
          role: 'VIEWER',
          isEnabled: enabled ?? true,
        }
      });
    }

    // Return updated state
    const viewer = await prisma.user.findFirst({
      where: { role: 'VIEWER' }
    });

    res.status(200).json({
      data: {
        exists: !!viewer,
        enabled: viewer?.isEnabled ?? false,
        username: viewer?.username ?? '',
      },
      success: true
    });
  } catch (error: any) {
    // Handle unique constraint violation (username taken)
    if (error.code === 'P2002') {
      res.status(409).json({
        error: {
          code: 'CONFLICT',
          message: 'Username is already taken'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    logger.error('Error updating viewer settings', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to update viewer settings'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

export default router;
