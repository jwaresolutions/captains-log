import { Router, Request, Response } from 'express';
import { tripService } from '../services/tripService';
import { logger } from '../utils/logger';

const router = Router();

/**
 * POST /api/v1/trips
 * Create a new trip
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      boatId,
      startTime,
      endTime,
      waterType,
      role,
      timezone,
      gpsPoints,
      engineHours,
      fuelConsumed,
      weatherConditions,
      numberOfPassengers,
      destination
    } = req.body;

    // Validation
    if (!boatId) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Boat ID is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!startTime) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Start time is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // endTime is optional for trips in progress
    if (endTime && new Date(endTime) < new Date(startTime)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'End time must be after start time'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!gpsPoints || !Array.isArray(gpsPoints)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'GPS points array is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Convert date strings to Date objects
    const parsedGpsPoints = gpsPoints.map((point: any) => ({
      ...point,
      timestamp: new Date(point.timestamp)
    }));

    const trip = await tripService.createTrip({
      boatId,
      startTime: new Date(startTime),
      endTime: endTime ? new Date(endTime) : null,
      waterType,
      role,
      timezone,
      gpsPoints: parsedGpsPoints,
      engineHours,
      fuelConsumed,
      weatherConditions,
      numberOfPassengers,
      destination
    });

    res.status(201).json({
      data: trip,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error creating trip', { error });

    if (error instanceof Error) {
      if (error.message === 'Boat not found') {
        res.status(404).json({
          error: {
            code: 'NOT_FOUND',
            message: error.message
          },
          timestamp: new Date().toISOString(),
          path: req.path
        });
        return;
      }

      if (
        error.message.includes('required') ||
        error.message.includes('must be after')
      ) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: error.message
          },
          timestamp: new Date().toISOString(),
          path: req.path
        });
        return;
      }
    }

    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: error instanceof Error ? error.message : 'Failed to create trip'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/trips
 * List trips with optional filters
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { boatId, startDate, endDate, waterType, role } = req.query;

    const filters: any = {};

    if (boatId) {
      filters.boatId = boatId as string;
    }

    if (startDate) {
      filters.startDate = new Date(startDate as string);
    }

    if (endDate) {
      filters.endDate = new Date(endDate as string);
    }

    if (waterType) {
      filters.waterType = waterType as string;
    }

    if (role) {
      filters.role = role as string;
    }

    const trips = await tripService.listTrips(filters);

    res.json({
      data: trips,
      count: trips.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error listing trips', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to list trips'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/trips/:id
 * Get a specific trip with GPS points
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const trip = await tripService.getTrip(id);

    if (!trip) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: 'Trip not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    res.json({
      data: trip,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting trip', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get trip'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * PUT /api/v1/trips/:id
 * Update a trip
 */
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      waterType,
      role,
      engineHours,
      fuelConsumed,
      weatherConditions,
      numberOfPassengers,
      destination
    } = req.body;

    const trip = await tripService.updateTrip(id, {
      waterType,
      role,
      engineHours,
      fuelConsumed,
      weatherConditions,
      numberOfPassengers,
      destination
    });

    res.json({
      data: trip,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error updating trip', { error });

    if (error instanceof Error && error.message === 'Trip not found') {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: error.message
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: error instanceof Error ? error.message : 'Failed to update trip'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

export default router;
