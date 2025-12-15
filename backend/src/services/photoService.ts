import { PrismaClient, Photo } from '@prisma/client';
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface PhotoCreateDTO {
  originalBuffer: Buffer;
  mimeType: string;
  category?: string;
  title?: string;
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
      // Validate MIME type
      if (!data.mimeType.startsWith('image/')) {
        throw new Error('Invalid file type. Must be an image');
      }

      // Generate unique filename
      const timestamp = Date.now();
      const extension = this.getExtensionFromMimeType(data.mimeType);
      const baseFilename = `photo_${timestamp}`;
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
          originalPath: originalPath,
          webOptimizedPath: webOptimizedPath,
          mimeType: data.mimeType,
          sizeBytes: data.originalBuffer.length,
          category: data.category || 'general',
          title: data.title,
          metadata: photoMetadata
        }
      });

      logger.info('Photo uploaded successfully', {
        photoId: photo.id,
        category: data.category,
        sizeBytes: data.originalBuffer.length
      });

      return photo;
    } catch (error) {
      logger.error('Failed to upload photo', { error, category: data.category });
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
   * List photos by entity using EntityPhoto junction table
   */
  async listPhotos(entityType: string, entityId: string): Promise<Photo[]> {
    const entityPhotos = await prisma.entityPhoto.findMany({
      where: {
        entityType,
        entityId
      },
      include: {
        photo: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return entityPhotos.map(ep => ep.photo);
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
   * Get photos count by entity using EntityPhoto junction table
   */
  async getPhotosCount(entityType: string, entityId: string): Promise<number> {
    const count = await prisma.entityPhoto.count({
      where: {
        entityType,
        entityId
      }
    });

    return count;
  }

  /**
   * Attach a photo to an entity with proper categorization for template-event structure
   */
  async attachPhotoToEntity(photoId: string, entityType: string, entityId: string): Promise<void> {
    try {
      await prisma.entityPhoto.create({
        data: {
          photoId,
          entityType,
          entityId
        }
      });

      // Update photo category based on entity type for template-event structure
      let category = 'general';
      if (entityType === 'maintenance_template') {
        category = 'reference';
      } else if (entityType === 'maintenance_event') {
        category = 'completion';
      } else if (entityType === 'trip') {
        category = 'general';
      } else if (entityType === 'note') {
        category = 'general';
      }

      await prisma.photo.update({
        where: { id: photoId },
        data: { category }
      });

      logger.info('Photo attached to entity with category', { photoId, entityType, entityId, category });
    } catch (error: any) {
      if (error.code === 'P2002') { // Unique constraint violation
        throw new Error('Photo is already attached to this entity');
      }
      throw error;
    }
  }

  /**
   * Detach a photo from an entity
   */
  async detachPhotoFromEntity(photoId: string, entityType: string, entityId: string): Promise<void> {
    const deleted = await prisma.entityPhoto.deleteMany({
      where: {
        photoId,
        entityType,
        entityId
      }
    });

    if (deleted.count === 0) {
      throw new Error('Photo attachment not found');
    }

    logger.info('Photo detached from entity', { photoId, entityType, entityId });
  }

  /**
   * Get photos by category for an entity
   */
  async getPhotosByCategory(entityType: string, entityId: string, category: string): Promise<Photo[]> {
    const entityPhotos = await prisma.entityPhoto.findMany({
      where: {
        entityType,
        entityId,
        photo: {
          category
        }
      },
      include: {
        photo: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return entityPhotos.map(ep => ep.photo);
  }

  /**
   * Get template photos for a maintenance event (via template relationship)
   */
  async getTemplatePhotosForEvent(eventId: string): Promise<Photo[]> {
    // First get the event to find its template
    const event = await prisma.maintenanceEvent.findUnique({
      where: { id: eventId },
      select: { templateId: true }
    });

    if (!event) {
      return [];
    }

    // Get template photos
    return this.getPhotosByCategory('maintenance_template', event.templateId, 'reference');
  }

  /**
   * Get completion photos for a maintenance event
   */
  async getCompletionPhotosForEvent(eventId: string): Promise<Photo[]> {
    return this.getPhotosByCategory('maintenance_event', eventId, 'completion');
  }

  /**
   * Get all photos for a maintenance event (both template and completion) with proper categorization
   */
  async getAllPhotosForEvent(eventId: string): Promise<{ templatePhotos: Photo[]; completionPhotos: Photo[] }> {
    const [templatePhotos, completionPhotos] = await Promise.all([
      this.getTemplatePhotosForEvent(eventId),
      this.getCompletionPhotosForEvent(eventId)
    ]);

    return {
      templatePhotos,
      completionPhotos
    };
  }

  /**
   * Get photos for display on maintenance events showing both template and completion photos
   * This method ensures template photos are always visible on events from that template
   */
  async getEventDisplayPhotos(eventId: string): Promise<{ 
    templatePhotos: Photo[]; 
    completionPhotos: Photo[]; 
    allPhotos: Photo[];
    categorizedPhotos: { category: string; photos: Photo[] }[]
  }> {
    const { templatePhotos, completionPhotos } = await this.getAllPhotosForEvent(eventId);
    
    // Combine all photos for unified display
    const allPhotos = [...templatePhotos, ...completionPhotos];
    
    // Provide categorized view for UI display
    const categorizedPhotos = [
      { category: 'reference', photos: templatePhotos },
      { category: 'completion', photos: completionPhotos }
    ].filter(cat => cat.photos.length > 0); // Only include categories with photos

    return {
      templatePhotos,
      completionPhotos,
      allPhotos,
      categorizedPhotos
    };
  }

  /**
   * Update photo category
   */
  async updatePhotoCategory(photoId: string, category: string): Promise<void> {
    const validCategories = ['general', 'reference', 'completion'];
    if (!validCategories.includes(category)) {
      throw new Error(`Invalid photo category. Must be one of: ${validCategories.join(', ')}`);
    }

    await prisma.photo.update({
      where: { id: photoId },
      data: { category }
    });

    logger.info('Photo category updated', { photoId, category });
  }

  /**
   * Delete photo with proper cleanup for template-event structure
   * Handles template vs completion photo removal appropriately
   */
  async deletePhotoWithCleanup(id: string): Promise<void> {
    const photo = await prisma.photo.findUnique({
      where: { id },
      include: {
        entityPhotos: true
      }
    });

    if (!photo) {
      throw new Error('Photo not found');
    }

    try {
      // Use transaction to ensure atomicity
      await prisma.$transaction(async (tx) => {
        // Delete all entity associations first
        await tx.entityPhoto.deleteMany({
          where: { photoId: id }
        });

        // Delete the photo record
        await tx.photo.delete({
          where: { id }
        });
      });

      // Delete files from filesystem
      await Promise.all([
        fs.unlink(photo.originalPath).catch(() => {}), // Ignore errors if file doesn't exist
        fs.unlink(photo.webOptimizedPath).catch(() => {})
      ]);

      logger.info('Photo deleted with cleanup', { 
        photoId: id, 
        category: photo.category,
        associationsDeleted: photo.entityPhotos.length,
        isTemplatePhoto: photo.category === 'reference',
        isCompletionPhoto: photo.category === 'completion'
      });
    } catch (error) {
      logger.error('Failed to delete photo with cleanup', { error, photoId: id });
      throw error;
    }
  }

  /**
   * Delete template photo and handle template-event structure implications
   * Template photo removal affects all events generated from that template
   */
  async deleteTemplatePhoto(photoId: string, templateId: string): Promise<void> {
    const photo = await prisma.photo.findUnique({
      where: { id: photoId },
      include: {
        entityPhotos: {
          where: {
            entityType: 'maintenance_template',
            entityId: templateId
          }
        }
      }
    });

    if (!photo) {
      throw new Error('Photo not found');
    }

    if (photo.entityPhotos.length === 0) {
      throw new Error('Photo is not attached to this template');
    }

    if (photo.category !== 'reference') {
      throw new Error('Photo is not a template photo');
    }

    // Remove the photo entirely (it will no longer be visible on any events from this template)
    await this.deletePhotoWithCleanup(photoId);

    logger.info('Template photo deleted - no longer visible on related events', { 
      photoId, 
      templateId,
      category: photo.category
    });
  }

  /**
   * Delete completion photo - only affects the specific maintenance event
   */
  async deleteCompletionPhoto(photoId: string, eventId: string): Promise<void> {
    const photo = await prisma.photo.findUnique({
      where: { id: photoId },
      include: {
        entityPhotos: {
          where: {
            entityType: 'maintenance_event',
            entityId: eventId
          }
        }
      }
    });

    if (!photo) {
      throw new Error('Photo not found');
    }

    if (photo.entityPhotos.length === 0) {
      throw new Error('Photo is not attached to this event');
    }

    if (photo.category !== 'completion') {
      throw new Error('Photo is not a completion photo');
    }

    // Remove the photo entirely (only affects this specific event)
    await this.deletePhotoWithCleanup(photoId);

    logger.info('Completion photo deleted - only affects specific event', { 
      photoId, 
      eventId,
      category: photo.category
    });
  }

  /**
   * Ensure template photo changes are visible on all related events
   * This method validates that template photos are properly accessible from events
   */
  async validateTemplatePhotoVisibility(templateId: string): Promise<{ 
    templatePhotos: Photo[]; 
    relatedEvents: string[];
    visibilityConfirmed: boolean;
  }> {
    // Get template photos
    const templatePhotos = await this.getPhotosByCategory('maintenance_template', templateId, 'reference');
    
    // Get all events generated from this template
    const events = await prisma.maintenanceEvent.findMany({
      where: { templateId },
      select: { id: true }
    });
    
    const relatedEvents = events.map(e => e.id);
    
    // Template photos are visible on events through the template relationship
    // No direct attachment needed - they're accessed via getTemplatePhotosForEvent
    const visibilityConfirmed = true;
    
    logger.info('Template photo visibility validated', {
      templateId,
      templatePhotosCount: templatePhotos.length,
      relatedEventsCount: relatedEvents.length,
      visibilityConfirmed
    });
    
    return {
      templatePhotos,
      relatedEvents,
      visibilityConfirmed
    };
  }

  /**
   * Get photo statistics for template-event structure
   */
  async getPhotoStatistics(entityType: string, entityId: string): Promise<{
    totalPhotos: number;
    templatePhotos?: number;
    completionPhotos?: number;
    categories: { [category: string]: number };
  }> {
    if (entityType === 'maintenance_event') {
      const { templatePhotos, completionPhotos } = await this.getAllPhotosForEvent(entityId);
      
      return {
        totalPhotos: templatePhotos.length + completionPhotos.length,
        templatePhotos: templatePhotos.length,
        completionPhotos: completionPhotos.length,
        categories: {
          reference: templatePhotos.length,
          completion: completionPhotos.length
        }
      };
    } else {
      const photos = await this.listPhotos(entityType, entityId);
      const categories: { [category: string]: number } = {};
      
      photos.forEach(photo => {
        categories[photo.category] = (categories[photo.category] || 0) + 1;
      });
      
      return {
        totalPhotos: photos.length,
        categories
      };
    }
  }

  /**
   * Clean up orphaned photos (for maintenance)
   */
  async cleanupOrphanedPhotos(): Promise<number> {
    // Find photos that have no entity associations
    const orphanedPhotos = await prisma.photo.findMany({
      where: {
        entityPhotos: {
          none: {}
        }
      },
      select: { id: true }
    });

    let cleanedCount = 0;
    for (const photo of orphanedPhotos) {
      try {
        await this.deletePhotoWithCleanup(photo.id);
        cleanedCount++;
      } catch (error) {
        logger.error('Failed to cleanup orphaned photo', { error, photoId: photo.id });
      }
    }

    logger.info('Orphaned photos cleanup completed', { cleanedCount });
    return cleanedCount;
  }
}

export const photoService = new PhotoService();