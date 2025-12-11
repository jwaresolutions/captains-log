#!/usr/bin/env node
/**
 * CLI script to list all users
 * Usage: npm run list-users
 * Or via docker: docker-compose exec backend npm run list-users
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            sessionTokens: true
          }
        }
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    if (users.length === 0) {
      console.log('No users found in the database');
      process.exit(0);
    }

    console.log(`Found ${users.length} user(s):\n`);

    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.username}`);
      console.log(`   User ID: ${user.id}`);
      console.log(`   Created: ${user.createdAt.toISOString()}`);
      console.log(`   Updated: ${user.updatedAt.toISOString()}`);
      console.log(`   Active Sessions: ${user._count.sessionTokens}`);
      console.log('');
    });

    process.exit(0);
  } catch (error) {
    console.error('Error listing users:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

listUsers();
