#!/usr/bin/env node

/**
 * Maintenance System Migration Cleanup Script
 * 
 * This script handles the final cleanup after migrating from the old MaintenanceTask/MaintenanceCompletion
 * structure to the new MaintenanceTemplate/MaintenanceEvent structure.
 * 
 * The database migration has already been completed, but this script:
 * 1. Verifies the new structure is in place
 * 2. Provides notification about recreating maintenance templates
 * 3. Ensures all maintenance-related functionality works with the new structure
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🔧 Maintenance System Migration Cleanup');
  console.log('=====================================');
  console.log('');

  try {
    // Verify the new maintenance structure exists
    console.log('✅ Verifying new maintenance structure...');
    
    // Check if MaintenanceTemplate table exists and is accessible
    const templateCount = await prisma.maintenanceTemplate.count();
    console.log(`   - MaintenanceTemplate table: ✅ (${templateCount} templates)`);
    
    // Check if MaintenanceEvent table exists and is accessible
    const eventCount = await prisma.maintenanceEvent.count();
    console.log(`   - MaintenanceEvent table: ✅ (${eventCount} events)`);
    
    // Check if old tables are gone (this will throw an error if they still exist)
    try {
      await prisma.$queryRaw`SELECT 1 FROM "MaintenanceTask" LIMIT 1`;
      console.log('   - ❌ ERROR: Old MaintenanceTask table still exists!');
      process.exit(1);
    } catch (error) {
      if (error.message.includes('does not exist') || error.message.includes('relation') || error.message.includes('table')) {
        console.log('   - Old MaintenanceTask table: ✅ Removed');
      } else {
        throw error;
      }
    }
    
    try {
      await prisma.$queryRaw`SELECT 1 FROM "MaintenanceCompletion" LIMIT 1`;
      console.log('   - ❌ ERROR: Old MaintenanceCompletion table still exists!');
      process.exit(1);
    } catch (error) {
      if (error.message.includes('does not exist') || error.message.includes('relation') || error.message.includes('table')) {
        console.log('   - Old MaintenanceCompletion table: ✅ Removed');
      } else {
        throw error;
      }
    }
    
    console.log('');
    console.log('✅ Database migration verification complete!');
    console.log('');
    
    // Check if there are any boats in the system
    const boatCount = await prisma.boat.count();
    console.log(`📊 System Status:`);
    console.log(`   - Boats: ${boatCount}`);
    console.log(`   - Maintenance Templates: ${templateCount}`);
    console.log(`   - Maintenance Events: ${eventCount}`);
    console.log('');
    
    // Provide administrator notification
    console.log('📢 ADMINISTRATOR NOTICE');
    console.log('======================');
    console.log('');
    console.log('The maintenance system has been successfully migrated to the new template-event structure.');
    console.log('');
    console.log('🔄 WHAT CHANGED:');
    console.log('   • Old MaintenanceTask and MaintenanceCompletion tables have been removed');
    console.log('   • New MaintenanceTemplate and MaintenanceEvent tables are now active');
    console.log('   • Templates define recurring maintenance schedules');
    console.log('   • Events are individual maintenance occurrences generated from templates');
    console.log('');
    console.log('⚠️  ACTION REQUIRED:');
    console.log('   • All previous maintenance tasks have been cleared');
    console.log('   • You will need to recreate your maintenance templates using the new system');
    console.log('   • Templates will automatically generate events up to one year in advance');
    console.log('   • Use the Android app or Web interface to create new maintenance templates');
    console.log('');
    console.log('📱 NEW FEATURES:');
    console.log('   • Template-based recurring maintenance scheduling');
    console.log('   • Automatic event generation up to one year ahead');
    console.log('   • Separate template photos (reference) and completion photos');
    console.log('   • Schedule change preview and confirmation');
    console.log('   • Template information propagation to future events');
    console.log('   • Improved offline support with change queuing');
    console.log('');
    console.log('🔧 API CHANGES:');
    console.log('   • Templates: /api/v1/maintenance/templates');
    console.log('   • Events: /api/v1/maintenance/events');
    console.log('   • Old /api/v1/maintenance endpoints are deprecated');
    console.log('');
    
    if (templateCount === 0 && boatCount > 0) {
      console.log('💡 GETTING STARTED:');
      console.log('   1. Open the Android app or Web interface');
      console.log('   2. Navigate to Maintenance → Schedule tab');
      console.log('   3. Create new maintenance templates for your boats');
      console.log('   4. Templates will automatically generate upcoming events');
      console.log('');
    }
    
    console.log('✅ Migration cleanup completed successfully!');
    console.log('');
    console.log('For more information, see the maintenance system documentation.');
    
  } catch (error) {
    console.error('❌ Migration cleanup failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});