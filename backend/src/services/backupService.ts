import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as cron from 'node-cron';
import { logger } from '../utils/logger';

const execAsync = promisify(exec);

export interface BackupFile {
  id: string;
  filename: string;
  path: string;
  size: number;
  createdAt: Date;
  type: 'manual' | 'automatic';
}

export interface BackupOptions {
  includePhotos?: boolean;
  compress?: boolean;
}

class BackupService {
  private backupPath: string;
  private dbUrl: string;
  private photoPath: string;
  private autoBackupEnabled: boolean;
  private autoBackupSchedule: string;
  private cronJob?: cron.ScheduledTask;

  constructor() {
    this.backupPath = process.env.BACKUP_PATH || './backups';
    this.dbUrl = process.env.DATABASE_URL || '';
    this.photoPath = process.env.PHOTO_STORAGE_PATH || './uploads';
    this.autoBackupEnabled = process.env.AUTO_BACKUP_ENABLED === 'true';
    this.autoBackupSchedule = process.env.AUTO_BACKUP_SCHEDULE || '0 2 * * *'; // Daily at 2 AM

    this.initializeBackupDirectory();
    this.setupAutomaticBackup();
  }

  private async initializeBackupDirectory(): Promise<void> {
    try {
      await fs.access(this.backupPath);
    } catch {
      await fs.mkdir(this.backupPath, { recursive: true });
      logger.info(`Created backup directory: ${this.backupPath}`);
    }
  }

  private setupAutomaticBackup(): void {
    if (this.autoBackupEnabled && cron.validate(this.autoBackupSchedule)) {
      this.cronJob = cron.schedule(this.autoBackupSchedule, async () => {
        try {
          logger.info('Starting automatic backup');
          await this.createBackup({ includePhotos: true, compress: true }, 'automatic');
          logger.info('Automatic backup completed successfully');
        } catch (error) {
          logger.error('Automatic backup failed:', error);
        }
      });
      logger.info(`Automatic backup scheduled: ${this.autoBackupSchedule}`);
    }
  }

  public async createBackup(
    options: BackupOptions = { includePhotos: true, compress: true },
    type: 'manual' | 'automatic' = 'manual'
  ): Promise<BackupFile> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupId = `backup-${timestamp}`;
    const backupDir = path.join(this.backupPath, backupId);
    
    try {
      // Create backup directory
      await fs.mkdir(backupDir, { recursive: true });
      
      // Create database backup
      const dbBackupPath = await this.createDatabaseBackup(backupDir);
      logger.info(`Database backup created: ${dbBackupPath}`);
      
      // Include photos if requested
      if (options.includePhotos) {
        const photoBackupPath = await this.copyPhotos(backupDir);
        logger.info(`Photos backup created: ${photoBackupPath}`);
      }
      
      // Create archive if compression is requested
      let finalPath = backupDir;
      let filename = backupId;
      
      if (options.compress) {
        finalPath = await this.compressBackup(backupDir);
        filename = `${backupId}.tar.gz`;
        // Remove uncompressed directory
        await fs.rm(backupDir, { recursive: true });
      }
      
      // Get file size
      const stats = await fs.stat(finalPath);
      
      const backupFile: BackupFile = {
        id: backupId,
        filename,
        path: finalPath,
        size: stats.size,
        createdAt: new Date(),
        type
      };
      
      logger.info(`Backup created successfully: ${filename} (${this.formatBytes(stats.size)})`);
      return backupFile;
      
    } catch (error) {
      logger.error('Backup creation failed:', error);
      // Clean up on failure
      try {
        await fs.rm(backupDir, { recursive: true });
      } catch (cleanupError) {
        logger.error('Failed to clean up backup directory:', cleanupError);
      }
      throw error;
    }
  }

  private async createDatabaseBackup(backupDir: string): Promise<string> {
    const dbBackupPath = path.join(backupDir, 'database.sql');
    
    // Parse DATABASE_URL to extract connection details
    const url = new URL(this.dbUrl);
    const dbName = url.pathname.slice(1); // Remove leading slash
    const username = url.username;
    const password = url.password;
    const host = url.hostname;
    const port = url.port || '5432';
    
    // Set PGPASSWORD environment variable for pg_dump
    const env = { ...process.env, PGPASSWORD: password };
    
    const command = `pg_dump -h ${host} -p ${port} -U ${username} -d ${dbName} --no-password --clean --if-exists > "${dbBackupPath}"`;
    
    try {
      await execAsync(command, { env });
      return dbBackupPath;
    } catch (error) {
      logger.error('Database backup failed:', error);
      throw new Error(`Database backup failed: ${error}`);
    }
  }

  private async copyPhotos(backupDir: string): Promise<string> {
    const photoBackupPath = path.join(backupDir, 'photos');
    
    try {
      // Check if photos directory exists
      await fs.access(this.photoPath);
      
      // Copy photos directory recursively
      await this.copyDirectory(this.photoPath, photoBackupPath);
      return photoBackupPath;
    } catch (error) {
      if ((error as any).code === 'ENOENT') {
        // Photos directory doesn't exist, create empty directory
        await fs.mkdir(photoBackupPath, { recursive: true });
        logger.info('No photos directory found, created empty photos backup');
        return photoBackupPath;
      }
      throw error;
    }
  }

  private async copyDirectory(src: string, dest: string): Promise<void> {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        await this.copyDirectory(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  private async compressBackup(backupDir: string): Promise<string> {
    const archivePath = `${backupDir}.tar.gz`;
    const command = `tar -czf "${archivePath}" -C "${path.dirname(backupDir)}" "${path.basename(backupDir)}"`;
    
    try {
      await execAsync(command);
      return archivePath;
    } catch (error) {
      logger.error('Backup compression failed:', error);
      throw new Error(`Backup compression failed: ${error}`);
    }
  }

  public async listBackups(): Promise<BackupFile[]> {
    try {
      const entries = await fs.readdir(this.backupPath, { withFileTypes: true });
      const backups: BackupFile[] = [];
      
      for (const entry of entries) {
        if (entry.isFile() && (entry.name.endsWith('.tar.gz') || entry.name.startsWith('backup-'))) {
          const filePath = path.join(this.backupPath, entry.name);
          const stats = await fs.stat(filePath);
          
          // Extract backup ID from filename
          const backupId = entry.name.replace('.tar.gz', '');
          
          // Determine type based on filename pattern or creation time
          // For now, assume manual unless we have better metadata
          const type: 'manual' | 'automatic' = 'manual';
          
          backups.push({
            id: backupId,
            filename: entry.name,
            path: filePath,
            size: stats.size,
            createdAt: stats.birthtime,
            type
          });
        } else if (entry.isDirectory() && entry.name.startsWith('backup-')) {
          // Uncompressed backup directory
          const dirPath = path.join(this.backupPath, entry.name);
          const stats = await fs.stat(dirPath);
          
          backups.push({
            id: entry.name,
            filename: entry.name,
            path: dirPath,
            size: await this.getDirectorySize(dirPath),
            createdAt: stats.birthtime,
            type: 'manual'
          });
        }
      }
      
      // Sort by creation date, newest first
      return backups.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } catch (error) {
      logger.error('Failed to list backups:', error);
      throw error;
    }
  }

  private async getDirectorySize(dirPath: string): Promise<number> {
    let totalSize = 0;
    
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        const entryPath = path.join(dirPath, entry.name);
        
        if (entry.isDirectory()) {
          totalSize += await this.getDirectorySize(entryPath);
        } else {
          const stats = await fs.stat(entryPath);
          totalSize += stats.size;
        }
      }
    } catch (error) {
      logger.error(`Failed to calculate directory size for ${dirPath}:`, error);
    }
    
    return totalSize;
  }

  public async getBackup(backupId: string): Promise<BackupFile | null> {
    const backups = await this.listBackups();
    return backups.find(backup => backup.id === backupId) || null;
  }

  public async deleteBackup(backupId: string): Promise<boolean> {
    try {
      const backup = await this.getBackup(backupId);
      if (!backup) {
        return false;
      }
      
      await fs.rm(backup.path, { recursive: true });
      logger.info(`Backup deleted: ${backup.filename}`);
      return true;
    } catch (error) {
      logger.error(`Failed to delete backup ${backupId}:`, error);
      throw error;
    }
  }

  public async cleanupOldBackups(retentionDays: number = 30): Promise<number> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - retentionDays);
    
    const backups = await this.listBackups();
    const oldBackups = backups.filter(backup => backup.createdAt < cutoffDate);
    
    let deletedCount = 0;
    for (const backup of oldBackups) {
      try {
        await this.deleteBackup(backup.id);
        deletedCount++;
      } catch (error) {
        logger.error(`Failed to delete old backup ${backup.id}:`, error);
      }
    }
    
    if (deletedCount > 0) {
      logger.info(`Cleaned up ${deletedCount} old backups (older than ${retentionDays} days)`);
    }
    
    return deletedCount;
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  public stopAutomaticBackup(): void {
    if (this.cronJob) {
      this.cronJob.stop();
      logger.info('Automatic backup stopped');
    }
  }

  public startAutomaticBackup(): void {
    if (this.cronJob) {
      this.cronJob.start();
      logger.info('Automatic backup started');
    }
  }
}

export const backupService = new BackupService();