import { PrismaClient, Notification, MaintenanceTemplate, MaintenanceEvent, Boat } from '@prisma/client';
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
   * Check for maintenance events due within the specified number of days
   * and create notifications for them (respecting boat enabled status)
   */
  async checkMaintenanceDue(daysAhead: number = 7): Promise<Notification[]> {
    const now = new Date();
    const futureDate = new Date();
    futureDate.setDate(now.getDate() + daysAhead);
    futureDate.setHours(23, 59, 59, 999); // Include the entire last day

    // Find maintenance events due within the specified timeframe
    // Include overdue events (they should show as "due today")
    // Only include events for enabled boats and active templates
    const dueEvents = await prisma.maintenanceEvent.findMany({
      where: {
        dueDate: {
          lte: futureDate
        },
        completedAt: null, // Only incomplete events
        template: {
          isActive: true,
          boat: {
            enabled: true // Only create notifications for enabled boats
          }
        }
      },
      include: {
        template: {
          include: {
            boat: true
          }
        }
      }
    });

    const notifications: Notification[] = [];

    for (const event of dueEvents) {
      // Check if we already have a notification for this event
      const existingNotification = await prisma.notification.findFirst({
        where: {
          type: 'maintenance_due',
          entityType: 'maintenance_event',
          entityId: event.id,
          read: false
        }
      });

      // Only create notification if one doesn't already exist
      if (!existingNotification) {
        const daysUntilDue = Math.ceil((event.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        
        let title: string;
        let message: string;

        if (daysUntilDue <= 0) {
          title = 'Maintenance Due Today';
          message = `${event.template.title.trim()} is due today for ${event.template.boat.name.trim()}`;
        } else if (daysUntilDue === 1) {
          title = 'Maintenance Due Tomorrow';
          message = `${event.template.title.trim()} is due tomorrow for ${event.template.boat.name.trim()}`;
        } else {
          title = 'Maintenance Due Soon';
          message = `${event.template.title.trim()} is due in ${daysUntilDue} days for ${event.template.boat.name.trim()}`;
        }

        const notification = await this.createNotification({
          type: 'maintenance_due',
          title,
          message,
          entityType: 'maintenance_event',
          entityId: event.id
        });

        notifications.push(notification);
      }
    }

    logger.info('Maintenance due check completed', {
      daysAhead,
      eventsFound: dueEvents.length,
      notificationsCreated: notifications.length
    });

    return notifications;
  }

  /**
   * Get maintenance events that are due within the specified number of days
   * (for enabled boats only)
   */
  async getUpcomingMaintenanceEvents(daysAhead: number = 7): Promise<(MaintenanceEvent & { template: MaintenanceTemplate & { boat: Boat } })[]> {
    const now = new Date();
    const futureDate = new Date();
    futureDate.setDate(now.getDate() + daysAhead);

    return await prisma.maintenanceEvent.findMany({
      where: {
        dueDate: {
          gte: now,
          lte: futureDate
        },
        completedAt: null, // Only incomplete events
        template: {
          isActive: true,
          boat: {
            enabled: true // Only return events for enabled boats
          }
        }
      },
      include: {
        template: {
          include: {
            boat: true
          }
        }
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
    // Find all maintenance events for this boat's templates
    const maintenanceEvents = await prisma.maintenanceEvent.findMany({
      where: { 
        template: {
          boatId
        }
      },
      select: { id: true }
    });

    const eventIds = maintenanceEvents.map(event => event.id);

    if (eventIds.length === 0) {
      return 0;
    }

    // Delete notifications for these maintenance events
    const result = await prisma.notification.deleteMany({
      where: {
        type: 'maintenance_due',
        entityType: 'maintenance_event',
        entityId: {
          in: eventIds
        }
      }
    });

    logger.info('Notifications removed for disabled boat', {
      boatId,
      notificationsRemoved: result.count
    });

    return result.count;
  }

  /**
   * Remove notifications when maintenance events are completed
   * This should be called when an event is marked as completed
   */
  async removeNotificationsForCompletedEvent(eventId: string): Promise<number> {
    const result = await prisma.notification.deleteMany({
      where: {
        type: 'maintenance_due',
        entityType: 'maintenance_event',
        entityId: eventId
      }
    });

    logger.info('Notifications removed for completed maintenance event', {
      eventId,
      notificationsRemoved: result.count
    });

    return result.count;
  }

  /**
   * Update notification schedules when template changes affect timing
   * This should be called when template recurrence or other timing-related fields change
   */
  async updateNotificationSchedulesForTemplate(templateId: string): Promise<number> {
    // Find all future (incomplete) events for this template
    const futureEvents = await prisma.maintenanceEvent.findMany({
      where: {
        templateId,
        completedAt: null,
        dueDate: {
          gt: new Date()
        }
      },
      include: {
        template: {
          include: {
            boat: true
          }
        }
      }
    });

    let notificationsUpdated = 0;

    for (const event of futureEvents) {
      // Remove existing notifications for this event
      await prisma.notification.deleteMany({
        where: {
          type: 'maintenance_due',
          entityType: 'maintenance_event',
          entityId: event.id
        }
      });

      // Check if this event should have a notification (within 7 days and boat enabled)
      const now = new Date();
      const daysUntilDue = Math.ceil((event.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysUntilDue <= 7 && daysUntilDue >= 0 && event.template.boat.enabled && event.template.isActive) {
        let title: string;
        let message: string;

        if (daysUntilDue <= 0) {
          title = 'Maintenance Due Today';
          message = `${event.template.title.trim()} is due today for ${event.template.boat.name.trim()}`;
        } else if (daysUntilDue === 1) {
          title = 'Maintenance Due Tomorrow';
          message = `${event.template.title.trim()} is due tomorrow for ${event.template.boat.name.trim()}`;
        } else {
          title = 'Maintenance Due Soon';
          message = `${event.template.title.trim()} is due in ${daysUntilDue} days for ${event.template.boat.name.trim()}`;
        }

        await this.createNotification({
          type: 'maintenance_due',
          title,
          message,
          entityType: 'maintenance_event',
          entityId: event.id
        });

        notificationsUpdated++;
      }
    }

    logger.info('Notification schedules updated for template', {
      templateId,
      eventsProcessed: futureEvents.length,
      notificationsUpdated
    });

    return notificationsUpdated;
  }
}

// Export singleton instance
export const notificationService = new NotificationService();