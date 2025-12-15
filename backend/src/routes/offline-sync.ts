import express, { Request, Response } from 'express';
import { offlineChangeService } from '../services/offlineChangeService';

const router = express.Router();

/**
 * GET /api/v1/offline-sync/status
 * Get sync status for pending offline changes
 */
router.get('/status', async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.query;

    const status = await offlineChangeService.getSyncStatus(userId as string);

    res.json({
      success: true,
      data: status
    });
  } catch (error) {
    console.error('Error getting sync status:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get sync status'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/offline-sync/pending
 * Get all pending offline changes
 */
router.get('/pending', async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.query;

    const changes = await offlineChangeService.getPendingChanges(userId as string);

    res.json({
      success: true,
      data: changes
    });
  } catch (error) {
    console.error('Error getting pending changes:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get pending changes'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/offline-sync/sync
 * Sync all pending offline changes
 */
router.post('/sync', async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.body;

    const result = await offlineChangeService.syncPendingChanges(userId);

    if (result.success) {
      res.json({
        success: true,
        data: result,
        message: 'Offline changes synced successfully'
      });
    } else {
      res.status(207).json({ // 207 Multi-Status for partial success
        success: false,
        data: result,
        message: 'Some offline changes failed to sync'
      });
    }
  } catch (error) {
    console.error('Error syncing offline changes:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to sync offline changes'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/offline-sync/cleanup
 * Clean up successfully synced changes older than specified days
 */
router.post('/cleanup', async (req: Request, res: Response): Promise<void> => {
  try {
    const { olderThanDays = 30 } = req.body;

    const deletedCount = await offlineChangeService.cleanupSyncedChanges(olderThanDays);

    res.json({
      success: true,
      data: { deletedCount },
      message: `Cleaned up ${deletedCount} synced changes`
    });
  } catch (error) {
    console.error('Error cleaning up synced changes:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to clean up synced changes'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

export default router;