import { PrismaClient, MaintenanceTemplate, MaintenanceEvent } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface RecurrenceSchedule {
  type: 'days' | 'weeks' | 'months' | 'years' | 'engine_hours';
  interval: number;
}

export interface GenerationReport {
  templatesProcessed: number;
  eventsCreated: number;
  errors: string[];
}

export interface UpdateReport {
  eventsUpdated: number;
  eventsDeleted: number;
  errors: string[];
}

export interface TemplateChanges {
  recurrence?: RecurrenceSchedule;
  title?: string;
  description?: string;
  component?: string;
  estimatedCost?: number;
  estimatedTime?: number;
}

export class EventGeneratorService {
  /**
   * Generate maintenance events for a specific template up to the horizon date
   */
  async generateEventsForTemplate(templateId: string, horizon?: Date): Promise<MaintenanceEvent[]> {
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

    if (!template.isActive) {
      logger.info('Skipping event generation for inactive template', { templateId });
      return [];
    }

    // Default horizon is one year from now
    const targetHorizon = horizon || this.getOneYearHorizon();
    
    // Parse recurrence from JSON
    const recurrence = template.recurrence as unknown as RecurrenceSchedule;
    this.validateRecurrence(recurrence);

    // Find the last event date or use current date as starting point
    const lastEventDate = template.events && template.events.length > 0 
      ? template.events[template.events.length - 1].dueDate
      : new Date();

    // Generate missing events
    const newEvents = this.calculateMissingEvents(
      template,
      lastEventDate,
      targetHorizon,
      recurrence
    );

    // Create the events in the database
    const createdEvents: MaintenanceEvent[] = [];
    for (const eventData of newEvents) {
      try {
        const event = await prisma.maintenanceEvent.create({
          data: eventData
        });
        createdEvents.push(event);
      } catch (error: any) {
        logger.error('Failed to create maintenance event', { 
          templateId, 
          dueDate: eventData.dueDate,
          error: error.message 
        });
      }
    }

    logger.info('Generated maintenance events for template', {
      templateId,
      eventsCreated: createdEvents.length,
      horizon: targetHorizon
    });

    return createdEvents;
  }

  /**
   * Generate missing events for all active templates (daily maintenance task)
   */
  async generateMissingEvents(): Promise<GenerationReport> {
    const report: GenerationReport = {
      templatesProcessed: 0,
      eventsCreated: 0,
      errors: []
    };

    try {
      // Get all active templates
      const activeTemplates = await prisma.maintenanceTemplate.findMany({
        where: { 
          isActive: true,
          boat: {
            enabled: true // Only process templates for enabled boats
          }
        },
        include: {
          boat: {
            select: { id: true, name: true, enabled: true }
          }
        }
      });

      const horizon = this.getOneYearHorizon();

      for (const template of activeTemplates) {
        try {
          const newEvents = await this.generateEventsForTemplate(template.id, horizon);
          report.templatesProcessed++;
          report.eventsCreated += newEvents.length;
        } catch (error: any) {
          const errorMsg = `Failed to generate events for template ${template.id}: ${error.message}`;
          report.errors.push(errorMsg);
          logger.error('Template event generation failed', { 
            templateId: template.id, 
            error: error.message 
          });
        }
      }

      logger.info('Daily maintenance event generation completed', report);
    } catch (error: any) {
      const errorMsg = `Daily maintenance task failed: ${error.message}`;
      report.errors.push(errorMsg);
      logger.error('Daily maintenance task failed', { error: error.message });
    }

    return report;
  }

  /**
   * Update future events when template changes
   */
  async updateFutureEvents(templateId: string, changes: TemplateChanges): Promise<UpdateReport> {
    const report: UpdateReport = {
      eventsUpdated: 0,
      eventsDeleted: 0,
      errors: []
    };

    try {
      const template = await prisma.maintenanceTemplate.findUnique({
        where: { id: templateId },
        include: {
          events: {
            where: {
              completedAt: null // Only future/incomplete events
            },
            orderBy: { dueDate: 'asc' }
          }
        }
      });

      if (!template) {
        throw new Error('Maintenance template not found');
      }

      // If recurrence changed, we need to regenerate all future events
      if (changes.recurrence) {
        await this.regenerateEventsForNewSchedule(template, changes.recurrence, report);
      } else {
        // Just update the existing events with new template data
        await this.updateExistingEvents(template.events, changes, report);
      }

      logger.info('Updated future events for template', {
        templateId,
        ...report
      });
    } catch (error: any) {
      const errorMsg = `Failed to update future events: ${error.message}`;
      report.errors.push(errorMsg);
      logger.error('Future events update failed', { templateId, error: error.message });
    }

    return report;
  }

  /**
   * Calculate due date based on recurrence pattern
   */
  calculateDueDate(baseDate: Date, recurrence: RecurrenceSchedule, occurrenceNumber: number = 1): Date {
    const dueDate = new Date(baseDate);

    switch (recurrence.type) {
      case 'days':
        dueDate.setDate(dueDate.getDate() + (recurrence.interval * occurrenceNumber));
        break;
      case 'weeks':
        dueDate.setDate(dueDate.getDate() + (recurrence.interval * 7 * occurrenceNumber));
        break;
      case 'months':
        dueDate.setMonth(dueDate.getMonth() + (recurrence.interval * occurrenceNumber));
        break;
      case 'years':
        dueDate.setFullYear(dueDate.getFullYear() + (recurrence.interval * occurrenceNumber));
        break;
      case 'engine_hours':
        // Engine hours recurrence would require tracking engine hours
        // For now, default to 30 days per occurrence
        dueDate.setDate(dueDate.getDate() + (30 * occurrenceNumber));
        logger.warn('Engine hours recurrence not fully implemented, using 30-day intervals', {
          recurrence,
          occurrenceNumber
        });
        break;
      default:
        throw new Error(`Unsupported recurrence type: ${recurrence.type}`);
    }

    return dueDate;
  }

  /**
   * Get one year horizon from current date
   */
  private getOneYearHorizon(): Date {
    const horizon = new Date();
    horizon.setFullYear(horizon.getFullYear() + 1);
    return horizon;
  }

  /**
   * Calculate missing events between last event date and horizon
   */
  private calculateMissingEvents(
    template: MaintenanceTemplate & { events?: MaintenanceEvent[] },
    lastEventDate: Date,
    horizon: Date,
    recurrence: RecurrenceSchedule
  ): Array<{
    templateId: string;
    dueDate: Date;
  }> {
    const events: Array<{ templateId: string; dueDate: Date }> = [];
    let currentDate = new Date(lastEventDate);
    let occurrenceNumber = 1;

    // If we have existing events, start from the next occurrence
    if (template.events && template.events.length > 0) {
      currentDate = this.calculateDueDate(lastEventDate, recurrence, 1);
    } else {
      // For new templates, start from current date
      currentDate = new Date();
    }

    while (currentDate <= horizon) {
      events.push({
        templateId: template.id,
        dueDate: new Date(currentDate)
      });

      // Calculate next occurrence
      currentDate = this.calculateDueDate(lastEventDate, recurrence, occurrenceNumber + 1);
      occurrenceNumber++;

      // Safety check to prevent infinite loops
      if (occurrenceNumber > 1000) {
        logger.warn('Event generation stopped due to excessive occurrences', {
          templateId: template.id,
          occurrenceNumber,
          recurrence
        });
        break;
      }
    }

    return events;
  }

  /**
   * Regenerate all future events for a new schedule
   */
  private async regenerateEventsForNewSchedule(
    template: MaintenanceTemplate & { events: MaintenanceEvent[] },
    newRecurrence: RecurrenceSchedule,
    report: UpdateReport
  ): Promise<void> {
    // Delete all future events
    const deletedCount = await prisma.maintenanceEvent.deleteMany({
      where: {
        templateId: template.id,
        completedAt: null
      }
    });
    report.eventsDeleted = deletedCount.count;

    // Update the template with new recurrence
    await prisma.maintenanceTemplate.update({
      where: { id: template.id },
      data: { recurrence: JSON.parse(JSON.stringify(newRecurrence)) }
    });

    // Generate new events with the new schedule
    const newEvents = await this.generateEventsForTemplate(template.id);
    report.eventsUpdated = newEvents.length;
  }

  /**
   * Update existing events with new template data
   */
  private async updateExistingEvents(
    events: MaintenanceEvent[],
    changes: TemplateChanges,
    report: UpdateReport
  ): Promise<void> {
    // Note: In the current schema, events don't store template data directly
    // They reference the template, so changes to template fields are automatically
    // reflected when events are displayed. This method is here for future extensibility
    // if we decide to denormalize some template data into events.
    
    logger.info('Template data changes will be reflected through template relationship', {
      eventsAffected: events.length,
      changes: Object.keys(changes)
    });

    // For now, we just count the events that would be affected
    report.eventsUpdated = events.length;
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

    // Reasonable limits to prevent excessive event generation
    const maxIntervals = {
      days: 365,      // Max 1 year interval
      weeks: 52,      // Max 1 year interval
      months: 12,     // Max 1 year interval
      years: 10,      // Max 10 year interval
      engine_hours: 1000 // Max 1000 hour interval
    };

    if (recurrence.interval > maxIntervals[recurrence.type]) {
      throw new Error(`Recurrence interval too large. Maximum for ${recurrence.type}: ${maxIntervals[recurrence.type]}`);
    }
  }
}

export const eventGeneratorService = new EventGeneratorService();