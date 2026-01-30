import { Router, Request, Response } from 'express';
import { boatService } from '../services/boatService';
import { logger } from '../utils/logger';
import { serializeBoat } from '../utils/serialization';
import { eventBus } from '../services/eventBus';

const router = Router();



/**
 * POST /api/v1/boats
 * Create a new boat
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, metadata } = req.body;

    if (!name) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Boat name is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const boat = await boatService.createBoat({ name, metadata });

    // Transform dates to ISO strings for API compatibility
    const serializedBoat = {
      id: boat.id,
      name: boat.name,
      enabled: boat.enabled,
      isActive: boat.isActive,
      metadata: boat.metadata,
      createdAt: boat.createdAt instanceof Date ? boat.createdAt.toISOString() : new Date().toISOString(),
      updatedAt: boat.updatedAt instanceof Date ? boat.updatedAt.toISOString() : new Date().toISOString()
    };

    const responseData = {
      data: serializedBoat,
      timestamp: new Date().toISOString()
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(JSON.stringify(responseData));
    eventBus.publish('boats', 'created', boat.id);
  } catch (error) {
    logger.error('Error creating boat', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: error instanceof Error ? error.message : 'Failed to create boat'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/boats
 * List all boats
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const boats = await boatService.listBoats();

    // Manually serialize boats with proper date handling
    const serializedBoats = boats.map(boat => ({
      id: boat.id,
      name: boat.name,
      enabled: boat.enabled,
      isActive: boat.isActive,
      metadata: boat.metadata,
      createdAt: boat.createdAt instanceof Date ? boat.createdAt.toISOString() : new Date().toISOString(),
      updatedAt: boat.updatedAt instanceof Date ? boat.updatedAt.toISOString() : new Date().toISOString()
    }));

    const responseData = {
      data: serializedBoats,
      count: serializedBoats.length,
      timestamp: new Date().toISOString()
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));
  } catch (error) {
    logger.error('Error listing boats', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to list boats'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/boats/:id
 * Get a specific boat
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const boat = await boatService.getBoat(id);

    if (!boat) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: 'Boat not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Transform dates to ISO strings for API compatibility
    const serializedBoat = serializeBoat(boat);

    res.json({
      data: serializedBoat,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting boat', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get boat'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * PUT /api/v1/boats/:id
 * Update a boat
 */
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, metadata } = req.body;

    const boat = await boatService.updateBoat(id, { name, metadata });

    // Transform dates to ISO strings for API compatibility
    const serializedBoat = {
      id: boat.id,
      name: boat.name,
      enabled: boat.enabled,
      isActive: boat.isActive,
      metadata: boat.metadata,
      createdAt: boat.createdAt instanceof Date ? boat.createdAt.toISOString() : new Date().toISOString(),
      updatedAt: boat.updatedAt instanceof Date ? boat.updatedAt.toISOString() : new Date().toISOString()
    };

    const responseData = {
      data: serializedBoat,
      timestamp: new Date().toISOString()
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));
    eventBus.publish('boats', 'updated', boat.id);
  } catch (error) {
    logger.error('Error updating boat', { error });
    
    if (error instanceof Error && error.message === 'Boat not found') {
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
        message: error instanceof Error ? error.message : 'Failed to update boat'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * PATCH /api/v1/boats/:id/status
 * Enable or disable a boat
 */
router.patch('/:id/status', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { enabled } = req.body;

    if (typeof enabled !== 'boolean') {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'enabled field must be a boolean'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const boat = await boatService.toggleBoatStatus(id, enabled);

    // Transform dates to ISO strings for API compatibility
    const serializedBoat = serializeBoat(boat);

    res.json({
      data: serializedBoat,
      timestamp: new Date().toISOString()
    });
    eventBus.publish('boats', 'updated', id);
  } catch (error) {
    logger.error('Error toggling boat status', { error });
    
    if (error instanceof Error && error.message === 'Boat not found') {
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
        message: 'Failed to toggle boat status'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * PATCH /api/v1/boats/:id/active
 * Set a boat as the active boat
 */
router.patch('/:id/active', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const boat = await boatService.setActiveBoat(id);

    // Transform dates to ISO strings for API compatibility
    const serializedBoat = serializeBoat(boat);

    res.json({
      data: serializedBoat,
      message: 'Active boat updated successfully',
      timestamp: new Date().toISOString()
    });
    eventBus.publish('boats', 'updated', id);
  } catch (error) {
    logger.error('Error setting active boat', { error });
    
    if (error instanceof Error && error.message === 'Boat not found') {
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
        message: 'Failed to set active boat'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

export default router;
