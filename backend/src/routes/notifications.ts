import { Router, Request, Response } from 'express';
import { notificationService } from '../services/notificationService';
import { logger } from '../utils/logger';

const router = Router();

/**
 * GET /api/v1/notifications
 * Get all notifications with optional filtering
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const { type, read, entityType, entityId } = req.query;

    const filters: any = {};
    
    if (type) {
      filters.type = type as string;
    }
    
    if (read !== undefined) {
      filters.read = read === 'true';
    }
    
    if (entityType) {
      filters.entityType = entityType as string;
    }
    
    if (entityId) {
      filters.entityId = entityId as string;
    }

    const notifications = await notificationService.getActiveNotifications(filters);

    res.json({
      notifications,
      count: notifications.length
    });
  } catch (error) {
    logger.error('Error fetching notifications', { error: error instanceof Error ? error.message : error });
    res.status(500).json({
      error: {
        code: 'FETCH_NOTIFICATIONS_ERROR',
        message: 'Failed to fetch notifications'
      }
    });
  }
});

/**
 * POST /api/v1/notifications
 * Create a new notification
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { type, title, message, entityType, entityId } = req.body;

    // Validate required fields
    if (!type || !title || !message) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Type, title, and message are required'
        }
      });
    }

    // Validate type
    if (!['maintenance_due', 'system'].includes(type)) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Type must be either "maintenance_due" or "system"'
        }
      });
    }

    const notification = await notificationService.createNotification({
      type,
      title,
      message,
      entityType,
      entityId
    });

    res.status(201).json(notification);
  } catch (error) {
    logger.error('Error creating notification', { error: error instanceof Error ? error.message : error });
    res.status(500).json({
      error: {
        code: 'CREATE_NOTIFICATION_ERROR',
        message: 'Failed to create notification'
      }
    });
  }
});

/**
 * PATCH /api/v1/notifications/:id/read
 * Mark a notification as read
 */
router.patch('/:id/read', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const notification = await notificationService.markAsRead(id);

    res.json(notification);
  } catch (error) {
    logger.error('Error marking notification as read', { 
      notificationId: req.params.id,
      error: error instanceof Error ? error.message : error 
    });
    
    if (error instanceof Error && error.message.includes('Record to update not found')) {
      return res.status(404).json({
        error: {
          code: 'NOTIFICATION_NOT_FOUND',
          message: 'Notification not found'
        }
      });
    }

    res.status(500).json({
      error: {
        code: 'UPDATE_NOTIFICATION_ERROR',
        message: 'Failed to mark notification as read'
      }
    });
  }
});

/**
 * PATCH /api/v1/notifications/read-all
 * Mark all notifications as read (with optional filtering)
 */
router.patch('/read-all', async (req: Request, res: Response) => {
  try {
    const { type, entityType, entityId } = req.body;

    const filters: any = {};
    
    if (type) {
      filters.type = type;
    }
    
    if (entityType) {
      filters.entityType = entityType;
    }
    
    if (entityId) {
      filters.entityId = entityId;
    }

    const count = await notificationService.markAllAsRead(filters);

    res.json({
      message: 'Notifications marked as read',
      count
    });
  } catch (error) {
    logger.error('Error marking all notifications as read', { error: error instanceof Error ? error.message : error });
    res.status(500).json({
      error: {
        code: 'UPDATE_NOTIFICATIONS_ERROR',
        message: 'Failed to mark notifications as read'
      }
    });
  }
});

/**
 * DELETE /api/v1/notifications/:id
 * Delete a notification
 */
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await notificationService.deleteNotification(id);

    res.status(204).send();
  } catch (error) {
    logger.error('Error deleting notification', { 
      notificationId: req.params.id,
      error: error instanceof Error ? error.message : error 
    });
    
    if (error instanceof Error && error.message.includes('Record to delete does not exist')) {
      return res.status(404).json({
        error: {
          code: 'NOTIFICATION_NOT_FOUND',
          message: 'Notification not found'
        }
      });
    }

    res.status(500).json({
      error: {
        code: 'DELETE_NOTIFICATION_ERROR',
        message: 'Failed to delete notification'
      }
    });
  }
});

/**
 * POST /api/v1/notifications/check-maintenance
 * Manually trigger maintenance due check
 */
router.post('/check-maintenance', async (req: Request, res: Response) => {
  try {
    const { daysAhead = 7 } = req.body;

    const notifications = await notificationService.checkMaintenanceDue(daysAhead);

    res.json({
      message: 'Maintenance due check completed',
      notificationsCreated: notifications.length,
      notifications
    });
  } catch (error) {
    logger.error('Error checking maintenance due', { error: error instanceof Error ? error.message : error });
    res.status(500).json({
      error: {
        code: 'MAINTENANCE_CHECK_ERROR',
        message: 'Failed to check maintenance due dates'
      }
    });
  }
});

/**
 * GET /api/v1/notifications/upcoming-maintenance
 * Get upcoming maintenance tasks (for enabled boats only)
 */
router.get('/upcoming-maintenance', async (req: Request, res: Response) => {
  try {
    const { daysAhead = 7 } = req.query;

    const tasks = await notificationService.getUpcomingMaintenanceTasks(Number(daysAhead));

    res.json({
      tasks,
      count: tasks.length
    });
  } catch (error) {
    logger.error('Error fetching upcoming maintenance', { error: error instanceof Error ? error.message : error });
    res.status(500).json({
      error: {
        code: 'FETCH_MAINTENANCE_ERROR',
        message: 'Failed to fetch upcoming maintenance tasks'
      }
    });
  }
});

export default router;