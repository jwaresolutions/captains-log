#!/usr/bin/env node

import { seedDevelopmentData } from './seed-development-data';

/**
 * CLI wrapper for seeding development data
 */
async function main() {
  console.log('🌱 Seeding development data...');
  console.log('');
  
  try {
    await seedDevelopmentData();
    
    console.log('');
    console.log('✅ Development data seeding completed successfully!');
    console.log('');
    console.log('📋 What was created:');
    console.log('  • 3 sample boats (Sea Explorer, Ocean Wanderer, Coastal Cruiser)');
    console.log('  • 15 sample trips with GPS data over the past 15 days');
    console.log('  • 10 sample notes (general, boat-specific, and trip-specific)');
    console.log('  • 3 todo lists with 9 items');
    console.log('  • 12 maintenance templates across all boats');
    console.log('  • 24 maintenance events (past and upcoming)');
    console.log('  • 4 marked locations around Miami');
    console.log('  • 3 sample notifications');
    console.log('');
    console.log('🔑 Test user credentials:');
    console.log('  Username: testuser');
    console.log('  Password: testpass123');
    console.log('');
    console.log('🚀 You can now start the development server and explore the app with sample data!');
    
  } catch (error) {
    console.error('');
    console.error('❌ Failed to seed development data:');
    console.error(error);
    process.exit(1);
  }
}

main();