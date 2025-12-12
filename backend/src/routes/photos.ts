import { Router, Request, Response } from 'express';
import multer from 'multer';
import { photoService } from '../services/photoService';
import { logger } from '../utils/logger';

const router = Router();

// Configure multer for memory storage (we'll handle file saving in the service)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
    files: 1 // Only allow one file per request
  },
  fileFilter: (req, file, cb) => {
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
    if (!['trip', 'maintenance', 'note'].includes(entityType)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'entityType must be trip, maintenance, or note'
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
      entityType: entityType as 'trip' | 'maintenance' | 'note',
      entityId,
      originalBuffer: file.buffer,
      mimeType: file.mimetype,
      metadata
    });

    res.status(201).json({
      data: photo,
      timestamp: new Date().toISOString()
    });
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

    res.json({
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

    const photos = await photoService.listPhotos(
      entityType as string,
      entityId as string
    );

    res.json({
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
 * DELETE /api/v1/photos/:id
 * Delete a photo
 */
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await photoService.deletePhoto(id);

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