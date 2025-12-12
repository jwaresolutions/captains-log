import { PrismaClient, Photo } from '@prisma/client';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface PhotoCreateDTO {
  entityType: 'trip' | 'maintenance' | 'note';
  entityId: string;
  originalBuffer: Buffer;
  mimeType: string;
  metadata?: {
    width?: number;
    height?: number;
    takenAt?: Date;
    [key: string]: any;
  };
}

export interface PhotoMetadata {
  width: number;
  height: number;
  takenAt?: Date;
  [key: string]: any;
}

export class PhotoService {
  private readonly uploadsDir = path.join(process.cwd(), 'uploads');
  private readonly originalDir = path.join(this.uploadsDir, 'photos', 'original');
  private readonly webOptimizedDir = path.join(this.uploadsDir, 'photos', 'web-optimized');

  constructor() {
    this.ensureDirectoriesExist();
  }

  /**
   * Ensure upload directories exist
   */
  private async ensureDirectoriesExist(): Promise<void> {
    try {
      await fs.mkdir(this.originalDir, { recursive: true });
      await fs.mkdir(this.webOptimizedDir, { recursive: true });
    } catch (error) {
      logger.error('Failed to create upload directories', { error });
      throw error;
    }
  }

  /**
   * Upload and process a photo
   */
  async uploadPhoto(data: PhotoCreateDTO): Promise<Photo> {
    try {
      // Validate entity type
      if (!['trip', 'maintenance', 'note'].includes(data.entityType)) {
        throw new Error('Invalid entity type. Must be trip, maintenance, or note');
      }

      // Validate MIME type
      if (!data.mimeType.startsWith('image/')) {
        throw new Error('Invalid file type. Must be an image');
      }

      // Generate unique filename
      const timestamp = Date.now();
      const extension = this.getExtensionFromMimeType(data.mimeType);
      const baseFilename = `${data.entityType}_${data.entityId}_${timestamp}`;
      const originalFilename = `${baseFilename}.${extension}`;
      const webOptimizedFilename = `${baseFilename}_web.${extension}`;

      const originalPath = path.join(this.originalDir, originalFilename);
      const webOptimizedPath = path.join(this.webOptimizedDir, webOptimizedFilename);

      // Save original image
      await fs.writeFile(originalPath, data.originalBuffer);

      // Get image metadata
      const imageMetadata = await sharp(data.originalBuffer).metadata();
      const photoMetadata: PhotoMetadata = {
        width: imageMetadata.width || 0,
        height: imageMetadata.height || 0,
        ...data.metadata
      };

      // Create web-optimized version (1920px width max)
      await this.optimizeForWeb(data.originalBuffer, webOptimizedPath);

      // Store photo record in database
      const photo = await prisma.photo.create({
        data: {
          entityType: data.entityType,
          entityId: data.entityId,
          originalPath: originalPath,
          webOptimizedPath: webOptimizedPath,
          mimeType: data.mimeType,
          sizeBytes: data.originalBuffer.length,
          metadata: photoMetadata
        }
      });

      logger.info('Photo uploaded successfully', {
        photoId: photo.id,
        entityType: data.entityType,
        entityId: data.entityId,
        sizeBytes: data.originalBuffer.length
      });

      return photo;
    } catch (error) {
      logger.error('Failed to upload photo', { error, entityType: data.entityType, entityId: data.entityId });
      throw error;
    }
  }

  /**
   * Get a photo by ID
   */
  async getPhoto(id: string): Promise<Photo | null> {
    const photo = await prisma.photo.findUnique({
      where: { id }
    });

    return photo;
  }

  /**
   * List photos by entity
   */
  async listPhotos(entityType: string, entityId: string): Promise<Photo[]> {
    const photos = await prisma.photo.findMany({
      where: {
        entityType,
        entityId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return photos;
  }

  /**
   * Delete a photo
   */
  async deletePhoto(id: string): Promise<void> {
    const photo = await prisma.photo.findUnique({
      where: { id }
    });

    if (!photo) {
      throw new Error('Photo not found');
    }

    try {
      // Delete files from filesystem
      await Promise.all([
        fs.unlink(photo.originalPath).catch(() => {}), // Ignore errors if file doesn't exist
        fs.unlink(photo.webOptimizedPath).catch(() => {})
      ]);

      // Delete database record
      await prisma.photo.delete({
        where: { id }
      });

      logger.info('Photo deleted successfully', { photoId: id });
    } catch (error) {
      logger.error('Failed to delete photo', { error, photoId: id });
      throw error;
    }
  }

  /**
   * Get photo file buffer
   */
  async getPhotoFile(id: string, optimized: boolean = false): Promise<Buffer> {
    const photo = await this.getPhoto(id);
    
    if (!photo) {
      throw new Error('Photo not found');
    }

    const filePath = optimized ? photo.webOptimizedPath : photo.originalPath;
    
    try {
      const buffer = await fs.readFile(filePath);
      return buffer;
    } catch (error) {
      logger.error('Failed to read photo file', { error, photoId: id, filePath });
      throw new Error('Photo file not found');
    }
  }

  /**
   * Optimize image for web display (1920px width max)
   */
  private async optimizeForWeb(originalBuffer: Buffer, outputPath: string): Promise<void> {
    try {
      await sharp(originalBuffer)
        .resize(1920, null, {
          withoutEnlargement: true, // Don't enlarge smaller images
          fit: 'inside'
        })
        .jpeg({ quality: 85 }) // Convert to JPEG with good quality
        .toFile(outputPath);
    } catch (error) {
      logger.error('Failed to optimize image for web', { error, outputPath });
      throw error;
    }
  }

  /**
   * Get file extension from MIME type
   */
  private getExtensionFromMimeType(mimeType: string): string {
    const mimeToExt: Record<string, string> = {
      'image/jpeg': 'jpg',
      'image/jpg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'image/webp': 'webp',
      'image/bmp': 'bmp',
      'image/tiff': 'tiff'
    };

    return mimeToExt[mimeType.toLowerCase()] || 'jpg';
  }

  /**
   * Get photos count by entity
   */
  async getPhotosCount(entityType: string, entityId: string): Promise<number> {
    const count = await prisma.photo.count({
      where: {
        entityType,
        entityId
      }
    });

    return count;
  }

  /**
   * Clean up orphaned photos (for maintenance)
   */
  async cleanupOrphanedPhotos(): Promise<number> {
    // This would check for photos whose entities no longer exist
    // Implementation depends on specific cleanup requirements
    logger.info('Photo cleanup not yet implemented');
    return 0;
  }
}

export const photoService = new PhotoService();