import * as cron from 'node-cron';
import { notificationService } from './notificationService';
import { logger } from '../utils/logger';

/**
 * Scheduler Service
 * Handles scheduled tasks like maintenance due date checking
 */
export class SchedulerService {
  private maintenanceCheckJob: cron.ScheduledTask | null = null;
  private cleanupJob: cron.ScheduledTask | null = null;

  /**
   * Start all scheduled jobs
   */
  start(): void {
    this.startMaintenanceCheck();
    this.startNotificationCleanup();
    logger.info('Scheduler service started');
  }

  /**
   * Stop all scheduled jobs
   */
  stop(): void {
    if (this.maintenanceCheckJob) {
      this.maintenanceCheckJob.stop();
      this.maintenanceCheckJob = null;
    }

    if (this.cleanupJob) {
      this.cleanupJob.stop();
      this.cleanupJob = null;
    }

    logger.info('Scheduler service stopped');
  }

  /**
   * Start the maintenance due date check job
   * Runs every day at 9:00 AM to check for maintenance tasks due within 7 days
   */
  private startMaintenanceCheck(): void {
    // Run every day at 9:00 AM
    this.maintenanceCheckJob = cron.schedule('0 9 * * *', async () => {
      try {
        logger.info('Starting scheduled maintenance due check');
        
        const notifications = await notificationService.checkMaintenanceDue(7);
        
        logger.info('Scheduled maintenance due check completed', {
          notificationsCreated: notifications.length
        });
      } catch (error) {
        logger.error('Error in scheduled maintenance due check', {
          error: error instanceof Error ? error.message : error
        });
      }
    }, {
      timezone: 'UTC'
    });

    logger.info('Maintenance due check job scheduled (daily at 9:00 AM UTC)');
  }

  /**
   * Start the notification cleanup job
   * Runs every Sunday at 2:00 AM to clean up old read notifications
   */
  private startNotificationCleanup(): void {
    // Run every Sunday at 2:00 AM
    this.cleanupJob = cron.schedule('0 2 * * 0', async () => {
      try {
        logger.info('Starting scheduled notification cleanup');
        
        const deletedCount = await notificationService.deleteOldNotifications(30);
        
        logger.info('Scheduled notification cleanup completed', {
          deletedCount
        });
      } catch (error) {
        logger.error('Error in scheduled notification cleanup', {
          error: error instanceof Error ? error.message : error
        });
      }
    }, {
      timezone: 'UTC'
    });

    logger.info('Notification cleanup job scheduled (weekly on Sunday at 2:00 AM UTC)');
  }

  /**
   * Manually trigger maintenance due check (for testing)
   */
  async triggerMaintenanceCheck(): Promise<void> {
    try {
      logger.info('Manual maintenance due check triggered');
      
      const notifications = await notificationService.checkMaintenanceDue(7);
      
      logger.info('Manual maintenance due check completed', {
        notificationsCreated: notifications.length
      });
    } catch (error) {
      logger.error('Error in manual maintenance due check', {
        error: error instanceof Error ? error.message : error
      });
      throw error;
    }
  }

  /**
   * Manually trigger notification cleanup (for testing)
   */
  async triggerNotificationCleanup(): Promise<void> {
    try {
      logger.info('Manual notification cleanup triggered');
      
      const deletedCount = await notificationService.deleteOldNotifications(30);
      
      logger.info('Manual notification cleanup completed', {
        deletedCount
      });
    } catch (error) {
      logger.error('Error in manual notification cleanup', {
        error: error instanceof Error ? error.message : error
      });
      throw error;
    }
  }
}

// Export singleton instance
export const schedulerService = new SchedulerService();