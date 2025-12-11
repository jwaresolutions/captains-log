import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

/**
 * Generate a random API key and its scrypt hash
 * Automatically updates the .env file, backs up the old key, and restarts Docker container
 * Usage: npx ts-node scripts/generate-api-key.ts
 */

const envPath = path.join(__dirname, '..', '.env');
const rootEnvPath = path.join(__dirname, '..', '..', '.env');

// Generate a random 32-character API key
const apiKey = crypto.randomBytes(16).toString('hex');

// Generate a random salt
const salt = crypto.randomBytes(16).toString('hex');

// Hash the API key using scrypt
const hash = crypto.scryptSync(apiKey, salt, 64).toString('hex');

// Format for .env file (salt:hash as expected by authService)
const envFormat = `${salt}:${hash}`;

function updateEnvFile(filePath: string): boolean {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  // Read current .env file
  let envContent = '';
  try {
    envContent = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return false;
  }

  // Extract current API_KEY_HASH if it exists
  const apiKeyHashMatch = envContent.match(/^API_KEY_HASH=(.+)$/m);
  const oldHash = apiKeyHashMatch ? apiKeyHashMatch[1] : null;

  // Update the .env file
  let newEnvContent = envContent;

  if (oldHash) {
    // Remove any existing previous API_KEY_HASH comment
    newEnvContent = envContent.replace(/^# Previous API_KEY_HASH.*\n/m, '');
    
    // Add old hash as backup comment before the API_KEY_HASH line
    const timestamp = new Date().toISOString();
    const backupComment = `# Previous API_KEY_HASH (${timestamp}): ${oldHash}`;
    
    // Replace the API_KEY_HASH line, adding backup comment above it
    newEnvContent = newEnvContent.replace(
      /^API_KEY_HASH=.+$/m,
      `${backupComment}\nAPI_KEY_HASH=${envFormat}`
    );
  } else {
    // No existing hash, just replace or add
    if (envContent.includes('API_KEY_HASH=')) {
      newEnvContent = envContent.replace(/^API_KEY_HASH=.*$/m, `API_KEY_HASH=${envFormat}`);
    } else {
      // Add it to the API Configuration section
      newEnvContent = envContent.replace(
        /# API Configuration/,
        `# API Configuration\nAPI_KEY_HASH=${envFormat}`
      );
    }
  }

  // Write updated .env file
  try {
    fs.writeFileSync(filePath, newEnvContent, 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    return false;
  }
}

console.log('\n=== API Key Generator ===\n');

// Update backend/.env
const backendUpdated = updateEnvFile(envPath);
if (backendUpdated) {
  console.log('✓ backend/.env updated successfully');
}

// Update root .env (for docker-compose)
const rootUpdated = updateEnvFile(rootEnvPath);
if (rootUpdated) {
  console.log('✓ root .env updated successfully');
}

if (!backendUpdated && !rootUpdated) {
  console.error('✗ Failed to update any .env files');
  process.exit(1);
}

console.log('\nAPI Key (use this for testing):');
console.log(apiKey);
console.log('\nAPI Key Hash (added to .env files):');
console.log(envFormat);

// Check if Docker container is running and recreate it to pick up new env vars
console.log('\n--- Docker Container Update ---\n');
try {
  const containerStatus = execSync('docker ps --filter "name=boat-tracking-api" --format "{{.Names}}"', { encoding: 'utf-8' }).trim();
  
  if (containerStatus === 'boat-tracking-api') {
    console.log('Docker container is running. Recreating to apply new API key...');
    console.log('(Note: "restart" does not reload .env, using "up -d" instead)');
    execSync('docker-compose up -d backend', { cwd: path.join(__dirname, '..', '..'), stdio: 'inherit' });
    console.log('✓ Docker container recreated successfully');
  } else {
    console.log('Docker container is not running. Start it with: docker-compose up -d');
  }
} catch (error) {
  console.log('Note: Could not check/recreate Docker container. If using Docker, recreate manually:');
  console.log('  cd to project root and run: docker-compose up -d backend');
}

console.log('\n========================\n');
