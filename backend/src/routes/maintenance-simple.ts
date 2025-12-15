import express, { Request, Response } from 'express';
import { schedulerService } from '../services/schedulerService';

const router = express.Router();

/**
 * POST /api/v1/maintenance/trigger-daily-task
 * Manually trigger the daily maintenance task automation (for testing)
 */
router.post('/trigger-daily-task', async (_req: Request, res: Response): Promise<void> => {
  try {
    await schedulerService.triggerDailyMaintenanceTask();

    res.json({
      success: true,
      message: 'Daily maintenance task automation triggered successfully'
    });
  } catch (error) {
    console.error('Error triggering daily maintenance task:', error);
    
    res.status(500).json({
      error: 'Failed to trigger daily maintenance task automation'
    });
  }
});

export default router;