#!/usr/bin/env node
/**
 * CLI script to change a user's password
 * Usage: npm run change-password -- --username <username> --password <new-password>
 * Or via docker: docker-compose exec backend npm run change-password -- --username <username> --password <new-password>
 * 
 * Note: This invalidates all existing session tokens for the user
 */

import { PrismaClient } from '@prisma/client';
import { authService } from '../services/authService';

const prisma = new PrismaClient();

interface Args {
  username?: string;
  password?: string;
}

function parseArgs(): Args {
  const args: Args = {};
  const argv = process.argv.slice(2);

  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--username' && i + 1 < argv.length) {
      args.username = argv[i + 1];
      i++;
    } else if (argv[i] === '--password' && i + 1 < argv.length) {
      args.password = argv[i + 1];
      i++;
    }
  }

  return args;
}

async function changePassword() {
  try {
    const args = parseArgs();

    if (!args.username || !args.password) {
      console.error('Error: Both --username and --password are required');
      console.log('Usage: npm run change-password -- --username <username> --password <new-password>');
      process.exit(1);
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { username: args.username },
      include: {
        sessionTokens: {
          where: { isRevoked: false }
        }
      }
    });

    if (!user) {
      console.error(`Error: User '${args.username}' not found`);
      process.exit(1);
    }

    // Hash new password
    const newPasswordHash = await authService.hashPassword(args.password);

    // Count active sessions before invalidation
    const activeSessionCount = user.sessionTokens.length;

    // Update password and invalidate all tokens in a transaction
    await prisma.$transaction([
      // Update password
      prisma.user.update({
        where: { id: user.id },
        data: { passwordHash: newPasswordHash }
      }),
      // Revoke all existing tokens for this user
      prisma.sessionToken.updateMany({
        where: { userId: user.id, isRevoked: false },
        data: { isRevoked: true }
      })
    ]);

    console.log('✓ Password changed successfully');
    console.log(`  Username: ${user.username}`);
    console.log(`  User ID: ${user.id}`);
    console.log(`  Active sessions invalidated: ${activeSessionCount}`);
    console.log('');
    console.log('Note: The user will need to log in again on all devices');

    process.exit(0);
  } catch (error) {
    console.error('Error changing password:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

changePassword();
