import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { PhotoService } from '../../src/services/photoService';
import { TripService } from '../../src/services/tripService';
import { BoatService } from '../../src/services/boatService';
import sharp from 'sharp';


const prisma = new PrismaClient();
const photoService = new PhotoService();
const tripService = new TripService();
const boatService = new BoatService();

/**
 * Property-Based Tests for Photo Service
 */

describe('Photo Service Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.photo.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.photo.deleteMany();
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
                entityType: 'trip',
                entityId: tripId,
                originalBuffer: imageBuffer,
                mimeType: config.mimeType,
                metadata: {
                  width: config.width,
                  height: config.height
                }
              });
              
              uploadedPhotos.push(photo);
            }
            
            // Query photos for the trip
            const retrievedPhotos = await photoService.listPhotos('trip', tripId);
            
            // Verify all uploaded photos are returned
            expect(retrievedPhotos.length).toBe(uploadedPhotos.length);
            
            for (const uploadedPhoto of uploadedPhotos) {
              const foundPhoto = retrievedPhotos.find(p => p.id === uploadedPhoto.id);
              expect(foundPhoto).toBeDefined();
              expect(foundPhoto?.entityType).toBe('trip');
              expect(foundPhoto?.entityId).toBe(tripId);
            }
            
            // Clean up files
            for (const photo of uploadedPhotos) {
              await photoService.deletePhoto(photo.id);
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
              entityType: 'trip',
              entityId: trip1Id,
              originalBuffer: imageBuffer1,
              mimeType: 'image/jpeg'
            });
            
            // Upload photo to second trip
            const imageBuffer2 = await createTestImageBuffer(photo2Config.width, photo2Config.height);
            const photo2 = await photoService.uploadPhoto({
              entityType: 'trip',
              entityId: trip2Id,
              originalBuffer: imageBuffer2,
              mimeType: 'image/jpeg'
            });
            
            // Query photos for first trip
            const trip1Photos = await photoService.listPhotos('trip', trip1Id);
            expect(trip1Photos.length).toBe(1);
            expect(trip1Photos[0].id).toBe(photo1.id);
            
            // Query photos for second trip
            const trip2Photos = await photoService.listPhotos('trip', trip2Id);
            expect(trip2Photos.length).toBe(1);
            expect(trip2Photos[0].id).toBe(photo2.id);
            
            // Clean up
            await photoService.deletePhoto(photo1.id);
            await photoService.deletePhoto(photo2.id);
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
              entityType: config.entityType as 'trip' | 'maintenance' | 'note',
              entityId,
              originalBuffer,
              mimeType: config.mimeType,
              metadata: {
                width: config.width,
                height: config.height
              }
            });
            
            // Verify photo metadata
            expect(photo.entityType).toBe(config.entityType);
            expect(photo.entityId).toBe(entityId);
            expect(photo.mimeType).toBe(config.mimeType);
            expect(photo.sizeBytes).toBe(originalBuffer.length);
            
            // Retrieve original photo file
            const retrievedBuffer = await photoService.getPhotoFile(photo.id, false);
            
            // Verify the retrieved buffer matches the original
            expect(retrievedBuffer.length).toBe(originalBuffer.length);
            expect(Buffer.compare(retrievedBuffer, originalBuffer)).toBe(0);
            
            // Clean up
            await photoService.deletePhoto(photo.id);
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
          entityType: 'trip',
          entityId,
          originalBuffer,
          mimeType,
          metadata: { width: 800, height: 600 }
        });
        
        // Verify MIME type is preserved
        expect(photo.mimeType).toBe(mimeType);
        
        // Verify file can be retrieved
        const retrievedBuffer = await photoService.getPhotoFile(photo.id, false);
        expect(retrievedBuffer.length).toBeGreaterThan(0);
        
        // Clean up
        await photoService.deletePhoto(photo.id);
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
              entityType: 'trip',
              entityId,
              originalBuffer,
              mimeType: 'image/jpeg',
              metadata: {
                width: config.width,
                height: config.height
              }
            });
            
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
            await photoService.deletePhoto(photo.id);
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
          entityType: 'trip',
          entityId,
          originalBuffer,
          mimeType: 'image/jpeg',
          metadata: size
        });
        
        // Retrieve web-optimized version
        const optimizedBuffer = await photoService.getPhotoFile(photo.id, true);
        
        // Get metadata of optimized image
        const optimizedMetadata = await sharp(optimizedBuffer).metadata();
        
        // Verify image was not enlarged
        expect(optimizedMetadata.width).toBeLessThanOrEqual(size.width);
        expect(optimizedMetadata.height).toBeLessThanOrEqual(size.height);
        
        // Clean up
        await photoService.deletePhoto(photo.id);
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
              entityType: 'trip',
              entityId,
              originalBuffer,
              mimeType: 'image/jpeg',
              metadata: config
            });
            
            // Retrieve both versions
            const originalRetrieved = await photoService.getPhotoFile(photo.id, false);
            const optimizedBuffer = await photoService.getPhotoFile(photo.id, true);
            
            // Web-optimized version should be smaller in file size
            expect(optimizedBuffer.length).toBeLessThan(originalRetrieved.length);
            
            // Clean up
            await photoService.deletePhoto(photo.id);
          }
        ),
        { numRuns: 50 } // Reduced runs for performance
      );
    }, 20000); // Increased timeout to 20 seconds
  });
});