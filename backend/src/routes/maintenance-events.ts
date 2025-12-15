import express, { Request, Response } from 'express';
import { eventManagerService, MaintenanceEventCompletionDTO } from '../services/eventManagerService';

const router = express.Router();

/**
 * GET /api/v1/maintenance/events/upcoming
 * Get upcoming (incomplete) maintenance events
 */
router.get('/upcoming', async (req: Request, res: Response): Promise<void> => {
  try {
    const { boatId, templateId, limit, offset } = req.query;

    const options = {
      boatId: boatId as string,
      templateId: templateId as string,
      limit: limit ? parseInt(limit as string, 10) : undefined,
      offset: offset ? parseInt(offset as string, 10) : undefined
    };

    // Validate limit and offset if provided
    if (options.limit !== undefined && (isNaN(options.limit) || options.limit < 0)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Limit must be a non-negative number'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (options.offset !== undefined && (isNaN(options.offset) || options.offset < 0)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Offset must be a non-negative number'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const events = await eventManagerService.getUpcomingEvents(options);

    res.json({
      success: true,
      data: events
    });
  } catch (error) {
    console.error('Error fetching upcoming maintenance events:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch upcoming maintenance events'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/maintenance/events/completed
 * Get completed maintenance events
 */
router.get('/completed', async (req: Request, res: Response): Promise<void> => {
  try {
    const { boatId, templateId, limit, offset } = req.query;

    const options = {
      boatId: boatId as string,
      templateId: templateId as string,
      limit: limit ? parseInt(limit as string, 10) : undefined,
      offset: offset ? parseInt(offset as string, 10) : undefined
    };

    // Validate limit and offset if provided
    if (options.limit !== undefined && (isNaN(options.limit) || options.limit < 0)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Limit must be a non-negative number'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (options.offset !== undefined && (isNaN(options.offset) || options.offset < 0)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Offset must be a non-negative number'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const events = await eventManagerService.getCompletedEvents(options);

    res.json({
      success: true,
      data: events
    });
  } catch (error) {
    console.error('Error fetching completed maintenance events:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch completed maintenance events'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/maintenance/events/:id
 * Get event details with template info
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const event = await eventManagerService.getEventDetails(id);

    if (!event) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: 'Maintenance event not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    console.error('Error fetching maintenance event details:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch maintenance event details'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/events/:id/complete
 * Complete event with cost, notes, photos
 */
router.post('/:id/complete', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { actualCost, actualTime, notes } = req.body;

    const completionData: MaintenanceEventCompletionDTO = {};

    // Validate and set actualCost if provided
    if (actualCost !== undefined && actualCost !== null) {
      const costNumber = parseFloat(actualCost);
      if (isNaN(costNumber) || costNumber < 0) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Actual cost must be a non-negative number'
          },
          timestamp: new Date().toISOString(),
          path: req.path
        });
        return;
      }
      completionData.actualCost = costNumber;
    }

    // Validate and set actualTime if provided
    if (actualTime !== undefined && actualTime !== null) {
      const timeNumber = parseInt(actualTime, 10);
      if (isNaN(timeNumber) || timeNumber <= 0) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Actual time must be a positive number'
          },
          timestamp: new Date().toISOString(),
          path: req.path
        });
        return;
      }
      completionData.actualTime = timeNumber;
    }

    // Set notes if provided
    if (notes !== undefined) {
      completionData.notes = notes;
    }

    const completedEvent = await eventManagerService.completeEvent(id, completionData);

    res.json({
      success: true,
      data: completedEvent,
      message: 'Maintenance event completed successfully'
    });
  } catch (error) {
    console.error('Error completing maintenance event:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance event not found') {
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
      if (error.message === 'Maintenance event is already completed') {
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
      if (error.message.includes('must be') || error.message.includes('required')) {
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
        message: 'Failed to complete maintenance event'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/events/:id/photos
 * Attach completion photo
 */
router.post('/:id/photos', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { photoId } = req.body;

    if (!photoId) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Photo ID is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    await eventManagerService.attachCompletionPhoto(id, photoId);

    res.status(201).json({
      success: true,
      message: 'Photo attached to maintenance event successfully'
    });
  } catch (error) {
    console.error('Error attaching photo to maintenance event:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance event not found' || error.message === 'Photo not found') {
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
      if (error.message === 'Photo is already attached to this event') {
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
    }

    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to attach photo to maintenance event'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * DELETE /api/v1/maintenance/events/:id/photos/:photoId
 * Remove completion photo (only affects this specific event)
 */
router.delete('/:id/photos/:photoId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, photoId } = req.params;

    // Import photoService for event-specific deletion
    const { photoService } = await import('../services/photoService');
    
    // Use event-specific photo deletion that handles completion photo isolation
    await photoService.deleteCompletionPhoto(photoId, id);

    res.json({
      success: true,
      message: 'Completion photo removed successfully - only affects this specific event'
    });
  } catch (error) {
    console.error('Error removing photo from maintenance event:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Photo not found' || error.message === 'Photo is not attached to this event') {
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
      if (error.message === 'Photo is not a completion photo') {
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
        message: 'Failed to remove photo from maintenance event'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

export default router;