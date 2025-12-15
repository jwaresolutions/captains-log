import { PrismaClient } from '@prisma/client';
import { eventManagerService, MaintenanceEventCompletionDTO } from '../../src/services/eventManagerService';
import { templateManagerService } from '../../src/services/templateManagerService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

describe('EventManagerService', () => {
  beforeEach(async () => {
    // Clean up database
    await prisma.entityPhoto.deleteMany({});
    await prisma.photo.deleteMany({});
    await prisma.maintenanceEvent.deleteMany({});
    await prisma.maintenanceTemplate.deleteMany({});
    await prisma.boat.deleteMany({});
  });

  afterAll(async () => {
    await prisma.entityPhoto.deleteMany({});
    await prisma.photo.deleteMany({});
    await prisma.maintenanceEvent.deleteMany({});
    await prisma.maintenanceTemplate.deleteMany({});
    await prisma.boat.deleteMany({});
    await prisma.$disconnect();
  });

  describe('getUpcomingEvents', () => {
    test('should return only incomplete events', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create events - one completed, one incomplete
      const incompleteEvent = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-06-01'),
          completedAt: null
        }
      });

      await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-05-01'),
          completedAt: new Date('2025-05-01')
        }
      });

      // Get upcoming events
      const upcomingEvents = await eventManagerService.getUpcomingEvents();

      // Should return only the incomplete event
      expect(upcomingEvents).toHaveLength(1);
      expect(upcomingEvents[0].id).toBe(incompleteEvent.id);
      expect(upcomingEvents[0].completedAt).toBeNull();
    });

    test('should filter by boat ID', async () => {
      // Create two boats
      const boat1 = await boatService.createBoat({ name: 'Boat 1' });
      const boat2 = await boatService.createBoat({ name: 'Boat 2' });

      // Create templates for each boat
      const template1 = await templateManagerService.createTemplate({
        boatId: boat1.id,
        title: 'Template 1',
        description: 'Description 1',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      const template2 = await templateManagerService.createTemplate({
        boatId: boat2.id,
        title: 'Template 2',
        description: 'Description 2',
        component: 'Hull',
        recurrence: { type: 'months', interval: 12 },
        estimatedCost: 200,
        estimatedTime: 120
      });

      // Create events for each template
      await prisma.maintenanceEvent.create({
        data: {
          templateId: template1.id,
          dueDate: new Date('2025-06-01')
        }
      });

      await prisma.maintenanceEvent.create({
        data: {
          templateId: template2.id,
          dueDate: new Date('2025-07-01')
        }
      });

      // Get upcoming events for boat1 only
      const boat1Events = await eventManagerService.getUpcomingEvents({ boatId: boat1.id });

      // Should return only boat1's event
      expect(boat1Events).toHaveLength(1);
      expect(boat1Events[0].template.boat.id).toBe(boat1.id);
    });
  });

  describe('getCompletedEvents', () => {
    test('should return only completed events', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create events - one completed, one incomplete
      await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-06-01'),
          completedAt: null
        }
      });

      const completedEvent = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-05-01'),
          completedAt: new Date('2025-05-01')
        }
      });

      // Get completed events
      const completedEvents = await eventManagerService.getCompletedEvents();

      // Should return only the completed event
      expect(completedEvents).toHaveLength(1);
      expect(completedEvents[0].id).toBe(completedEvent.id);
      expect(completedEvents[0].completedAt).not.toBeNull();
    });
  });

  describe('getEventDetails', () => {
    test('should return event with template and photo details', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create an event
      const event = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-06-01')
        }
      });

      // Get event details
      const eventDetails = await eventManagerService.getEventDetails(event.id);

      // Should return event with template details
      expect(eventDetails).toBeDefined();
      expect(eventDetails!.id).toBe(event.id);
      expect(eventDetails!.template.id).toBe(template.id);
      expect(eventDetails!.template.boat.id).toBe(boat.id);
      expect(eventDetails!.templatePhotos).toEqual([]);
      expect(eventDetails!.completionPhotos).toEqual([]);
    });

    test('should return null for non-existent event', async () => {
      const eventDetails = await eventManagerService.getEventDetails('non-existent-id');
      expect(eventDetails).toBeNull();
    });
  });

  describe('completeEvent', () => {
    test('should complete an event with cost, time, and notes', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create an event
      const event = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-06-01')
        }
      });

      // Complete the event
      const completionData: MaintenanceEventCompletionDTO = {
        actualCost: 150,
        actualTime: 90,
        notes: 'Completed successfully'
      };

      const completedEvent = await eventManagerService.completeEvent(event.id, completionData);

      // Verify completion
      expect(completedEvent.id).toBe(event.id);
      expect(completedEvent.completedAt).toBeDefined();
      expect(completedEvent.actualCost).toBe(150);
      expect(completedEvent.actualTime).toBe(90);
      expect(completedEvent.notes).toBe('Completed successfully');
    });

    test('should throw error for non-existent event', async () => {
      await expect(
        eventManagerService.completeEvent('non-existent-id', {})
      ).rejects.toThrow('Maintenance event not found');
    });

    test('should throw error for already completed event', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create a completed event
      const event = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-06-01'),
          completedAt: new Date('2025-06-01')
        }
      });

      // Try to complete again
      await expect(
        eventManagerService.completeEvent(event.id, {})
      ).rejects.toThrow('Maintenance event is already completed');
    });

    test('should validate completion data', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create an event
      const event = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-06-01')
        }
      });

      // Try to complete with negative cost
      await expect(
        eventManagerService.completeEvent(event.id, { actualCost: -10 })
      ).rejects.toThrow('Actual cost must be non-negative');

      // Try to complete with zero or negative time
      await expect(
        eventManagerService.completeEvent(event.id, { actualTime: 0 })
      ).rejects.toThrow('Actual time must be positive');
    });
  });

  describe('getEventsDueWithin', () => {
    test('should return events due within specified days', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create events with different due dates
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 8);

      const soonEvent = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: tomorrow
        }
      });

      await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: nextWeek
        }
      });

      // Get events due within 7 days
      const dueEvents = await eventManagerService.getEventsDueWithin(7);

      // Should return only the soon event
      expect(dueEvents).toHaveLength(1);
      expect(dueEvents[0].id).toBe(soonEvent.id);
    });

    test('should exclude events for disabled boats', async () => {
      // Create boats - one enabled, one disabled
      const enabledBoat = await boatService.createBoat({ name: 'Enabled Boat' });
      const disabledBoat = await boatService.createBoat({ name: 'Disabled Boat' });
      
      // Disable the second boat
      await boatService.toggleBoatStatus(disabledBoat.id, false);

      // Create templates for each boat
      const enabledTemplate = await templateManagerService.createTemplate({
        boatId: enabledBoat.id,
        title: 'Enabled Template',
        description: 'Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      const disabledTemplate = await templateManagerService.createTemplate({
        boatId: disabledBoat.id,
        title: 'Disabled Template',
        description: 'Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create events for both templates due tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      await prisma.maintenanceEvent.create({
        data: {
          templateId: enabledTemplate.id,
          dueDate: tomorrow
        }
      });

      await prisma.maintenanceEvent.create({
        data: {
          templateId: disabledTemplate.id,
          dueDate: tomorrow
        }
      });

      // Get events due within 7 days
      const dueEvents = await eventManagerService.getEventsDueWithin(7);

      // Should return only the event for the enabled boat
      expect(dueEvents).toHaveLength(1);
      expect(dueEvents[0].template.boat.enabled).toBe(true);
    });
  });

  describe('updateEventDueDate', () => {
    test('should update due date for incomplete event', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create an event
      const originalDueDate = new Date('2025-06-01');
      const event = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: originalDueDate
        }
      });

      // Update due date
      const newDueDate = new Date('2025-07-01');
      const updatedEvent = await eventManagerService.updateEventDueDate(event.id, newDueDate);

      // Verify update
      expect(updatedEvent.id).toBe(event.id);
      expect(updatedEvent.dueDate).toEqual(newDueDate);
    });

    test('should throw error for completed event', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create a completed event
      const event = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-06-01'),
          completedAt: new Date('2025-06-01')
        }
      });

      // Try to update due date
      await expect(
        eventManagerService.updateEventDueDate(event.id, new Date('2025-07-01'))
      ).rejects.toThrow('Cannot update due date of completed maintenance event');
    });
  });

  describe('event counts', () => {
    test('should return correct upcoming and completed event counts', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create events - 2 upcoming, 1 completed
      await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-06-01')
        }
      });

      await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-07-01')
        }
      });

      await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2025-05-01'),
          completedAt: new Date('2025-05-01')
        }
      });

      // Get counts
      const upcomingCount = await eventManagerService.getUpcomingEventCount();
      const completedCount = await eventManagerService.getCompletedEventCount();

      expect(upcomingCount).toBe(2);
      expect(completedCount).toBe(1);
    });
  });
});