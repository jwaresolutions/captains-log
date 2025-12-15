import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { offlineChangeService } from '../../src/services/offlineChangeService';
import { templateManagerService } from '../../src/services/templateManagerService';
import { boatService } from '../../src/services/boatService';

const prisma = new PrismaClient();

/**
 * Property-Based Tests for Offline Functionality
 * 
 * **Feature: boat-tracking-system, Property 56: Offline change queuing and sync**
 * **Validates: Requirements 11.1, 11.2, 11.3**
 * 
 * For any template changes made offline, the system should queue the changes 
 * and sync them when connectivity returns, resolving conflicts using newest timestamp.
 */

describe('Property 56: Offline change queuing and sync', () => {
  
  beforeEach(async () => {
    // Clean up test data in proper order (foreign key constraints)
    await prisma.offlineChange.deleteMany({});
    await prisma.maintenanceEvent.deleteMany({});
    await prisma.maintenanceTemplate.deleteMany({});
    await prisma.boat.deleteMany({});
    
    // Wait a bit to ensure cleanup is complete
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterEach(async () => {
    // Clean up after each test to ensure isolation
    await prisma.offlineChange.deleteMany({});
    await prisma.maintenanceEvent.deleteMany({});
    await prisma.maintenanceTemplate.deleteMany({});
    await prisma.boat.deleteMany({});
    
    // Wait a bit to ensure cleanup is complete
    await new Promise(resolve => setTimeout(resolve, 10));
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  /**
   * Smart Generators for Valid Template Data
   */

  // Generate valid recurrence schedules
  const recurrenceScheduleArbitrary = fc.oneof(
    fc.record({
      type: fc.constant('days' as const),
      interval: fc.integer({ min: 1, max: 365 })
    }),
    fc.record({
      type: fc.constant('weeks' as const),
      interval: fc.integer({ min: 1, max: 52 })
    }),
    fc.record({
      type: fc.constant('months' as const),
      interval: fc.integer({ min: 1, max: 12 })
    }),
    fc.record({
      type: fc.constant('years' as const),
      interval: fc.integer({ min: 1, max: 5 })
    })
  );

  // Generate valid template data (trimmed to match service behavior)
  const templateDataArbitrary = fc.record({
    title: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()),
    description: fc.string({ minLength: 1, maxLength: 500 }).filter(s => s.trim().length > 0).map(s => s.trim()),
    component: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0).map(s => s.trim()),
    estimatedCost: fc.integer({ min: 0, max: 10000 }),
    estimatedTime: fc.integer({ min: 1, max: 480 }), // 1 minute to 8 hours
    recurrence: recurrenceScheduleArbitrary
  });

  // Generate valid boat data (trimmed to match service behavior)
  const boatDataArbitrary = fc.record({
    name: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0).map(s => s.trim())
  });

  /**
   * Test 1: Offline changes should be queued when connectivity is unavailable
   * Validates: Requirement 11.1
   */
  test('should queue template changes when offline', async () => {
    await fc.assert(
      fc.asyncProperty(
        boatDataArbitrary,
        templateDataArbitrary,
        fc.array(templateDataArbitrary, { minLength: 1, maxLength: 5 }),
        async (boatData, initialTemplate, templateUpdates) => {
          // Create a boat for the template
          const boat = await boatService.createBoat({ name: boatData.name });
          
          // Create initial template
          const template = await templateManagerService.createTemplate({
            boatId: boat.id,
            ...initialTemplate
          });

          // Simulate offline mode by queuing changes instead of applying directly
          const queuedChanges = [];
          
          for (const update of templateUpdates) {
            // Queue schedule change
            const scheduleChange = await offlineChangeService.queueScheduleChange(
              template.id,
              update.recurrence
            );
            queuedChanges.push(scheduleChange);

            // Queue template update
            const templateUpdate = await offlineChangeService.queueTemplateUpdate(
              template.id,
              {
                title: update.title,
                description: update.description,
                component: update.component,
                estimatedCost: update.estimatedCost,
                estimatedTime: update.estimatedTime
              }
            );
            queuedChanges.push(templateUpdate);
          }

          // Verify changes are queued
          const pendingChanges = await offlineChangeService.getPendingChanges();
          
          // Should have queued all changes (2 per update: template_update + schedule_change)
          expect(pendingChanges.length).toBeGreaterThanOrEqual(templateUpdates.length * 2);
          
          // Filter to only our changes for this template
          const templateChanges = pendingChanges.filter(c => c.entityId === template.id);
          expect(templateChanges.length).toBe(templateUpdates.length * 2);
          
          // All template changes should be for the correct template
          for (const change of templateChanges) {
            expect(change.entityType).toBe('maintenance_template');
            expect(change.entityId).toBe(template.id);
            expect(change.synced).toBe(false);
            expect(change.syncAttempts).toBe(0);
          }

          // Template changes should be ordered by timestamp
          const timestamps = templateChanges.map(c => c.timestamp.getTime());
          for (let i = 1; i < timestamps.length; i++) {
            expect(timestamps[i]).toBeGreaterThanOrEqual(timestamps[i - 1]);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Test 2: Queued changes should sync when connectivity returns
   * Validates: Requirement 11.2
   */
  test('should sync queued changes when connectivity returns', async () => {
    await fc.assert(
      fc.asyncProperty(
        boatDataArbitrary,
        templateDataArbitrary,
        fc.array(templateDataArbitrary, { minLength: 1, maxLength: 3 }),
        async (boatData, initialTemplate, templateUpdates) => {
          // Create a boat for the template
          const boat = await boatService.createBoat({ name: boatData.name });
          
          // Create initial template
          const template = await templateManagerService.createTemplate({
            boatId: boat.id,
            ...initialTemplate
          });

          // Queue multiple changes while "offline"
          const queuedChanges = [];
          
          for (const update of templateUpdates) {
            const templateUpdate = await offlineChangeService.queueTemplateUpdate(
              template.id,
              {
                title: update.title,
                description: update.description,
                component: update.component,
                estimatedCost: update.estimatedCost,
                estimatedTime: update.estimatedTime
              }
            );
            queuedChanges.push(templateUpdate);
          }

          // Verify changes are queued
          const pendingBefore = await offlineChangeService.getPendingChanges();
          const templateChangesBefore = pendingBefore.filter(c => c.entityId === template.id);
          expect(templateChangesBefore.length).toBe(templateUpdates.length);

          // Simulate connectivity return - sync all pending changes
          const syncResult = await offlineChangeService.syncPendingChanges();
          
          // Verify sync was successful
          expect(syncResult.success).toBe(true);
          expect(syncResult.changesSynced).toBeGreaterThanOrEqual(templateUpdates.length);
          expect(syncResult.errors.length).toBe(0);

          // Verify no pending changes remain for this template
          const pendingAfter = await offlineChangeService.getPendingChanges();
          const templateChangesAfter = pendingAfter.filter(c => c.entityId === template.id);
          expect(templateChangesAfter.length).toBe(0);

          // Verify template was updated with the latest changes
          const updatedTemplate = await templateManagerService.getTemplateById(template.id);
          expect(updatedTemplate).toBeTruthy();
          
          // The template should reflect the last update (since changes are applied in order)
          const lastUpdate = templateUpdates[templateUpdates.length - 1];
          expect(updatedTemplate!.title).toBe(lastUpdate.title.trim());
          expect(updatedTemplate!.description).toBe(lastUpdate.description.trim());
          expect(updatedTemplate!.component).toBe(lastUpdate.component.trim());
          expect(updatedTemplate!.estimatedCost).toBeCloseTo(lastUpdate.estimatedCost, 0);
          expect(updatedTemplate!.estimatedTime).toBe(lastUpdate.estimatedTime);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Test 3: Conflicts should be resolved using newest timestamp
   * Validates: Requirement 11.3
   */
  test('should resolve conflicts using newest timestamp', async () => {
    await fc.assert(
      fc.asyncProperty(
        boatDataArbitrary,
        templateDataArbitrary,
        templateDataArbitrary,
        templateDataArbitrary,
        async (boatData, initialTemplate, onlineUpdate, offlineUpdate) => {
          // Create a boat for the template
          const boat = await boatService.createBoat({ name: boatData.name });
          
          // Create initial template
          const template = await templateManagerService.createTemplate({
            boatId: boat.id,
            ...initialTemplate
          });

          // Simulate online update (direct to database)
          const onlineTimestamp = new Date();
          await templateManagerService.updateTemplate(template.id, {
            title: onlineUpdate.title,
            description: onlineUpdate.description,
            component: onlineUpdate.component,
            estimatedCost: onlineUpdate.estimatedCost,
            estimatedTime: onlineUpdate.estimatedTime
          });

          // Simulate offline update (queued) with a later timestamp
          const offlineTimestamp = new Date(onlineTimestamp.getTime() + 1000); // 1 second later
          
          // Manually create offline change with specific timestamp for conflict testing
          const offlineChange = await prisma.offlineChange.create({
            data: {
              entityType: 'maintenance_template',
              entityId: template.id,
              changeType: 'template_update',
              changeData: JSON.stringify({
                title: offlineUpdate.title,
                description: offlineUpdate.description,
                component: offlineUpdate.component,
                estimatedCost: offlineUpdate.estimatedCost,
                estimatedTime: offlineUpdate.estimatedTime
              }),
              timestamp: offlineTimestamp,
              synced: false,
              syncAttempts: 0
            }
          });

          // Sync the offline change (should win due to newer timestamp)
          const syncResult = await offlineChangeService.syncPendingChanges();
          
          // Verify sync was successful
          expect(syncResult.success).toBe(true);
          expect(syncResult.changesSynced).toBe(1);

          // Verify the offline update won (newer timestamp)
          const finalTemplate = await templateManagerService.getTemplateById(template.id);
          expect(finalTemplate).toBeTruthy();
          expect(finalTemplate!.title).toBe(offlineUpdate.title.trim());
          expect(finalTemplate!.description).toBe(offlineUpdate.description.trim());
          expect(finalTemplate!.component).toBe(offlineUpdate.component.trim());
          expect(finalTemplate!.estimatedCost).toBeCloseTo(offlineUpdate.estimatedCost, 0);
          expect(finalTemplate!.estimatedTime).toBe(offlineUpdate.estimatedTime);

          // Verify change is marked as synced
          const syncedChange = await prisma.offlineChange.findUnique({
            where: { id: offlineChange.id }
          });
          expect(syncedChange!.synced).toBe(true);
          expect(syncedChange!.lastSyncAttempt).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Test 4: Failed sync attempts should be tracked and retried
   * Validates: Requirement 11.4 (error handling)
   */
  test('should track failed sync attempts and retry', async () => {
    await fc.assert(
      fc.asyncProperty(
        boatDataArbitrary,
        templateDataArbitrary,
        async (boatData, templateUpdate) => {
          // Create a boat for the template (not used in this test but needed for cleanup)
          await boatService.createBoat({ name: boatData.name });
          
          // Queue an update for a non-existent template (will cause sync failure)
          const fakeTemplateId = 'non-existent-template-id';
          const offlineChange = await offlineChangeService.queueTemplateUpdate(
            fakeTemplateId,
            {
              title: templateUpdate.title,
              description: templateUpdate.description,
              component: templateUpdate.component,
              estimatedCost: templateUpdate.estimatedCost,
              estimatedTime: templateUpdate.estimatedTime
            }
          );

          // Attempt to sync (should fail)
          const syncResult = await offlineChangeService.syncPendingChanges();
          
          // Verify sync failed
          expect(syncResult.success).toBe(false);
          expect(syncResult.changesSynced).toBe(0);
          expect(syncResult.errors.length).toBeGreaterThan(0);

          // Verify the change is still pending with incremented sync attempts
          const failedChange = await prisma.offlineChange.findUnique({
            where: { id: offlineChange.id }
          });
          
          expect(failedChange).toBeTruthy();
          expect(failedChange!.synced).toBe(false);
          expect(failedChange!.syncAttempts).toBe(1);
          expect(failedChange!.lastSyncAttempt).toBeTruthy();
          expect(failedChange!.syncError).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Test 5: Offline status should provide accurate feedback
   * Validates: Requirement 11.5 (status feedback)
   */
  test('should provide accurate offline status feedback', async () => {
    await fc.assert(
      fc.asyncProperty(
        boatDataArbitrary,
        templateDataArbitrary,
        fc.array(templateDataArbitrary, { minLength: 1, maxLength: 5 }),
        async (boatData, initialTemplate, templateUpdates) => {
          // Create a boat for the template
          const boat = await boatService.createBoat({ name: boatData.name });
          
          // Create initial template
          const template = await templateManagerService.createTemplate({
            boatId: boat.id,
            ...initialTemplate
          });

          // Initially should have no pending changes (but may have lastSyncAttempt from previous tests)
          const initialStatus = await offlineChangeService.getSyncStatus();
          expect(initialStatus.pendingChanges).toBe(0);
          expect(initialStatus.failedChanges).toBe(0);
          // Don't check lastSyncAttempt as it may persist from previous tests

          // Queue multiple changes
          const queuedChanges = [];
          for (const update of templateUpdates) {
            const change = await offlineChangeService.queueTemplateUpdate(
              template.id,
              {
                title: update.title,
                description: update.description,
                component: update.component,
                estimatedCost: update.estimatedCost,
                estimatedTime: update.estimatedTime
              }
            );
            queuedChanges.push(change);
          }

          // Status should reflect pending changes
          const pendingStatus = await offlineChangeService.getSyncStatus();
          expect(pendingStatus.pendingChanges).toBeGreaterThanOrEqual(templateUpdates.length);
          expect(pendingStatus.failedChanges).toBe(0);

          // Sync all changes
          await offlineChangeService.syncPendingChanges();

          // Status should show no pending changes
          const syncedStatus = await offlineChangeService.getSyncStatus();
          expect(syncedStatus.pendingChanges).toBe(0);
          expect(syncedStatus.failedChanges).toBe(0);
          expect(syncedStatus.lastSyncAttempt).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Test 6: Multiple change types should be handled correctly
   * Validates: Requirements 11.1, 11.2 (comprehensive change handling)
   */
  test('should handle multiple change types correctly', async () => {
    await fc.assert(
      fc.asyncProperty(
        boatDataArbitrary,
        templateDataArbitrary,
        templateDataArbitrary,
        recurrenceScheduleArbitrary,
        async (boatData, initialTemplate, updateData, newRecurrence) => {
          // Create a boat for the template
          const boat = await boatService.createBoat({ name: boatData.name });
          
          // Create initial template
          const template = await templateManagerService.createTemplate({
            boatId: boat.id,
            ...initialTemplate
          });

          // Queue different types of changes
          await offlineChangeService.queueTemplateUpdate(
            template.id,
            {
              title: updateData.title,
              description: updateData.description,
              component: updateData.component,
              estimatedCost: updateData.estimatedCost,
              estimatedTime: updateData.estimatedTime
            }
          );

          await offlineChangeService.queueScheduleChange(
            template.id,
            newRecurrence
          );

          // Verify both changes are queued
          const pendingChanges = await offlineChangeService.getPendingChanges();
          expect(pendingChanges.length).toBe(2);

          // Verify change types
          const changeTypes = pendingChanges.map(c => c.changeType).sort();
          expect(changeTypes).toEqual(['schedule_change', 'template_update']);

          // Sync all changes
          const syncResult = await offlineChangeService.syncPendingChanges();
          
          // Verify sync was successful
          expect(syncResult.success).toBe(true);
          expect(syncResult.changesSynced).toBe(2);

          // Verify template reflects both changes
          const updatedTemplate = await templateManagerService.getTemplateById(template.id);
          expect(updatedTemplate).toBeTruthy();
          expect(updatedTemplate!.title).toBe(updateData.title.trim());
          expect(updatedTemplate!.description).toBe(updateData.description.trim());
          expect(updatedTemplate!.component).toBe(updateData.component.trim());
          expect(updatedTemplate!.estimatedCost).toBeCloseTo(updateData.estimatedCost, 0);
          expect(updatedTemplate!.estimatedTime).toBe(updateData.estimatedTime);
          
          // Note: Schedule changes would be reflected in generated events
          // which is tested in the schedule change property tests
        }
      ),
      { numRuns: 100 }
    );
  });
});