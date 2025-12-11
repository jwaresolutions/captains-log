import { PrismaClient, TodoList, TodoItem } from '@prisma/client';

const prisma = new PrismaClient();

export interface TodoListCreateDTO {
  title: string;
  boatId?: string;
}

export interface TodoListUpdateDTO {
  title?: string;
  boatId?: string;
}

export interface TodoItemCreateDTO {
  content: string;
}

export interface TodoItemUpdateDTO {
  content?: string;
  completed?: boolean;
}

export interface TodoListWithItems extends TodoList {
  items: TodoItem[];
  boat?: {
    id: string;
    name: string;
  } | null;
}

export class TodoService {
  /**
   * Create a new todo list
   */
  async createList(data: TodoListCreateDTO): Promise<TodoListWithItems> {
    if (!data.title || data.title.trim() === '') {
      throw new Error('Todo list title is required');
    }

    // If boatId is provided, verify the boat exists
    if (data.boatId) {
      const boat = await prisma.boat.findUnique({
        where: { id: data.boatId }
      });
      if (!boat) {
        throw new Error('Boat not found');
      }
    }

    const todoList = await prisma.todoList.create({
      data: {
        title: data.title.trim(),
        boatId: data.boatId || null
      },
      include: {
        items: {
          orderBy: { createdAt: 'asc' }
        },
        boat: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return todoList;
  }

  /**
   * Get all todo lists with optional boat filter
   */
  async getLists(boatId?: string): Promise<TodoListWithItems[]> {
    const where = boatId ? { boatId } : {};

    const todoLists = await prisma.todoList.findMany({
      where,
      include: {
        items: {
          orderBy: { createdAt: 'asc' }
        },
        boat: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return todoLists;
  }

  /**
   * Get a specific todo list by ID
   */
  async getListById(id: string): Promise<TodoListWithItems | null> {
    const todoList = await prisma.todoList.findUnique({
      where: { id },
      include: {
        items: {
          orderBy: { createdAt: 'asc' }
        },
        boat: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return todoList;
  }

  /**
   * Update a todo list
   */
  async updateList(id: string, data: TodoListUpdateDTO): Promise<TodoListWithItems> {
    // Verify the list exists
    const existingList = await prisma.todoList.findUnique({
      where: { id }
    });
    if (!existingList) {
      throw new Error('Todo list not found');
    }

    // If title is being updated, validate it
    if (data.title !== undefined && (!data.title || data.title.trim() === '')) {
      throw new Error('Todo list title is required');
    }

    // If boatId is being updated, verify the boat exists
    if (data.boatId) {
      const boat = await prisma.boat.findUnique({
        where: { id: data.boatId }
      });
      if (!boat) {
        throw new Error('Boat not found');
      }
    }

    const updateData: any = {};
    if (data.title !== undefined) {
      updateData.title = data.title.trim();
    }
    if (data.boatId !== undefined) {
      updateData.boatId = data.boatId || null;
    }

    const todoList = await prisma.todoList.update({
      where: { id },
      data: updateData,
      include: {
        items: {
          orderBy: { createdAt: 'asc' }
        },
        boat: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return todoList;
  }

  /**
   * Delete a todo list and all its items
   */
  async deleteList(id: string): Promise<void> {
    // Verify the list exists
    const existingList = await prisma.todoList.findUnique({
      where: { id }
    });
    if (!existingList) {
      throw new Error('Todo list not found');
    }

    // Delete the list (items will be cascade deleted)
    await prisma.todoList.delete({
      where: { id }
    });
  }

  /**
   * Add an item to a todo list
   */
  async addItem(listId: string, data: TodoItemCreateDTO): Promise<TodoItem> {
    if (!data.content || data.content.trim() === '') {
      throw new Error('Todo item content is required');
    }

    // Verify the list exists
    const list = await prisma.todoList.findUnique({
      where: { id: listId }
    });
    if (!list) {
      throw new Error('Todo list not found');
    }

    const item = await prisma.todoItem.create({
      data: {
        todoListId: listId,
        content: data.content.trim()
      }
    });

    return item;
  }

  /**
   * Update a todo item
   */
  async updateItem(itemId: string, data: TodoItemUpdateDTO): Promise<TodoItem> {
    // Verify the item exists
    const existingItem = await prisma.todoItem.findUnique({
      where: { id: itemId }
    });
    if (!existingItem) {
      throw new Error('Todo item not found');
    }

    // If content is being updated, validate it
    if (data.content !== undefined && (!data.content || data.content.trim() === '')) {
      throw new Error('Todo item content is required');
    }

    const updateData: any = {};
    if (data.content !== undefined) {
      updateData.content = data.content.trim();
    }
    if (data.completed !== undefined) {
      updateData.completed = data.completed;
      // Set completion timestamp when marking as complete
      if (data.completed) {
        updateData.completedAt = new Date();
      } else {
        updateData.completedAt = null;
      }
    }

    const item = await prisma.todoItem.update({
      where: { id: itemId },
      data: updateData
    });

    return item;
  }

  /**
   * Toggle completion status of a todo item
   */
  async toggleItemCompletion(itemId: string): Promise<TodoItem> {
    // Get current item state
    const existingItem = await prisma.todoItem.findUnique({
      where: { id: itemId }
    });
    if (!existingItem) {
      throw new Error('Todo item not found');
    }

    // Toggle completion status
    const newCompleted = !existingItem.completed;
    const updateData: any = {
      completed: newCompleted
    };

    // Set completion timestamp when marking as complete
    if (newCompleted) {
      updateData.completedAt = new Date();
    } else {
      updateData.completedAt = null;
    }

    const item = await prisma.todoItem.update({
      where: { id: itemId },
      data: updateData
    });

    return item;
  }

  /**
   * Delete a todo item
   */
  async deleteItem(itemId: string): Promise<void> {
    // Verify the item exists
    const existingItem = await prisma.todoItem.findUnique({
      where: { id: itemId }
    });
    if (!existingItem) {
      throw new Error('Todo item not found');
    }

    await prisma.todoItem.delete({
      where: { id: itemId }
    });
  }

  /**
   * Get items for a specific todo list
   */
  async getItemsByListId(listId: string): Promise<TodoItem[]> {
    const items = await prisma.todoItem.findMany({
      where: { todoListId: listId },
      orderBy: { createdAt: 'asc' }
    });

    return items;
  }
}

export const todoService = new TodoService();