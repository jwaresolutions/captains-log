import { PrismaClient, MaintenanceTemplate, MaintenanceEvent } from '@prisma/client';
import { logger } from '../utils/logger';
import { eventGeneratorService } from './eventGeneratorService';

const prisma = new PrismaClient();

export interface RecurrenceSchedule {
  type: 'days' | 'weeks' | 'months' | 'years' | 'engine_hours';
  interval: number;
}

export interface ScheduleChangePreview {
  templateId: string;
  templateTitle: string;
  currentRecurrence: RecurrenceSchedule;
  newRecurrence: RecurrenceSchedule;
  affectedEvents: {
    id: string;
    currentDueDate: Date;
    newDueDate: Date;
    title: string;
    component: string;
  }[];
  eventsToDelete: {
    id: string;
    dueDate: Date;
    title: string;
    component: string;
  }[];
  eventsToCreate: {
    dueDate: Date;
    title: string;
    component: string;
  }[];
  unchangedEvents: {
    id: string;
    dueDate: Date;
    title: string;
    component: string;
    reason: 'completed' | 'past_due';
  }[];
}

export interface ScheduleChangeResult {
  success: boolean;
  eventsUpdated: number;
  eventsDeleted: number;
  eventsCreated: number;
  errors: string[];
}

export class ScheduleChangeService {
  /**
   * Preview the impact of changing a template's recurrence schedule
   */
  async previewScheduleChange(templateId: string, newRecurrence: RecurrenceSchedule): Promise<ScheduleChangePreview> {
    // Get the template with its current events
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

    const currentRecurrence = template.recurrence as unknown as RecurrenceSchedule;
    
    // Validate the new recurrence
    this.validateRecurrence(newRecurrence);

    // Get current date for determining future vs past events
    const now = new Date();
    
    // Separate events into categories
    const futureEvents = template.events.filter(event => 
      event.completedAt === null && event.dueDate > now
    );
    
    const unchangedEvents = template.events.filter(event => 
      event.completedAt !== null || event.dueDate <= now
    ).map(event => ({
      id: event.id,
      dueDate: event.dueDate,
      title: template.title,
      component: template.component,
      reason: (event.completedAt !== null ? 'completed' : 'past_due') as 'completed' | 'past_due'
    }));

    // Calculate new event schedule
    const newEvents = this.calculateNewEventSchedule(template, newRecurrence, now);
    
    // Determine which events to update, delete, or create
    const { affectedEvents, eventsToDelete, eventsToCreate } = this.compareEventSchedules(
      futureEvents,
      newEvents,
      template
    );

    const preview: ScheduleChangePreview = {
      templateId,
      templateTitle: template.title,
      currentRecurrence,
      newRecurrence,
      affectedEvents,
      eventsToDelete,
      eventsToCreate,
      unchangedEvents
    };

    logger.info('Schedule change preview generated', {
      templateId,
      affectedEvents: affectedEvents.length,
      eventsToDelete: eventsToDelete.length,
      eventsToCreate: eventsToCreate.length,
      unchangedEvents: unchangedEvents.length
    });

    return preview;
  }

  /**
   * Apply the schedule change after user confirmation
   */
  async applyScheduleChange(templateId: string, newRecurrence: RecurrenceSchedule): Promise<ScheduleChangeResult> {
    const result: ScheduleChangeResult = {
      success: false,
      eventsUpdated: 0,
      eventsDeleted: 0,
      eventsCreated: 0,
      errors: []
    };

    try {
      // Get the preview to know what changes to make
      const preview = await this.previewScheduleChange(templateId, newRecurrence);

      // Use transaction to ensure atomicity
      await prisma.$transaction(async (tx) => {
        // Update the template with new recurrence
        await tx.maintenanceTemplate.update({
          where: { id: templateId },
          data: { recurrence: JSON.parse(JSON.stringify(newRecurrence)) }
        });

        // Delete events that are no longer needed
        if (preview.eventsToDelete.length > 0) {
          const deleteIds = preview.eventsToDelete.map(e => e.id);
          const deletedCount = await tx.maintenanceEvent.deleteMany({
            where: {
              id: { in: deleteIds },
              completedAt: null // Safety check - only delete incomplete events
            }
          });
          result.eventsDeleted = deletedCount.count;
        }

        // Update existing events with new due dates
        for (const affectedEvent of preview.affectedEvents) {
          await tx.maintenanceEvent.update({
            where: { id: affectedEvent.id },
            data: { dueDate: affectedEvent.newDueDate }
          });
          result.eventsUpdated++;
        }

        // Create new events
        for (const newEvent of preview.eventsToCreate) {
          await tx.maintenanceEvent.create({
            data: {
              templateId,
              dueDate: newEvent.dueDate
            }
          });
          result.eventsCreated++;
        }
      });

      result.success = true;

      logger.info('Schedule change applied successfully', {
        templateId,
        ...result
      });

    } catch (error: any) {
      const errorMsg = `Failed to apply schedule change: ${error.message}`;
      result.errors.push(errorMsg);
      logger.error('Schedule change application failed', {
        templateId,
        error: error.message
      });
    }

    return result;
  }

  /**
   * Calculate new event schedule based on new recurrence
   */
  private calculateNewEventSchedule(
    template: MaintenanceTemplate,
    newRecurrence: RecurrenceSchedule,
    fromDate: Date
  ): Array<{ dueDate: Date }> {
    const events: Array<{ dueDate: Date }> = [];
    const horizon = new Date();
    horizon.setFullYear(horizon.getFullYear() + 1); // One year horizon

    let currentDate = new Date(fromDate);
    let occurrenceNumber = 1;

    while (currentDate <= horizon) {
      events.push({
        dueDate: new Date(currentDate)
      });

      // Calculate next occurrence
      currentDate = eventGeneratorService.calculateDueDate(fromDate, newRecurrence, occurrenceNumber + 1);
      occurrenceNumber++;

      // Safety check to prevent infinite loops
      if (occurrenceNumber > 1000) {
        logger.warn('Event schedule calculation stopped due to excessive occurrences', {
          templateId: template.id,
          occurrenceNumber,
          newRecurrence
        });
        break;
      }
    }

    return events;
  }

  /**
   * Compare current and new event schedules to determine changes needed
   */
  private compareEventSchedules(
    currentEvents: MaintenanceEvent[],
    newEvents: Array<{ dueDate: Date }>,
    template: MaintenanceTemplate
  ): {
    affectedEvents: ScheduleChangePreview['affectedEvents'];
    eventsToDelete: ScheduleChangePreview['eventsToDelete'];
    eventsToCreate: ScheduleChangePreview['eventsToCreate'];
  } {
    const affectedEvents: ScheduleChangePreview['affectedEvents'] = [];
    const eventsToDelete: ScheduleChangePreview['eventsToDelete'] = [];
    const eventsToCreate: ScheduleChangePreview['eventsToCreate'] = [];

    // Sort events by date for easier comparison
    const sortedCurrentEvents = [...currentEvents].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    const sortedNewEvents = [...newEvents].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

    // Track which new events have been matched
    const matchedNewEvents = new Set<number>();

    // For each current event, try to find the closest new event
    for (const currentEvent of sortedCurrentEvents) {
      let closestNewEventIndex = -1;
      let closestTimeDiff = Infinity;

      // Find the closest new event that hasn't been matched yet
      for (let i = 0; i < sortedNewEvents.length; i++) {
        if (matchedNewEvents.has(i)) continue;

        const timeDiff = Math.abs(sortedNewEvents[i].dueDate.getTime() - currentEvent.dueDate.getTime());
        if (timeDiff < closestTimeDiff) {
          closestTimeDiff = timeDiff;
          closestNewEventIndex = i;
        }
      }

      // If we found a close match (within 7 days), consider it an update
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
      if (closestNewEventIndex >= 0 && closestTimeDiff < sevenDaysInMs) {
        const newEvent = sortedNewEvents[closestNewEventIndex];
        matchedNewEvents.add(closestNewEventIndex);

        // Only add to affected events if the date actually changes
        if (closestTimeDiff > 60 * 1000) { // More than 1 minute difference
          affectedEvents.push({
            id: currentEvent.id,
            currentDueDate: currentEvent.dueDate,
            newDueDate: newEvent.dueDate,
            title: template.title,
            component: template.component
          });
        }
      } else {
        // No close match found, this event should be deleted
        eventsToDelete.push({
          id: currentEvent.id,
          dueDate: currentEvent.dueDate,
          title: template.title,
          component: template.component
        });
      }
    }

    // Any unmatched new events should be created
    for (let i = 0; i < sortedNewEvents.length; i++) {
      if (!matchedNewEvents.has(i)) {
        eventsToCreate.push({
          dueDate: sortedNewEvents[i].dueDate,
          title: template.title,
          component: template.component
        });
      }
    }

    return { affectedEvents, eventsToDelete, eventsToCreate };
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

    // Additional validation for engine hours (not implemented yet)
    if (recurrence.type === 'engine_hours') {
      throw new Error('Engine hours recurrence is not yet implemented');
    }
  }
}

export const scheduleChangeService = new ScheduleChangeService();