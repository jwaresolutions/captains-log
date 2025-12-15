import * as cron from 'node-cron';
import { notificationService } from './notificationService';
import { eventGeneratorService } from './eventGeneratorService';
import { logger } from '../utils/logger';

/**
 * Scheduler Service
 * Handles scheduled tasks like maintenance due date checking and daily maintenance automation
 */
export class SchedulerService {
  private maintenanceCheckJob: cron.ScheduledTask | null = null;
  private cleanupJob: cron.ScheduledTask | null = null;
  private dailyMaintenanceJob: cron.ScheduledTask | null = null;

  /**
   * Start all scheduled jobs
   */
  start(): void {
    this.startMaintenanceCheck();
    this.startNotificationCleanup();
    this.startDailyMaintenanceTask();
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

    if (this.dailyMaintenanceJob) {
      this.dailyMaintenanceJob.stop();
      this.dailyMaintenanceJob = null;
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
   * Start the daily maintenance task automation job
   * Runs every day at midnight UTC to generate missing maintenance events
   */
  private startDailyMaintenanceTask(): void {
    // Run every day at midnight UTC
    this.dailyMaintenanceJob = cron.schedule('0 0 * * *', async () => {
      try {
        logger.info('Starting daily maintenance task automation');
        
        const report = await eventGeneratorService.generateMissingEvents();
        
        logger.info('Daily maintenance task automation completed', {
          templatesProcessed: report.templatesProcessed,
          eventsCreated: report.eventsCreated,
          errorsCount: report.errors.length
        });

        // Log individual errors if any occurred
        if (report.errors.length > 0) {
          report.errors.forEach((error, index) => {
            logger.error(`Daily maintenance task error ${index + 1}`, { error });
          });
        }
      } catch (error) {
        logger.error('Critical error in daily maintenance task automation', {
          error: error instanceof Error ? error.message : error,
          stack: error instanceof Error ? error.stack : undefined
        });
        
        // Implement retry logic for critical failures
        await this.retryDailyMaintenanceTask();
      }
    }, {
      timezone: 'UTC'
    });

    logger.info('Daily maintenance task automation scheduled (daily at midnight UTC)');
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

  /**
   * Manually trigger daily maintenance task automation (for testing)
   */
  async triggerDailyMaintenanceTask(): Promise<void> {
    try {
      logger.info('Manual daily maintenance task automation triggered');
      
      const report = await eventGeneratorService.generateMissingEvents();
      
      logger.info('Manual daily maintenance task automation completed', {
        templatesProcessed: report.templatesProcessed,
        eventsCreated: report.eventsCreated,
        errorsCount: report.errors.length
      });

      // Log individual errors if any occurred
      if (report.errors.length > 0) {
        report.errors.forEach((error, index) => {
          logger.error(`Manual daily maintenance task error ${index + 1}`, { error });
        });
      }
    } catch (error) {
      logger.error('Error in manual daily maintenance task automation', {
        error: error instanceof Error ? error.message : error
      });
      throw error;
    }
  }

  /**
   * Retry logic for failed daily maintenance task executions
   * Implements exponential backoff with maximum 3 retry attempts
   */
  private async retryDailyMaintenanceTask(): Promise<void> {
    const maxRetries = 3;
    const baseDelay = 5000; // 5 seconds

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        logger.info(`Retrying daily maintenance task automation (attempt ${attempt}/${maxRetries})`);
        
        // Exponential backoff delay
        const delay = baseDelay * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, delay));
        
        const report = await eventGeneratorService.generateMissingEvents();
        
        logger.info(`Daily maintenance task automation retry ${attempt} succeeded`, {
          templatesProcessed: report.templatesProcessed,
          eventsCreated: report.eventsCreated,
          errorsCount: report.errors.length
        });

        // Log individual errors if any occurred
        if (report.errors.length > 0) {
          report.errors.forEach((error, index) => {
            logger.error(`Daily maintenance task retry ${attempt} error ${index + 1}`, { error });
          });
        }

        return; // Success, exit retry loop
      } catch (error) {
        logger.error(`Daily maintenance task automation retry ${attempt} failed`, {
          error: error instanceof Error ? error.message : error,
          attemptsRemaining: maxRetries - attempt
        });

        if (attempt === maxRetries) {
          logger.error('Daily maintenance task automation failed after all retry attempts', {
            totalAttempts: maxRetries,
            finalError: error instanceof Error ? error.message : error
          });
        }
      }
    }
  }
}

// Export singleton instance
export const schedulerService = new SchedulerService();