import { Router, Request, Response } from 'express';
import { sensorService } from '../services/sensorService';
import { logger } from '../utils/logger';

const router = Router();

/**
 * POST /api/v1/sensors/types
 * Register a new sensor type
 */
router.post('/types', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, unit, loggingFrequency, description } = req.body;

    if (!name) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Sensor type name is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!unit) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Sensor unit is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!loggingFrequency || !['continuous', 'snapshot'].includes(loggingFrequency)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Logging frequency must be either "continuous" or "snapshot"'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const sensorType = await sensorService.registerSensorType({
      name,
      unit,
      loggingFrequency,
      description
    });

    res.status(201).json({
      data: sensorType,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error registering sensor type', { error });
    
    if (error instanceof Error && error.message.includes('already exists')) {
      res.status(409).json({
        error: {
          code: 'CONFLICT',
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
        message: error instanceof Error ? error.message : 'Failed to register sensor type'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/sensors/types
 * List all sensor types
 */
router.get('/types', async (req: Request, res: Response): Promise<void> => {
  try {
    const sensorTypes = await sensorService.listSensorTypes();

    res.json({
      data: sensorTypes,
      count: sensorTypes.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error listing sensor types', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to list sensor types'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/sensors/types/:id
 * Get a specific sensor type
 */
router.get('/types/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const sensorType = await sensorService.getSensorType(id);

    if (!sensorType) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: 'Sensor type not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    res.json({
      data: sensorType,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting sensor type', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get sensor type'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * PUT /api/v1/sensors/types/:id
 * Update a sensor type
 */
router.put('/types/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, unit, loggingFrequency, description } = req.body;

    if (loggingFrequency && !['continuous', 'snapshot'].includes(loggingFrequency)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Logging frequency must be either "continuous" or "snapshot"'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const sensorType = await sensorService.updateSensorType(id, {
      name,
      unit,
      loggingFrequency,
      description
    });

    res.json({
      data: sensorType,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error updating sensor type', { error });
    
    if (error instanceof Error && error.message === 'Sensor type not found') {
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

    if (error instanceof Error && error.message.includes('already exists')) {
      res.status(409).json({
        error: {
          code: 'CONFLICT',
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
        message: error instanceof Error ? error.message : 'Failed to update sensor type'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/sensors/readings
 * Record sensor data
 */
router.post('/readings', async (req: Request, res: Response): Promise<void> => {
  try {
    const { tripId, sensorTypeName, value, timestamp } = req.body;

    if (!tripId) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Trip ID is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!sensorTypeName) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Sensor type name is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (typeof value !== 'number' || isNaN(value)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Sensor value must be a valid number'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!timestamp) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Timestamp is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const parsedTimestamp = new Date(timestamp);
    if (isNaN(parsedTimestamp.getTime())) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid timestamp format'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const sensorReading = await sensorService.recordSensorData({
      tripId,
      sensorTypeName,
      value,
      timestamp: parsedTimestamp
    });

    res.status(201).json({
      data: sensorReading,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error recording sensor data', { error });
    
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
        message: error instanceof Error ? error.message : 'Failed to record sensor data'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/sensors/readings
 * Get sensor data by trip ID and optional sensor type
 * Query parameters:
 * - tripId (required): ID of the trip
 * - sensorType (optional): Name of the sensor type to filter by
 */
router.get('/readings', async (req: Request, res: Response): Promise<void> => {
  try {
    const { tripId, sensorType } = req.query;

    if (!tripId || typeof tripId !== 'string') {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Trip ID is required as a query parameter'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const sensorReadings = await sensorService.getSensorData(
      tripId,
      typeof sensorType === 'string' ? sensorType : undefined
    );

    res.json({
      data: sensorReadings,
      count: sensorReadings.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting sensor data', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get sensor data'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/sensors/readings/:tripId/:sensorTypeId
 * Get sensor data by trip ID and sensor type ID
 */
router.get('/readings/:tripId/:sensorTypeId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { tripId, sensorTypeId } = req.params;

    const sensorReadings = await sensorService.getSensorDataByTypeId(tripId, sensorTypeId);

    res.json({
      data: sensorReadings,
      count: sensorReadings.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting sensor data by type ID', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get sensor data'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

export default router;