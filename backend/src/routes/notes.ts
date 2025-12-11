import { Router, Request, Response } from 'express';
import { noteService } from '../services/noteService';
import { logger } from '../utils/logger';

const router = Router();

/**
 * POST /api/v1/notes
 * Create a new note
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { content, type, boatId, tripId, tags } = req.body;

    if (!content) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Note content is required'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    if (!type || !['general', 'boat', 'trip'].includes(type)) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Note type must be one of: general, boat, trip'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const note = await noteService.createNote({ 
      content, 
      type, 
      boatId, 
      tripId, 
      tags 
    });

    res.status(201).json({
      data: note,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error creating note', { error });
    
    if (error instanceof Error && (
      error.message.includes('required') || 
      error.message.includes('cannot be associated') ||
      error.message.includes('not found')
    )) {
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

    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: error instanceof Error ? error.message : 'Failed to create note'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/notes
 * List notes with optional filters
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { type, boatId, tripId, tags, search } = req.query;

    const filters: any = {};
    
    if (type && typeof type === 'string') {
      if (!['general', 'boat', 'trip'].includes(type)) {
        res.status(400).json({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid note type filter'
          },
          timestamp: new Date().toISOString(),
          path: req.path
        });
        return;
      }
      filters.type = type as 'general' | 'boat' | 'trip';
    }

    if (boatId && typeof boatId === 'string') {
      filters.boatId = boatId;
    }

    if (tripId && typeof tripId === 'string') {
      filters.tripId = tripId;
    }

    if (tags) {
      if (typeof tags === 'string') {
        filters.tags = [tags];
      } else if (Array.isArray(tags)) {
        filters.tags = tags.filter(tag => typeof tag === 'string');
      }
    }

    if (search && typeof search === 'string') {
      filters.search = search;
    }

    const notes = await noteService.listNotes(filters);

    res.json({
      data: notes,
      count: notes.length,
      filters,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error listing notes', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to list notes'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/notes/tags/all
 * Get all unique tags across all notes
 */
router.get('/tags/all', async (req: Request, res: Response): Promise<void> => {
  try {
    const tags = await noteService.getAllTags();

    res.json({
      data: tags,
      count: tags.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting all tags', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get tags'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * GET /api/v1/notes/:id
 * Get a specific note
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const note = await noteService.getNote(id);

    if (!note) {
      res.status(404).json({
        error: {
          code: 'NOT_FOUND',
          message: 'Note not found'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    res.json({
      data: note,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error getting note', { error });
    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to get note'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * PUT /api/v1/notes/:id
 * Update a note
 */
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { content, tags } = req.body;

    const note = await noteService.updateNote(id, { content, tags });

    res.json({
      data: note,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error updating note', { error });
    
    if (error instanceof Error && error.message === 'Note not found') {
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

    if (error instanceof Error && error.message.includes('cannot be empty')) {
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

    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: error instanceof Error ? error.message : 'Failed to update note'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * DELETE /api/v1/notes/:id
 * Delete a note
 */
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await noteService.deleteNote(id);

    res.status(204).send();
  } catch (error) {
    logger.error('Error deleting note', { error });
    
    if (error instanceof Error && error.message === 'Note not found') {
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
        message: 'Failed to delete note'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * POST /api/v1/notes/:id/tags
 * Add tags to a note
 */
router.post('/:id/tags', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { tags } = req.body;

    if (!Array.isArray(tags) || tags.some(tag => typeof tag !== 'string')) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Tags must be an array of strings'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const note = await noteService.addTags(id, tags);

    res.json({
      data: note,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error adding tags to note', { error });
    
    if (error instanceof Error && error.message === 'Note not found') {
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
        message: 'Failed to add tags to note'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

/**
 * DELETE /api/v1/notes/:id/tags
 * Remove tags from a note
 */
router.delete('/:id/tags', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { tags } = req.body;

    if (!Array.isArray(tags) || tags.some(tag => typeof tag !== 'string')) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Tags must be an array of strings'
        },
        timestamp: new Date().toISOString(),
        path: req.path
      });
      return;
    }

    const note = await noteService.removeTags(id, tags);

    res.json({
      data: note,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error removing tags from note', { error });
    
    if (error instanceof Error && error.message === 'Note not found') {
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
        message: 'Failed to remove tags from note'
      },
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
});

export default router;