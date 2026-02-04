import { PrismaClient } from '@prisma/client';
import { authService } from '../services/authService';
import { logger } from './logger';

const prisma = new PrismaClient();

/**
 * Bootstrap viewer account from environment variables
 * Creates or updates a VIEWER role account if VIEWER_USERNAME and VIEWER_PASSWORD are set
 */
async function bootstrapViewerAccount(): Promise<void> {
  const viewerUsername = process.env.VIEWER_USERNAME;
  const viewerPassword = process.env.VIEWER_PASSWORD;
  const viewerEnabled = process.env.VIEWER_ENABLED === 'true';

  if (!viewerUsername || !viewerPassword) {
    return; // No viewer env vars set, skip
  }

  try {
    const passwordHash = await authService.hashPassword(viewerPassword);

    const existing = await prisma.user.findFirst({
      where: { role: 'VIEWER' }
    });

    if (existing) {
      // Update existing viewer account
      await prisma.user.update({
        where: { id: existing.id },
        data: {
          username: viewerUsername.toLowerCase(),
          passwordHash,
          isEnabled: viewerEnabled,
        }
      });
      logger.info('Viewer account updated from environment variables', { username: viewerUsername.toLowerCase(), enabled: viewerEnabled });
    } else {
      // Create new viewer account
      await prisma.user.create({
        data: {
          username: viewerUsername.toLowerCase(),
          passwordHash,
          role: 'VIEWER',
          isEnabled: viewerEnabled,
        }
      });
      logger.info('Viewer account created from environment variables', { username: viewerUsername.toLowerCase(), enabled: viewerEnabled });
    }
  } catch (error) {
    logger.error('Error bootstrapping viewer account', { error });
  }
}

/**
 * Check if any users exist in the system
 * If no users exist, attempt to create initial user from environment variables
 * This runs on server startup
 */
export async function checkAndCreateInitialUser(): Promise<void> {
  try {
    // Check if any users exist
    const userCount = await prisma.user.count();

    if (userCount === 0) {
      logger.warn('No users found in the system');
      
      // Check for initial user credentials in environment variables
      const initialUsername = process.env.INITIAL_USER;
      const initialPassword = process.env.INITIAL_PASSWORD;

      if (initialUsername && initialPassword) {
        logger.info('Creating initial user from environment variables', { username: initialUsername.toLowerCase() });

        // Hash the password
        const passwordHash = await authService.hashPassword(initialPassword);

        // Create the initial user (username stored lowercase for case-insensitive login)
        const user = await prisma.user.create({
          data: {
            username: initialUsername.toLowerCase(),
            passwordHash
          }
        });

        logger.info('Initial user created successfully', {
          userId: user.id,
          username: user.username
        });
        logger.info('IMPORTANT: Remove INITIAL_USER and INITIAL_PASSWORD from environment variables for security');
      } else {
        logger.warn('No initial user credentials found in environment variables');
        logger.warn('To create the first user, you can:');
        logger.warn('  1. Set INITIAL_USER and INITIAL_PASSWORD environment variables and restart the server');
        logger.warn('  2. Use the CLI command: npm run create-user -- --username <username> --password <password>');
        logger.warn('  3. Use the web setup wizard (when implemented)');
      }
    } else {
      logger.info(`System has ${userCount} user(s) - initial setup not required`);
    }

    // Bootstrap viewer account from environment variables
    await bootstrapViewerAccount();
  } catch (error) {
    logger.error('Error during initial setup check', { error });
    // Don't throw - allow server to start even if initial setup fails
  }
}
