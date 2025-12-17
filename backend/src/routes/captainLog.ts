import { Router } from 'express';
import { captainLogService } from '../services/captainLogService';
import { sendJsonResponse } from '../utils/serialization';

const router = Router();

/**
 * GET /api/v1/captain-log/progress
 * 
 * Get captain's license progress including:
 * - Total sea time days and hours
 * - Days in last 3 years
 * - Progress toward 360-day and 90-day goals
 * - Estimated completion dates
 */
router.get('/progress', async (_req, res) => {
  try {
    const progress = await captainLogService.getLicenseProgress();
    
    sendJsonResponse(res, {
      success: true,
      data: progress
    });
  } catch (error) {
    console.error('Error getting license progress:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get license progress'
    });
  }
});

/**
 * GET /api/v1/captain-log/sea-time-days
 * 
 * Get detailed sea time days with trip information
 * Query parameters:
 * - startDate: ISO date string (optional)
 * - endDate: ISO date string (optional)
 */
router.get('/sea-time-days', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    const startDateObj = startDate ? new Date(startDate as string) : undefined;
    const endDateObj = endDate ? new Date(endDate as string) : undefined;
    
    // Validate dates if provided
    if (startDate && isNaN(startDateObj!.getTime())) {
      res.status(400).json({
        success: false,
        error: 'Invalid startDate format. Use ISO date string.'
      });
      return;
    }
    
    if (endDate && isNaN(endDateObj!.getTime())) {
      res.status(400).json({
        success: false,
        error: 'Invalid endDate format. Use ISO date string.'
      });
      return;
    }
    
    const seaTimeDays = await captainLogService.calculateSeaTimeDays(startDateObj, endDateObj);
    
    sendJsonResponse(res, {
      success: true,
      data: seaTimeDays
    });
  } catch (error) {
    console.error('Error getting sea time days:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get sea time days'
    });
  }
});

/**
 * GET /api/v1/captain-log/breakdown
 * 
 * Get monthly breakdown of sea time
 * Query parameters:
 * - year: Year to filter by (optional)
 */
router.get('/breakdown', async (req, res) => {
  try {
    const { year } = req.query;
    
    let yearNum: number | undefined;
    if (year) {
      yearNum = parseInt(year as string);
      if (isNaN(yearNum) || yearNum < 1900 || yearNum > 2100) {
        res.status(400).json({
          success: false,
          error: 'Invalid year. Must be a number between 1900 and 2100.'
        });
        return;
      }
    }
    
    const breakdown = await captainLogService.getSeaTimeBreakdown(yearNum);
    
    sendJsonResponse(res, {
      success: true,
      data: breakdown
    });
  } catch (error) {
    console.error('Error getting sea time breakdown:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get sea time breakdown'
    });
  }
});

/**
 * GET /api/v1/captain-log/check-day/:date
 * 
 * Check if a specific date qualifies as a sea time day
 * Parameters:
 * - date: Date in YYYY-MM-DD format
 */
router.get('/check-day/:date', async (req, res) => {
  try {
    const { date } = req.params;
    
    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      res.status(400).json({
        success: false,
        error: 'Invalid date format. Use YYYY-MM-DD.'
      });
      return;
    }
    
    // Validate that it's a valid date
    const dateObj = new Date(date + 'T00:00:00');
    if (isNaN(dateObj.getTime())) {
      res.status(400).json({
        success: false,
        error: 'Invalid date.'
      });
      return;
    }
    
    const isSeaTimeDay = await captainLogService.isSeaTimeDay(date);
    
    sendJsonResponse(res, {
      success: true,
      data: {
        date,
        isSeaTimeDay
      }
    });
  } catch (error) {
    console.error('Error checking sea time day:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to check sea time day'
    });
  }
});

export default router;