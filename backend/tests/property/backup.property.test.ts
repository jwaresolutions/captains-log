/**
 * **Feature: boat-tracking-system, Property 40: Database and Photo Backup Completeness**
 * **Validates: Requirements 12.3**
 */

import * as fc from 'fast-check';
import { backupService, BackupFile } from '../../src/services/backupService';
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';
import * as path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const prisma = new PrismaClient();

// Test configuration
const TEST_BACKUP_PATH = './test-backups';
const TEST_PHOTO_PATH = './test-photos';

describe('Backup Service Property Tests', () => {
  beforeAll(async () => {
    // Set test environment variables
    process.env.BACKUP_PATH = TEST_BACKUP_PATH;
    process.env.PHOTO_STORAGE_PATH = TEST_PHOTO_PATH;
    process.env.AUTO_BACKUP_ENABLED = 'false'; // Disable auto backup for tests
    
    // Create test directories
    await fs.mkdir(TEST_BACKUP_PATH, { recursive: true });
    await fs.mkdir(TEST_PHOTO_PATH, { recursive: true });
  });

  afterAll(async () => {
    // Clean up test directories
    try {
      await fs.rm(TEST_BACKUP_PATH, { recursive: true });
      await fs.rm(TEST_PHOTO_PATH, { recursive: true });
    } catch (error) {
      // Ignore cleanup errors
    }
    
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Clean up any existing test backups
    try {
      const entries = await fs.readdir(TEST_BACKUP_PATH);
      for (const entry of entries) {
        await fs.rm(path.join(TEST_BACKUP_PATH, entry), { recursive: true });
      }
    } catch (error) {
      // Ignore if directory doesn't exist
    }
    
    // Clean up test photos
    try {
      const entries = await fs.readdir(TEST_PHOTO_PATH);
      for (const entry of entries) {
        await fs.rm(path.join(TEST_PHOTO_PATH, entry), { recursive: true });
      }
    } catch (error) {
      // Ignore if directory doesn't exist
    }
  });

  /**
   * Property 40: Database and Photo Backup Completeness
   * For any database backup created, the backup should include all database records and photo files.
   */
  test('Property 40: Database and Photo Backup Completeness', async () => {
    await fc.assert(
      fc.asyncProperty(
        // Generate test data: boats, trips, and photos
        fc.record({
          boats: fc.array(
            fc.record({
              name: fc.string({ minLength: 1, maxLength: 50 }),
              enabled: fc.boolean(),
              isActive: fc.boolean()
            }),
            { minLength: 1, maxLength: 3 }
          ),
          photos: fc.array(
            fc.record({
              filename: fc.string({ minLength: 1, maxLength: 20 }).map(s => `${s}.jpg`),
              content: fc.string({ minLength: 10, maxLength: 100 })
            }),
            { minLength: 0, maxLength: 5 }
          ),
          includePhotos: fc.boolean(),
          compress: fc.boolean()
        }),
        async ({ boats, photos, includePhotos, compress }) => {
          // Create test data in database
          const createdBoats = [];
          for (const boatData of boats) {
            const boat = await prisma.boat.create({
              data: {
                name: boatData.name,
                enabled: boatData.enabled,
                isActive: boatData.isActive
              }
            });
            createdBoats.push(boat);
          }

          // Create test photo files
          const createdPhotos = [];
          for (const photoData of photos) {
            const photoPath = path.join(TEST_PHOTO_PATH, photoData.filename);
            await fs.writeFile(photoPath, photoData.content);
            createdPhotos.push({
              filename: photoData.filename,
              path: photoPath,
              content: photoData.content
            });
          }

          try {
            // Create backup
            const backup = await backupService.createBackup({
              includePhotos,
              compress
            });

            // Verify backup was created
            expect(backup).toBeDefined();
            expect(backup.id).toBeTruthy();
            expect(backup.filename).toBeTruthy();
            expect(backup.size).toBeGreaterThan(0);
            expect(backup.createdAt).toBeInstanceOf(Date);

            // Verify backup file exists
            await fs.access(backup.path);

            // Extract and verify backup contents
            let backupDir: string;
            if (compress) {
              // Extract compressed backup
              const extractDir = path.join(TEST_BACKUP_PATH, `extracted-${backup.id}`);
              await fs.mkdir(extractDir, { recursive: true });
              await execAsync(`tar -xzf "${backup.path}" -C "${extractDir}"`);
              
              // Find the extracted backup directory
              const entries = await fs.readdir(extractDir);
              const backupDirName = entries.find(entry => entry.startsWith('backup-'));
              expect(backupDirName).toBeTruthy();
              backupDir = path.join(extractDir, backupDirName!);
            } else {
              backupDir = backup.path;
            }

            // Verify database backup exists
            const dbBackupPath = path.join(backupDir, 'database.sql');
            await fs.access(dbBackupPath);
            
            // Verify database backup contains our test data
            const dbBackupContent = await fs.readFile(dbBackupPath, 'utf-8');
            
            // Check that all created boats are in the backup
            for (const boat of createdBoats) {
              expect(dbBackupContent).toContain(boat.name);
            }

            // Verify photo backup if requested
            if (includePhotos) {
              const photoBackupPath = path.join(backupDir, 'photos');
              await fs.access(photoBackupPath);
              
              // Check that all created photos are in the backup
              for (const photo of createdPhotos) {
                const backedUpPhotoPath = path.join(photoBackupPath, photo.filename);
                await fs.access(backedUpPhotoPath);
                
                const backedUpContent = await fs.readFile(backedUpPhotoPath, 'utf-8');
                expect(backedUpContent).toBe(photo.content);
              }
            } else {
              // If photos not included, photos directory should not exist or be empty
              try {
                const photoBackupPath = path.join(backupDir, 'photos');
                await fs.access(photoBackupPath);
                const photoEntries = await fs.readdir(photoBackupPath);
                expect(photoEntries).toHaveLength(0);
              } catch (error) {
                // Photos directory doesn't exist, which is fine
                expect((error as any).code).toBe('ENOENT');
              }
            }

            // Verify backup appears in backup list
            const backupList = await backupService.listBackups();
            const foundBackup = backupList.find(b => b.id === backup.id);
            expect(foundBackup).toBeDefined();
            expect(foundBackup!.filename).toBe(backup.filename);
            expect(foundBackup!.size).toBe(backup.size);

          } finally {
            // Clean up test data
            for (const boat of createdBoats) {
              await prisma.boat.delete({ where: { id: boat.id } }).catch(() => {});
            }
          }
        }
      ),
      { numRuns: 100, timeout: 30000 } // 30 second timeout for backup operations
    );
  });

  test('Property: Backup listing completeness', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.array(
          fc.record({
            includePhotos: fc.boolean(),
            compress: fc.boolean()
          }),
          { minLength: 1, maxLength: 3 }
        ),
        async (backupConfigs) => {
          const createdBackups: BackupFile[] = [];

          try {
            // Create multiple backups
            for (const config of backupConfigs) {
              const backup = await backupService.createBackup(config);
              createdBackups.push(backup);
            }

            // List all backups
            const backupList = await backupService.listBackups();

            // Verify all created backups are in the list
            for (const createdBackup of createdBackups) {
              const foundBackup = backupList.find(b => b.id === createdBackup.id);
              expect(foundBackup).toBeDefined();
              expect(foundBackup!.filename).toBe(createdBackup.filename);
              expect(foundBackup!.size).toBe(createdBackup.size);
              expect(foundBackup!.type).toBe(createdBackup.type);
            }

            // Verify list is sorted by creation date (newest first)
            for (let i = 0; i < backupList.length - 1; i++) {
              expect(backupList[i].createdAt.getTime()).toBeGreaterThanOrEqual(
                backupList[i + 1].createdAt.getTime()
              );
            }

          } finally {
            // Clean up created backups
            for (const backup of createdBackups) {
              try {
                await backupService.deleteBackup(backup.id);
              } catch (error) {
                // Ignore cleanup errors
              }
            }
          }
        }
      ),
      { numRuns: 50, timeout: 60000 }
    );
  });

  test('Property: Backup retrieval consistency', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          includePhotos: fc.boolean(),
          compress: fc.boolean()
        }),
        async ({ includePhotos, compress }) => {
          let backup: BackupFile | undefined;

          try {
            // Create a backup
            backup = await backupService.createBackup({ includePhotos, compress });

            // Retrieve the backup by ID
            const retrievedBackup = await backupService.getBackup(backup.id);

            // Verify retrieved backup matches created backup
            expect(retrievedBackup).toBeDefined();
            expect(retrievedBackup!.id).toBe(backup.id);
            expect(retrievedBackup!.filename).toBe(backup.filename);
            expect(retrievedBackup!.path).toBe(backup.path);
            expect(retrievedBackup!.size).toBe(backup.size);
            expect(retrievedBackup!.type).toBe(backup.type);

            // Verify backup file actually exists at the specified path
            await fs.access(retrievedBackup!.path);

          } finally {
            // Clean up
            if (backup) {
              try {
                await backupService.deleteBackup(backup.id);
              } catch (error) {
                // Ignore cleanup errors
              }
            }
          }
        }
      ),
      { numRuns: 50, timeout: 30000 }
    );
  });
});