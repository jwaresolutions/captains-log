import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { logger } from '../utils/logger';

/**
 * Generate sample photos for development
 */
export async function generateSamplePhotos() {
  const uploadsDir = path.join(process.cwd(), 'uploads');
  const originalDir = path.join(uploadsDir, 'original');
  const webOptimizedDir = path.join(uploadsDir, 'web-optimized');

  // Ensure directories exist
  await fs.mkdir(originalDir, { recursive: true });
  await fs.mkdir(webOptimizedDir, { recursive: true });

  const samplePhotos = [
    {
      name: 'boat-exterior-1.jpg',
      description: 'Boat exterior view',
      color: '#4A90E2', // Blue
      text: 'BOAT\nEXTERIOR'
    },
    {
      name: 'boat-interior-1.jpg',
      description: 'Boat interior cabin',
      color: '#7ED321', // Green
      text: 'CABIN\nINTERIOR'
    },
    {
      name: 'engine-bay-1.jpg',
      description: 'Engine bay maintenance',
      color: '#F5A623', // Orange
      text: 'ENGINE\nBAY'
    },
    {
      name: 'sunset-trip-1.jpg',
      description: 'Beautiful sunset during trip',
      color: '#D0021B', // Red
      text: 'SUNSET\nTRIP'
    },
    {
      name: 'fishing-catch-1.jpg',
      description: 'Great fishing catch',
      color: '#9013FE', // Purple
      text: 'FISHING\nCATCH'
    },
    {
      name: 'maintenance-work-1.jpg',
      description: 'Maintenance work in progress',
      color: '#50E3C2', // Teal
      text: 'MAINTENANCE\nWORK'
    }
  ];

  const generatedPhotos = [];

  for (const photo of samplePhotos) {
    try {
      // Create a sample image using Sharp
      const width = 1920;
      const height = 1080;
      
      // Create SVG content
      const svgContent = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${photo.color};stop-opacity:1" />
              <stop offset="100%" style="stop-color:${photo.color}80;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)"/>
          <text x="50%" y="45%" text-anchor="middle" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="white" opacity="0.9">
            ${photo.text.split('\n')[0]}
          </text>
          <text x="50%" y="60%" text-anchor="middle" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="white" opacity="0.9">
            ${photo.text.split('\n')[1] || ''}
          </text>
          <text x="50%" y="85%" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" fill="white" opacity="0.7">
            Sample Development Photo
          </text>
          <circle cx="150" cy="150" r="50" fill="white" opacity="0.3"/>
          <circle cx="${width - 150}" cy="150" r="50" fill="white" opacity="0.3"/>
          <circle cx="150" cy="${height - 150}" r="50" fill="white" opacity="0.3"/>
          <circle cx="${width - 150}" cy="${height - 150}" r="50" fill="white" opacity="0.3"/>
        </svg>
      `;

      // Generate original image
      const originalPath = path.join(originalDir, photo.name);
      await sharp(Buffer.from(svgContent))
        .jpeg({ quality: 95 })
        .toFile(originalPath);

      // Generate web-optimized version
      const webOptimizedPath = path.join(webOptimizedDir, photo.name);
      await sharp(Buffer.from(svgContent))
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: 85 })
        .toFile(webOptimizedPath);

      generatedPhotos.push({
        name: photo.name,
        description: photo.description,
        originalPath,
        webOptimizedPath,
        mimeType: 'image/jpeg'
      });

      logger.info(`Generated sample photo: ${photo.name}`);

    } catch (error) {
      logger.error(`Failed to generate photo ${photo.name}:`, error);
    }
  }

  logger.info(`Generated ${generatedPhotos.length} sample photos`);
  return generatedPhotos;
}

// Run if executed directly
if (require.main === module) {
  generateSamplePhotos()
    .then(() => {
      console.log('✅ Sample photos generated successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Failed to generate sample photos:', error);
      process.exit(1);
    });
}