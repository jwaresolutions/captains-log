import { PrismaClient } from '@prisma/client';
import { authService } from '../services/authService';
import { logger } from './logger';

const prisma = new PrismaClient();

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
        logger.info('Creating initial user from environment variables', { username: initialUsername });
        
        // Hash the password
        const passwordHash = await authService.hashPassword(initialPassword);

        // Create the initial user
        const user = await prisma.user.create({
          data: {
            username: initialUsername,
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
  } catch (error) {
    logger.error('Error during initial setup check', { error });
    // Don't throw - allow server to start even if initial setup fails
  }
}
