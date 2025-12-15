import { PrismaClient } from '@prisma/client';
import { templateManagerService, MaintenanceTemplateCreateDTO } from '../../src/services/templateManagerService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

describe('TemplateManagerService', () => {
  let testBoatId: string;

  beforeEach(async () => {
    // Clean up database
    await prisma.entityPhoto.deleteMany({});
    await prisma.photo.deleteMany({});
    await prisma.maintenanceEvent.deleteMany({});
    await prisma.maintenanceTemplate.deleteMany({});
    await prisma.boat.deleteMany({});

    // Create a test boat
    const boat = await boatService.createBoat({ name: 'Test Boat' });
    testBoatId = boat.id;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('createTemplate', () => {
    it('should create a maintenance template with all required fields', async () => {
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      const template = await templateManagerService.createTemplate(templateData);

      expect(template).toBeDefined();
      expect(template.id).toBeDefined();
      expect(template.title).toBe('Oil Change');
      expect(template.description).toBe('Change engine oil and filter');
      expect(template.component).toBe('Engine');
      expect(template.estimatedCost).toBe(150.00);
      expect(template.estimatedTime).toBe(60);
      expect(template.isActive).toBe(true);
      expect(template.boat.id).toBe(testBoatId);
      expect(template.events).toEqual([]);
      expect(template.photos).toEqual([]);
    });

    it('should validate required fields', async () => {
      const invalidData = {
        boatId: testBoatId,
        title: '',
        description: 'Test description',
        component: 'Test component',
        recurrence: { type: 'months' as const, interval: 6 },
        estimatedCost: 100,
        estimatedTime: 30
      };

      await expect(templateManagerService.createTemplate(invalidData))
        .rejects.toThrow('Template title is required');
    });

    it('should validate boat exists', async () => {
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: 'non-existent-boat-id',
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      await expect(templateManagerService.createTemplate(templateData))
        .rejects.toThrow('Boat not found');
    });

    it('should validate recurrence schedule', async () => {
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'invalid' as any, interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      await expect(templateManagerService.createTemplate(templateData))
        .rejects.toThrow('Invalid recurrence type');
    });
  });

  describe('getTemplates', () => {
    it('should return empty array when no templates exist', async () => {
      const templates = await templateManagerService.getTemplates();
      expect(templates).toEqual([]);
    });

    it('should return templates for specific boat', async () => {
      // Create a template
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      await templateManagerService.createTemplate(templateData);

      const templates = await templateManagerService.getTemplates(testBoatId);
      expect(templates).toHaveLength(1);
      expect(templates[0].title).toBe('Oil Change');
    });
  });

  describe('updateTemplate', () => {
    it('should update template fields', async () => {
      // Create a template
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      const template = await templateManagerService.createTemplate(templateData);

      // Update the template
      const updatedTemplate = await templateManagerService.updateTemplate(template.id, {
        title: 'Updated Oil Change',
        estimatedCost: 200.00
      });

      expect(updatedTemplate.title).toBe('Updated Oil Change');
      expect(updatedTemplate.estimatedCost).toBe(200.00);
      expect(updatedTemplate.description).toBe('Change engine oil and filter'); // unchanged
    });
  });

  describe('deleteTemplate', () => {
    it('should delete template and cascade to events', async () => {
      // Create a template
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      const template = await templateManagerService.createTemplate(templateData);

      // Delete the template
      await templateManagerService.deleteTemplate(template.id);

      // Verify template is deleted
      const deletedTemplate = await templateManagerService.getTemplateById(template.id);
      expect(deletedTemplate).toBeNull();
    });
  });

  describe('toggleTemplateStatus', () => {
    it('should enable/disable template', async () => {
      // Create a template
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      const template = await templateManagerService.createTemplate(templateData);
      expect(template.isActive).toBe(true);

      // Disable the template
      const disabledTemplate = await templateManagerService.toggleTemplateStatus(template.id, false);
      expect(disabledTemplate.isActive).toBe(false);

      // Enable the template
      const enabledTemplate = await templateManagerService.toggleTemplateStatus(template.id, true);
      expect(enabledTemplate.isActive).toBe(true);
    });
  });

  describe('photo attachment', () => {
    it('should attach and detach photos from templates', async () => {
      // Create a template
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      const template = await templateManagerService.createTemplate(templateData);

      // Create a test photo
      const photo = await prisma.photo.create({
        data: {
          originalPath: '/test/original.jpg',
          webOptimizedPath: '/test/web.jpg',
          mimeType: 'image/jpeg',
          sizeBytes: 1024,
          category: 'reference'
        }
      });

      // Attach photo to template
      await templateManagerService.attachPhoto(template.id, photo.id);

      // Verify photo is attached
      const photos = await templateManagerService.getTemplatePhotos(template.id);
      expect(photos).toHaveLength(1);
      expect(photos[0].id).toBe(photo.id);

      // Verify template includes photos
      const templateWithPhotos = await templateManagerService.getTemplateById(template.id);
      expect(templateWithPhotos?.photos).toHaveLength(1);
      expect(templateWithPhotos?.photos[0].id).toBe(photo.id);

      // Detach photo from template
      await templateManagerService.detachPhoto(template.id, photo.id);

      // Verify photo is detached
      const photosAfterDetach = await templateManagerService.getTemplatePhotos(template.id);
      expect(photosAfterDetach).toHaveLength(0);
    });

    it('should prevent duplicate photo attachments', async () => {
      // Create a template
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      const template = await templateManagerService.createTemplate(templateData);

      // Create a test photo
      const photo = await prisma.photo.create({
        data: {
          originalPath: '/test/original.jpg',
          webOptimizedPath: '/test/web.jpg',
          mimeType: 'image/jpeg',
          sizeBytes: 1024,
          category: 'reference'
        }
      });

      // Attach photo to template
      await templateManagerService.attachPhoto(template.id, photo.id);

      // Try to attach the same photo again
      await expect(templateManagerService.attachPhoto(template.id, photo.id))
        .rejects.toThrow('Photo is already attached to this template');
    });

    it('should handle non-existent photo attachment', async () => {
      // Create a template
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      const template = await templateManagerService.createTemplate(templateData);

      // Try to attach non-existent photo
      await expect(templateManagerService.attachPhoto(template.id, 'non-existent-photo-id'))
        .rejects.toThrow('Photo not found');
    });

    it('should handle non-existent photo detachment', async () => {
      // Create a template
      const templateData: MaintenanceTemplateCreateDTO = {
        boatId: testBoatId,
        title: 'Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'months', interval: 6 },
        estimatedCost: 150.00,
        estimatedTime: 60
      };

      const template = await templateManagerService.createTemplate(templateData);

      // Try to detach non-existent photo
      await expect(templateManagerService.detachPhoto(template.id, 'non-existent-photo-id'))
        .rejects.toThrow('Photo attachment not found');
    });
  });
});