import { PrismaClient, MaintenanceEvent, MaintenanceTemplate, Photo } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface MaintenanceEventCompletionDTO {
  actualCost?: number;
  actualTime?: number; // in minutes
  notes?: string;
}

export interface MaintenanceEventWithDetails extends MaintenanceEvent {
  template: MaintenanceTemplate & {
    boat: {
      id: string;
      name: string;
      enabled: boolean;
    };
  };
  templatePhotos: Photo[];
  completionPhotos: Photo[];
}

export interface EventFilterOptions {
  boatId?: string;
  templateId?: string;
  limit?: number;
  offset?: number;
}

export class EventManagerService {
  /**
   * Get upcoming (incomplete) maintenance events
   */
  async getUpcomingEvents(options: EventFilterOptions = {}): Promise<MaintenanceEventWithDetails[]> {
    const where: any = {
      completedAt: null // Only incomplete events
    };

    if (options.boatId) {
      where.template = {
        boatId: options.boatId
      };
    }

    if (options.templateId) {
      where.templateId = options.templateId;
    }

    const events = await prisma.maintenanceEvent.findMany({
      where,
      include: {
        template: {
          include: {
            boat: {
              select: {
                id: true,
                name: true,
                enabled: true
              }
            }
          }
        }
      },
      orderBy: { dueDate: 'asc' },
      take: options.limit,
      skip: options.offset
    });

    // Get photos for each event
    const eventsWithPhotos = await Promise.all(
      events.map(async (event) => ({
        ...event,
        templatePhotos: await this.getTemplatePhotos(event.templateId),
        completionPhotos: await this.getCompletionPhotos(event.id)
      }))
    );

    return eventsWithPhotos;
  }

  /**
   * Get completed maintenance events
   */
  async getCompletedEvents(options: EventFilterOptions = {}): Promise<MaintenanceEventWithDetails[]> {
    const where: any = {
      completedAt: { not: null } // Only completed events
    };

    if (options.boatId) {
      where.template = {
        boatId: options.boatId
      };
    }

    if (options.templateId) {
      where.templateId = options.templateId;
    }

    const events = await prisma.maintenanceEvent.findMany({
      where,
      include: {
        template: {
          include: {
            boat: {
              select: {
                id: true,
                name: true,
                enabled: true
              }
            }
          }
        }
      },
      orderBy: { completedAt: 'desc' },
      take: options.limit,
      skip: options.offset
    });

    // Get photos for each event
    const eventsWithPhotos = await Promise.all(
      events.map(async (event) => ({
        ...event,
        templatePhotos: await this.getTemplatePhotos(event.templateId),
        completionPhotos: await this.getCompletionPhotos(event.id)
      }))
    );

    return eventsWithPhotos;
  }

  /**
   * Get detailed information for a specific maintenance event
   */
  async getEventDetails(eventId: string): Promise<MaintenanceEventWithDetails | null> {
    const event = await prisma.maintenanceEvent.findUnique({
      where: { id: eventId },
      include: {
        template: {
          include: {
            boat: {
              select: {
                id: true,
                name: true,
                enabled: true
              }
            }
          }
        }
      }
    });

    if (!event) {
      return null;
    }

    // Get photos for the event
    const templatePhotos = await this.getTemplatePhotos(event.templateId);
    const completionPhotos = await this.getCompletionPhotos(event.id);

    return {
      ...event,
      templatePhotos,
      completionPhotos
    };
  }

  /**
   * Complete a maintenance event with cost, notes, and photo recording
   */
  async completeEvent(eventId: string, completionData: MaintenanceEventCompletionDTO): Promise<MaintenanceEventWithDetails> {
    // Verify the event exists and is not already completed
    const existingEvent = await prisma.maintenanceEvent.findUnique({
      where: { id: eventId }
    });

    if (!existingEvent) {
      throw new Error('Maintenance event not found');
    }

    if (existingEvent.completedAt) {
      throw new Error('Maintenance event is already completed');
    }

    // Validate completion data
    if (completionData.actualCost !== undefined && completionData.actualCost < 0) {
      throw new Error('Actual cost must be non-negative');
    }

    if (completionData.actualTime !== undefined && completionData.actualTime <= 0) {
      throw new Error('Actual time must be positive');
    }

    // Update the event with completion data
    const completedEvent = await prisma.maintenanceEvent.update({
      where: { id: eventId },
      data: {
        completedAt: new Date(),
        actualCost: completionData.actualCost || null,
        actualTime: completionData.actualTime || null,
        notes: completionData.notes?.trim() || null
      },
      include: {
        template: {
          include: {
            boat: {
              select: {
                id: true,
                name: true,
                enabled: true
              }
            }
          }
        }
      }
    });

    // Get photos for the completed event
    const templatePhotos = await this.getTemplatePhotos(completedEvent.templateId);
    const completionPhotos = await this.getCompletionPhotos(completedEvent.id);

    // Remove notifications for the completed event
    // Import here to avoid circular dependency
    const { notificationService } = await import('./notificationService');
    await notificationService.removeNotificationsForCompletedEvent(eventId);

    logger.info('Maintenance event completed', {
      eventId,
      templateId: completedEvent.templateId,
      boatId: completedEvent.template.boat.id,
      actualCost: completionData.actualCost,
      actualTime: completionData.actualTime
    });

    return {
      ...completedEvent,
      templatePhotos,
      completionPhotos
    };
  }

  /**
   * Attach a completion photo to a maintenance event
   */
  async attachCompletionPhoto(eventId: string, photoId: string): Promise<void> {
    // Verify event exists
    const event = await prisma.maintenanceEvent.findUnique({
      where: { id: eventId }
    });
    if (!event) {
      throw new Error('Maintenance event not found');
    }

    // Verify photo exists
    const photo = await prisma.photo.findUnique({
      where: { id: photoId }
    });
    if (!photo) {
      throw new Error('Photo not found');
    }

    // Create the association using EntityPhoto junction table and update category
    try {
      await prisma.$transaction(async (tx) => {
        // Create the association
        await tx.entityPhoto.create({
          data: {
            photoId: photoId,
            entityType: 'maintenance_event',
            entityId: eventId
          }
        });

        // Update photo category to completion
        await tx.photo.update({
          where: { id: photoId },
          data: { category: 'completion' }
        });
      });

      logger.info('Completion photo attached to maintenance event', { eventId, photoId });
    } catch (error: any) {
      if (error.code === 'P2002') { // Unique constraint violation
        throw new Error('Photo is already attached to this event');
      }
      throw error;
    }
  }

  /**
   * Detach a completion photo from a maintenance event
   */
  async detachCompletionPhoto(eventId: string, photoId: string): Promise<void> {
    const deleted = await prisma.entityPhoto.deleteMany({
      where: {
        photoId: photoId,
        entityType: 'maintenance_event',
        entityId: eventId
      }
    });

    if (deleted.count === 0) {
      throw new Error('Photo attachment not found');
    }

    logger.info('Completion photo detached from maintenance event', { eventId, photoId });
  }

  /**
   * Get all template photos for a maintenance event (via template relationship)
   */
  async getTemplatePhotos(templateId: string): Promise<Photo[]> {
    const entityPhotos = await prisma.entityPhoto.findMany({
      where: {
        entityType: 'maintenance_template',
        entityId: templateId,
        photo: {
          category: 'reference'
        }
      },
      include: {
        photo: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    return entityPhotos.map(ep => ep.photo);
  }

  /**
   * Get all completion photos for a maintenance event
   */
  async getCompletionPhotos(eventId: string): Promise<Photo[]> {
    const entityPhotos = await prisma.entityPhoto.findMany({
      where: {
        entityType: 'maintenance_event',
        entityId: eventId,
        photo: {
          category: 'completion'
        }
      },
      include: {
        photo: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    return entityPhotos.map(ep => ep.photo);
  }

  /**
   * Get events due within a specified number of days (for notifications)
   */
  async getEventsDueWithin(days: number = 7): Promise<MaintenanceEventWithDetails[]> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() + days);

    const events = await prisma.maintenanceEvent.findMany({
      where: {
        dueDate: {
          lte: cutoffDate
        },
        completedAt: null, // Only incomplete events
        template: {
          boat: {
            enabled: true // Only for enabled boats
          }
        }
      },
      include: {
        template: {
          include: {
            boat: {
              select: {
                id: true,
                name: true,
                enabled: true
              }
            }
          }
        }
      },
      orderBy: { dueDate: 'asc' }
    });

    // Get photos for each event
    const eventsWithPhotos = await Promise.all(
      events.map(async (event) => ({
        ...event,
        templatePhotos: await this.getTemplatePhotos(event.templateId),
        completionPhotos: await this.getCompletionPhotos(event.id)
      }))
    );

    return eventsWithPhotos;
  }

  /**
   * Update the due date of a maintenance event
   */
  async updateEventDueDate(eventId: string, newDueDate: Date): Promise<MaintenanceEventWithDetails> {
    // Verify the event exists
    const existingEvent = await prisma.maintenanceEvent.findUnique({
      where: { id: eventId }
    });

    if (!existingEvent) {
      throw new Error('Maintenance event not found');
    }

    // Don't allow updating due date of completed events
    if (existingEvent.completedAt) {
      throw new Error('Cannot update due date of completed maintenance event');
    }

    // Update the due date
    const updatedEvent = await prisma.maintenanceEvent.update({
      where: { id: eventId },
      data: { dueDate: newDueDate },
      include: {
        template: {
          include: {
            boat: {
              select: {
                id: true,
                name: true,
                enabled: true
              }
            }
          }
        }
      }
    });

    // Get photos for the event
    const templatePhotos = await this.getTemplatePhotos(updatedEvent.templateId);
    const completionPhotos = await this.getCompletionPhotos(updatedEvent.id);

    logger.info('Maintenance event due date updated', {
      eventId,
      oldDueDate: existingEvent.dueDate,
      newDueDate
    });

    return {
      ...updatedEvent,
      templatePhotos,
      completionPhotos
    };
  }

  /**
   * Get count of upcoming events for a boat
   */
  async getUpcomingEventCount(boatId?: string): Promise<number> {
    const where: any = {
      completedAt: null
    };

    if (boatId) {
      where.template = {
        boatId: boatId
      };
    }

    return await prisma.maintenanceEvent.count({ where });
  }

  /**
   * Get count of completed events for a boat
   */
  async getCompletedEventCount(boatId?: string): Promise<number> {
    const where: any = {
      completedAt: { not: null }
    };

    if (boatId) {
      where.template = {
        boatId: boatId
      };
    }

    return await prisma.maintenanceEvent.count({ where });
  }

  /**
   * Delete a maintenance event (only if not completed)
   */
  async deleteEvent(eventId: string): Promise<void> {
    // Verify the event exists
    const existingEvent = await prisma.maintenanceEvent.findUnique({
      where: { id: eventId }
    });

    if (!existingEvent) {
      throw new Error('Maintenance event not found');
    }

    // Don't allow deleting completed events
    if (existingEvent.completedAt) {
      throw new Error('Cannot delete completed maintenance event');
    }

    // Use transaction to ensure atomicity
    await prisma.$transaction(async (tx) => {
      // Delete completion photos through EntityPhoto junction
      await tx.entityPhoto.deleteMany({
        where: {
          entityType: 'maintenance_event',
          entityId: eventId
        }
      });

      // Delete the event
      await tx.maintenanceEvent.delete({
        where: { id: eventId }
      });
    });

    logger.info('Maintenance event deleted', { eventId });
  }
}

export const eventManagerService = new EventManagerService();