#!/usr/bin/env node

/**
 * Simple load testing script for the Boat Tracking API
 * Tests basic endpoints with concurrent requests
 */

const http = require('http');
const https = require('https');

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:8585';
const CONCURRENT_REQUESTS = parseInt(process.env.CONCURRENT_REQUESTS || '10');
const TOTAL_REQUESTS = parseInt(process.env.TOTAL_REQUESTS || '100');

// Test endpoints
const endpoints = [
  { path: '/health', method: 'GET', requiresAuth: false },
  { path: '/api/v1', method: 'GET', requiresAuth: false },
  { path: '/api/v1/boats', method: 'GET', requiresAuth: true },
  { path: '/api/v1/trips', method: 'GET', requiresAuth: true },
];

let authToken = null;
const results = {
  total: 0,
  success: 0,
  errors: 0,
  times: [],
  errorDetails: []
};

// Get auth token first
async function getAuthToken() {
  return new Promise((resolve, reject) => {
    const loginData = JSON.stringify({
      username: process.env.TEST_USERNAME || 'admin',
      password: process.env.TEST_PASSWORD || 'testpass'
    });

    const options = {
      hostname: BASE_URL.includes('localhost') ? 'localhost' : new URL(BASE_URL).hostname,
      port: BASE_URL.includes('localhost') ? 8585 : (BASE_URL.startsWith('https') ? 443 : 80),
      path: '/api/v1/auth/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(loginData)
      }
    };

    const protocol = BASE_URL.startsWith('https') ? https : http;
    const req = protocol.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.token) {
            resolve(response.token);
          } else {
            reject(new Error('No token in response'));
          }
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on('error', reject);
    req.write(loginData);
    req.end();
  });
}

// Make a single request
function makeRequest(endpoint) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const options = {
      hostname: BASE_URL.includes('localhost') ? 'localhost' : new URL(BASE_URL).hostname,
      port: BASE_URL.includes('localhost') ? 8585 : (BASE_URL.startsWith('https') ? 443 : 80),
      path: endpoint.path,
      method: endpoint.method,
      headers: {}
    };

    if (endpoint.requiresAuth && authToken) {
      options.headers['Authorization'] = `Bearer ${authToken}`;
    }

    const protocol = BASE_URL.startsWith('https') ? https : http;
    const req = protocol.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        results.total++;
        results.times.push(duration);
        
        if (res.statusCode >= 200 && res.statusCode < 300) {
          results.success++;
        } else {
          results.errors++;
          results.errorDetails.push({
            endpoint: endpoint.path,
            status: res.statusCode,
            duration
          });
        }
        
        resolve({ status: res.statusCode, duration });
      });
    });

    req.on('error', (err) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      results.total++;
      results.errors++;
      results.times.push(duration);
      results.errorDetails.push({
        endpoint: endpoint.path,
        error: err.message,
        duration
      });
      
      resolve({ error: err.message, duration });
    });

    req.end();
  });
}

// Run concurrent requests
async function runLoadTest() {
  console.log('🚀 Starting load test...');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Concurrent requests: ${CONCURRENT_REQUESTS}`);
  console.log(`Total requests: ${TOTAL_REQUESTS}`);
  console.log('');

  // Get auth token
  try {
    console.log('🔐 Getting authentication token...');
    authToken = await getAuthToken();
    console.log('✅ Authentication successful');
  } catch (err) {
    console.log('❌ Authentication failed:', err.message);
    console.log('⚠️  Continuing with unauthenticated requests only');
  }

  const startTime = Date.now();
  const promises = [];

  // Create batches of concurrent requests
  for (let i = 0; i < TOTAL_REQUESTS; i++) {
    const endpoint = endpoints[i % endpoints.length];
    
    // Skip authenticated endpoints if no token
    if (endpoint.requiresAuth && !authToken) {
      continue;
    }
    
    promises.push(makeRequest(endpoint));
    
    // Limit concurrency
    if (promises.length >= CONCURRENT_REQUESTS) {
      await Promise.all(promises);
      promises.length = 0; // Clear array
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }

  // Wait for remaining requests
  if (promises.length > 0) {
    await Promise.all(promises);
  }

  const totalTime = Date.now() - startTime;

  // Calculate statistics
  const avgTime = results.times.reduce((a, b) => a + b, 0) / results.times.length;
  const minTime = Math.min(...results.times);
  const maxTime = Math.max(...results.times);
  const successRate = (results.success / results.total) * 100;
  const requestsPerSecond = (results.total / totalTime) * 1000;

  // Sort times for percentiles
  const sortedTimes = results.times.sort((a, b) => a - b);
  const p50 = sortedTimes[Math.floor(sortedTimes.length * 0.5)];
  const p95 = sortedTimes[Math.floor(sortedTimes.length * 0.95)];
  const p99 = sortedTimes[Math.floor(sortedTimes.length * 0.99)];

  console.log('\n📊 Load Test Results');
  console.log('===================');
  console.log(`Total requests: ${results.total}`);
  console.log(`Successful: ${results.success}`);
  console.log(`Errors: ${results.errors}`);
  console.log(`Success rate: ${successRate.toFixed(2)}%`);
  console.log(`Total time: ${totalTime}ms`);
  console.log(`Requests/second: ${requestsPerSecond.toFixed(2)}`);
  console.log('');
  console.log('Response Times:');
  console.log(`  Average: ${avgTime.toFixed(2)}ms`);
  console.log(`  Min: ${minTime}ms`);
  console.log(`  Max: ${maxTime}ms`);
  console.log(`  50th percentile: ${p50}ms`);
  console.log(`  95th percentile: ${p95}ms`);
  console.log(`  99th percentile: ${p99}ms`);

  if (results.errorDetails.length > 0) {
    console.log('\n❌ Error Details:');
    results.errorDetails.forEach((error, index) => {
      console.log(`  ${index + 1}. ${error.endpoint}: ${error.status || error.error} (${error.duration}ms)`);
    });
  }

  console.log('\n✅ Load test completed');
  
  // Exit with error code if too many failures
  if (successRate < 95) {
    console.log('⚠️  Warning: Success rate below 95%');
    process.exit(1);
  }
}

// Run the test
runLoadTest().catch(err => {
  console.error('❌ Load test failed:', err);
  process.exit(1);
});