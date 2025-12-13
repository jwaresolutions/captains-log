import { Router, Request, Response } from 'express';
import { backupService } from '../services/backupService';
import { logger } from '../utils/logger';
import * as fs from 'fs/promises';


const router = Router();

/**
 * POST /api/v1/backups
 * Create a manual backup
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { includePhotos = true, compress = true } = req.body;

    logger.info('Creating manual backup', { includePhotos, compress });

    const backup = await backupService.createBackup(
      { includePhotos, compress },
      'manual'
    );

    logger.info('Manual backup created successfully', { 
      backupId: backup.id, 
      filename: backup.filename,
      size: backup.size 
    });

    res.status(201).json({
      success: true,
      data: {
        id: backup.id,
        filename: backup.filename,
        size: backup.size,
        createdAt: backup.createdAt,
        type: backup.type
      }
    });
  } catch (error) {
    logger.error('Failed to create backup:', error);
    res.status(500).json({
      error: {
        code: 'BACKUP_CREATION_FAILED',
        message: 'Failed to create backup',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/backups
 * List all available backups
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const backups = await backupService.listBackups();

    // Return backup metadata without file paths for security
    const backupList = backups.map(backup => ({
      id: backup.id,
      filename: backup.filename,
      size: backup.size,
      createdAt: backup.createdAt,
      type: backup.type
    }));

    res.json({
      success: true,
      data: backupList,
      count: backupList.length
    });
  } catch (error) {
    logger.error('Failed to list backups:', error);
    res.status(500).json({
      error: {
        code: 'BACKUP_LIST_FAILED',
        message: 'Failed to list backups',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/backups/:id
 * Get backup metadata by ID
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const backup = await backupService.getBackup(id);

    if (!backup) {
      return res.status(404).json({
        error: {
          code: 'BACKUP_NOT_FOUND',
          message: 'Backup not found',
          details: `No backup found with ID: ${id}`
        },
        timestamp: new Date(),
        path: req.path
      });
    }

    // Return backup metadata without file path for security
    res.json({
      success: true,
      data: {
        id: backup.id,
        filename: backup.filename,
        size: backup.size,
        createdAt: backup.createdAt,
        type: backup.type
      }
    });
  } catch (error) {
    logger.error('Failed to get backup:', error);
    res.status(500).json({
      error: {
        code: 'BACKUP_GET_FAILED',
        message: 'Failed to get backup',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/backups/:id/download
 * Download a backup file
 */
router.get('/:id/download', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const backup = await backupService.getBackup(id);

    if (!backup) {
      return res.status(404).json({
        error: {
          code: 'BACKUP_NOT_FOUND',
          message: 'Backup not found',
          details: `No backup found with ID: ${id}`
        },
        timestamp: new Date(),
        path: req.path
      });
    }

    // Verify backup file exists
    try {
      await fs.access(backup.path);
    } catch (error) {
      logger.error(`Backup file not found: ${backup.path}`, error);
      return res.status(404).json({
        error: {
          code: 'BACKUP_FILE_NOT_FOUND',
          message: 'Backup file not found on disk',
          details: `Backup file missing: ${backup.filename}`
        },
        timestamp: new Date(),
        path: req.path
      });
    }

    // Get file stats for content length
    const stats = await fs.stat(backup.path);

    // Set appropriate headers for file download
    const isCompressed = backup.filename.endsWith('.tar.gz');
    const contentType = isCompressed ? 'application/gzip' : 'application/octet-stream';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', stats.size);
    res.setHeader('Content-Disposition', `attachment; filename="${backup.filename}"`);
    res.setHeader('Cache-Control', 'no-cache');

    logger.info('Starting backup download', { 
      backupId: backup.id, 
      filename: backup.filename,
      size: stats.size 
    });

    // Stream the file to the response
    const fileStream = require('fs').createReadStream(backup.path);
    
    fileStream.on('error', (error: Error) => {
      logger.error('Error streaming backup file:', error);
      if (!res.headersSent) {
        res.status(500).json({
          error: {
            code: 'BACKUP_DOWNLOAD_FAILED',
            message: 'Failed to download backup',
            details: error.message
          },
          timestamp: new Date(),
          path: req.path
        });
      }
    });

    fileStream.on('end', () => {
      logger.info('Backup download completed', { 
        backupId: backup.id, 
        filename: backup.filename 
      });
    });

    fileStream.pipe(res);

  } catch (error) {
    logger.error('Failed to download backup:', error);
    if (!res.headersSent) {
      res.status(500).json({
        error: {
          code: 'BACKUP_DOWNLOAD_FAILED',
          message: 'Failed to download backup',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        timestamp: new Date(),
        path: req.path
      });
    }
  }
});

/**
 * DELETE /api/v1/backups/:id
 * Delete a backup
 */
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await backupService.deleteBackup(id);

    if (!deleted) {
      return res.status(404).json({
        error: {
          code: 'BACKUP_NOT_FOUND',
          message: 'Backup not found',
          details: `No backup found with ID: ${id}`
        },
        timestamp: new Date(),
        path: req.path
      });
    }

    logger.info('Backup deleted successfully', { backupId: id });

    res.json({
      success: true,
      message: 'Backup deleted successfully'
    });
  } catch (error) {
    logger.error('Failed to delete backup:', error);
    res.status(500).json({
      error: {
        code: 'BACKUP_DELETE_FAILED',
        message: 'Failed to delete backup',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/backups/cleanup
 * Clean up old backups (admin operation)
 */
router.post('/cleanup', async (req: Request, res: Response) => {
  try {
    const { retentionDays = 30 } = req.body;

    if (typeof retentionDays !== 'number' || retentionDays < 1) {
      return res.status(400).json({
        error: {
          code: 'INVALID_RETENTION_DAYS',
          message: 'Invalid retention days',
          details: 'Retention days must be a positive number'
        },
        timestamp: new Date(),
        path: req.path
      });
    }

    logger.info('Starting backup cleanup', { retentionDays });

    const deletedCount = await backupService.cleanupOldBackups(retentionDays);

    logger.info('Backup cleanup completed', { deletedCount, retentionDays });

    res.json({
      success: true,
      message: `Cleaned up ${deletedCount} old backups`,
      data: {
        deletedCount,
        retentionDays
      }
    });
  } catch (error) {
    logger.error('Failed to cleanup backups:', error);
    res.status(500).json({
      error: {
        code: 'BACKUP_CLEANUP_FAILED',
        message: 'Failed to cleanup old backups',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date(),
      path: req.path
    });
  }
});

export default router;