import { PrismaClient, MaintenanceTemplate, MaintenanceEvent, Photo } from '@prisma/client';
import { logger } from '../utils/logger';
import { templateInformationService, TemplateInformationChanges } from './templateInformationService';

const prisma = new PrismaClient();

export interface RecurrenceSchedule {
  type: 'days' | 'weeks' | 'months' | 'years' | 'engine_hours';
  interval: number;
}

export interface MaintenanceTemplateCreateDTO {
  boatId: string;
  title: string;
  description: string;
  component: string;
  recurrence: RecurrenceSchedule;
  estimatedCost: number;
  estimatedTime: number; // in minutes
}

export interface MaintenanceTemplateUpdateDTO {
  title?: string;
  description?: string;
  component?: string;
  recurrence?: RecurrenceSchedule;
  estimatedCost?: number;
  estimatedTime?: number; // in minutes
  isActive?: boolean;
}

export interface MaintenanceTemplateWithDetails extends MaintenanceTemplate {
  boat: {
    id: string;
    name: string;
    enabled: boolean;
  };
  events: MaintenanceEvent[];
  photos: Photo[];
}

export class TemplateManagerService {
  /**
   * Create a new maintenance template
   */
  async createTemplate(data: MaintenanceTemplateCreateDTO): Promise<MaintenanceTemplateWithDetails> {
    // Validate required fields
    this.validateTemplateData(data);

    // Verify the boat exists
    const boat = await prisma.boat.findUnique({
      where: { id: data.boatId }
    });
    if (!boat) {
      throw new Error('Boat not found');
    }

    // Validate recurrence
    this.validateRecurrence(data.recurrence);

    const template = await prisma.maintenanceTemplate.create({
      data: {
        boatId: data.boatId,
        title: data.title.trim(),
        description: data.description.trim(),
        component: data.component.trim(),
        recurrence: JSON.parse(JSON.stringify(data.recurrence)),
        estimatedCost: data.estimatedCost,
        estimatedTime: data.estimatedTime,
        isActive: true
      },
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        events: {
          orderBy: { dueDate: 'asc' }
        }
      }
    });

    // Get associated photos
    const photos = await this.getTemplatePhotos(template.id);

    logger.info('Maintenance template created', { 
      templateId: template.id, 
      boatId: data.boatId, 
      title: data.title 
    });

    return {
      ...template,
      photos
    };
  }

  /**
   * Get all maintenance templates with optional filters
   */
  async getTemplates(boatId?: string, activeOnly: boolean = false): Promise<MaintenanceTemplateWithDetails[]> {
    const where: any = {};
    if (boatId) {
      where.boatId = boatId;
    }
    if (activeOnly) {
      where.isActive = true;
    }

    const templates = await prisma.maintenanceTemplate.findMany({
      where,
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        events: {
          orderBy: { dueDate: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Get photos for each template
    const templatesWithPhotos = await Promise.all(
      templates.map(async (template) => ({
        ...template,
        photos: await this.getTemplatePhotos(template.id)
      }))
    );

    return templatesWithPhotos;
  }

  /**
   * Get a specific maintenance template by ID
   */
  async getTemplateById(id: string): Promise<MaintenanceTemplateWithDetails | null> {
    const template = await prisma.maintenanceTemplate.findUnique({
      where: { id },
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        events: {
          orderBy: { dueDate: 'asc' }
        }
      }
    });

    if (!template) {
      return null;
    }

    // Get associated photos
    const photos = await this.getTemplatePhotos(template.id);

    return {
      ...template,
      photos
    };
  }

  /**
   * Update a maintenance template (without propagation)
   */
  async updateTemplate(id: string, data: MaintenanceTemplateUpdateDTO): Promise<MaintenanceTemplateWithDetails> {
    // Verify the template exists
    const existingTemplate = await prisma.maintenanceTemplate.findUnique({
      where: { id }
    });
    if (!existingTemplate) {
      throw new Error('Maintenance template not found');
    }

    // Validate fields if being updated
    if (data.title !== undefined && (!data.title || data.title.trim() === '')) {
      throw new Error('Template title is required');
    }
    if (data.description !== undefined && (!data.description || data.description.trim() === '')) {
      throw new Error('Template description is required');
    }
    if (data.component !== undefined && (!data.component || data.component.trim() === '')) {
      throw new Error('Template component is required');
    }
    if (data.estimatedCost !== undefined && (data.estimatedCost < 0)) {
      throw new Error('Estimated cost must be non-negative');
    }
    if (data.estimatedTime !== undefined && (data.estimatedTime <= 0)) {
      throw new Error('Estimated time must be positive');
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
      updateData.description = data.description.trim();
    }
    if (data.component !== undefined) {
      updateData.component = data.component.trim();
    }
    if (data.recurrence !== undefined) {
      updateData.recurrence = JSON.parse(JSON.stringify(data.recurrence));
    }
    if (data.estimatedCost !== undefined) {
      updateData.estimatedCost = data.estimatedCost;
    }
    if (data.estimatedTime !== undefined) {
      updateData.estimatedTime = data.estimatedTime;
    }
    if (data.isActive !== undefined) {
      updateData.isActive = data.isActive;
    }

    const template = await prisma.maintenanceTemplate.update({
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
        events: {
          orderBy: { dueDate: 'asc' }
        }
      }
    });

    // Get associated photos
    const photos = await this.getTemplatePhotos(template.id);

    // If recurrence or active status changed, update notification schedules
    if (data.recurrence !== undefined || data.isActive !== undefined) {
      // Import here to avoid circular dependency
      const { notificationService } = await import('./notificationService');
      await notificationService.updateNotificationSchedulesForTemplate(id);
    }

    logger.info('Maintenance template updated', { templateId: id });

    return {
      ...template,
      photos
    };
  }

  /**
   * Update template information with propagation to future events
   */
  async updateTemplateWithPropagation(
    id: string, 
    data: MaintenanceTemplateUpdateDTO
  ): Promise<{ template: MaintenanceTemplateWithDetails; propagationResult?: any }> {
    // Check if any information fields are being updated that need propagation
    const informationChanges: TemplateInformationChanges = {};
    let needsPropagation = false;

    if (data.title !== undefined) {
      informationChanges.title = data.title;
      needsPropagation = true;
    }
    if (data.description !== undefined) {
      informationChanges.description = data.description;
      needsPropagation = true;
    }
    if (data.component !== undefined) {
      informationChanges.component = data.component;
      needsPropagation = true;
    }
    if (data.estimatedCost !== undefined) {
      informationChanges.estimatedCost = data.estimatedCost;
      needsPropagation = true;
    }
    if (data.estimatedTime !== undefined) {
      informationChanges.estimatedTime = data.estimatedTime;
      needsPropagation = true;
    }

    // If information fields are being updated, use the propagation service
    if (needsPropagation) {
      const propagationResult = await templateInformationService.applyInformationChanges(
        id, 
        informationChanges
      );

      // Update any remaining fields (like isActive, recurrence) using the regular update
      const remainingData: MaintenanceTemplateUpdateDTO = {};
      if (data.isActive !== undefined) remainingData.isActive = data.isActive;
      if (data.recurrence !== undefined) remainingData.recurrence = data.recurrence;

      let template: MaintenanceTemplateWithDetails;
      if (Object.keys(remainingData).length > 0) {
        template = await this.updateTemplate(id, remainingData);
      } else {
        // Just get the updated template
        const updatedTemplate = await this.getTemplateById(id);
        if (!updatedTemplate) {
          throw new Error('Template not found after update');
        }
        template = updatedTemplate;
      }

      return { template, propagationResult };
    } else {
      // No information fields being updated, use regular update
      const template = await this.updateTemplate(id, data);
      return { template };
    }
  }

  /**
   * Delete a maintenance template and cascade to future events
   */
  async deleteTemplate(id: string): Promise<void> {
    // Verify the template exists
    const existingTemplate = await prisma.maintenanceTemplate.findUnique({
      where: { id },
      include: {
        events: true
      }
    });
    if (!existingTemplate) {
      throw new Error('Maintenance template not found');
    }

    // Use transaction to ensure atomicity
    await prisma.$transaction(async (tx) => {
      // Delete all future events (cascade will handle this, but we want to be explicit)
      await tx.maintenanceEvent.deleteMany({
        where: { templateId: id }
      });

      // Delete template photos through EntityPhoto junction
      await tx.entityPhoto.deleteMany({
        where: {
          entityType: 'maintenance_template',
          entityId: id
        }
      });

      // Delete the template
      await tx.maintenanceTemplate.delete({
        where: { id }
      });
    });

    logger.info('Maintenance template deleted with cascade', { 
      templateId: id, 
      eventsDeleted: existingTemplate.events.length 
    });
  }

  /**
   * Enable or disable a maintenance template
   */
  async toggleTemplateStatus(id: string, isActive: boolean): Promise<MaintenanceTemplateWithDetails> {
    const template = await prisma.maintenanceTemplate.findUnique({
      where: { id }
    });

    if (!template) {
      throw new Error('Maintenance template not found');
    }

    const updated = await prisma.maintenanceTemplate.update({
      where: { id },
      data: { isActive },
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            enabled: true
          }
        },
        events: {
          orderBy: { dueDate: 'asc' }
        }
      }
    });

    // Get associated photos
    const photos = await this.getTemplatePhotos(updated.id);

    logger.info('Maintenance template status toggled', { templateId: id, isActive });

    return {
      ...updated,
      photos
    };
  }

  /**
   * Attach a photo to a maintenance template
   */
  async attachPhoto(templateId: string, photoId: string): Promise<void> {
    // Verify template exists
    const template = await prisma.maintenanceTemplate.findUnique({
      where: { id: templateId }
    });
    if (!template) {
      throw new Error('Maintenance template not found');
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
            entityType: 'maintenance_template',
            entityId: templateId
          }
        });

        // Update photo category to reference
        await tx.photo.update({
          where: { id: photoId },
          data: { category: 'reference' }
        });
      });

      logger.info('Photo attached to maintenance template as reference', { templateId, photoId });
    } catch (error: any) {
      if (error.code === 'P2002') { // Unique constraint violation
        throw new Error('Photo is already attached to this template');
      }
      throw error;
    }
  }

  /**
   * Detach a photo from a maintenance template
   */
  async detachPhoto(templateId: string, photoId: string): Promise<void> {
    const deleted = await prisma.entityPhoto.deleteMany({
      where: {
        photoId: photoId,
        entityType: 'maintenance_template',
        entityId: templateId
      }
    });

    if (deleted.count === 0) {
      throw new Error('Photo attachment not found');
    }

    logger.info('Photo detached from maintenance template', { templateId, photoId });
  }

  /**
   * Get all photos attached to a maintenance template
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
   * Validate template data
   */
  private validateTemplateData(data: MaintenanceTemplateCreateDTO): void {
    if (!data.boatId || data.boatId.trim() === '') {
      throw new Error('Boat ID is required');
    }
    if (!data.title || data.title.trim() === '') {
      throw new Error('Template title is required');
    }
    if (!data.description || data.description.trim() === '') {
      throw new Error('Template description is required');
    }
    if (!data.component || data.component.trim() === '') {
      throw new Error('Template component is required');
    }
    if (data.estimatedCost < 0) {
      throw new Error('Estimated cost must be non-negative');
    }
    if (data.estimatedTime <= 0) {
      throw new Error('Estimated time must be positive');
    }
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
}

export const templateManagerService = new TemplateManagerService();