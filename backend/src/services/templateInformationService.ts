import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';
import { offlineQueueService } from './offlineQueueService';

const prisma = new PrismaClient();

export interface TemplateInformationChanges {
  title?: string;
  description?: string;
  component?: string;
  estimatedCost?: number;
  estimatedTime?: number;
}

export interface TemplateInformationPreview {
  templateId: string;
  changes: TemplateInformationChanges;
  affectedEvents: Array<{
    id: string;
    dueDate: Date;
    currentTitle: string;
    currentDescription: string;
    currentComponent: string;
    currentEstimatedCost: number | null;
    currentEstimatedTime: number | null;
    newTitle?: string;
    newDescription?: string;
    newComponent?: string;
    newEstimatedCost?: number | null;
    newEstimatedTime?: number | null;
  }>;
  completedEventsCount: number;
  totalEventsCount: number;
}

export interface TemplateInformationUpdateResult {
  templateId: string;
  eventsUpdated: number;
  completedEventsPreserved: number;
  errors: string[];
}

export interface PhotoPropagationResult {
  templateId: string;
  eventsAffected: number;
  photosAdded: number;
  photosRemoved: number;
  errors: string[];
}

export class TemplateInformationService {
  /**
   * Preview the impact of template information changes on future events
   */
  async previewInformationChanges(
    templateId: string, 
    changes: TemplateInformationChanges
  ): Promise<TemplateInformationPreview> {
    // Get the template with its events
    const template = await prisma.maintenanceTemplate.findUnique({
      where: { id: templateId },
      include: {
        events: {
          orderBy: { dueDate: 'asc' }
        }
      }
    });

    if (!template) {
      throw new Error('Maintenance template not found');
    }

    // Separate future and completed events
    const now = new Date();
    const futureEvents = template.events.filter(event => 
      event.completedAt === null && event.dueDate > now
    );
    const completedEvents = template.events.filter(event => 
      event.completedAt !== null
    );

    // Build preview of affected events
    const affectedEvents = futureEvents.map(event => ({
      id: event.id,
      dueDate: event.dueDate,
      currentTitle: template.title,
      currentDescription: template.description,
      currentComponent: template.component,
      currentEstimatedCost: template.estimatedCost,
      currentEstimatedTime: template.estimatedTime,
      newTitle: changes.title !== undefined ? changes.title : template.title,
      newDescription: changes.description !== undefined ? changes.description : template.description,
      newComponent: changes.component !== undefined ? changes.component : template.component,
      newEstimatedCost: changes.estimatedCost !== undefined ? changes.estimatedCost : template.estimatedCost,
      newEstimatedTime: changes.estimatedTime !== undefined ? changes.estimatedTime : template.estimatedTime
    }));

    return {
      templateId,
      changes,
      affectedEvents,
      completedEventsCount: completedEvents.length,
      totalEventsCount: template.events.length
    };
  }

  /**
   * Apply template information changes to the template and propagate to future events
   */
  async applyInformationChanges(
    templateId: string,
    changes: TemplateInformationChanges
  ): Promise<TemplateInformationUpdateResult> {
    const result: TemplateInformationUpdateResult = {
      templateId,
      eventsUpdated: 0,
      completedEventsPreserved: 0,
      errors: []
    };

    try {
      await prisma.$transaction(async (tx) => {
        // Validate the template exists
        const template = await tx.maintenanceTemplate.findUnique({
          where: { id: templateId },
          include: {
            events: true
          }
        });

        if (!template) {
          throw new Error('Maintenance template not found');
        }

        // Validate the changes
        this.validateInformationChanges(changes);

        // Update the template with new information
        const updateData: any = {};
        if (changes.title !== undefined) {
          updateData.title = changes.title.trim();
        }
        if (changes.description !== undefined) {
          updateData.description = changes.description.trim();
        }
        if (changes.component !== undefined) {
          updateData.component = changes.component.trim();
        }
        if (changes.estimatedCost !== undefined) {
          updateData.estimatedCost = changes.estimatedCost;
        }
        if (changes.estimatedTime !== undefined) {
          updateData.estimatedTime = changes.estimatedTime;
        }

        await tx.maintenanceTemplate.update({
          where: { id: templateId },
          data: updateData
        });

        // Count completed events (these will be preserved)
        const completedEvents = template.events.filter(event => event.completedAt !== null);
        result.completedEventsPreserved = completedEvents.length;

        // Future events will automatically reflect template changes through the relationship
        // Count how many future events will be affected
        const now = new Date();
        const futureEvents = template.events.filter(event => 
          event.completedAt === null && event.dueDate > now
        );
        result.eventsUpdated = futureEvents.length;

        logger.info('Template information changes applied', {
          templateId,
          changes: Object.keys(changes),
          eventsUpdated: result.eventsUpdated,
          completedEventsPreserved: result.completedEventsPreserved
        });
      });
    } catch (error: any) {
      const errorMsg = `Failed to apply template information changes: ${error.message}`;
      result.errors.push(errorMsg);
      logger.error('Template information update failed', { 
        templateId, 
        error: error.message 
      });
    }

    return result;
  }

  /**
   * Propagate template photo changes to all related events
   */
  async propagatePhotoChanges(
    templateId: string,
    addedPhotoIds: string[] = [],
    removedPhotoIds: string[] = []
  ): Promise<PhotoPropagationResult> {
    const result: PhotoPropagationResult = {
      templateId,
      eventsAffected: 0,
      photosAdded: addedPhotoIds.length,
      photosRemoved: removedPhotoIds.length,
      errors: []
    };

    try {
      // Verify template exists and get event count
      const template = await prisma.maintenanceTemplate.findUnique({
        where: { id: templateId },
        include: {
          _count: {
            select: { events: true }
          }
        }
      });

      if (!template) {
        throw new Error('Maintenance template not found');
      }

      // Template photos are automatically visible on all events through the template relationship
      // No direct propagation needed since events reference template photos
      result.eventsAffected = template._count.events;

      logger.info('Template photo changes propagated', {
        templateId,
        eventsAffected: result.eventsAffected,
        photosAdded: result.photosAdded,
        photosRemoved: result.photosRemoved
      });
    } catch (error: any) {
      const errorMsg = `Failed to propagate photo changes: ${error.message}`;
      result.errors.push(errorMsg);
      logger.error('Photo propagation failed', { 
        templateId, 
        error: error.message 
      });
    }

    return result;
  }

  /**
   * Get template information changes that are queued for offline sync
   */
  async getQueuedChanges(templateId: string): Promise<TemplateInformationChanges | null> {
    const status = await offlineQueueService.getQueueStatus(templateId);
    return status.pendingChanges > 0 ? {} : null; // Simplified for now
  }

  /**
   * Queue template information changes for offline sync
   */
  async queueChangesForSync(
    templateId: string,
    changes: TemplateInformationChanges
  ): Promise<string> {
    return await offlineQueueService.queueTemplateChanges(templateId, changes);
  }

  /**
   * Process queued template information changes when connectivity is restored
   */
  async processQueuedChanges(): Promise<TemplateInformationUpdateResult[]> {
    const syncResult = await offlineQueueService.processQueuedChanges();
    
    // Convert sync result to template update results
    const results: TemplateInformationUpdateResult[] = [];
    
    if (syncResult.failed > 0) {
      // Create error results for failed syncs
      for (const error of syncResult.errors) {
        results.push({
          templateId: 'unknown',
          eventsUpdated: 0,
          completedEventsPreserved: 0,
          errors: [error]
        });
      }
    }

    logger.info('Processed queued template changes', {
      processed: syncResult.processed,
      successful: syncResult.successful,
      failed: syncResult.failed
    });

    return results;
  }

  /**
   * Validate template information changes
   */
  private validateInformationChanges(changes: TemplateInformationChanges): void {
    if (changes.title !== undefined && (!changes.title || changes.title.trim() === '')) {
      throw new Error('Template title cannot be empty');
    }
    if (changes.description !== undefined && (!changes.description || changes.description.trim() === '')) {
      throw new Error('Template description cannot be empty');
    }
    if (changes.component !== undefined && (!changes.component || changes.component.trim() === '')) {
      throw new Error('Template component cannot be empty');
    }
    if (changes.estimatedCost !== undefined && changes.estimatedCost < 0) {
      throw new Error('Estimated cost must be non-negative');
    }
    if (changes.estimatedTime !== undefined && changes.estimatedTime <= 0) {
      throw new Error('Estimated time must be positive');
    }
  }
}

export const templateInformationService = new TemplateInformationService();