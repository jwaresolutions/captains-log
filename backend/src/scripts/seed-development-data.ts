import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';
import { authService } from '../services/authService';
import { generateSamplePhotos } from './generate-sample-photos';

const prisma = new PrismaClient();

/**
 * Seed script for development data
 * Creates sample boats, trips, notes, todos, maintenance templates, and other data
 */
async function seedDevelopmentData() {
  try {
    logger.info('Starting development data seeding...');

    // Create a test user if none exists
    const existingUsers = await prisma.user.findMany();


    if (existingUsers.length === 0) {
      const hashedPassword = await authService.hashPassword('testpass123');
      await prisma.user.create({
        data: {
          username: 'testuser',
          passwordHash: hashedPassword
        }
      });

      logger.info('Created test user: testuser / testpass123');
    } else {

      logger.info('Using existing user for seeding');
    }

    // Create sample boats
    const boats = await Promise.all([
      prisma.boat.create({
        data: {
          name: 'Sea Explorer',
          enabled: true,
          isActive: true,
          metadata: {
            make: 'Boston Whaler',
            model: 'Outrage 320',
            year: 2020,
            length: 32,
            registration: 'FL-1234-AB'
          }
        }
      }),
      prisma.boat.create({
        data: {
          name: 'Ocean Wanderer',
          enabled: true,
          isActive: false,
          metadata: {
            make: 'Grady-White',
            model: 'Canyon 336',
            year: 2019,
            length: 33,
            registration: 'FL-5678-CD'
          }
        }
      }),
      prisma.boat.create({
        data: {
          name: 'Coastal Cruiser',
          enabled: false,
          isActive: false,
          metadata: {
            make: 'Sea Ray',
            model: 'Sundancer 320',
            year: 2018,
            length: 32,
            registration: 'FL-9012-EF'
          }
        }
      })
    ]);

    logger.info(`Created ${boats.length} sample boats`);

    // Create sample trips with GPS data
    const now = new Date();
    const trips = [];

    for (let i = 0; i < 15; i++) {
      const tripDate = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000)); // Past 15 days
      const startTime = new Date(tripDate);
      startTime.setHours(8 + Math.floor(Math.random() * 8), Math.floor(Math.random() * 60));
      
      const durationHours = 2 + Math.random() * 6; // 2-8 hours
      const endTime = new Date(startTime.getTime() + (durationHours * 60 * 60 * 1000));

      const boatId = boats[Math.floor(Math.random() * boats.length)].id;
      const waterTypes = ['inland', 'coastal', 'offshore'] as const;
      const roles = ['captain', 'crew', 'observer'] as const;

      const trip = await prisma.trip.create({
        data: {
          boatId,
          startTime,
          endTime,
          waterType: waterTypes[Math.floor(Math.random() * waterTypes.length)],
          role: roles[Math.floor(Math.random() * roles.length)],
          timezone: 'America/New_York',
          durationSeconds: Math.floor(durationHours * 3600),
          distanceMeters: Math.floor(5000 + Math.random() * 50000), // 5-55 km
          averageSpeedKnots: 15 + Math.random() * 20, // 15-35 knots
          maxSpeedKnots: 25 + Math.random() * 25, // 25-50 knots
          engineHours: Math.floor(durationHours * 10) / 10,
          fuelConsumed: Math.floor(durationHours * 8 + Math.random() * 20),
          weatherConditions: ['Clear skies', 'Partly cloudy', 'Overcast', 'Light rain'][Math.floor(Math.random() * 4)],
          numberOfPassengers: Math.floor(Math.random() * 8) + 1
        }
      });

      // Create GPS points for the trip
      const numPoints = Math.floor(durationHours * 12); // One point every 5 minutes
      const baseLatitude = 25.7617 + (Math.random() - 0.5) * 0.1; // Miami area
      const baseLongitude = -80.1918 + (Math.random() - 0.5) * 0.1;

      for (let j = 0; j < numPoints; j++) {
        const pointTime = new Date(startTime.getTime() + (j * 5 * 60 * 1000)); // Every 5 minutes
        const latOffset = (Math.random() - 0.5) * 0.01;
        const lonOffset = (Math.random() - 0.5) * 0.01;

        await prisma.gPSPoint.create({
          data: {
            tripId: trip.id,
            latitude: baseLatitude + latOffset,
            longitude: baseLongitude + lonOffset,
            altitude: Math.random() * 10,
            accuracy: 3 + Math.random() * 5,
            speed: 10 + Math.random() * 30,
            heading: Math.random() * 360,
            timestamp: pointTime
          }
        });
      }

      trips.push(trip);
    }

    logger.info(`Created ${trips.length} sample trips with GPS data`);

    // Create sample notes
    const noteTypes = ['general', 'boat', 'trip'] as const;
    const sampleNotes = [
      'Remember to check engine oil before next trip',
      'Great fishing spot found at coordinates 25.7617, -80.1918',
      'Weather was perfect today, calm seas and sunny skies',
      'Need to replace the bilge pump soon',
      'Saw dolphins during the trip - amazing experience!',
      'Fuel consumption seems higher than usual, investigate',
      'New marina has excellent facilities',
      'GPS accuracy was poor in some areas',
      'Perfect day for water sports',
      'Engine ran smoothly throughout the trip'
    ];

    for (let i = 0; i < sampleNotes.length; i++) {
      const noteType = noteTypes[Math.floor(Math.random() * noteTypes.length)];
      const noteData: any = {
        content: sampleNotes[i],
        type: noteType,
        tags: ['sample', 'development']
      };

      if (noteType === 'boat') {
        noteData.boatId = boats[Math.floor(Math.random() * boats.length)].id;
      } else if (noteType === 'trip') {
        noteData.tripId = trips[Math.floor(Math.random() * trips.length)].id;
      }

      await prisma.note.create({ data: noteData });
    }

    logger.info(`Created ${sampleNotes.length} sample notes`);

    // Create sample todo lists
    const todoLists = await Promise.all([
      prisma.todoList.create({
        data: {
          title: 'Pre-Season Preparation'
        }
      }),
      prisma.todoList.create({
        data: {
          title: 'Sea Explorer Maintenance',
          boatId: boats[0].id
        }
      }),
      prisma.todoList.create({
        data: {
          title: 'Safety Equipment Check'
        }
      })
    ]);

    // Add items to todo lists
    const todoItems = [
      { todoListId: todoLists[0].id, content: 'Check all safety equipment', completed: true },
      { todoListId: todoLists[0].id, content: 'Test radio and GPS systems', completed: false },
      { todoListId: todoLists[0].id, content: 'Inspect hull for damage', completed: true },
      { todoListId: todoLists[1].id, content: 'Change engine oil', completed: false },
      { todoListId: todoLists[1].id, content: 'Replace fuel filter', completed: false },
      { todoListId: todoLists[1].id, content: 'Check propeller condition', completed: true },
      { todoListId: todoLists[2].id, content: 'Verify life jacket count', completed: true },
      { todoListId: todoLists[2].id, content: 'Test flares expiration dates', completed: false },
      { todoListId: todoLists[2].id, content: 'Check fire extinguisher', completed: false }
    ];

    for (const item of todoItems) {
      await prisma.todoItem.create({
        data: {
          ...item,
          completedAt: item.completed ? new Date() : null
        }
      });
    }

    logger.info(`Created ${todoLists.length} todo lists with ${todoItems.length} items`);

    // Create sample maintenance templates
    const maintenanceTemplates = [];
    const maintenanceData = [
      {
        title: 'Engine Oil Change',
        description: 'Change engine oil and filter',
        component: 'Engine',
        recurrence: { type: 'engine_hours' as const, interval: 100 },
        estimatedCost: 150,
        estimatedTime: 2
      },
      {
        title: 'Hull Cleaning',
        description: 'Clean hull and apply antifouling paint',
        component: 'Hull',
        recurrence: { type: 'months' as const, interval: 6 },
        estimatedCost: 800,
        estimatedTime: 8
      },
      {
        title: 'Safety Equipment Inspection',
        description: 'Inspect all safety equipment and replace as needed',
        component: 'Safety',
        recurrence: { type: 'months' as const, interval: 12 },
        estimatedCost: 200,
        estimatedTime: 3
      },
      {
        title: 'Fuel System Service',
        description: 'Service fuel system, replace filters and check lines',
        component: 'Fuel System',
        recurrence: { type: 'months' as const, interval: 6 },
        estimatedCost: 300,
        estimatedTime: 4
      }
    ];

    for (const boat of boats) {
      for (const templateData of maintenanceData) {
        const template = await prisma.maintenanceTemplate.create({
          data: {
            ...templateData,
            boatId: boat.id,
            isActive: true
          }
        });
        maintenanceTemplates.push(template);
      }
    }

    logger.info(`Created ${maintenanceTemplates.length} maintenance templates`);

    // Create sample maintenance events (some completed, some upcoming)
    let eventCount = 0;
    for (const template of maintenanceTemplates) {
      // Create a past completed event
      const pastDate = new Date(now.getTime() - (Math.random() * 90 * 24 * 60 * 60 * 1000)); // 0-90 days ago
      await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: pastDate,
          completedAt: pastDate,
          actualCost: template.estimatedCost! * (0.8 + Math.random() * 0.4), // ±20% of estimate
          actualTime: template.estimatedTime! * (0.8 + Math.random() * 0.4),
          notes: 'Completed successfully. No issues found.'
        }
      });

      // Create an upcoming event
      const futureDate = new Date(now.getTime() + (Math.random() * 60 * 24 * 60 * 60 * 1000)); // 0-60 days from now
      await prisma.maintenanceEvent.create({
        data: {
          templateId: template.id,
          dueDate: futureDate
        }
      });

      eventCount += 2;
    }

    logger.info(`Created ${eventCount} maintenance events`);

    // Create sample marked locations
    const markedLocations = [
      {
        name: 'Favorite Fishing Spot',
        latitude: 25.7617,
        longitude: -80.1918,
        category: 'fishing' as const,
        notes: 'Great for snapper and grouper',
        tags: ['fishing', 'deep water']
      },
      {
        name: 'Miami Marine Stadium',
        latitude: 25.7389,
        longitude: -80.1651,
        category: 'marina' as const,
        notes: 'Historic marine stadium with good facilities',
        tags: ['marina', 'historic']
      },
      {
        name: 'Stiltsville Anchorage',
        latitude: 25.6878,
        longitude: -80.1651,
        category: 'anchorage' as const,
        notes: 'Popular anchorage with historic stilt houses',
        tags: ['anchorage', 'historic', 'popular']
      },
      {
        name: 'Shallow Reef Area',
        latitude: 25.7200,
        longitude: -80.1500,
        category: 'hazard' as const,
        notes: 'Shallow coral reef - navigate carefully',
        tags: ['hazard', 'reef', 'shallow']
      }
    ];

    for (const location of markedLocations) {
      await prisma.markedLocation.create({ data: location });
    }

    logger.info(`Created ${markedLocations.length} marked locations`);

    // Create sample notifications
    const notifications = [
      {
        type: 'maintenance_due' as const,
        title: 'Maintenance Due Soon',
        message: 'Engine oil change is due in 5 days for Sea Explorer',
        entityType: 'maintenance',
        entityId: maintenanceTemplates[0].id,
        read: false
      },
      {
        type: 'system' as const,
        title: 'Welcome to Captain\'s Log',
        message: 'Your boat tracking system is ready to use. Start by recording your first trip!',
        read: false
      },
      {
        type: 'maintenance_due' as const,
        title: 'Safety Inspection Overdue',
        message: 'Safety equipment inspection is overdue for Ocean Wanderer',
        entityType: 'maintenance',
        entityId: maintenanceTemplates[2].id,
        read: true
      }
    ];

    for (const notification of notifications) {
      await prisma.notification.create({ data: notification });
    }

    logger.info(`Created ${notifications.length} notifications`);

    // Generate sample photos
    const samplePhotos = await generateSamplePhotos();
    
    // Associate some photos with trips and maintenance events
    if (samplePhotos.length > 0 && trips.length > 0) {
      // Add photos to some trips
      for (let i = 0; i < Math.min(3, trips.length); i++) {
        const photo = samplePhotos[i % samplePhotos.length];
        const createdPhoto = await prisma.photo.create({
          data: {
            originalPath: photo.originalPath,
            webOptimizedPath: photo.webOptimizedPath,
            mimeType: photo.mimeType,
            sizeBytes: 1024 * 1024, // Approximate size
            category: 'general',
            title: `Trip photo ${i + 1}`,
            metadata: {
              width: 1920,
              height: 1080,
              takenAt: trips[i].startTime
            }
          }
        });

        await prisma.entityPhoto.create({
          data: {
            photoId: createdPhoto.id,
            entityType: 'trip',
            entityId: trips[i].id
          }
        });
      }

      // Add photos to some maintenance events
      if (maintenanceTemplates.length > 0) {
        for (let i = 0; i < Math.min(2, maintenanceTemplates.length); i++) {
          const photo = samplePhotos[(i + 3) % samplePhotos.length];
          const createdPhoto = await prisma.photo.create({
            data: {
              originalPath: photo.originalPath,
              webOptimizedPath: photo.webOptimizedPath,
              mimeType: photo.mimeType,
              sizeBytes: 1024 * 1024,
              category: 'general',
              title: `Maintenance photo ${i + 1}`,
              metadata: {
                width: 1920,
                height: 1080
              }
            }
          });

          await prisma.entityPhoto.create({
            data: {
              photoId: createdPhoto.id,
              entityType: 'maintenance_task',
              entityId: maintenanceTemplates[i].id
            }
          });
        }
      }

      logger.info(`Associated ${Math.min(5, samplePhotos.length)} photos with trips and maintenance`);
    }

    logger.info('Development data seeding completed successfully!');
    logger.info('Test user credentials: testuser / testpass123');

  } catch (error) {
    logger.error('Error seeding development data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function if this script is executed directly
if (require.main === module) {
  seedDevelopmentData()
    .then(() => {
      console.log('✅ Development data seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Development data seeding failed:', error);
      process.exit(1);
    });
}

export { seedDevelopmentData };