import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { templateManagerService, MaintenanceTemplateCreateDTO, MaintenanceTemplateUpdateDTO, RecurrenceSchedule } from '../../src/services/templateManagerService';
import { boatService } from '../../src/services/boatService';
import { templateInformationService, TemplateInformationChanges } from '../../src/services/templateInformationService';

const prisma = new PrismaClient();

/**
 * Property-Based Tests for Template Management
 */

describe('Template Management Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
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

  /**
   * **Feature: boat-tracking-system, Property 1: Template creation validation**
   * **Validates: Requirements 1.1**
   * 
   * For any maintenance template creation request, the system should accept templates
   * with all required fields (boat, title, description, component, recurrence, estimated cost, estimated time)
   * and reject templates missing any required field.
   */
  describe('Property 1: Template creation validation', () => {
    test('should accept templates with all required fields', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0), // description
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // component
            fc.record({
              type: fc.constantFrom('days', 'weeks', 'months', 'years'),
              interval: fc.integer({ min: 1, max: 12 })
            }) as fc.Arbitrary<RecurrenceSchedule>, // recurrence
            fc.float({ min: Math.fround(0.01), max: Math.fround(10000), noNaN: true }), // estimated cost
            fc.integer({ min: 1, max: 1440 }) // estimated time in minutes
          ),
          async ([boatName, title, description, component, recurrence, estimatedCost, estimatedTime]) => {
            // Clean database before this iteration
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create template with all required fields
            const templateData: MaintenanceTemplateCreateDTO = {
              boatId: boat.id,
              title,
              description,
              component,
              recurrence,
              estimatedCost,
              estimatedTime
            };
            
            const template = await templateManagerService.createTemplate(templateData);
            
            // Verify template was created with correct data
            expect(template.id).toBeDefined();
            expect(template.boatId).toBe(boat.id);
            expect(template.title).toBe(title.trim());
            expect(template.description).toBe(description.trim());
            expect(template.component).toBe(component.trim());
            expect(template.recurrence).toEqual(recurrence);
            expect(template.estimatedCost).toBeCloseTo(estimatedCost, 2);
            expect(template.estimatedTime).toBe(estimatedTime);
            expect(template.isActive).toBe(true);
            expect(template.boat.id).toBe(boat.id);
            expect(template.boat.name).toBe(boatName.trim());
            
            // Clean up
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should reject templates missing required fields', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
          async (boatName) => {
            // Clean database before this iteration
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Test missing title
            await expect(templateManagerService.createTemplate({
              boatId: boat.id,
              title: '',
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            })).rejects.toThrow();
            
            // Test missing description
            await expect(templateManagerService.createTemplate({
              boatId: boat.id,
              title: 'Oil Change',
              description: '',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            })).rejects.toThrow();
            
            // Test missing component
            await expect(templateManagerService.createTemplate({
              boatId: boat.id,
              title: 'Oil Change',
              description: 'Test description',
              component: '',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            })).rejects.toThrow();
            
            // Test missing boat ID
            await expect(templateManagerService.createTemplate({
              boatId: '',
              title: 'Oil Change',
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            })).rejects.toThrow();
            
            // Clean up
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should validate recurrence schedule', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
          async (boatName) => {
            // Clean database before this iteration
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Test invalid recurrence type
            await expect(templateManagerService.createTemplate({
              boatId: boat.id,
              title: 'Oil Change',
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'invalid' as any, interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            })).rejects.toThrow();
            
            // Test invalid interval (zero)
            await expect(templateManagerService.createTemplate({
              boatId: boat.id,
              title: 'Oil Change',
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 0 },
              estimatedCost: 100,
              estimatedTime: 60
            })).rejects.toThrow();
            
            // Test invalid interval (negative)
            await expect(templateManagerService.createTemplate({
              boatId: boat.id,
              title: 'Oil Change',
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: -1 },
              estimatedCost: 100,
              estimatedTime: 60
            })).rejects.toThrow();
            
            // Clean up
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 2: Template photo attachment**
   * **Validates: Requirements 1.2**
   * 
   * For any maintenance template and photo, attaching the photo to the template
   * should result in the photo being properly associated with that template.
   */
  describe('Property 2: Template photo attachment', () => {
    test('should attach photos to templates correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.array(
              fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
              { minLength: 1, maxLength: 3 }
            ) // photo titles
          ),
          async ([boatName, title, photoTitles]) => {
            // Clean database before this iteration
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create photos and attach them to the template
            const photoIds: string[] = [];
            for (const photoTitle of photoTitles) {
              // Create a mock photo
              const photo = await prisma.photo.create({
                data: {
                  originalPath: `/uploads/original/${photoTitle.trim()}.jpg`,
                  webOptimizedPath: `/uploads/web/${photoTitle.trim()}.jpg`,
                  mimeType: 'image/jpeg',
                  sizeBytes: 1024000,
                  category: 'reference',
                  title: photoTitle.trim()
                }
              });
              
              photoIds.push(photo.id);
              
              // Attach photo to template
              await templateManagerService.attachPhoto(template.id, photo.id);
            }
            
            // Verify photos are attached to the template
            const templateWithPhotos = await templateManagerService.getTemplateById(template.id);
            expect(templateWithPhotos).toBeDefined();
            expect(templateWithPhotos!.photos.length).toBe(photoTitles.length);
            
            // Verify each photo is correctly attached
            for (let i = 0; i < photoTitles.length; i++) {
              const attachedPhoto = templateWithPhotos!.photos.find(p => p.id === photoIds[i]);
              expect(attachedPhoto).toBeDefined();
              expect(attachedPhoto!.title).toBe(photoTitles[i].trim());
              expect(attachedPhoto!.category).toBe('reference');
            }
            
            // Verify EntityPhoto junction records exist
            const entityPhotos = await prisma.entityPhoto.findMany({
              where: {
                entityType: 'maintenance_template',
                entityId: template.id
              }
            });
            expect(entityPhotos.length).toBe(photoTitles.length);
            
            // Clean up
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should prevent duplicate photo attachments', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0) // photo title
          ),
          async ([boatName, title, photoTitle]) => {
            // Clean database before this iteration
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create a photo
            const photo = await prisma.photo.create({
              data: {
                originalPath: `/uploads/original/${photoTitle}.jpg`,
                webOptimizedPath: `/uploads/web/${photoTitle}.jpg`,
                mimeType: 'image/jpeg',
                sizeBytes: 1024000,
                category: 'reference',
                title: photoTitle
              }
            });
            
            // Attach photo to template
            await templateManagerService.attachPhoto(template.id, photo.id);
            
            // Attempt to attach the same photo again - should throw error
            await expect(templateManagerService.attachPhoto(template.id, photo.id))
              .rejects.toThrow('Photo is already attached to this template');
            
            // Verify only one attachment exists
            const templateWithPhotos = await templateManagerService.getTemplateById(template.id);
            expect(templateWithPhotos).toBeDefined();
            expect(templateWithPhotos!.photos.length).toBe(1);
            expect(templateWithPhotos!.photos[0].id).toBe(photo.id);
            
            // Verify only one EntityPhoto junction record exists
            const entityPhotos = await prisma.entityPhoto.findMany({
              where: {
                entityType: 'maintenance_template',
                entityId: template.id,
                photoId: photo.id
              }
            });
            expect(entityPhotos.length).toBe(1);
            
            // Clean up
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle photo detachment', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.array(
              fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
              { minLength: 2, maxLength: 4 }
            ) // photo titles (at least 2 for detachment test)
          ),
          async ([boatName, title, photoTitles]) => {
            // Clean database before this iteration
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create photos and attach them to the template
            const photoIds: string[] = [];
            for (const photoTitle of photoTitles) {
              const photo = await prisma.photo.create({
                data: {
                  originalPath: `/uploads/original/${photoTitle}.jpg`,
                  webOptimizedPath: `/uploads/web/${photoTitle}.jpg`,
                  mimeType: 'image/jpeg',
                  sizeBytes: 1024000,
                  category: 'reference',
                  title: photoTitle
                }
              });
              
              photoIds.push(photo.id);
              await templateManagerService.attachPhoto(template.id, photo.id);
            }
            
            // Verify all photos are attached
            let templateWithPhotos = await templateManagerService.getTemplateById(template.id);
            expect(templateWithPhotos!.photos.length).toBe(photoTitles.length);
            
            // Detach the first photo
            const photoToDetach = photoIds[0];
            await templateManagerService.detachPhoto(template.id, photoToDetach);
            
            // Verify photo was detached
            templateWithPhotos = await templateManagerService.getTemplateById(template.id);
            expect(templateWithPhotos!.photos.length).toBe(photoTitles.length - 1);
            expect(templateWithPhotos!.photos.find(p => p.id === photoToDetach)).toBeUndefined();
            
            // Verify remaining photos are still attached
            for (let i = 1; i < photoIds.length; i++) {
              expect(templateWithPhotos!.photos.find(p => p.id === photoIds[i])).toBeDefined();
            }
            
            // Clean up
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 5: Template field editing**
   * **Validates: Requirements 1.5**
   * 
   * For any maintenance template and field modification, editing template fields
   * should result in the changes being saved and reflected in the template.
   */
  describe('Property 5: Template field editing', () => {
    test('should update template fields correctly', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // original title
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // new title
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0), // original description
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0), // new description
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // original component
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // new component
            fc.float({ min: Math.fround(0.01), max: Math.fround(5000), noNaN: true }), // original cost
            fc.float({ min: Math.fround(0.01), max: Math.fround(5000), noNaN: true }), // new cost
            fc.integer({ min: 1, max: 720 }), // original time
            fc.integer({ min: 1, max: 720 }) // new time
          ),
          async ([boatName, originalTitle, newTitle, originalDescription, newDescription, 
                  originalComponent, newComponent, originalCost, newCost, originalTime, newTime]) => {
            // Clean database before this iteration
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template with original values
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: originalTitle,
              description: originalDescription,
              component: originalComponent,
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: originalCost,
              estimatedTime: originalTime
            });
            
            // Verify original values
            expect(template.title).toBe(originalTitle.trim());
            expect(template.description).toBe(originalDescription.trim());
            expect(template.component).toBe(originalComponent.trim());
            expect(template.estimatedCost).toBeCloseTo(originalCost, 2);
            expect(template.estimatedTime).toBe(originalTime);
            
            // Update template fields
            const updateData: MaintenanceTemplateUpdateDTO = {
              title: newTitle,
              description: newDescription,
              component: newComponent,
              estimatedCost: newCost,
              estimatedTime: newTime
            };
            
            const updatedTemplate = await templateManagerService.updateTemplate(template.id, updateData);
            
            // Verify updated values
            expect(updatedTemplate.title).toBe(newTitle.trim());
            expect(updatedTemplate.description).toBe(newDescription.trim());
            expect(updatedTemplate.component).toBe(newComponent.trim());
            expect(updatedTemplate.estimatedCost).toBeCloseTo(newCost, 2);
            expect(updatedTemplate.estimatedTime).toBe(newTime);
            
            // Verify the template ID and boat association remain unchanged
            expect(updatedTemplate.id).toBe(template.id);
            expect(updatedTemplate.boatId).toBe(boat.id);
            expect(updatedTemplate.boat.id).toBe(boat.id);
            
            // Verify changes persist when retrieved again
            const retrievedTemplate = await templateManagerService.getTemplateById(template.id);
            expect(retrievedTemplate).toBeDefined();
            expect(retrievedTemplate!.title).toBe(newTitle.trim());
            expect(retrievedTemplate!.description).toBe(newDescription.trim());
            expect(retrievedTemplate!.component).toBe(newComponent.trim());
            expect(retrievedTemplate!.estimatedCost).toBeCloseTo(newCost, 2);
            expect(retrievedTemplate!.estimatedTime).toBe(newTime);
            
            // Clean up
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle partial field updates', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0), // description
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // component
            fc.float({ min: Math.fround(0.01), max: Math.fround(5000), noNaN: true }), // cost
            fc.integer({ min: 1, max: 720 }), // time
            fc.constantFrom('title', 'description', 'component', 'estimatedCost', 'estimatedTime') // field to update
          ),
          async ([boatName, title, description, component, cost, time, fieldToUpdate]) => {
            // Clean database before this iteration
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description,
              component,
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: cost,
              estimatedTime: time
            });
            
            // Create partial update based on which field to update
            const updateData: MaintenanceTemplateUpdateDTO = {};
            let expectedNewValue: any;
            
            switch (fieldToUpdate) {
              case 'title':
                updateData.title = 'Updated Title';
                expectedNewValue = 'Updated Title';
                break;
              case 'description':
                updateData.description = 'Updated Description';
                expectedNewValue = 'Updated Description';
                break;
              case 'component':
                updateData.component = 'Updated Component';
                expectedNewValue = 'Updated Component';
                break;
              case 'estimatedCost':
                updateData.estimatedCost = 999.99;
                expectedNewValue = 999.99;
                break;
              case 'estimatedTime':
                updateData.estimatedTime = 120;
                expectedNewValue = 120;
                break;
            }
            
            // Update template with partial data
            const updatedTemplate = await templateManagerService.updateTemplate(template.id, updateData);
            
            // Verify only the specified field was updated
            switch (fieldToUpdate) {
              case 'title':
                expect(updatedTemplate.title).toBe(expectedNewValue);
                expect(updatedTemplate.description).toBe(description.trim());
                expect(updatedTemplate.component).toBe(component.trim());
                expect(updatedTemplate.estimatedCost).toBeCloseTo(cost, 2);
                expect(updatedTemplate.estimatedTime).toBe(time);
                break;
              case 'description':
                expect(updatedTemplate.title).toBe(title.trim());
                expect(updatedTemplate.description).toBe(expectedNewValue);
                expect(updatedTemplate.component).toBe(component.trim());
                expect(updatedTemplate.estimatedCost).toBeCloseTo(cost, 2);
                expect(updatedTemplate.estimatedTime).toBe(time);
                break;
              case 'component':
                expect(updatedTemplate.title).toBe(title.trim());
                expect(updatedTemplate.description).toBe(description.trim());
                expect(updatedTemplate.component).toBe(expectedNewValue);
                expect(updatedTemplate.estimatedCost).toBeCloseTo(cost, 2);
                expect(updatedTemplate.estimatedTime).toBe(time);
                break;
              case 'estimatedCost':
                expect(updatedTemplate.title).toBe(title.trim());
                expect(updatedTemplate.description).toBe(description.trim());
                expect(updatedTemplate.component).toBe(component.trim());
                expect(updatedTemplate.estimatedCost).toBeCloseTo(expectedNewValue, 2);
                expect(updatedTemplate.estimatedTime).toBe(time);
                break;
              case 'estimatedTime':
                expect(updatedTemplate.title).toBe(title.trim());
                expect(updatedTemplate.description).toBe(description.trim());
                expect(updatedTemplate.component).toBe(component.trim());
                expect(updatedTemplate.estimatedCost).toBeCloseTo(cost, 2);
                expect(updatedTemplate.estimatedTime).toBe(expectedNewValue);
                break;
            }
            
            // Clean up
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 6: Template cascade deletion**
   * **Validates: Requirements 1.6**
   * 
   * For any maintenance template with associated future events, deleting the template
   * should remove both the template and all its future maintenance events.
   */
  describe('Property 6: Template cascade deletion', () => {
    test('should cascade delete template and associated events', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.array(
              fc.date({ min: new Date('2025-01-01'), max: new Date('2026-12-31') }),
              { minLength: 1, maxLength: 5 }
            ) // future event dates
          ),
          async ([boatName, title, eventDates]) => {
            // Clean database before this iteration
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create associated maintenance events
            const eventIds: string[] = [];
            for (const eventDate of eventDates) {
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate: eventDate
                }
              });
              eventIds.push(event.id);
            }
            
            // Verify events exist
            const eventsBeforeDeletion = await prisma.maintenanceEvent.findMany({
              where: { templateId: template.id }
            });
            expect(eventsBeforeDeletion.length).toBe(eventDates.length);
            
            // Delete the template
            await templateManagerService.deleteTemplate(template.id);
            
            // Verify template is deleted
            const deletedTemplate = await templateManagerService.getTemplateById(template.id);
            expect(deletedTemplate).toBeNull();
            
            // Verify all associated events are also deleted (cascade)
            const eventsAfterDeletion = await prisma.maintenanceEvent.findMany({
              where: { templateId: template.id }
            });
            expect(eventsAfterDeletion.length).toBe(0);
            
            // Verify specific events are deleted
            for (const eventId of eventIds) {
              const event = await prisma.maintenanceEvent.findUnique({
                where: { id: eventId }
              });
              expect(event).toBeNull();
            }
            
            // Verify boat still exists (should not be affected)
            const boatAfterDeletion = await boatService.getBoat(boat.id);
            expect(boatAfterDeletion).toBeDefined();
            expect(boatAfterDeletion!.id).toBe(boat.id);
            
            // Clean up
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle template deletion with no associated events', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0) // title
          ),
          async ([boatName, title]) => {
            // Clean database before this iteration
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template (no events)
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Verify template exists
            const templateBeforeDeletion = await templateManagerService.getTemplateById(template.id);
            expect(templateBeforeDeletion).toBeDefined();
            
            // Delete the template
            await templateManagerService.deleteTemplate(template.id);
            
            // Verify template is deleted
            const deletedTemplate = await templateManagerService.getTemplateById(template.id);
            expect(deletedTemplate).toBeNull();
            
            // Verify boat still exists
            const boatAfterDeletion = await boatService.getBoat(boat.id);
            expect(boatAfterDeletion).toBeDefined();
            expect(boatAfterDeletion!.id).toBe(boat.id);
            
            // Clean up
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle template deletion with photos', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.array(
              fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
              { minLength: 1, maxLength: 3 }
            ) // photo titles
          ),
          async ([boatName, title, photoTitles]) => {
            // Clean database before this iteration
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create and attach photos to the template
            const photoIds: string[] = [];
            for (const photoTitle of photoTitles) {
              const photo = await prisma.photo.create({
                data: {
                  originalPath: `/uploads/original/${photoTitle}.jpg`,
                  webOptimizedPath: `/uploads/web/${photoTitle}.jpg`,
                  mimeType: 'image/jpeg',
                  sizeBytes: 1024000,
                  category: 'reference',
                  title: photoTitle
                }
              });
              
              photoIds.push(photo.id);
              await templateManagerService.attachPhoto(template.id, photo.id);
            }
            
            // Verify photos are attached
            const templateWithPhotos = await templateManagerService.getTemplateById(template.id);
            expect(templateWithPhotos!.photos.length).toBe(photoTitles.length);
            
            // Delete the template
            await templateManagerService.deleteTemplate(template.id);
            
            // Verify template is deleted
            const deletedTemplate = await templateManagerService.getTemplateById(template.id);
            expect(deletedTemplate).toBeNull();
            
            // Verify EntityPhoto junction records are deleted
            const entityPhotosAfterDeletion = await prisma.entityPhoto.findMany({
              where: {
                entityType: 'maintenance_template',
                entityId: template.id
              }
            });
            expect(entityPhotosAfterDeletion.length).toBe(0);
            
            // Verify photos themselves still exist (they might be used elsewhere)
            for (const photoId of photoIds) {
              const photo = await prisma.photo.findUnique({
                where: { id: photoId }
              });
              expect(photo).toBeDefined();
            }
            
            // Clean up
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 22: Template information propagation**
   * **Validates: Requirements 6.1, 6.2, 6.3**
   * 
   * For any template information change (title, description, component, estimated cost, estimated time),
   * confirming the change should update all future events with the new template information
   * while leaving completed events unchanged.
   */
  describe('Property 22: Template information propagation', () => {
    test('should propagate template information changes to future events only', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // original title
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0), // original description
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // original component
            fc.float({ min: Math.fround(0.01), max: Math.fround(5000), noNaN: true }), // original cost
            fc.integer({ min: 1, max: 720 }), // original time
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // new title
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0), // new description
            fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0), // new component
            fc.float({ min: Math.fround(0.01), max: Math.fround(5000), noNaN: true }), // new cost
            fc.integer({ min: 1, max: 720 }), // new time
            fc.array(
              fc.date({ min: new Date('2026-01-01'), max: new Date('2027-12-31') }),
              { minLength: 1, maxLength: 5 }
            ), // future event dates
            fc.array(
              fc.date({ min: new Date('2023-01-01'), max: new Date('2024-12-31') }),
              { minLength: 1, maxLength: 3 }
            ) // completed event dates
          ),
          async ([boatName, originalTitle, originalDescription, originalComponent, originalCost, originalTime,
                  newTitle, newDescription, newComponent, newCost, newTime, futureEventDates, completedEventDates]) => {
            // Clean database before this iteration
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template with original values
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: originalTitle,
              description: originalDescription,
              component: originalComponent,
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: originalCost,
              estimatedTime: originalTime
            });
            
            // Create future events (not completed)
            const futureEventIds: string[] = [];
            for (const eventDate of futureEventDates) {
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate: eventDate
                }
              });
              futureEventIds.push(event.id);
            }
            
            // Create completed events
            const completedEventIds: string[] = [];
            for (const eventDate of completedEventDates) {
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate: eventDate,
                  completedAt: new Date(eventDate.getTime() + 24 * 60 * 60 * 1000), // completed 1 day after due
                  actualCost: originalCost * 1.1, // some actual cost
                  notes: 'Completed maintenance'
                }
              });
              completedEventIds.push(event.id);
            }
            
            // Apply template information changes
            const changes: TemplateInformationChanges = {
              title: newTitle,
              description: newDescription,
              component: newComponent,
              estimatedCost: newCost,
              estimatedTime: newTime
            };
            
            const result = await templateInformationService.applyInformationChanges(template.id, changes);
            
            // Verify the result indicates success
            expect(result.templateId).toBe(template.id);
            expect(result.eventsUpdated).toBe(futureEventDates.length);
            expect(result.completedEventsPreserved).toBe(completedEventDates.length);
            expect(result.errors.length).toBe(0);
            
            // Verify template was updated
            const updatedTemplate = await templateManagerService.getTemplateById(template.id);
            expect(updatedTemplate).toBeDefined();
            expect(updatedTemplate!.title).toBe(newTitle.trim());
            expect(updatedTemplate!.description).toBe(newDescription.trim());
            expect(updatedTemplate!.component).toBe(newComponent.trim());
            expect(updatedTemplate!.estimatedCost).toBeCloseTo(newCost, 2);
            expect(updatedTemplate!.estimatedTime).toBe(newTime);
            
            // Verify future events reflect template changes (through template relationship)
            for (const eventId of futureEventIds) {
              const event = await prisma.maintenanceEvent.findUnique({
                where: { id: eventId },
                include: { template: true }
              });
              expect(event).toBeDefined();
              expect(event!.template.title).toBe(newTitle.trim());
              expect(event!.template.description).toBe(newDescription.trim());
              expect(event!.template.component).toBe(newComponent.trim());
              expect(event!.template.estimatedCost).toBeCloseTo(newCost, 2);
              expect(event!.template.estimatedTime).toBe(newTime);
            }
            
            // Verify completed events still reference the updated template but preserve their completion data
            for (const eventId of completedEventIds) {
              const event = await prisma.maintenanceEvent.findUnique({
                where: { id: eventId },
                include: { template: true }
              });
              expect(event).toBeDefined();
              expect(event!.completedAt).toBeDefined();
              expect(event!.actualCost).toBeCloseTo(originalCost * 1.1, 2);
              expect(event!.notes).toBe('Completed maintenance');
              // Template information is updated even for completed events (they reference the same template)
              expect(event!.template.title).toBe(newTitle.trim());
              expect(event!.template.description).toBe(newDescription.trim());
              expect(event!.template.component).toBe(newComponent.trim());
            }
            
            // Clean up
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle partial template information changes', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // original title
            fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0), // original description
            fc.constantFrom('title', 'description', 'component', 'estimatedCost', 'estimatedTime'), // field to change
            fc.array(
              fc.date({ min: new Date('2026-01-01'), max: new Date('2027-12-31') }),
              { minLength: 1, maxLength: 3 }
            ) // future event dates
          ),
          async ([boatName, originalTitle, originalDescription, fieldToChange, futureEventDates]) => {
            // Clean database before this iteration
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title: originalTitle,
              description: originalDescription,
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100.0,
              estimatedTime: 60
            });
            
            // Create future events
            const futureEventIds: string[] = [];
            for (const eventDate of futureEventDates) {
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate: eventDate
                }
              });
              futureEventIds.push(event.id);
            }
            
            // Create partial change based on field to change
            const changes: TemplateInformationChanges = {};
            let expectedNewValue: any;
            
            switch (fieldToChange) {
              case 'title':
                changes.title = 'Updated Title';
                expectedNewValue = 'Updated Title';
                break;
              case 'description':
                changes.description = 'Updated Description';
                expectedNewValue = 'Updated Description';
                break;
              case 'component':
                changes.component = 'Updated Component';
                expectedNewValue = 'Updated Component';
                break;
              case 'estimatedCost':
                changes.estimatedCost = 250.75;
                expectedNewValue = 250.75;
                break;
              case 'estimatedTime':
                changes.estimatedTime = 120;
                expectedNewValue = 120;
                break;
            }
            
            // Apply the partial change
            const result = await templateInformationService.applyInformationChanges(template.id, changes);
            
            // Verify the result
            expect(result.templateId).toBe(template.id);
            expect(result.eventsUpdated).toBe(futureEventDates.length);
            expect(result.errors.length).toBe(0);
            
            // Verify template was updated correctly
            const updatedTemplate = await templateManagerService.getTemplateById(template.id);
            expect(updatedTemplate).toBeDefined();
            
            // Check that only the specified field was changed
            switch (fieldToChange) {
              case 'title':
                expect(updatedTemplate!.title).toBe(expectedNewValue);
                expect(updatedTemplate!.description).toBe(originalDescription.trim());
                expect(updatedTemplate!.component).toBe('Engine');
                expect(updatedTemplate!.estimatedCost).toBeCloseTo(100.0, 2);
                expect(updatedTemplate!.estimatedTime).toBe(60);
                break;
              case 'description':
                expect(updatedTemplate!.title).toBe(originalTitle.trim());
                expect(updatedTemplate!.description).toBe(expectedNewValue);
                expect(updatedTemplate!.component).toBe('Engine');
                expect(updatedTemplate!.estimatedCost).toBeCloseTo(100.0, 2);
                expect(updatedTemplate!.estimatedTime).toBe(60);
                break;
              case 'component':
                expect(updatedTemplate!.title).toBe(originalTitle.trim());
                expect(updatedTemplate!.description).toBe(originalDescription.trim());
                expect(updatedTemplate!.component).toBe(expectedNewValue);
                expect(updatedTemplate!.estimatedCost).toBeCloseTo(100.0, 2);
                expect(updatedTemplate!.estimatedTime).toBe(60);
                break;
              case 'estimatedCost':
                expect(updatedTemplate!.title).toBe(originalTitle.trim());
                expect(updatedTemplate!.description).toBe(originalDescription.trim());
                expect(updatedTemplate!.component).toBe('Engine');
                expect(updatedTemplate!.estimatedCost).toBeCloseTo(expectedNewValue, 2);
                expect(updatedTemplate!.estimatedTime).toBe(60);
                break;
              case 'estimatedTime':
                expect(updatedTemplate!.title).toBe(originalTitle.trim());
                expect(updatedTemplate!.description).toBe(originalDescription.trim());
                expect(updatedTemplate!.component).toBe('Engine');
                expect(updatedTemplate!.estimatedCost).toBeCloseTo(100.0, 2);
                expect(updatedTemplate!.estimatedTime).toBe(expectedNewValue);
                break;
            }
            
            // Verify future events reflect the change through template relationship
            for (const eventId of futureEventIds) {
              const event = await prisma.maintenanceEvent.findUnique({
                where: { id: eventId },
                include: { template: true }
              });
              expect(event).toBeDefined();
              
              switch (fieldToChange) {
                case 'title':
                  expect(event!.template.title).toBe(expectedNewValue);
                  break;
                case 'description':
                  expect(event!.template.description).toBe(expectedNewValue);
                  break;
                case 'component':
                  expect(event!.template.component).toBe(expectedNewValue);
                  break;
                case 'estimatedCost':
                  expect(event!.template.estimatedCost).toBeCloseTo(expectedNewValue, 2);
                  break;
                case 'estimatedTime':
                  expect(event!.template.estimatedTime).toBe(expectedNewValue);
                  break;
              }
            }
            
            // Clean up
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 23: Template photo propagation**
   * **Validates: Requirements 6.4**
   * 
   * For any template photo addition or removal, the changes should be visible
   * on all future and existing events generated from that template.
   */
  describe('Property 23: Template photo propagation', () => {
    test('should propagate template photo changes to all events', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.array(
              fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
              { minLength: 1, maxLength: 3 }
            ), // initial photo titles
            fc.array(
              fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
              { minLength: 1, maxLength: 2 }
            ), // additional photo titles
            fc.array(
              fc.date({ min: new Date('2025-06-01'), max: new Date('2026-12-31') }),
              { minLength: 1, maxLength: 4 }
            ), // event dates
            fc.array(
              fc.date({ min: new Date('2023-01-01'), max: new Date('2024-12-31') }),
              { minLength: 1, maxLength: 2 }
            ) // completed event dates
          ),
          async ([boatName, title, initialPhotoTitles, additionalPhotoTitles, eventDates, completedEventDates]) => {
            // Clean database before this iteration
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create initial photos and attach to template
            const initialPhotoIds: string[] = [];
            for (const photoTitle of initialPhotoTitles) {
              const photo = await prisma.photo.create({
                data: {
                  originalPath: `/uploads/original/${photoTitle}.jpg`,
                  webOptimizedPath: `/uploads/web/${photoTitle}.jpg`,
                  mimeType: 'image/jpeg',
                  sizeBytes: 1024000,
                  category: 'reference',
                  title: photoTitle
                }
              });
              
              initialPhotoIds.push(photo.id);
              await templateManagerService.attachPhoto(template.id, photo.id);
            }
            
            // Create future events
            const futureEventIds: string[] = [];
            for (const eventDate of eventDates) {
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate: eventDate
                }
              });
              futureEventIds.push(event.id);
            }
            
            // Create completed events
            const completedEventIds: string[] = [];
            for (const eventDate of completedEventDates) {
              const event = await prisma.maintenanceEvent.create({
                data: {
                  templateId: template.id,
                  dueDate: eventDate,
                  completedAt: new Date(eventDate.getTime() + 24 * 60 * 60 * 1000)
                }
              });
              completedEventIds.push(event.id);
            }
            
            // Verify initial photos are visible on all events through template
            const templateWithInitialPhotos = await templateManagerService.getTemplateById(template.id);
            expect(templateWithInitialPhotos!.photos.length).toBe(initialPhotoTitles.length);
            
            // Check that events can access template photos through the template relationship
            for (const eventId of [...futureEventIds, ...completedEventIds]) {
              const event = await prisma.maintenanceEvent.findUnique({
                where: { id: eventId },
                include: { 
                  template: {
                    include: {
                      _count: { select: { events: true } }
                    }
                  }
                }
              });
              expect(event).toBeDefined();
              expect(event!.template.id).toBe(template.id);
            }
            
            // Add additional photos to template
            const additionalPhotoIds: string[] = [];
            for (const photoTitle of additionalPhotoTitles) {
              const photo = await prisma.photo.create({
                data: {
                  originalPath: `/uploads/original/${photoTitle}.jpg`,
                  webOptimizedPath: `/uploads/web/${photoTitle}.jpg`,
                  mimeType: 'image/jpeg',
                  sizeBytes: 1024000,
                  category: 'reference',
                  title: photoTitle
                }
              });
              
              additionalPhotoIds.push(photo.id);
              await templateManagerService.attachPhoto(template.id, photo.id);
            }
            
            // Propagate photo changes
            const propagationResult = await templateInformationService.propagatePhotoChanges(
              template.id,
              additionalPhotoIds,
              []
            );
            
            // Verify propagation result
            expect(propagationResult.templateId).toBe(template.id);
            expect(propagationResult.eventsAffected).toBe(eventDates.length + completedEventDates.length);
            expect(propagationResult.photosAdded).toBe(additionalPhotoTitles.length);
            expect(propagationResult.photosRemoved).toBe(0);
            expect(propagationResult.errors.length).toBe(0);
            
            // Verify all photos are now visible on template
            const templateWithAllPhotos = await templateManagerService.getTemplateById(template.id);
            expect(templateWithAllPhotos!.photos.length).toBe(initialPhotoTitles.length + additionalPhotoTitles.length);
            
            // Verify all photo titles are present
            const allPhotoTitles = templateWithAllPhotos!.photos.map(p => p.title);
            for (const title of [...initialPhotoTitles, ...additionalPhotoTitles]) {
              expect(allPhotoTitles).toContain(title);
            }
            
            // Remove one of the initial photos
            const photoToRemove = initialPhotoIds[0];
            await templateManagerService.detachPhoto(template.id, photoToRemove);
            
            // Propagate photo removal
            const removalResult = await templateInformationService.propagatePhotoChanges(
              template.id,
              [],
              [photoToRemove]
            );
            
            // Verify removal propagation result
            expect(removalResult.templateId).toBe(template.id);
            expect(removalResult.eventsAffected).toBe(eventDates.length + completedEventDates.length);
            expect(removalResult.photosAdded).toBe(0);
            expect(removalResult.photosRemoved).toBe(1);
            expect(removalResult.errors.length).toBe(0);
            
            // Verify photo was removed from template
            const templateAfterRemoval = await templateManagerService.getTemplateById(template.id);
            expect(templateAfterRemoval!.photos.length).toBe(initialPhotoTitles.length + additionalPhotoTitles.length - 1);
            
            // Verify the removed photo is no longer attached
            const remainingPhotoIds = templateAfterRemoval!.photos.map(p => p.id);
            expect(remainingPhotoIds).not.toContain(photoToRemove);
            
            // Verify events still reference the template (photos are accessible through template relationship)
            for (const eventId of [...futureEventIds, ...completedEventIds]) {
              const event = await prisma.maintenanceEvent.findUnique({
                where: { id: eventId },
                include: { template: true }
              });
              expect(event).toBeDefined();
              expect(event!.template.id).toBe(template.id);
            }
            
            // Clean up
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should handle photo propagation with no events', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.tuple(
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // boat name
            fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0), // title
            fc.array(
              fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
              { minLength: 1, maxLength: 2 }
            ) // photo titles
          ),
          async ([boatName, title, photoTitles]) => {
            // Clean database before this iteration
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
            
            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });
            
            // Create a template (no events)
            const template = await templateManagerService.createTemplate({
              boatId: boat.id,
              title,
              description: 'Test description',
              component: 'Engine',
              recurrence: { type: 'months', interval: 6 },
              estimatedCost: 100,
              estimatedTime: 60
            });
            
            // Create and attach photos to template
            const photoIds: string[] = [];
            for (const photoTitle of photoTitles) {
              const photo = await prisma.photo.create({
                data: {
                  originalPath: `/uploads/original/${photoTitle}.jpg`,
                  webOptimizedPath: `/uploads/web/${photoTitle}.jpg`,
                  mimeType: 'image/jpeg',
                  sizeBytes: 1024000,
                  category: 'reference',
                  title: photoTitle
                }
              });
              
              photoIds.push(photo.id);
              await templateManagerService.attachPhoto(template.id, photo.id);
            }
            
            // Propagate photo changes (no events to affect)
            const propagationResult = await templateInformationService.propagatePhotoChanges(
              template.id,
              photoIds,
              []
            );
            
            // Verify propagation result
            expect(propagationResult.templateId).toBe(template.id);
            expect(propagationResult.eventsAffected).toBe(0); // No events exist
            expect(propagationResult.photosAdded).toBe(photoTitles.length);
            expect(propagationResult.photosRemoved).toBe(0);
            expect(propagationResult.errors.length).toBe(0);
            
            // Verify photos are attached to template
            const templateWithPhotos = await templateManagerService.getTemplateById(template.id);
            expect(templateWithPhotos!.photos.length).toBe(photoTitles.length);
            
            // Clean up
            await prisma.entityPhoto.deleteMany({});
            await prisma.photo.deleteMany({});
            await prisma.maintenanceEvent.deleteMany({});
            await prisma.maintenanceTemplate.deleteMany({});
            await prisma.boat.deleteMany({});
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});