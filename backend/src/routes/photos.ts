import { Router, Request, Response } from 'express';
import multer from 'multer';
import { photoService } from '../services/photoService';
import { logger } from '../utils/logger';
import { sendJsonResponse } from '../utils/serialization';

const router = Router();

// Configure multer for memory storage (we'll handle file saving in the service)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
    files: 1 // Only allow one file per request
  },
  fileFilter: (_req, file, cb) => {
    // Only allow image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

/**
 * POST /api/v1/photos
 * Upload a photo
 */
router.post('/', upload.single('photo'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { entityType, entityId } = req.body;
    const file = req.file;

    // Validate required fields
    if (!entityType || !entityId) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'entityType and entityId are required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!file) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Photo file is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Validate entity type
    const validEntityTypes = ['trip', 'maintenance', 'note', 'maintenance_template', 'maintenance_event'];
    if (!validEntityTypes.includes(entityType)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: `entityType must be one of: ${validEntityTypes.join(', ')}`
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Parse optional metadata
    let metadata;
    if (req.body.metadata) {
      try {
        metadata = JSON.parse(req.body.metadata);
      } catch (error) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid metadata JSON'
          },
          timestamp: new Date().toISOString(),
          path: req.path
        });
        return;
      }
    }

    const photo = await photoService.uploadPhoto({
      originalBuffer: file.buffer,
      mimeType: file.mimetype,
      category: 'general',
      metadata
    });

    // Attach the photo to the specified entity
    await photoService.attachPhotoToEntity(photo.id, entityType, entityId);

    sendJsonResponse(res, {
      data: photo,
      timestamp: new Date().toISOString()
    }, 201);
  } catch (error) {
    logger.error('Error uploading photo', { error });
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid entity type') || 
          error.message.includes('Invalid file type')) {
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
        message: error instanceof Error ? error.message : 'Failed to upload photo'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/photos/:id
 * Get photo metadata
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const photo = await photoService.getPhoto(id);

    if (!photo) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: 'Photo not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    sendJsonResponse(res, {
      data: photo,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting photo', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get photo'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/photos/:id/file
 * Get photo file (original or web-optimized)
 */
router.get('/:id/file', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { optimized } = req.query;
    
    const photo = await photoService.getPhoto(id);
    
    if (!photo) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: 'Photo not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const useOptimized = optimized === 'true';
    const fileBuffer = await photoService.getPhotoFile(id, useOptimized);
    
    // Set appropriate headers
    res.set({
      'Content-Type': photo.mimeType,
      'Content-Length': fileBuffer.length.toString(),
      'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
      'ETag': `"${id}-${useOptimized ? 'opt' : 'orig'}"`
    });

    res.send(fileBuffer);
  } catch (error) {
    logger.error('Error getting photo file', { error });
    
    if (error instanceof Error && error.message === 'Photo file not found') {
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
        message: 'Failed to get photo file'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/photos
 * List photos by entity
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { entityType, entityId } = req.query;

    if (!entityType || !entityId) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'entityType and entityId query parameters are required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // Special handling for maintenance events to show both template and completion photos
    if (entityType === 'maintenance_event') {
      const eventPhotos = await photoService.getEventDisplayPhotos(entityId as string);
      
      sendJsonResponse(res, {
        data: {
          templatePhotos: eventPhotos.templatePhotos,
          completionPhotos: eventPhotos.completionPhotos,
          all: eventPhotos.allPhotos,
          categorized: eventPhotos.categorizedPhotos
        },
        count: eventPhotos.allPhotos.length,
        statistics: {
          templateCount: eventPhotos.templatePhotos.length,
          completionCount: eventPhotos.completionPhotos.length
        },
        timestamp: new Date().toISOString()
      });
      return;
    }

    const photos = await photoService.listPhotos(
      entityType as string,
      entityId as string
    );

    sendJsonResponse(res, {
      data: photos,
      count: photos.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error listing photos', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to list photos'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/photos/by-category
 * List photos by entity and category
 */
router.get('/by-category', async (req: Request, res: Response): Promise<void> => {
  try {
    const { entityType, entityId, category } = req.query;

    if (!entityType || !entityId || !category) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'entityType, entityId, and category query parameters are required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const photos = await photoService.getPhotosByCategory(
      entityType as string,
      entityId as string,
      category as string
    );

    sendJsonResponse(res, {
      data: photos,
      count: photos.length,
      category: category,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error listing photos by category', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to list photos by category'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * DELETE /api/v1/photos/:id
 * Delete a photo with proper cleanup for template-event structure
 */
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await photoService.deletePhotoWithCleanup(id);

    res.json({
      message: 'Photo deleted successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error deleting photo', { error });
    
    if (error instanceof Error && error.message === 'Photo not found') {
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
        message: error instanceof Error ? error.message : 'Failed to delete photo'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * DELETE /api/v1/photos/:id/template/:templateId
 * Delete template photo with template-event structure handling
 */
router.delete('/:id/template/:templateId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, templateId } = req.params;
    await photoService.deleteTemplatePhoto(id, templateId);

    res.json({
      message: 'Template photo deleted successfully - no longer visible on related events',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error deleting template photo', { error });
    
    if (error instanceof Error) {
      if (error.message === 'Photo not found' || error.message === 'Photo is not attached to this template') {
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
      if (error.message === 'Photo is not a template photo') {
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
        message: error instanceof Error ? error.message : 'Failed to delete template photo'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * DELETE /api/v1/photos/:id/event/:eventId
 * Delete completion photo with event-specific handling
 */
router.delete('/:id/event/:eventId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, eventId } = req.params;
    await photoService.deleteCompletionPhoto(id, eventId);

    res.json({
      message: 'Completion photo deleted successfully - only affects this specific event',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error deleting completion photo', { error });
    
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
        message: error instanceof Error ? error.message : 'Failed to delete completion photo'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/photos/statistics
 * Get photo statistics for an entity
 */
router.get('/statistics', async (req: Request, res: Response): Promise<void> => {
  try {
    const { entityType, entityId } = req.query;

    if (!entityType || !entityId) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'entityType and entityId query parameters are required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const statistics = await photoService.getPhotoStatistics(
      entityType as string,
      entityId as string
    );

    sendJsonResponse(res, {
      data: statistics,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting photo statistics', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get photo statistics'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/photos/validate-template-visibility/:templateId
 * Validate that template photos are visible on all related events
 */
router.post('/validate-template-visibility/:templateId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { templateId } = req.params;

    const validation = await photoService.validateTemplatePhotoVisibility(templateId);

    sendJsonResponse(res, {
      data: validation,
      message: validation.visibilityConfirmed 
        ? 'Template photo visibility confirmed on all related events'
        : 'Template photo visibility issues detected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error validating template photo visibility', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to validate template photo visibility'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

// Handle multer errors
router.use((error: any, req: Request, res: Response, next: any) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      res.status(413).json({
        error: {
          code: 'FILE_TOO_LARGE',
          message: 'File size exceeds 50MB limit'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }
    
    if (error.code === 'LIMIT_FILE_COUNT') {
      res.status(400).json({
        error: {
          code: 'TOO_MANY_FILES',
          message: 'Only one file allowed per request'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }
  }

  if (error.message === 'Only image files are allowed') {
    res.status(400).json({
      error: {
        code: 'INVALID_FILE_TYPE',
        message: error.message
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
    return;
  }

  next(error);
});

export default router;