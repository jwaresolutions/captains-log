import { PrismaClient } from '@prisma/client';
import { scheduleChangeService } from '../../src/services/scheduleChangeService';
import { templateManagerService } from '../../src/services/templateManagerService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

describe('Schedule Change Integration Tests', () => {
  beforeEach(async () => {
    // Clean up database
    await prisma.maintenanceEvent.deleteMany();
    await prisma.maintenanceTemplate.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('Schedule Change Preview', () => {
    it('should generate preview for schedule change', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a maintenance template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Oil Change',
        description: 'Regular oil change',
        component: 'Engine',
        recurrence: { type: 'months', interval: 3 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Generate some events first
      const { eventGeneratorService } = await import('../../src/services/eventGeneratorService');
      await eventGeneratorService.generateEventsForTemplate(template.id);

      // Preview changing from 3 months to 6 months
      const preview = await scheduleChangeService.previewScheduleChange(template.id, {
        type: 'months',
        interval: 6
      });

      expect(preview).toBeDefined();
      expect(preview.templateId).toBe(template.id);
      expect(preview.templateTitle).toBe('Oil Change');
      expect(preview.currentRecurrence).toEqual({ type: 'months', interval: 3 });
      expect(preview.newRecurrence).toEqual({ type: 'months', interval: 6 });
      
      // Should have some affected events or events to delete/create
      const totalChanges = preview.affectedEvents.length + 
                          preview.eventsToDelete.length + 
                          preview.eventsToCreate.length;
      expect(totalChanges).toBeGreaterThan(0);
    });

    it('should handle invalid template ID', async () => {
      await expect(
        scheduleChangeService.previewScheduleChange('invalid-id', {
          type: 'months',
          interval: 6
        })
      ).rejects.toThrow('Maintenance template not found');
    });

    it('should validate recurrence schedule', async () => {
      // Create a boat and template
      const boat = await boatService.createBoat({ name: 'Test Boat' });
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Oil Change',
        description: 'Regular oil change',
        component: 'Engine',
        recurrence: { type: 'months', interval: 3 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Test invalid recurrence type
      await expect(
        scheduleChangeService.previewScheduleChange(template.id, {
          type: 'invalid' as any,
          interval: 6
        })
      ).rejects.toThrow('Invalid recurrence type');

      // Test invalid interval
      await expect(
        scheduleChangeService.previewScheduleChange(template.id, {
          type: 'months',
          interval: 0
        })
      ).rejects.toThrow('Recurrence interval must be a positive number');
    });
  });

  describe('Schedule Change Application', () => {
    it('should apply schedule change successfully', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a maintenance template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Oil Change',
        description: 'Regular oil change',
        component: 'Engine',
        recurrence: { type: 'months', interval: 3 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Generate some events first
      const { eventGeneratorService } = await import('../../src/services/eventGeneratorService');
      await eventGeneratorService.generateEventsForTemplate(template.id);

      // Apply schedule change
      const result = await scheduleChangeService.applyScheduleChange(template.id, {
        type: 'months',
        interval: 6
      });

      expect(result.success).toBe(true);
      expect(result.errors).toHaveLength(0);

      // Verify template was updated
      const updatedTemplate = await templateManagerService.getTemplateById(template.id);
      expect(updatedTemplate?.recurrence).toEqual({ type: 'months', interval: 6 });

      // Should have some change in events (created, updated, or deleted)
      const totalChanges = result.eventsCreated + result.eventsUpdated + result.eventsDeleted;
      expect(totalChanges).toBeGreaterThan(0);
    });

    it('should handle invalid template ID in apply', async () => {
      const result = await scheduleChangeService.applyScheduleChange('invalid-id', {
        type: 'months',
        interval: 6
      });

      expect(result.success).toBe(false);
      expect(result.errors).toContain('Failed to apply schedule change: Maintenance template not found');
    });

    it('should preserve completed events during schedule change', async () => {
      // Create a boat and template
      const boat = await boatService.createBoat({ name: 'Test Boat' });
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Oil Change',
        description: 'Regular oil change',
        component: 'Engine',
        recurrence: { type: 'months', interval: 3 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Create a completed event manually
      const completedEvent = await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: new Date('2023-01-01'),
          completedAt: new Date('2023-01-01'),
          actualCost: 95,
          notes: 'Completed successfully'
        }
      });

      // Apply schedule change
      const result = await scheduleChangeService.applyScheduleChange(template.id, {
        type: 'months',
        interval: 6
      });

      expect(result.success).toBe(true);

      // Verify completed event still exists and unchanged
      const stillExists = await prisma.maintenanceEvent.findUnique({
        where: { id: completedEvent.id }
      });

      expect(stillExists).toBeDefined();
      expect(stillExists?.completedAt).toEqual(completedEvent.completedAt);
      expect(stillExists?.actualCost).toBe(95);
      expect(stillExists?.notes).toBe('Completed successfully');
    });
  });
});