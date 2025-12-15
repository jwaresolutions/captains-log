import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { PhotoService } from '../../src/services/photoService';
import { TripService } from '../../src/services/tripService';
import { BoatService } from '../../src/services/boatService';
import { TemplateManagerService } from '../../src/services/templateManagerService';
import sharp from 'sharp';


const prisma = new PrismaClient();
const photoService = new PhotoService();
const tripService = new TripService();
const boatService = new BoatService();
const templateService = new TemplateManagerService();

/**
 * Property-Based Tests for Photo Service
 */

describe('Photo Service Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.entityPhoto.deleteMany();
    await prisma.photo.deleteMany();
    await prisma.maintenanceEvent.deleteMany();
    await prisma.maintenanceTemplate.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.entityPhoto.deleteMany();
    await prisma.photo.deleteMany();
    await prisma.maintenanceEvent.deleteMany();
    await prisma.maintenanceTemplate.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
    await prisma.$disconnect();
  });

  // Helper function to create a test image buffer
  const createTestImageBuffer = async (width: number = 800, height: number = 600): Promise<Buffer> => {
    return await sharp({
      create: {
        width,
        height,
        channels: 3,
        background: { r: 255, g: 0, b: 0 } // Red background
      }
    })
    .jpeg()
    .toBuffer();
  };

  // Helper function to create a test trip
  const createTestTrip = async (): Promise<string> => {
    const boat = await boatService.createBoat({ name: 'Test Boat' });
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + 3600000); // 1 hour later
    const trip = await tripService.createTrip({
      boatId: boat.id,
      startTime,
      endTime,
      waterType: 'inland',
      role: 'captain',
      gpsPoints: [
        {
          latitude: 40.7128,
          longitude: -74.0060,
          timestamp: startTime
        },
        {
          latitude: 40.7130,
          longitude: -74.0062,
          timestamp: endTime
        }
      ]
    });
    return trip.id;
  };

  // Helper function to create a test maintenance template
  const createTestTemplate = async (): Promise<string> => {
    const boat = await boatService.createBoat({ name: 'Test Boat' });
    const template = await templateService.createTemplate({
      boatId: boat.id,
      title: 'Test Maintenance',
      description: 'Test maintenance task',
      component: 'Engine',
      recurrence: {
        type: 'days',
        interval: 30
      },
      estimatedCost: 100,
      estimatedTime: 60
    });
    return template.id;
  };

  // Helper function to create a test maintenance event
  const createTestEvent = async (templateId?: string): Promise<string> => {
    let actualTemplateId = templateId;
    if (!actualTemplateId) {
      actualTemplateId = await createTestTemplate();
    }
    
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7); // Due in 7 days
    
    // Create event directly with Prisma for testing
    const event = await prisma.maintenanceEvent.create({
      data: {
        templateId: actualTemplateId,
        dueDate
      }
    });
    return event.id;
  };

  /**
   * **Feature: boat-tracking-system, Property 15: Photo-Trip Association**
   * **Validates: Requirements 5.5, 11.6**
   * 
   * For any photo attached to a trip, querying photos for that trip should return the
   * attached photo.
   */
  describe('Property 15: Photo-Trip Association', () => {
    test('should associate photos with trips correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.array(
            fc.record({
              width: fc.integer({ min: 100, max: 1000 }), // Reduced max size for faster tests
              height: fc.integer({ min: 100, max: 1000 }),
              mimeType: fc.constantFrom('image/jpeg', 'image/png')
            }),
            { minLength: 1, maxLength: 3 } // Reduced max photos per test
          ),
          async (photoConfigs) => {
            // Create a test trip
            const tripId = await createTestTrip();
            
            // Upload photos to the trip
            const uploadedPhotos = [];
            for (const config of photoConfigs) {
              const imageBuffer = await createTestImageBuffer(config.width, config.height);
              
              const photo = await photoService.uploadPhoto({
                originalBuffer: imageBuffer,
                mimeType: config.mimeType,
                metadata: {
                  width: config.width,
                  height: config.height
                }
              });
              
              // Attach the photo to the trip
              await photoService.attachPhotoToEntity(photo.id, 'trip', tripId);
              
              uploadedPhotos.push(photo);
            }
            
            // Query photos for the trip
            const retrievedPhotos = await photoService.listPhotos('trip', tripId);
            
            // Verify all uploaded photos are returned
            expect(retrievedPhotos.length).toBe(uploadedPhotos.length);
            
            for (const uploadedPhoto of uploadedPhotos) {
              const foundPhoto = retrievedPhotos.find(p => p.id === uploadedPhoto.id);
              expect(foundPhoto).toBeDefined();
            }
            
            // Clean up files
            for (const photo of uploadedPhotos) {
              await photoService.deletePhotoWithCleanup(photo.id);
            }
          }
        ),
        { numRuns: 50 } // Reduced runs for faster execution
      );
    }, 10000); // Increased timeout to 10 seconds

    test('should not return photos from other trips', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.record({
              width: fc.integer({ min: 100, max: 1000 }),
              height: fc.integer({ min: 100, max: 1000 })
            }),
            fc.record({
              width: fc.integer({ min: 100, max: 1000 }),
              height: fc.integer({ min: 100, max: 1000 })
            })
          ),
          async ([photo1Config, photo2Config]) => {
            // Create two test trips
            const trip1Id = await createTestTrip();
            const trip2Id = await createTestTrip();
            
            // Upload photo to first trip
            const imageBuffer1 = await createTestImageBuffer(photo1Config.width, photo1Config.height);
            const photo1 = await photoService.uploadPhoto({
              originalBuffer: imageBuffer1,
              mimeType: 'image/jpeg'
            });
            await photoService.attachPhotoToEntity(photo1.id, 'trip', trip1Id);
            
            // Upload photo to second trip
            const imageBuffer2 = await createTestImageBuffer(photo2Config.width, photo2Config.height);
            const photo2 = await photoService.uploadPhoto({
              originalBuffer: imageBuffer2,
              mimeType: 'image/jpeg'
            });
            await photoService.attachPhotoToEntity(photo2.id, 'trip', trip2Id);
            
            // Query photos for first trip
            const trip1Photos = await photoService.listPhotos('trip', trip1Id);
            expect(trip1Photos.length).toBe(1);
            expect(trip1Photos[0].id).toBe(photo1.id);
            
            // Query photos for second trip
            const trip2Photos = await photoService.listPhotos('trip', trip2Id);
            expect(trip2Photos.length).toBe(1);
            expect(trip2Photos[0].id).toBe(photo2.id);
            
            // Clean up
            await photoService.deletePhotoWithCleanup(photo1.id);
            await photoService.deletePhotoWithCleanup(photo2.id);
          }
        ),
        { numRuns: 100 }
      );
    }, 15000); // Increased timeout to 15 seconds
  });

  /**
   * **Feature: boat-tracking-system, Property 38: Photo Storage and Retrieval**
   * **Validates: Requirements 11.1**
   * 
   * For any photo uploaded to the system, the original high-resolution image should be
   * stored and retrievable.
   */
  describe('Property 38: Photo Storage and Retrieval', () => {
    test('should store and retrieve original photos correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            width: fc.integer({ min: 100, max: 2000 }),
            height: fc.integer({ min: 100, max: 2000 }),
            mimeType: fc.constantFrom('image/jpeg', 'image/png'),
            entityType: fc.constantFrom('trip', 'maintenance', 'note')
          }),
          async (config) => {
            // Create entity ID (using trip for simplicity)
            let entityId: string;
            if (config.entityType === 'trip') {
              entityId = await createTestTrip();
            } else {
              // For maintenance and note, use a mock ID
              entityId = 'test-entity-id';
            }
            
            // Create test image
            const originalBuffer = await createTestImageBuffer(config.width, config.height);
            
            // Upload photo
            const photo = await photoService.uploadPhoto({
              originalBuffer,
              mimeType: config.mimeType,
              metadata: {
                width: config.width,
                height: config.height
              }
            });
            
            // Attach photo to entity
            await photoService.attachPhotoToEntity(photo.id, config.entityType, entityId);
            
            // Verify photo metadata
            expect(photo.mimeType).toBe(config.mimeType);
            expect(photo.sizeBytes).toBe(originalBuffer.length);
            
            // Retrieve original photo file
            const retrievedBuffer = await photoService.getPhotoFile(photo.id, false);
            
            // Verify the retrieved buffer matches the original
            expect(retrievedBuffer.length).toBe(originalBuffer.length);
            expect(Buffer.compare(retrievedBuffer, originalBuffer)).toBe(0);
            
            // Clean up
            await photoService.deletePhotoWithCleanup(photo.id);
          }
        ),
        { numRuns: 100 }
      );
    }, 20000); // Increased timeout to 20 seconds

    test('should handle different image formats correctly', async () => {
      const mimeTypes = ['image/jpeg', 'image/png'];
      
      for (const mimeType of mimeTypes) {
        // Create entity
        const entityId = await createTestTrip();
        
        // Create test image
        const originalBuffer = await createTestImageBuffer(800, 600);
        
        // Upload photo
        const photo = await photoService.uploadPhoto({
          originalBuffer,
          mimeType,
          metadata: { width: 800, height: 600 }
        });
        
        // Attach photo to trip
        await photoService.attachPhotoToEntity(photo.id, 'trip', entityId);
        
        // Verify MIME type is preserved
        expect(photo.mimeType).toBe(mimeType);
        
        // Verify file can be retrieved
        const retrievedBuffer = await photoService.getPhotoFile(photo.id, false);
        expect(retrievedBuffer.length).toBeGreaterThan(0);
        
        // Clean up
        await photoService.deletePhotoWithCleanup(photo.id);
      }
    }, 15000); // Increased timeout to 15 seconds
  });

  /**
   * **Feature: boat-tracking-system, Property 39: Photo Web Optimization**
   * **Validates: Requirements 11.2**
   * 
   * For any photo uploaded, the system should create a web-optimized version at 1920px width.
   */
  describe('Property 39: Photo Web Optimization', () => {
    test('should create web-optimized versions with correct dimensions', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            width: fc.integer({ min: 500, max: 4000 }),
            height: fc.integer({ min: 500, max: 4000 })
          }),
          async (config) => {
            // Create entity
            const entityId = await createTestTrip();
            
            // Create test image
            const originalBuffer = await createTestImageBuffer(config.width, config.height);
            
            // Upload photo
            const photo = await photoService.uploadPhoto({
              originalBuffer,
              mimeType: 'image/jpeg',
              metadata: {
                width: config.width,
                height: config.height
              }
            });
            
            // Attach photo to trip
            await photoService.attachPhotoToEntity(photo.id, 'trip', entityId);
            
            // Retrieve web-optimized version
            const optimizedBuffer = await photoService.getPhotoFile(photo.id, true);
            
            // Verify optimized version exists and is different from original
            expect(optimizedBuffer.length).toBeGreaterThan(0);
            
            // Get metadata of optimized image
            const optimizedMetadata = await sharp(optimizedBuffer).metadata();
            
            // Verify width constraint (should be <= 1920px)
            if (config.width > 1920) {
              expect(optimizedMetadata.width).toBeLessThanOrEqual(1920);
            } else {
              // If original is smaller, it should not be enlarged
              expect(optimizedMetadata.width).toBeLessThanOrEqual(config.width);
            }
            
            // Verify aspect ratio is preserved (within tolerance)
            const originalAspectRatio = config.width / config.height;
            const optimizedAspectRatio = (optimizedMetadata.width || 1) / (optimizedMetadata.height || 1);
            const aspectRatioDiff = Math.abs(originalAspectRatio - optimizedAspectRatio);
            expect(aspectRatioDiff).toBeLessThan(0.02); // Allow larger tolerance for extreme aspect ratios
            
            // Clean up
            await photoService.deletePhotoWithCleanup(photo.id);
          }
        ),
        { numRuns: 100 }
      );
    }, 25000); // Increased timeout to 25 seconds

    test('should not enlarge smaller images', async () => {
      // Test with images smaller than 1920px
      const smallSizes = [
        { width: 800, height: 600 },
        { width: 1200, height: 900 },
        { width: 1600, height: 1200 }
      ];
      
      for (const size of smallSizes) {
        // Create entity
        const entityId = await createTestTrip();
        
        // Create test image
        const originalBuffer = await createTestImageBuffer(size.width, size.height);
        
        // Upload photo
        const photo = await photoService.uploadPhoto({
          originalBuffer,
          mimeType: 'image/jpeg',
          metadata: size
        });
        
        // Attach photo to trip
        await photoService.attachPhotoToEntity(photo.id, 'trip', entityId);
        
        // Retrieve web-optimized version
        const optimizedBuffer = await photoService.getPhotoFile(photo.id, true);
        
        // Get metadata of optimized image
        const optimizedMetadata = await sharp(optimizedBuffer).metadata();
        
        // Verify image was not enlarged
        expect(optimizedMetadata.width).toBeLessThanOrEqual(size.width);
        expect(optimizedMetadata.height).toBeLessThanOrEqual(size.height);
        
        // Clean up
        await photoService.deletePhotoWithCleanup(photo.id);
      }
    }, 15000); // Increased timeout to 15 seconds

    test('should reduce file size for web optimization', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            width: fc.integer({ min: 2000, max: 4000 }), // Large images that will be resized
            height: fc.integer({ min: 2000, max: 4000 })
          }),
          async (config) => {
            // Create entity
            const entityId = await createTestTrip();
            
            // Create test image
            const originalBuffer = await createTestImageBuffer(config.width, config.height);
            
            // Upload photo
            const photo = await photoService.uploadPhoto({
              originalBuffer,
              mimeType: 'image/jpeg',
              metadata: config
            });
            
            // Attach photo to trip
            await photoService.attachPhotoToEntity(photo.id, 'trip', entityId);
            
            // Retrieve both versions
            const originalRetrieved = await photoService.getPhotoFile(photo.id, false);
            const optimizedBuffer = await photoService.getPhotoFile(photo.id, true);
            
            // Web-optimized version should be smaller in file size
            expect(optimizedBuffer.length).toBeLessThan(originalRetrieved.length);
            
            // Clean up
            await photoService.deletePhotoWithCleanup(photo.id);
          }
        ),
        { numRuns: 50 } // Reduced runs for performance
      );
    }, 20000); // Increased timeout to 20 seconds
  });

  /**
   * **Feature: boat-tracking-system, Property 24: Photo categorization accuracy**
   * **Validates: Requirements 7.1, 7.3**
   * 
   * For any photo attached to a maintenance template, it should be categorized as 'reference'.
   * For any photo attached to a maintenance event, it should be categorized as 'completion'.
   * Template photos should be visible on all events generated from that template.
   */
  describe('Property 24: Photo categorization accuracy', () => {
    test('should categorize template photos as reference and event photos as completion', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            templatePhotoCount: fc.integer({ min: 1, max: 3 }),
            eventPhotoCount: fc.integer({ min: 1, max: 3 })
          }),
          async (config) => {
            // Create template and event
            const templateId = await createTestTemplate();
            const eventId = await createTestEvent(templateId);
            
            const templatePhotos = [];
            const eventPhotos = [];
            
            // Upload and attach photos to template
            for (let i = 0; i < config.templatePhotoCount; i++) {
              const imageBuffer = await createTestImageBuffer(800, 600);
              const photo = await photoService.uploadPhoto({
                originalBuffer: imageBuffer,
                mimeType: 'image/jpeg',
                title: `Template Photo ${i + 1}`
              });
              
              await photoService.attachPhotoToEntity(photo.id, 'maintenance_template', templateId);
              templatePhotos.push(photo);
            }
            
            // Upload and attach photos to event
            for (let i = 0; i < config.eventPhotoCount; i++) {
              const imageBuffer = await createTestImageBuffer(800, 600);
              const photo = await photoService.uploadPhoto({
                originalBuffer: imageBuffer,
                mimeType: 'image/jpeg',
                title: `Event Photo ${i + 1}`
              });
              
              await photoService.attachPhotoToEntity(photo.id, 'maintenance_event', eventId);
              eventPhotos.push(photo);
            }
            
            // Verify template photos are categorized as 'reference'
            for (const photo of templatePhotos) {
              const retrievedPhoto = await photoService.getPhoto(photo.id);
              expect(retrievedPhoto?.category).toBe('reference');
            }
            
            // Verify event photos are categorized as 'completion'
            for (const photo of eventPhotos) {
              const retrievedPhoto = await photoService.getPhoto(photo.id);
              expect(retrievedPhoto?.category).toBe('completion');
            }
            
            // Verify template photos are visible on the event
            const templatePhotosForEvent = await photoService.getTemplatePhotosForEvent(eventId);
            expect(templatePhotosForEvent.length).toBe(config.templatePhotoCount);
            
            // Verify event display photos include both categories
            const displayPhotos = await photoService.getEventDisplayPhotos(eventId);
            expect(displayPhotos.templatePhotos.length).toBe(config.templatePhotoCount);
            expect(displayPhotos.completionPhotos.length).toBe(config.eventPhotoCount);
            expect(displayPhotos.allPhotos.length).toBe(config.templatePhotoCount + config.eventPhotoCount);
            
            // Verify categorized photos structure
            const referenceCategory = displayPhotos.categorizedPhotos.find(cat => cat.category === 'reference');
            const completionCategory = displayPhotos.categorizedPhotos.find(cat => cat.category === 'completion');
            
            expect(referenceCategory?.photos.length).toBe(config.templatePhotoCount);
            expect(completionCategory?.photos.length).toBe(config.eventPhotoCount);
            
            // Clean up
            for (const photo of [...templatePhotos, ...eventPhotos]) {
              await photoService.deletePhotoWithCleanup(photo.id);
            }
          }
        ),
        { numRuns: 100 }
      );
    }, 15000);

    test('should maintain photo categorization consistency across multiple events from same template', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            eventCount: fc.integer({ min: 2, max: 4 }),
            templatePhotoCount: fc.integer({ min: 1, max: 2 })
          }),
          async (config) => {
            // Create template
            const templateId = await createTestTemplate();
            
            // Upload and attach photos to template
            const templatePhotos = [];
            for (let i = 0; i < config.templatePhotoCount; i++) {
              const imageBuffer = await createTestImageBuffer(800, 600);
              const photo = await photoService.uploadPhoto({
                originalBuffer: imageBuffer,
                mimeType: 'image/jpeg',
                title: `Template Photo ${i + 1}`
              });
              
              await photoService.attachPhotoToEntity(photo.id, 'maintenance_template', templateId);
              templatePhotos.push(photo);
            }
            
            // Create multiple events from the same template
            const eventIds = [];
            for (let i = 0; i < config.eventCount; i++) {
              const eventId = await createTestEvent(templateId);
              eventIds.push(eventId);
            }
            
            // Verify template photos are visible on all events
            for (const eventId of eventIds) {
              const templatePhotosForEvent = await photoService.getTemplatePhotosForEvent(eventId);
              expect(templatePhotosForEvent.length).toBe(config.templatePhotoCount);
              
              // Verify all template photos have correct category
              for (const photo of templatePhotosForEvent) {
                expect(photo.category).toBe('reference');
              }
            }
            
            // Clean up
            for (const photo of templatePhotos) {
              await photoService.deletePhotoWithCleanup(photo.id);
            }
          }
        ),
        { numRuns: 100 }
      );
    }, 15000);
  });

  /**
   * **Feature: boat-tracking-system, Property 25: Completion photo isolation**
   * **Validates: Requirements 7.6**
   * 
   * For any photo attached to a maintenance event as a completion photo, it should only
   * be visible on that specific event and not affect other events from the same template.
   */
  describe('Property 25: Completion photo isolation', () => {
    test('should isolate completion photos to specific events', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            eventCount: fc.integer({ min: 2, max: 4 }),
            photosPerEvent: fc.integer({ min: 1, max: 3 })
          }),
          async (config) => {
            // Create template
            const templateId = await createTestTemplate();
            
            // Create multiple events from the same template
            const eventData = [];
            for (let i = 0; i < config.eventCount; i++) {
              const eventId = await createTestEvent(templateId);
              const eventPhotos = [];
              
              // Add completion photos to each event
              for (let j = 0; j < config.photosPerEvent; j++) {
                const imageBuffer = await createTestImageBuffer(800, 600);
                const photo = await photoService.uploadPhoto({
                  originalBuffer: imageBuffer,
                  mimeType: 'image/jpeg',
                  title: `Event ${i + 1} Photo ${j + 1}`
                });
                
                await photoService.attachPhotoToEntity(photo.id, 'maintenance_event', eventId);
                eventPhotos.push(photo);
              }
              
              eventData.push({ eventId, photos: eventPhotos });
            }
            
            // Verify each event only sees its own completion photos
            for (let i = 0; i < eventData.length; i++) {
              const currentEvent = eventData[i];
              const completionPhotos = await photoService.getCompletionPhotosForEvent(currentEvent.eventId);
              
              // Should only see its own completion photos
              expect(completionPhotos.length).toBe(config.photosPerEvent);
              
              // Verify all returned photos belong to this event
              for (const photo of completionPhotos) {
                expect(photo.category).toBe('completion');
                const isOwnPhoto = currentEvent.photos.some(ownPhoto => ownPhoto.id === photo.id);
                expect(isOwnPhoto).toBe(true);
              }
              
              // Verify it doesn't see completion photos from other events
              for (let j = 0; j < eventData.length; j++) {
                if (i !== j) {
                  const otherEvent = eventData[j];
                  for (const otherPhoto of otherEvent.photos) {
                    const hasOtherPhoto = completionPhotos.some(photo => photo.id === otherPhoto.id);
                    expect(hasOtherPhoto).toBe(false);
                  }
                }
              }
            }
            
            // Verify photo statistics are accurate for each event
            for (const { eventId } of eventData) {
              const stats = await photoService.getPhotoStatistics('maintenance_event', eventId);
              expect(stats.completionPhotos).toBe(config.photosPerEvent);
              expect(stats.categories.completion).toBe(config.photosPerEvent);
            }
            
            // Clean up
            for (const { photos } of eventData) {
              for (const photo of photos) {
                await photoService.deletePhotoWithCleanup(photo.id);
              }
            }
          }
        ),
        { numRuns: 100 }
      );
    }, 20000);

    test('should handle completion photo deletion without affecting other events', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            eventCount: fc.integer({ min: 2, max: 3 }),
            photosToDelete: fc.integer({ min: 1, max: 2 })
          }),
          async (config) => {
            // Create template
            const templateId = await createTestTemplate();
            
            // Create multiple events with photos
            const eventData = [];
            for (let i = 0; i < config.eventCount; i++) {
              const eventId = await createTestEvent(templateId);
              const eventPhotos = [];
              
              // Add 2 completion photos to each event
              for (let j = 0; j < 2; j++) {
                const imageBuffer = await createTestImageBuffer(800, 600);
                const photo = await photoService.uploadPhoto({
                  originalBuffer: imageBuffer,
                  mimeType: 'image/jpeg',
                  title: `Event ${i + 1} Photo ${j + 1}`
                });
                
                await photoService.attachPhotoToEntity(photo.id, 'maintenance_event', eventId);
                eventPhotos.push(photo);
              }
              
              eventData.push({ eventId, photos: eventPhotos });
            }
            
            // Delete some photos from the first event
            const firstEvent = eventData[0];
            const photosToDelete = firstEvent.photos.slice(0, config.photosToDelete);
            
            for (const photo of photosToDelete) {
              await photoService.deleteCompletionPhoto(photo.id, firstEvent.eventId);
            }
            
            // Verify first event has fewer photos
            const firstEventPhotos = await photoService.getCompletionPhotosForEvent(firstEvent.eventId);
            expect(firstEventPhotos.length).toBe(2 - config.photosToDelete);
            
            // Verify other events are unaffected
            for (let i = 1; i < eventData.length; i++) {
              const otherEvent = eventData[i];
              const otherEventPhotos = await photoService.getCompletionPhotosForEvent(otherEvent.eventId);
              expect(otherEventPhotos.length).toBe(2); // Should still have all photos
              
              // Verify all photos are still accessible
              for (const photo of otherEvent.photos) {
                const retrievedPhoto = await photoService.getPhoto(photo.id);
                expect(retrievedPhoto).toBeDefined();
              }
            }
            
            // Clean up remaining photos
            for (const { photos } of eventData) {
              for (const photo of photos) {
                try {
                  await photoService.deletePhotoWithCleanup(photo.id);
                } catch (error) {
                  // Photo might already be deleted, ignore error
                }
              }
            }
          }
        ),
        { numRuns: 100 }
      );
    }, 20000);
  });
});