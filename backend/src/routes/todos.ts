import express from 'express';
import { todoService, TodoListCreateDTO, TodoItemCreateDTO, TodoItemUpdateDTO } from '../services/todoService';

const router = express.Router();

/**
 * POST /api/v1/todos
 * Create a new todo list
 */
router.post('/', async (req, res) => {
  try {
    const { title, boatId } = req.body;

    if (!title) {
      return res.status(400).json({
        error: 'Title is required'
      });
    }

    const data: TodoListCreateDTO = {
      title,
      boatId: boatId || undefined
    };

    const todoList = await todoService.createList(data);

    res.status(201).json({
      success: true,
      data: todoList
    });
  } catch (error) {
    console.error('Error creating todo list:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Todo list title is required') {
        return res.status(400).json({
          error: error.message
        });
      }
      if (error.message === 'Boat not found') {
        return res.status(404).json({
          error: error.message
        });
      }
    }

    res.status(500).json({
      error: 'Failed to create todo list'
    });
  }
});

/**
 * GET /api/v1/todos
 * Get all todo lists with optional boat filter
 */
router.get('/', async (req, res) => {
  try {
    const { boatId } = req.query;

    const todoLists = await todoService.getLists(boatId as string);

    res.json({
      success: true,
      data: todoLists
    });
  } catch (error) {
    console.error('Error fetching todo lists:', error);
    res.status(500).json({
      error: 'Failed to fetch todo lists'
    });
  }
});

/**
 * GET /api/v1/todos/:id
 * Get a specific todo list by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const todoList = await todoService.getListById(id);

    if (!todoList) {
      return res.status(404).json({
        error: 'Todo list not found'
      });
    }

    res.json({
      success: true,
      data: todoList
    });
  } catch (error) {
    console.error('Error fetching todo list:', error);
    res.status(500).json({
      error: 'Failed to fetch todo list'
    });
  }
});

/**
 * PUT /api/v1/todos/:id
 * Update a todo list
 */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, boatId } = req.body;

    const todoList = await todoService.updateList(id, {
      title,
      boatId: boatId || undefined
    });

    res.json({
      success: true,
      data: todoList
    });
  } catch (error) {
    console.error('Error updating todo list:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Todo list not found') {
        return res.status(404).json({
          error: error.message
        });
      }
      if (error.message === 'Todo list title is required') {
        return res.status(400).json({
          error: error.message
        });
      }
      if (error.message === 'Boat not found') {
        return res.status(404).json({
          error: error.message
        });
      }
    }

    res.status(500).json({
      error: 'Failed to update todo list'
    });
  }
});

/**
 * DELETE /api/v1/todos/:id
 * Delete a todo list
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await todoService.deleteList(id);

    res.json({
      success: true,
      message: 'Todo list deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting todo list:', error);
    
    if (error instanceof Error && error.message === 'Todo list not found') {
      return res.status(404).json({
        error: error.message
      });
    }

    res.status(500).json({
      error: 'Failed to delete todo list'
    });
  }
});

/**
 * POST /api/v1/todos/:id/items
 * Add an item to a todo list
 */
router.post('/:id/items', async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        error: 'Content is required'
      });
    }

    const data: TodoItemCreateDTO = {
      content
    };

    const item = await todoService.addItem(id, data);

    res.status(201).json({
      success: true,
      data: item
    });
  } catch (error) {
    console.error('Error adding todo item:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Todo list not found') {
        return res.status(404).json({
          error: error.message
        });
      }
      if (error.message === 'Todo item content is required') {
        return res.status(400).json({
          error: error.message
        });
      }
    }

    res.status(500).json({
      error: 'Failed to add todo item'
    });
  }
});

/**
 * PUT /api/v1/todos/items/:itemId
 * Update a todo item
 */
router.put('/items/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const { content, completed } = req.body;

    const data: TodoItemUpdateDTO = {};
    if (content !== undefined) {
      data.content = content;
    }
    if (completed !== undefined) {
      data.completed = completed;
    }

    const item = await todoService.updateItem(itemId, data);

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    console.error('Error updating todo item:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Todo item not found') {
        return res.status(404).json({
          error: error.message
        });
      }
      if (error.message === 'Todo item content is required') {
        return res.status(400).json({
          error: error.message
        });
      }
    }

    res.status(500).json({
      error: 'Failed to update todo item'
    });
  }
});

/**
 * PATCH /api/v1/todos/items/:itemId/complete
 * Toggle completion status of a todo item
 */
router.patch('/items/:itemId/complete', async (req, res) => {
  try {
    const { itemId } = req.params;

    const item = await todoService.toggleItemCompletion(itemId);

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    console.error('Error toggling todo item completion:', error);
    
    if (error instanceof Error && error.message === 'Todo item not found') {
      return res.status(404).json({
        error: error.message
      });
    }

    res.status(500).json({
      error: 'Failed to toggle todo item completion'
    });
  }
});

/**
 * DELETE /api/v1/todos/items/:itemId
 * Delete a todo item
 */
router.delete('/items/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;

    await todoService.deleteItem(itemId);

    res.json({
      success: true,
      message: 'Todo item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting todo item:', error);
    
    if (error instanceof Error && error.message === 'Todo item not found') {
      return res.status(404).json({
        error: error.message
      });
    }

    res.status(500).json({
      error: 'Failed to delete todo item'
    });
  }
});

export default router;