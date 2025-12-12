import express, { Request, Response } from 'express';
import { maintenanceService, MaintenanceTaskCreateDTO, MaintenanceTaskUpdateDTO, MaintenanceCompletionCreateDTO } from '../services/maintenanceService';

const router = express.Router();

/**
 * POST /api/v1/maintenance
 * Create a new maintenance task
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { boatId, title, description, component, dueDate, recurrence } = req.body;

    if (!boatId) {
      res.status(400).json({
        error: 'Boat ID is required'
      });
      return;
    }

    if (!title) {
      res.status(400).json({
        error: 'Title is required'
      });
      return;
    }

    if (!dueDate) {
      res.status(400).json({
        error: 'Due date is required'
      });
      return;
    }

    const data: MaintenanceTaskCreateDTO = {
      boatId,
      title,
      description,
      component,
      dueDate: new Date(dueDate),
      recurrence
    };

    const task = await maintenanceService.createTask(data);

    res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    console.error('Error creating maintenance task:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance task title is required') {
        res.status(400).json({
          error: error.message
        });
        return;
      }
      if (error.message === 'Boat not found') {
        res.status(404).json({
          error: error.message
        });
        return;
      }
      if (error.message.includes('Invalid recurrence type') || error.message.includes('Recurrence interval')) {
        res.status(400).json({
          error: error.message
        });
        return;
      }
    }

    res.status(500).json({
      error: 'Failed to create maintenance task'
    });
  }
});

/**
 * GET /api/v1/maintenance
 * Get all maintenance tasks with optional filters
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { boatId } = req.query;

    const tasks = await maintenanceService.getTasks(boatId as string);

    res.json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error('Error fetching maintenance tasks:', error);
    res.status(500).json({
      error: 'Failed to fetch maintenance tasks'
    });
  }
});

/**
 * GET /api/v1/maintenance/upcoming
 * Get tasks due within specified days (default 7)
 */
router.get('/upcoming', async (req: Request, res: Response): Promise<void> => {
  try {
    const { days } = req.query;
    const daysAhead = days ? parseInt(days as string, 10) : 7;

    if (isNaN(daysAhead) || daysAhead < 0) {
      res.status(400).json({
        error: 'Days must be a non-negative number'
      });
      return;
    }

    const tasks = await maintenanceService.getUpcomingTasks(daysAhead);

    res.json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error('Error fetching upcoming maintenance tasks:', error);
    res.status(500).json({
      error: 'Failed to fetch upcoming maintenance tasks'
    });
  }
});

/**
 * GET /api/v1/maintenance/:id
 * Get a specific maintenance task by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const task = await maintenanceService.getTaskById(id);

    if (!task) {
      res.status(404).json({
        error: 'Maintenance task not found'
      });
      return;
    }

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    console.error('Error fetching maintenance task:', error);
    res.status(500).json({
      error: 'Failed to fetch maintenance task'
    });
  }
});

/**
 * PUT /api/v1/maintenance/:id
 * Update a maintenance task
 */
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, component, dueDate, recurrence } = req.body;

    const data: MaintenanceTaskUpdateDTO = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (component !== undefined) {
      data.component = component;
    }
    if (dueDate !== undefined) {
      data.dueDate = new Date(dueDate);
    }
    if (recurrence !== undefined) {
      data.recurrence = recurrence;
    }

    const task = await maintenanceService.updateTask(id, data);

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    console.error('Error updating maintenance task:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Maintenance task not found') {
        res.status(404).json({
          error: error.message
        });
        return;
      }
      if (error.message === 'Maintenance task title is required') {
        res.status(400).json({
          error: error.message
        });
        return;
      }
      if (error.message.includes('Invalid recurrence type') || error.message.includes('Recurrence interval')) {
        res.status(400).json({
          error: error.message
        });
        return;
      }
    }

    res.status(500).json({
      error: 'Failed to update maintenance task'
    });
  }
});

/**
 * DELETE /api/v1/maintenance/:id
 * Delete a maintenance task
 */
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await maintenanceService.deleteTask(id);

    res.json({
      success: true,
      message: 'Maintenance task deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting maintenance task:', error);
    
    if (error instanceof Error && error.message === 'Maintenance task not found') {
      res.status(404).json({
        error: error.message
      });
      return;
    }

    res.status(500).json({
      error: 'Failed to delete maintenance task'
    });
  }
});

/**
 * POST /api/v1/maintenance/:id/complete
 * Complete a maintenance task
 */
router.post('/:id/complete', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { cost, notes } = req.body;

    const data: MaintenanceCompletionCreateDTO = {};
    if (cost !== undefined) {
      const costNumber = parseFloat(cost);
      if (isNaN(costNumber) || costNumber < 0) {
        res.status(400).json({
          error: 'Cost must be a non-negative number'
        });
        return;
      }
      data.cost = costNumber;
    }
    if (notes !== undefined) {
      data.notes = notes;
    }

    const task = await maintenanceService.completeTask(id, data);

    res.json({
      success: true,
      data: task,
      message: 'Maintenance task completed successfully'
    });
  } catch (error) {
    console.error('Error completing maintenance task:', error);
    
    if (error instanceof Error && error.message === 'Maintenance task not found') {
      res.status(404).json({
        error: error.message
      });
      return;
    }

    res.status(500).json({
      error: 'Failed to complete maintenance task'
    });
  }
});

/**
 * GET /api/v1/maintenance/:id/history
 * Get maintenance history for a task
 */
router.get('/:id/history', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const history = await maintenanceService.getTaskHistory(id);

    res.json({
      success: true,
      data: history
    });
  } catch (error) {
    console.error('Error fetching maintenance history:', error);
    
    if (error instanceof Error && error.message === 'Maintenance task not found') {
      res.status(404).json({
        error: error.message
      });
      return;
    }

    res.status(500).json({
      error: 'Failed to fetch maintenance history'
    });
  }
});

export default router;