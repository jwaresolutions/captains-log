import { templateInformationService } from '../../src/services/templateInformationService';
import { templateManagerService } from '../../src/services/templateManagerService';
import { boatService } from '../../src/services/boatService';
import { eventGeneratorService } from '../../src/services/eventGeneratorService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Template Information Service', () => {
  beforeEach(async () => {
    // Clean up database
    await prisma.maintenanceEvent.deleteMany();
    await prisma.maintenanceTemplate.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('Template Information Propagation', () => {
    it('should preview template information changes correctly', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Original Title',
        description: 'Original Description',
        component: 'Original Component',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Generate some events
      await eventGeneratorService.generateEventsForTemplate(template.id);

      // Preview changes
      const preview = await templateInformationService.previewInformationChanges(template.id, {
        title: 'New Title',
        description: 'New Description',
        estimatedCost: 150
      });

      expect(preview.templateId).toBe(template.id);
      expect(preview.changes.title).toBe('New Title');
      expect(preview.changes.description).toBe('New Description');
      expect(preview.changes.estimatedCost).toBe(150);
      expect(preview.affectedEvents.length).toBeGreaterThan(0);

      // Check that affected events show the changes
      const firstEvent = preview.affectedEvents[0];
      expect(firstEvent.currentTitle).toBe('Original Title');
      expect(firstEvent.newTitle).toBe('New Title');
      expect(firstEvent.currentDescription).toBe('Original Description');
      expect(firstEvent.newDescription).toBe('New Description');
      expect(firstEvent.currentEstimatedCost).toBe(100);
      expect(firstEvent.newEstimatedCost).toBe(150);
    });

    it('should apply template information changes and propagate to future events', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Original Title',
        description: 'Original Description',
        component: 'Original Component',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Generate some events
      await eventGeneratorService.generateEventsForTemplate(template.id);

      // Apply changes
      const result = await templateInformationService.applyInformationChanges(template.id, {
        title: 'Updated Title',
        description: 'Updated Description',
        estimatedCost: 200
      });

      expect(result.errors.length).toBe(0);
      expect(result.eventsUpdated).toBeGreaterThan(0);

      // Verify template was updated
      const updatedTemplate = await templateManagerService.getTemplateById(template.id);
      expect(updatedTemplate?.title).toBe('Updated Title');
      expect(updatedTemplate?.description).toBe('Updated Description');
      expect(updatedTemplate?.estimatedCost).toBe(200);

      // Since events reference the template, they should automatically show the updated information
      // This is the beauty of the relational design - no need to update individual events
    });

    it('should validate template information changes', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Original Title',
        description: 'Original Description',
        component: 'Original Component',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Try to apply invalid changes
      const result = await templateInformationService.applyInformationChanges(template.id, {
        title: '', // Empty title should fail
        estimatedCost: -50 // Negative cost should fail
      });

      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toContain('Template title cannot be empty');
    });

    it('should handle photo propagation', async () => {
      // Create a boat
      const boat = await boatService.createBoat({ name: 'Test Boat' });

      // Create a template
      const template = await templateManagerService.createTemplate({
        boatId: boat.id,
        title: 'Test Template',
        description: 'Test Description',
        component: 'Test Component',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 100,
        estimatedTime: 60
      });

      // Generate some events
      await eventGeneratorService.generateEventsForTemplate(template.id);

      // Propagate photo changes
      const result = await templateInformationService.propagatePhotoChanges(
        template.id,
        ['photo1', 'photo2'],
        ['photo3']
      );

      expect(result.errors.length).toBe(0);
      expect(result.eventsAffected).toBeGreaterThan(0);
      expect(result.photosAdded).toBe(2);
      expect(result.photosRemoved).toBe(1);
    });
  });
});