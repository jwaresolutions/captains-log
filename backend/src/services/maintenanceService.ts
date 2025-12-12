import { PrismaClient, MaintenanceTask, MaintenanceCompletion } from '@prisma/client';

const prisma = new PrismaClient();

export interface RecurrenceSchedule {
  type: 'days' | 'weeks' | 'months' | 'years' | 'engine_hours';
  interval: number;
}

export interface MaintenanceTaskCreateDTO {
  boatId: string;
  title: string;
  description?: string;
  component?: string;
  dueDate: Date;
  recurrence?: RecurrenceSchedule;
}

export interface MaintenanceTaskUpdateDTO {
  title?: string;
  description?: string;
  component?: string;
  dueDate?: Date;
  recurrence?: RecurrenceSchedule;
}

export interface MaintenanceCompletionCreateDTO {
  cost?: number;
  notes?: string;
}

export interface MaintenanceTaskWithDetails extends MaintenanceTask {
  boat: {
    id: string;
    name: string;
    enabled: boolean;
  };
  completions: MaintenanceCompletion[];
}

export class MaintenanceService {
  /**
   * Create a new maintenance task
   */
  async createTask(data: MaintenanceTaskCreateDTO): Promise<MaintenanceTaskWithDetails> {
    if (!data.title || data.title.trim() === '') {
      throw new Error('Maintenance task title is required');
    }

    if (!data.boatId) {
      throw new Error('Boat ID is required');
    }

    if (!data.dueDate) {
      throw new Error('Due date is required');
    }

    // Verify the boat exists
    const boat = await prisma.boat.findUnique({
      where: { id: data.boatId }
    });
    if (!boat) {
      throw new Error('Boat not found');
    }

    // Validate recurrence if provided
    if (data.recurrence) {
      this.validateRecurrence(data.recurrence);
    }

    const task = await prisma.maintenanceTask.create({
      data: {
        boatId: data.boatId,
        title: data.title.trim(),
        description: data.description?.trim() || null,
        component: data.component?.trim() || null,
        dueDate: data.dueDate,
        recurrence: data.recurrence ? JSON.parse(JSON.stringify(data.recurrence)) : null
      },
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        completions: {
          orderBy: { completedAt: 'desc' }
        }
      }
    });

    return task as MaintenanceTaskWithDetails;
  }

  /**
   * Get all maintenance tasks with optional filters
   */
  async getTasks(boatId?: string): Promise<MaintenanceTaskWithDetails[]> {
    const where: any = {};
    if (boatId) {
      where.boatId = boatId;
    }

    const tasks = await prisma.maintenanceTask.findMany({
      where,
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        completions: {
          orderBy: { completedAt: 'desc' }
        }
      },
      orderBy: { dueDate: 'asc' }
    });

    return tasks;
  }

  /**
   * Get a specific maintenance task by ID
   */
  async getTaskById(id: string): Promise<MaintenanceTaskWithDetails | null> {
    const task = await prisma.maintenanceTask.findUnique({
      where: { id },
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        completions: {
          orderBy: { completedAt: 'desc' }
        }
      }
    });

    return task;
  }

  /**
   * Update a maintenance task
   */
  async updateTask(id: string, data: MaintenanceTaskUpdateDTO): Promise<MaintenanceTaskWithDetails> {
    // Verify the task exists
    const existingTask = await prisma.maintenanceTask.findUnique({
      where: { id }
    });
    if (!existingTask) {
      throw new Error('Maintenance task not found');
    }

    // Validate title if being updated
    if (data.title !== undefined && (!data.title || data.title.trim() === '')) {
      throw new Error('Maintenance task title is required');
    }

    // Validate recurrence if being updated
    if (data.recurrence) {
      this.validateRecurrence(data.recurrence);
    }

    const updateData: any = {};
    if (data.title !== undefined) {
      updateData.title = data.title.trim();
    }
    if (data.description !== undefined) {
      updateData.description = data.description?.trim() || null;
    }
    if (data.component !== undefined) {
      updateData.component = data.component?.trim() || null;
    }
    if (data.dueDate !== undefined) {
      updateData.dueDate = data.dueDate;
    }
    if (data.recurrence !== undefined) {
      updateData.recurrence = data.recurrence ? JSON.parse(JSON.stringify(data.recurrence)) : null;
    }

    const task = await prisma.maintenanceTask.update({
      where: { id },
      data: updateData,
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        completions: {
          orderBy: { completedAt: 'desc' }
        }
      }
    });

    return task;
  }

  /**
   * Delete a maintenance task and all its completions
   */
  async deleteTask(id: string): Promise<void> {
    // Verify the task exists
    const existingTask = await prisma.maintenanceTask.findUnique({
      where: { id }
    });
    if (!existingTask) {
      throw new Error('Maintenance task not found');
    }

    // Delete the task (completions will be cascade deleted)
    await prisma.maintenanceTask.delete({
      where: { id }
    });
  }

  /**
   * Complete a maintenance task
   */
  async completeTask(taskId: string, data: MaintenanceCompletionCreateDTO): Promise<MaintenanceTaskWithDetails> {
    // Verify the task exists
    const existingTask = await prisma.maintenanceTask.findUnique({
      where: { id: taskId },
      include: {
        boat: true
      }
    });
    if (!existingTask) {
      throw new Error('Maintenance task not found');
    }

    // Create the completion record
    await prisma.maintenanceCompletion.create({
      data: {
        maintenanceTaskId: taskId,
        cost: data.cost || null,
        notes: data.notes?.trim() || null
      }
    });

    // If the task has recurrence, schedule the next occurrence
    if (existingTask.recurrence) {
      const recurrence = existingTask.recurrence as unknown as RecurrenceSchedule;
      const nextDueDate = this.calculateNextDueDate(existingTask.dueDate, recurrence);
      
      await prisma.maintenanceTask.update({
        where: { id: taskId },
        data: { dueDate: nextDueDate }
      });
    }

    // Return the updated task with completions
    const updatedTask = await this.getTaskById(taskId);
    if (!updatedTask) {
      throw new Error('Failed to retrieve updated task');
    }

    return updatedTask;
  }

  /**
   * Get maintenance history for a task
   */
  async getTaskHistory(taskId: string): Promise<MaintenanceCompletion[]> {
    // Verify the task exists
    const task = await prisma.maintenanceTask.findUnique({
      where: { id: taskId }
    });
    if (!task) {
      throw new Error('Maintenance task not found');
    }

    const completions = await prisma.maintenanceCompletion.findMany({
      where: { maintenanceTaskId: taskId },
      orderBy: { completedAt: 'desc' }
    });

    return completions;
  }

  /**
   * Get tasks due within a specified number of days
   */
  async getUpcomingTasks(daysAhead: number = 7): Promise<MaintenanceTaskWithDetails[]> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() + daysAhead);

    const tasks = await prisma.maintenanceTask.findMany({
      where: {
        dueDate: {
          lte: cutoffDate
        },
        boat: {
          enabled: true // Only include tasks for enabled boats
        }
      },
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        completions: {
          orderBy: { completedAt: 'desc' }
        }
      },
      orderBy: { dueDate: 'asc' }
    });

    return tasks;
  }

  /**
   * Validate recurrence schedule
   */
  private validateRecurrence(recurrence: RecurrenceSchedule): void {
    const validTypes = ['days', 'weeks', 'months', 'years', 'engine_hours'];
    if (!validTypes.includes(recurrence.type)) {
      throw new Error(`Invalid recurrence type. Must be one of: ${validTypes.join(', ')}`);
    }

    if (!recurrence.interval || recurrence.interval <= 0) {
      throw new Error('Recurrence interval must be a positive number');
    }

    // Additional validation for engine hours (not implemented yet)
    if (recurrence.type === 'engine_hours') {
      throw new Error('Engine hours recurrence is not yet implemented');
    }
  }

  /**
   * Calculate the next due date based on recurrence schedule
   */
  private calculateNextDueDate(currentDueDate: Date, recurrence: RecurrenceSchedule): Date {
    const nextDate = new Date(currentDueDate);

    switch (recurrence.type) {
      case 'days':
        nextDate.setDate(nextDate.getDate() + recurrence.interval);
        break;
      case 'weeks':
        nextDate.setDate(nextDate.getDate() + (recurrence.interval * 7));
        break;
      case 'months':
        nextDate.setMonth(nextDate.getMonth() + recurrence.interval);
        break;
      case 'years':
        nextDate.setFullYear(nextDate.getFullYear() + recurrence.interval);
        break;
      case 'engine_hours':
        // Engine hours recurrence would require tracking engine hours
        // For now, default to 30 days
        nextDate.setDate(nextDate.getDate() + 30);
        break;
      default:
        throw new Error(`Unsupported recurrence type: ${recurrence.type}`);
    }

    return nextDate;
  }
}

export const maintenanceService = new MaintenanceService();