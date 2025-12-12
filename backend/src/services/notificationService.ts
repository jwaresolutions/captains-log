import { PrismaClient, Notification, MaintenanceTask, Boat } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface NotificationCreateDTO {
  type: 'maintenance_due' | 'system';
  title: string;
  message: string;
  entityType?: string;
  entityId?: string;
}

export interface NotificationFilters {
  type?: string;
  read?: boolean;
  entityType?: string;
  entityId?: string;
}

/**
 * Notification Service
 * Handles notification creation, retrieval, and maintenance due date checking
 */
export class NotificationService {
  /**
   * Create a new notification
   */
  async createNotification(data: NotificationCreateDTO): Promise<Notification> {
    const notification = await prisma.notification.create({
      data: {
        type: data.type,
        title: data.title,
        message: data.message,
        entityType: data.entityType,
        entityId: data.entityId,
        read: false
      }
    });

    logger.info('Notification created', {
      notificationId: notification.id,
      type: notification.type,
      title: notification.title,
      entityType: notification.entityType,
      entityId: notification.entityId
    });

    return notification;
  }

  /**
   * Get all active (unread) notifications
   */
  async getActiveNotifications(filters?: NotificationFilters): Promise<Notification[]> {
    const where: any = {};

    if (filters?.type) {
      where.type = filters.type;
    }

    if (filters?.read !== undefined) {
      where.read = filters.read;
    }

    if (filters?.entityType) {
      where.entityType = filters.entityType;
    }

    if (filters?.entityId) {
      where.entityId = filters.entityId;
    }

    return await prisma.notification.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  /**
   * Mark a notification as read
   */
  async markAsRead(id: string): Promise<Notification> {
    const notification = await prisma.notification.update({
      where: { id },
      data: { read: true }
    });

    logger.info('Notification marked as read', {
      notificationId: notification.id
    });

    return notification;
  }

  /**
   * Mark all notifications as read
   */
  async markAllAsRead(filters?: NotificationFilters): Promise<number> {
    const where: any = { read: false };

    if (filters?.type) {
      where.type = filters.type;
    }

    if (filters?.entityType) {
      where.entityType = filters.entityType;
    }

    if (filters?.entityId) {
      where.entityId = filters.entityId;
    }

    const result = await prisma.notification.updateMany({
      where,
      data: { read: true }
    });

    logger.info('Multiple notifications marked as read', {
      count: result.count,
      filters
    });

    return result.count;
  }

  /**
   * Delete a notification
   */
  async deleteNotification(id: string): Promise<void> {
    await prisma.notification.delete({
      where: { id }
    });

    logger.info('Notification deleted', {
      notificationId: id
    });
  }

  /**
   * Delete old read notifications (cleanup)
   */
  async deleteOldNotifications(daysOld: number = 30): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);

    const result = await prisma.notification.deleteMany({
      where: {
        read: true,
        createdAt: {
          lt: cutoffDate
        }
      }
    });

    logger.info('Old notifications cleaned up', {
      count: result.count,
      daysOld,
      cutoffDate
    });

    return result.count;
  }

  /**
   * Check for maintenance tasks due within the specified number of days
   * and create notifications for them (respecting boat enabled status)
   */
  async checkMaintenanceDue(daysAhead: number = 7): Promise<Notification[]> {
    const now = new Date();
    const futureDate = new Date();
    futureDate.setDate(now.getDate() + daysAhead);

    // Find maintenance tasks due within the specified timeframe
    // Include overdue tasks (they should show as "due today")
    // Only include tasks for enabled boats
    const dueTasks = await prisma.maintenanceTask.findMany({
      where: {
        dueDate: {
          lte: futureDate
        },
        boat: {
          enabled: true // Only create notifications for enabled boats
        }
      },
      include: {
        boat: true
      }
    });

    const notifications: Notification[] = [];

    for (const task of dueTasks) {
      // Check if we already have a notification for this task
      const existingNotification = await prisma.notification.findFirst({
        where: {
          type: 'maintenance_due',
          entityType: 'maintenance_task',
          entityId: task.id,
          read: false
        }
      });

      // Only create notification if one doesn't already exist
      if (!existingNotification) {
        const daysUntilDue = Math.ceil((task.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        
        let title: string;
        let message: string;

        if (daysUntilDue === 0) {
          title = 'Maintenance Due Today';
          message = `${task.title} is due today for ${task.boat.name}`;
        } else if (daysUntilDue === 1) {
          title = 'Maintenance Due Tomorrow';
          message = `${task.title} is due tomorrow for ${task.boat.name}`;
        } else {
          title = 'Maintenance Due Soon';
          message = `${task.title} is due in ${daysUntilDue} days for ${task.boat.name}`;
        }

        const notification = await this.createNotification({
          type: 'maintenance_due',
          title,
          message,
          entityType: 'maintenance_task',
          entityId: task.id
        });

        notifications.push(notification);
      }
    }

    logger.info('Maintenance due check completed', {
      daysAhead,
      tasksFound: dueTasks.length,
      notificationsCreated: notifications.length
    });

    return notifications;
  }

  /**
   * Get maintenance tasks that are due within the specified number of days
   * (for enabled boats only)
   */
  async getUpcomingMaintenanceTasks(daysAhead: number = 7): Promise<(MaintenanceTask & { boat: Boat })[]> {
    const now = new Date();
    const futureDate = new Date();
    futureDate.setDate(now.getDate() + daysAhead);

    return await prisma.maintenanceTask.findMany({
      where: {
        dueDate: {
          gte: now,
          lte: futureDate
        },
        boat: {
          enabled: true // Only return tasks for enabled boats
        }
      },
      include: {
        boat: true
      },
      orderBy: {
        dueDate: 'asc'
      }
    });
  }

  /**
   * Remove notifications for disabled boats
   * This should be called when a boat is disabled
   */
  async removeNotificationsForBoat(boatId: string): Promise<number> {
    // Find all maintenance tasks for this boat
    const maintenanceTasks = await prisma.maintenanceTask.findMany({
      where: { boatId },
      select: { id: true }
    });

    const taskIds = maintenanceTasks.map(task => task.id);

    if (taskIds.length === 0) {
      return 0;
    }

    // Delete notifications for these maintenance tasks
    const result = await prisma.notification.deleteMany({
      where: {
        type: 'maintenance_due',
        entityType: 'maintenance_task',
        entityId: {
          in: taskIds
        }
      }
    });

    logger.info('Notifications removed for disabled boat', {
      boatId,
      notificationsRemoved: result.count
    });

    return result.count;
  }
}

// Export singleton instance
export const notificationService = new NotificationService();