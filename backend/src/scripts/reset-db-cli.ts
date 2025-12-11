#!/usr/bin/env node
/**
 * CLI script to reset the database (drop all tables and recreate schema)
 * Optionally creates a default user if --username and --password are provided
 * 
 * Usage: npm run reset-db
 * Usage with user: npm run reset-db -- --username <username> --password <password>
 * Or via docker: docker-compose exec backend npm run reset-db -- --username <username> --password <password>
 * 
 * WARNING: This will delete ALL data in the database!
 */

import { PrismaClient } from '@prisma/client';
import { authService } from '../services/authService';
import { execSync } from 'child_process';

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

async function resetDatabase() {
  try {
    const args = parseArgs();

    console.log('⚠️  WARNING: This will delete ALL data in the database!');
    console.log('');

    // Drop all tables by resetting the database
    console.log('Dropping all tables...');
    try {
      // Use Prisma migrate reset with --force to skip confirmation
      execSync('npx prisma migrate reset --force --skip-seed', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
      console.log('✓ All tables dropped and schema recreated');
    } catch (error) {
      console.error('Error resetting database:', error);
      process.exit(1);
    }

    // Optionally create default user
    if (args.username && args.password) {
      console.log('');
      console.log('Creating default user...');

      // Hash password
      const passwordHash = await authService.hashPassword(args.password);

      // Create user
      const user = await prisma.user.create({
        data: {
          username: args.username,
          passwordHash
        }
      });

      console.log('✓ Default user created successfully');
      console.log(`  Username: ${user.username}`);
      console.log(`  User ID: ${user.id}`);
      console.log(`  Created: ${user.createdAt.toISOString()}`);
    } else {
      console.log('');
      console.log('ℹ️  No default user created (use --username and --password to create one)');
    }

    console.log('');
    console.log('✓ Database reset complete');
    process.exit(0);
  } catch (error) {
    console.error('Error resetting database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase();
