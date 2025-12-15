import express, { Request, Response } from 'express';
import { templateManagerService, MaintenanceTemplateCreateDTO, MaintenanceTemplateUpdateDTO } from '../services/templateManagerService';
import { scheduleChangeService } from '../services/scheduleChangeService';
import { templateInformationService, TemplateInformationChanges } from '../services/templateInformationService';

const router = express.Router();

/**
 * POST /api/v1/maintenance/templates
 * Create a new maintenance template
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { boatId, title, description, component, recurrence, estimatedCost, estimatedTime } = req.body;

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

    if (!title) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Template title is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!description) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Template description is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!component) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Template component is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!recurrence) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Recurrence schedule is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (estimatedCost === undefined || estimatedCost === null) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Estimated cost is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (estimatedTime === undefined || estimatedTime === null) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Estimated time is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const data: MaintenanceTemplateCreateDTO = {
      boatId,
      title,
      description,
      component,
      recurrence,
      estimatedCost: parseFloat(estimatedCost),
      estimatedTime: parseInt(estimatedTime, 10)
    };

    const template = await templateManagerService.createTemplate(data);

    res.status(201).json({
      success: true,
      data: template
    });
  } catch (error) {
    console.error('Error creating maintenance template:', error);
    
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
      if (error.message.includes('required') || error.message.includes('Invalid recurrence') || error.message.includes('must be')) {
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
        message: 'Failed to create maintenance template'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/maintenance/templates
 * List maintenance templates with optional boat filter
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { boatId, activeOnly } = req.query;

    const templates = await templateManagerService.getTemplates(
      boatId as string,
      activeOnly === 'true'
    );

    res.json({
      success: true,
      data: templates
    });
  } catch (error) {
    console.error('Error fetching maintenance templates:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch maintenance templates'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/maintenance/templates/:id
 * Get a specific maintenance template by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const template = await templateManagerService.getTemplateById(id);

    if (!template) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: 'Maintenance template not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    res.json({
      success: true,
      data: template
    });
  } catch (error) {
    console.error('Error fetching maintenance template:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch maintenance template'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * PUT /api/v1/maintenance/templates/:id
 * Update a maintenance template
 */
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, component, recurrence, estimatedCost, estimatedTime, isActive } = req.body;

    const data: MaintenanceTemplateUpdateDTO = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (component !== undefined) {
      data.component = component;
    }
    if (recurrence !== undefined) {
      data.recurrence = recurrence;
    }
    if (estimatedCost !== undefined) {
      data.estimatedCost = parseFloat(estimatedCost);
    }
    if (estimatedTime !== undefined) {
      data.estimatedTime = parseInt(estimatedTime, 10);
    }
    if (isActive !== undefined) {
      data.isActive = isActive;
    }

    const template = await templateManagerService.updateTemplate(id, data);

    res.json({
      success: true,
      data: template
    });
  } catch (error) {
    console.error('Error updating maintenance template:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance template not found') {
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
      if (error.message.includes('required') || error.message.includes('Invalid recurrence') || error.message.includes('must be')) {
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
        message: 'Failed to update maintenance template'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * DELETE /api/v1/maintenance/templates/:id
 * Delete a maintenance template with cascade to future events
 */
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await templateManagerService.deleteTemplate(id);

    res.json({
      success: true,
      message: 'Maintenance template deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting maintenance template:', error);
    
    if (error instanceof Error && error.message === 'Maintenance template not found') {
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
        message: 'Failed to delete maintenance template'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/templates/:id/photos
 * Attach a photo to a maintenance template
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

    await templateManagerService.attachPhoto(id, photoId);

    res.status(201).json({
      success: true,
      message: 'Photo attached to maintenance template successfully'
    });
  } catch (error) {
    console.error('Error attaching photo to maintenance template:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance template not found' || error.message === 'Photo not found') {
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
      if (error.message === 'Photo is already attached to this template') {
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
        message: 'Failed to attach photo to maintenance template'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * DELETE /api/v1/maintenance/templates/:id/photos/:photoId
 * Remove a photo from a maintenance template (affects all related events)
 */
router.delete('/:id/photos/:photoId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, photoId } = req.params;

    // Import photoService for template-specific deletion
    const { photoService } = await import('../services/photoService');
    
    // Use template-specific photo deletion that handles template-event structure
    await photoService.deleteTemplatePhoto(photoId, id);

    res.json({
      success: true,
      message: 'Template photo removed successfully - no longer visible on related events'
    });
  } catch (error) {
    console.error('Error removing photo from maintenance template:', error);
    
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
        message: 'Failed to remove photo from maintenance template'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/templates/:id/schedule-change/preview
 * Preview the impact of changing a template's recurrence schedule
 */
router.post('/:id/schedule-change/preview', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { recurrence } = req.body;

    if (!recurrence) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'New recurrence schedule is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!recurrence.type || !recurrence.interval) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Recurrence must include type and interval'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const preview = await scheduleChangeService.previewScheduleChange(id, recurrence);

    res.json({
      success: true,
      data: preview
    });
  } catch (error) {
    console.error('Error generating schedule change preview:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance template not found') {
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
      if (error.message.includes('Invalid recurrence') || error.message.includes('must be')) {
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
        message: 'Failed to generate schedule change preview'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/templates/:id/schedule-change/apply
 * Apply the schedule change after user confirmation
 */
router.post('/:id/schedule-change/apply', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { recurrence, offline } = req.body;

    if (!recurrence) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'New recurrence schedule is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!recurrence.type || !recurrence.interval) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Recurrence must include type and interval'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    // If offline flag is set, queue the change for later sync
    if (offline) {
      const { offlineChangeService } = await import('../services/offlineChangeService');
      const change = await offlineChangeService.queueScheduleChange(id, recurrence);
      
      res.json({
        success: true,
        data: {
          queued: true,
          changeId: change.id,
          message: 'Schedule change queued for sync when connectivity returns'
        }
      });
      return;
    }

    const result = await scheduleChangeService.applyScheduleChange(id, recurrence);

    if (result.success) {
      res.json({
        success: true,
        data: result,
        message: 'Schedule change applied successfully'
      });
    } else {
      res.status(500).json({
        error: {
          code: 'SCHEDULE_CHANGE_FAILED',
          message: 'Failed to apply schedule change',
          details: result.errors
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
    }
  } catch (error) {
    console.error('Error applying schedule change:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance template not found') {
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
      if (error.message.includes('Invalid recurrence') || error.message.includes('must be')) {
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
        message: 'Failed to apply schedule change'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/templates/:id/information-change/preview
 * Preview the impact of changing template information on future events
 */
router.post('/:id/information-change/preview', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, component, estimatedCost, estimatedTime } = req.body;

    // Validate that at least one field is being changed
    if (title === undefined && description === undefined && component === undefined && 
        estimatedCost === undefined && estimatedTime === undefined) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'At least one field must be specified for information change'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const changes: TemplateInformationChanges = {};
    if (title !== undefined) changes.title = title;
    if (description !== undefined) changes.description = description;
    if (component !== undefined) changes.component = component;
    if (estimatedCost !== undefined) changes.estimatedCost = estimatedCost;
    if (estimatedTime !== undefined) changes.estimatedTime = estimatedTime;

    const preview = await templateInformationService.previewInformationChanges(id, changes);

    res.json({
      success: true,
      data: preview,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error previewing template information changes:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance template not found') {
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
      if (error.message.includes('cannot be empty') || error.message.includes('must be')) {
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
        message: 'Failed to preview template information changes'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/templates/:id/information-change/apply
 * Apply template information changes after user confirmation
 */
router.post('/:id/information-change/apply', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, component, estimatedCost, estimatedTime } = req.body;

    // Validate that at least one field is being changed
    if (title === undefined && description === undefined && component === undefined && 
        estimatedCost === undefined && estimatedTime === undefined) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'At least one field must be specified for information change'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const changes: TemplateInformationChanges = {};
    if (title !== undefined) changes.title = title;
    if (description !== undefined) changes.description = description;
    if (component !== undefined) changes.component = component;
    if (estimatedCost !== undefined) changes.estimatedCost = estimatedCost;
    if (estimatedTime !== undefined) changes.estimatedTime = estimatedTime;

    const result = await templateInformationService.applyInformationChanges(id, changes);

    if (result.errors.length === 0) {
      res.json({
        success: true,
        data: {
          templateId: result.templateId,
          eventsUpdated: result.eventsUpdated,
          completedEventsPreserved: result.completedEventsPreserved,
          message: `Template information updated successfully. ${result.eventsUpdated} future events will reflect the changes. ${result.completedEventsPreserved} completed events preserved unchanged.`
        },
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(500).json({
        error: {
          code: 'INFORMATION_CHANGE_FAILED',
          message: 'Failed to apply template information changes',
          details: result.errors
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
    }
  } catch (error) {
    console.error('Error applying template information changes:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance template not found') {
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
      if (error.message.includes('cannot be empty') || error.message.includes('must be')) {
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
        message: 'Failed to apply template information changes'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/templates/sync-offline-changes
 * Process queued template changes when connectivity is restored
 */
router.post('/sync-offline-changes', async (req: Request, res: Response) => {
  try {
    const results = await templateInformationService.processQueuedChanges();
    
    const totalProcessed = results.length;
    const successful = results.filter(r => r.errors.length === 0).length;
    const failed = results.filter(r => r.errors.length > 0).length;

    res.json({
      success: true,
      data: {
        totalProcessed,
        successful,
        failed,
        results,
        message: `Processed ${totalProcessed} queued changes. ${successful} successful, ${failed} failed.`
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error processing offline changes:', error);
    
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to process offline changes'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/maintenance/templates/:id/photos/propagate
 * Propagate template photo changes to all related events
 */
router.post('/:id/photos/propagate', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { addedPhotoIds = [], removedPhotoIds = [] } = req.body;

    // Validate photo IDs are arrays
    if (!Array.isArray(addedPhotoIds) || !Array.isArray(removedPhotoIds)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'addedPhotoIds and removedPhotoIds must be arrays'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const result = await templateInformationService.propagatePhotoChanges(
      id, 
      addedPhotoIds, 
      removedPhotoIds
    );

    if (result.errors.length === 0) {
      res.json({
        success: true,
        data: {
          templateId: result.templateId,
          eventsAffected: result.eventsAffected,
          photosAdded: result.photosAdded,
          photosRemoved: result.photosRemoved,
          message: `Template photo changes propagated to ${result.eventsAffected} events.`
        },
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(500).json({
        error: {
          code: 'PHOTO_PROPAGATION_FAILED',
          message: 'Failed to propagate photo changes',
          details: result.errors
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
    }
  } catch (error) {
    console.error('Error propagating photo changes:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance template not found') {
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
    }

    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to propagate photo changes'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

export default router;