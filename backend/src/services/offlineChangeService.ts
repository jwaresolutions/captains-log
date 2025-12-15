import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface OfflineChange {
  id: string;
  entityType: 'maintenance_template';
  entityId: string;
  changeType: 'schedule_change' | 'template_update';
  changeData: any;
  timestamp: Date;
  userId?: string;
  synced: boolean;
  syncAttempts: number;
  lastSyncAttempt?: Date;
  syncError?: string;
}

export interface SyncResult {
  success: boolean;
  changesSynced: number;
  errors: string[];
}

export class OfflineChangeService {
  /**
   * Queue a schedule change for offline sync
   */
  async queueScheduleChange(
    templateId: string, 
    newRecurrence: any, 
    userId?: string
  ): Promise<OfflineChange> {
    const change = await prisma.offlineChange.create({
      data: {
        entityType: 'maintenance_template',
        entityId: templateId,
        changeType: 'schedule_change',
        changeData: JSON.stringify({ recurrence: newRecurrence }),
        timestamp: new Date(),
        userId,
        synced: false,
        syncAttempts: 0
      }
    });

    logger.info('Schedule change queued for offline sync', {
      changeId: change.id,
      templateId,
      userId
    });

    return change as OfflineChange;
  }

  /**
   * Queue a template update for offline sync
   */
  async queueTemplateUpdate(
    templateId: string, 
    updateData: any, 
    userId?: string
  ): Promise<OfflineChange> {
    const change = await prisma.offlineChange.create({
      data: {
        entityType: 'maintenance_template',
        entityId: templateId,
        changeType: 'template_update',
        changeData: JSON.stringify(updateData),
        timestamp: new Date(),
        userId,
        synced: false,
        syncAttempts: 0
      }
    });

    logger.info('Template update queued for offline sync', {
      changeId: change.id,
      templateId,
      userId
    });

    return change as OfflineChange;
  }

  /**
   * Get all pending offline changes
   */
  async getPendingChanges(userId?: string): Promise<OfflineChange[]> {
    const where: any = {
      synced: false,
      syncAttempts: { lt: 5 } // Don't retry more than 5 times
    };

    if (userId) {
      where.userId = userId;
    }

    const changes = await prisma.offlineChange.findMany({
      where,
      orderBy: { timestamp: 'asc' }
    });

    return changes.map(change => ({
      ...change,
      changeData: JSON.parse(change.changeData)
    })) as OfflineChange[];
  }

  /**
   * Sync all pending changes when connectivity returns
   */
  async syncPendingChanges(userId?: string): Promise<SyncResult> {
    const result: SyncResult = {
      success: true,
      changesSynced: 0,
      errors: []
    };

    try {
      const pendingChanges = await this.getPendingChanges(userId);

      for (const change of pendingChanges) {
        try {
          await this.syncSingleChange(change);
          result.changesSynced++;
        } catch (error: any) {
          const errorMsg = `Failed to sync change ${change.id}: ${error.message}`;
          result.errors.push(errorMsg);
          result.success = false;

          // Update sync attempt count and error
          await this.updateSyncAttempt(change.id, error.message);
        }
      }

      logger.info('Offline changes sync completed', {
        userId,
        changesSynced: result.changesSynced,
        errors: result.errors.length
      });

    } catch (error: any) {
      result.success = false;
      result.errors.push(`Sync process failed: ${error.message}`);
      logger.error('Offline changes sync failed', { userId, error: error.message });
    }

    return result;
  }

  /**
   * Sync a single offline change
   */
  private async syncSingleChange(change: OfflineChange): Promise<void> {
    const { scheduleChangeService } = await import('./scheduleChangeService');
    const { templateManagerService } = await import('./templateManagerService');

    switch (change.changeType) {
      case 'schedule_change':
        const recurrence = change.changeData.recurrence;
        await scheduleChangeService.applyScheduleChange(change.entityId, recurrence);
        break;

      case 'template_update':
        await templateManagerService.updateTemplate(change.entityId, change.changeData);
        break;

      default:
        throw new Error(`Unknown change type: ${change.changeType}`);
    }

    // Mark as synced
    await prisma.offlineChange.update({
      where: { id: change.id },
      data: {
        synced: true,
        lastSyncAttempt: new Date()
      }
    });

    logger.info('Offline change synced successfully', {
      changeId: change.id,
      changeType: change.changeType,
      entityId: change.entityId
    });
  }

  /**
   * Update sync attempt count and error for a failed sync
   */
  private async updateSyncAttempt(changeId: string, error: string): Promise<void> {
    await prisma.offlineChange.update({
      where: { id: changeId },
      data: {
        syncAttempts: { increment: 1 },
        lastSyncAttempt: new Date(),
        syncError: error
      }
    });
  }

  /**
   * Clear successfully synced changes older than specified days
   */
  async cleanupSyncedChanges(olderThanDays: number = 30): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);

    const deleted = await prisma.offlineChange.deleteMany({
      where: {
        synced: true,
        timestamp: { lt: cutoffDate }
      }
    });

    logger.info('Cleaned up synced offline changes', {
      deletedCount: deleted.count,
      olderThanDays
    });

    return deleted.count;
  }

  /**
   * Get sync status for a user
   */
  async getSyncStatus(userId?: string): Promise<{
    pendingChanges: number;
    failedChanges: number;
    lastSyncAttempt?: Date;
  }> {
    const where: any = {};
    if (userId) {
      where.userId = userId;
    }

    const [pendingCount, failedCount, lastSync] = await Promise.all([
      prisma.offlineChange.count({
        where: { ...where, synced: false, syncAttempts: { lt: 5 } }
      }),
      prisma.offlineChange.count({
        where: { ...where, synced: false, syncAttempts: { gte: 5 } }
      }),
      prisma.offlineChange.findFirst({
        where,
        orderBy: { lastSyncAttempt: 'desc' },
        select: { lastSyncAttempt: true }
      })
    ]);

    return {
      pendingChanges: pendingCount,
      failedChanges: failedCount,
      lastSyncAttempt: lastSync?.lastSyncAttempt || undefined
    };
  }
}

export const offlineChangeService = new OfflineChangeService();