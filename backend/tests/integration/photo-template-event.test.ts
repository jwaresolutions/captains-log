import { PrismaClient } from '@prisma/client';
import { photoService } from '../../src/services/photoService';
import { templateManagerService } from '../../src/services/templateManagerService';
import { eventGeneratorService } from '../../src/services/eventGeneratorService';
import { eventManagerService } from '../../src/services/eventManagerService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

describe('Photo Management for Template-Event Structure', () => {
  let testBoatId: string;
  let testTemplateId: string;
  let testEventId: string;
  let templatePhotoId: string;
  let completionPhotoId: string;

  beforeEach(async () => {
    // Clean up database
    await prisma.entityPhoto.deleteMany();
    await prisma.photo.deleteMany();
    await prisma.maintenanceEvent.deleteMany();
    await prisma.maintenanceTemplate.deleteMany();
    await prisma.boat.deleteMany();

    // Create test boat
    const boat = await boatService.createBoat({ name: 'Test Boat' });
    testBoatId = boat.id;

    // Create test template
    const template = await templateManagerService.createTemplate({
      boatId: testBoatId,
      title: 'Test Template',
      description: 'Test Description',
      component: 'Engine',
      recurrence: { type: 'months', interval: 6 },
      estimatedCost: 100,
      estimatedTime: 60
    });
    testTemplateId = template.id;

    // Generate events from template
    await eventGeneratorService.generateEventsForTemplate(testTemplateId);
    
    // Get the first event
    const events = await eventManagerService.getUpcomingEvents({ templateId: testTemplateId });
    testEventId = events[0].id;

    // Create template photo (minimal JPEG data)
    const templatePhoto = await photoService.uploadPhoto({
      originalBuffer: Buffer.from([
        0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
        0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
        0x00, 0x08, 0x06, 0x06, 0x07, 0x06, 0x05, 0x08, 0x07, 0x07, 0x07, 0x09,
        0x09, 0x08, 0x0A, 0x0C, 0x14, 0x0D, 0x0C, 0x0B, 0x0B, 0x0C, 0x19, 0x12,
        0x13, 0x0F, 0x14, 0x1D, 0x1A, 0x1F, 0x1E, 0x1D, 0x1A, 0x1C, 0x1C, 0x20,
        0x24, 0x2E, 0x27, 0x20, 0x22, 0x2C, 0x23, 0x1C, 0x1C, 0x28, 0x37, 0x29,
        0x2C, 0x30, 0x31, 0x34, 0x34, 0x34, 0x1F, 0x27, 0x39, 0x3D, 0x38, 0x32,
        0x3C, 0x2E, 0x33, 0x34, 0x32, 0xFF, 0xC0, 0x00, 0x11, 0x08, 0x00, 0x01,
        0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0x02, 0x11, 0x01, 0x03, 0x11, 0x01,
        0xFF, 0xC4, 0x00, 0x14, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0xFF, 0xC4,
        0x00, 0x14, 0x10, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xDA, 0x00, 0x0C,
        0x03, 0x01, 0x00, 0x02, 0x11, 0x03, 0x11, 0x00, 0x3F, 0x00, 0x80, 0xFF, 0xD9
      ]),
      mimeType: 'image/jpeg'
    });
    templatePhotoId = templatePhoto.id;

    // Create completion photo (minimal JPEG data)
    const completionPhoto = await photoService.uploadPhoto({
      originalBuffer: Buffer.from([
        0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
        0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
        0x00, 0x08, 0x06, 0x06, 0x07, 0x06, 0x05, 0x08, 0x07, 0x07, 0x07, 0x09,
        0x09, 0x08, 0x0A, 0x0C, 0x14, 0x0D, 0x0C, 0x0B, 0x0B, 0x0C, 0x19, 0x12,
        0x13, 0x0F, 0x14, 0x1D, 0x1A, 0x1F, 0x1E, 0x1D, 0x1A, 0x1C, 0x1C, 0x20,
        0x24, 0x2E, 0x27, 0x20, 0x22, 0x2C, 0x23, 0x1C, 0x1C, 0x28, 0x37, 0x29,
        0x2C, 0x30, 0x31, 0x34, 0x34, 0x34, 0x1F, 0x27, 0x39, 0x3D, 0x38, 0x32,
        0x3C, 0x2E, 0x33, 0x34, 0x32, 0xFF, 0xC0, 0x00, 0x11, 0x08, 0x00, 0x01,
        0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0x02, 0x11, 0x01, 0x03, 0x11, 0x01,
        0xFF, 0xC4, 0x00, 0x14, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0xFF, 0xC4,
        0x00, 0x14, 0x10, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xDA, 0x00, 0x0C,
        0x03, 0x01, 0x00, 0x02, 0x11, 0x03, 0x11, 0x00, 0x3F, 0x00, 0x81, 0xFF, 0xD9
      ]),
      mimeType: 'image/jpeg'
    });
    completionPhotoId = completionPhoto.id;
  });

  afterEach(async () => {
    // Clean up database
    await prisma.entityPhoto.deleteMany();
    await prisma.photo.deleteMany();
    await prisma.maintenanceEvent.deleteMany();
    await prisma.maintenanceTemplate.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('Template Photo Management', () => {
    it('should categorize template photos as reference', async () => {
      await photoService.attachPhotoToEntity(templatePhotoId, 'maintenance_template', testTemplateId);
      
      const photo = await photoService.getPhoto(templatePhotoId);
      expect(photo?.category).toBe('reference');
    });

    it('should make template photos visible on all related events', async () => {
      await photoService.attachPhotoToEntity(templatePhotoId, 'maintenance_template', testTemplateId);
      
      const eventPhotos = await photoService.getEventDisplayPhotos(testEventId);
      
      expect(eventPhotos.templatePhotos).toHaveLength(1);
      expect(eventPhotos.templatePhotos[0].id).toBe(templatePhotoId);
      expect(eventPhotos.templatePhotos[0].category).toBe('reference');
    });

    it('should validate template photo visibility across events', async () => {
      await photoService.attachPhotoToEntity(templatePhotoId, 'maintenance_template', testTemplateId);
      
      const validation = await photoService.validateTemplatePhotoVisibility(testTemplateId);
      
      expect(validation.visibilityConfirmed).toBe(true);
      expect(validation.templatePhotos).toHaveLength(1);
      expect(validation.relatedEvents).toContain(testEventId);
    });
  });

  describe('Completion Photo Management', () => {
    it('should categorize completion photos as completion', async () => {
      await photoService.attachPhotoToEntity(completionPhotoId, 'maintenance_event', testEventId);
      
      const photo = await photoService.getPhoto(completionPhotoId);
      expect(photo?.category).toBe('completion');
    });

    it('should isolate completion photos to specific events', async () => {
      await photoService.attachPhotoToEntity(completionPhotoId, 'maintenance_event', testEventId);
      
      const eventPhotos = await photoService.getEventDisplayPhotos(testEventId);
      
      expect(eventPhotos.completionPhotos).toHaveLength(1);
      expect(eventPhotos.completionPhotos[0].id).toBe(completionPhotoId);
      expect(eventPhotos.completionPhotos[0].category).toBe('completion');
    });
  });

  describe('Combined Photo Display', () => {
    it('should display both template and completion photos for events', async () => {
      await photoService.attachPhotoToEntity(templatePhotoId, 'maintenance_template', testTemplateId);
      await photoService.attachPhotoToEntity(completionPhotoId, 'maintenance_event', testEventId);
      
      const eventPhotos = await photoService.getEventDisplayPhotos(testEventId);
      
      expect(eventPhotos.templatePhotos).toHaveLength(1);
      expect(eventPhotos.completionPhotos).toHaveLength(1);
      expect(eventPhotos.allPhotos).toHaveLength(2);
      
      expect(eventPhotos.categorizedPhotos).toHaveLength(2);
      expect(eventPhotos.categorizedPhotos[0].category).toBe('reference');
      expect(eventPhotos.categorizedPhotos[1].category).toBe('completion');
    });

    it('should provide photo statistics for events', async () => {
      await photoService.attachPhotoToEntity(templatePhotoId, 'maintenance_template', testTemplateId);
      await photoService.attachPhotoToEntity(completionPhotoId, 'maintenance_event', testEventId);
      
      const stats = await photoService.getPhotoStatistics('maintenance_event', testEventId);
      
      expect(stats.totalPhotos).toBe(2);
      expect(stats.templatePhotos).toBe(1);
      expect(stats.completionPhotos).toBe(1);
      expect(stats.categories.reference).toBe(1);
      expect(stats.categories.completion).toBe(1);
    });
  });

  describe('Photo Deletion', () => {
    it('should handle template photo deletion correctly', async () => {
      await photoService.attachPhotoToEntity(templatePhotoId, 'maintenance_template', testTemplateId);
      
      await photoService.deleteTemplatePhoto(templatePhotoId, testTemplateId);
      
      const photo = await photoService.getPhoto(templatePhotoId);
      expect(photo).toBeNull();
      
      const eventPhotos = await photoService.getEventDisplayPhotos(testEventId);
      expect(eventPhotos.templatePhotos).toHaveLength(0);
    });

    it('should handle completion photo deletion correctly', async () => {
      await photoService.attachPhotoToEntity(completionPhotoId, 'maintenance_event', testEventId);
      
      await photoService.deleteCompletionPhoto(completionPhotoId, testEventId);
      
      const photo = await photoService.getPhoto(completionPhotoId);
      expect(photo).toBeNull();
      
      const eventPhotos = await photoService.getEventDisplayPhotos(testEventId);
      expect(eventPhotos.completionPhotos).toHaveLength(0);
    });

    it('should validate photo type before deletion', async () => {
      await photoService.attachPhotoToEntity(templatePhotoId, 'maintenance_template', testTemplateId);
      
      await expect(
        photoService.deleteCompletionPhoto(templatePhotoId, testEventId)
      ).rejects.toThrow('Photo is not a completion photo');
    });
  });
});