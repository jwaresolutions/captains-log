#!/usr/bin/env node
/**
 * CLI script to create a new user
 * Usage: npm run create-user -- --username <username> --password <password>
 * Or via docker: docker-compose exec backend npm run create-user -- --username <username> --password <password>
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

async function createUser() {
  try {
    const args = parseArgs();

    if (!args.username || !args.password) {
      console.error('Error: Both --username and --password are required');
      console.log('Usage: npm run create-user -- --username <username> --password <password>');
      process.exit(1);
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { username: args.username }
    });

    if (existingUser) {
      console.error(`Error: User '${args.username}' already exists`);
      process.exit(1);
    }

    // Hash password
    const passwordHash = await authService.hashPassword(args.password);

    // Create user
    const user = await prisma.user.create({
      data: {
        username: args.username,
        passwordHash
      }
    });

    console.log('✓ User created successfully');
    console.log(`  Username: ${user.username}`);
    console.log(`  User ID: ${user.id}`);
    console.log(`  Created: ${user.createdAt.toISOString()}`);

    process.exit(0);
  } catch (error) {
    console.error('Error creating user:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
