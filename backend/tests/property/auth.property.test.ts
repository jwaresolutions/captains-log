import * as fc from 'fast-check';
import { AuthService } from '../../src/services/authService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const authService = new AuthService();

/**
 * Property-Based Tests for Authentication System
 * Tests username/password authentication with JWT session tokens
 */

describe('Authentication Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.sessionToken.deleteMany();
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.sessionToken.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 1: Session Token Authentication**
   * **Validates: Requirements 2.4, 2.7**
   * 
   * For any API request to the Backend API, if the request does not include a valid,
   * non-expired, non-revoked session token, then the system should reject the request
   * with an authentication error.
   */
  describe('Property 1: Session Token Authentication', () => {
    test('should reject requests without valid session tokens', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 10, maxLength: 200 }),
          async (invalidToken) => {
            // Create a user and get a valid token
            const username = `user_${Date.now()}_${Math.random()}`;
            const password = 'ValidPass123!';
            const passwordHash = await authService.hashPassword(password);
            
            await prisma.user.create({
              data: { username, passwordHash }
            });
            
            const { token: validToken } = await authService.login(username, password);
            
            // Skip if the random token happens to match the valid one
            fc.pre(invalidToken !== validToken);
            
            // Test that invalid token is rejected
            const result = await authService.validateToken(invalidToken);
            expect(result.valid).toBe(false);
            expect(result.error).toBeDefined();
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);

    test('should accept requests with valid session tokens', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_]+$/.test(s)),
          fc.string({ minLength: 8, maxLength: 30 }),
          async (username, password) => {
            // Create user and login
            const passwordHash = await authService.hashPassword(password);
            const user = await prisma.user.create({
              data: { username: `test_${username}_${Date.now()}`, passwordHash }
            });
            
            const { token } = await authService.login(user.username, password);
            
            // Validate the token
            const result = await authService.validateToken(token);
            
            expect(result.valid).toBe(true);
            expect(result.userId).toBe(user.id);
            expect(result.error).toBeUndefined();
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);

    test('should reject revoked tokens', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.constant(null),
          async () => {
            // Create user and login
            const username = `user_${Date.now()}_${Math.random()}`;
            const password = 'TestPass123!';
            const passwordHash = await authService.hashPassword(password);
            
            await prisma.user.create({
              data: { username, passwordHash }
            });
            
            const { token } = await authService.login(username, password);
            
            // Logout (revoke token)
            await authService.logout(token);
            
            // Try to validate revoked token
            const result = await authService.validateToken(token);
            
            expect(result.valid).toBe(false);
            expect(result.error).toContain('revoked');
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);

    test('should reject empty or missing tokens', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.constantFrom('', null as any, undefined as any),
          async (emptyToken) => {
            const result = await authService.validateToken(emptyToken);
            
            expect(result.valid).toBe(false);
            expect(result.error).toBeDefined();
          }
        ),
        { numRuns: 100 }
      );
    }, 30000);
  });

  /**
   * **Feature: boat-tracking-system, Property 2: Password Hashing**
   * **Validates: Requirements 2.3**
   * 
   * For any user account created, the system should store only the bcrypt hash
   * of the password, never the plaintext password.
   */
  describe('Property 2: Password Hashing', () => {
    test('should never store plaintext passwords', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_]+$/.test(s)),
          fc.string({ minLength: 8, maxLength: 30 }),
          async (username, password) => {
            // Create user
            const passwordHash = await authService.hashPassword(password);
            const user = await prisma.user.create({
              data: { username: `test_${username}_${Date.now()}`, passwordHash }
            });
            
            // Verify password is hashed (bcrypt hashes start with $2b$ or $2a$)
            expect(user.passwordHash).toMatch(/^\$2[ab]\$/);
            
            // Verify plaintext password is NOT stored
            expect(user.passwordHash).not.toBe(password);
            
            // Verify hash can be used to validate password
            const isValid = await authService.comparePassword(password, user.passwordHash);
            expect(isValid).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);

    test('should produce different hashes for same password (salt)', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 8, maxLength: 30 }),
          async (password) => {
            // Hash the same password twice
            const hash1 = await authService.hashPassword(password);
            const hash2 = await authService.hashPassword(password);
            
            // Hashes should be different due to salt
            expect(hash1).not.toBe(hash2);
            
            // But both should validate the password
            const valid1 = await authService.comparePassword(password, hash1);
            const valid2 = await authService.comparePassword(password, hash2);
            
            expect(valid1).toBe(true);
            expect(valid2).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);
  });

  /**
   * **Feature: boat-tracking-system, Property 3: Login Token Issuance**
   * **Validates: Requirements 2.2**
   * 
   * For any successful login with valid credentials, the system should issue a JWT
   * session token that can be used for subsequent API requests.
   */
  describe('Property 3: Login Token Issuance', () => {
    test('should issue valid JWT token on successful login', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_]+$/.test(s)),
          fc.string({ minLength: 8, maxLength: 30 }),
          async (username, password) => {
            // Create user
            const passwordHash = await authService.hashPassword(password);
            const uniqueUsername = `test_${username}_${Date.now()}`;
            await prisma.user.create({
              data: { username: uniqueUsername, passwordHash }
            });
            
            // Login
            const result = await authService.login(uniqueUsername, password);
            
            // Verify token is issued
            expect(result.token).toBeDefined();
            expect(typeof result.token).toBe('string');
            expect(result.token.length).toBeGreaterThan(0);
            
            // Verify user info is returned
            expect(result.user.username).toBeDefined();
            expect(result.user.id).toBeDefined();
            
            // Verify token can be validated
            const validation = await authService.validateToken(result.token);
            expect(validation.valid).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);

    test('should reject login with invalid credentials', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_]+$/.test(s)),
          fc.string({ minLength: 8, maxLength: 30 }),
          fc.string({ minLength: 8, maxLength: 30 }),
          async (username, correctPassword, wrongPassword) => {
            // Skip if passwords happen to be the same
            fc.pre(correctPassword !== wrongPassword);
            
            // Create user
            const passwordHash = await authService.hashPassword(correctPassword);
            const uniqueUsername = `test_${username}_${Date.now()}`;
            await prisma.user.create({
              data: { username: uniqueUsername, passwordHash }
            });
            
            // Try to login with wrong password
            await expect(
              authService.login(uniqueUsername, wrongPassword)
            ).rejects.toThrow();
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);
  });

  /**
   * **Feature: boat-tracking-system, Property 4: Password Change Token Invalidation**
   * **Validates: Requirements 2.13**
   * 
   * For any password change operation, all existing session tokens for that user
   * should be invalidated, requiring re-login on all devices.
   */
  describe('Property 4: Password Change Token Invalidation', () => {
    test('should invalidate all tokens when password is changed', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_]+$/.test(s)),
          fc.string({ minLength: 8, maxLength: 30 }),
          fc.string({ minLength: 8, maxLength: 30 }),
          async (username, oldPassword, newPassword) => {
            // Skip if passwords are the same
            fc.pre(oldPassword !== newPassword);
            
            // Create user
            const passwordHash = await authService.hashPassword(oldPassword);
            const user = await prisma.user.create({
              data: { username: `test_${username}_${Date.now()}`, passwordHash }
            });
            
            // Login multiple times to create multiple tokens
            const { token: token1 } = await authService.login(user.username, oldPassword);
            const { token: token2 } = await authService.login(user.username, oldPassword);
            const { token: token3 } = await authService.login(user.username, oldPassword);
            
            // Verify all tokens are valid
            expect((await authService.validateToken(token1)).valid).toBe(true);
            expect((await authService.validateToken(token2)).valid).toBe(true);
            expect((await authService.validateToken(token3)).valid).toBe(true);
            
            // Change password
            await authService.changePassword(user.id, oldPassword, newPassword);
            
            // Verify all old tokens are now invalid
            expect((await authService.validateToken(token1)).valid).toBe(false);
            expect((await authService.validateToken(token2)).valid).toBe(false);
            expect((await authService.validateToken(token3)).valid).toBe(false);
            
            // Verify can login with new password
            const { token: newToken } = await authService.login(user.username, newPassword);
            expect((await authService.validateToken(newToken)).valid).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    }, 90000);
  });

  /**
   * **Feature: boat-tracking-system, Property 5: Public Registration Rejection**
   * **Validates: Requirements 2.14**
   * 
   * For any attempt to register a user via the public API, the system should reject
   * the request with an authorization error.
   * 
   * Note: This property is tested by verifying that the AuthService does not expose
   * a public registration method. User creation is only possible via CLI or initial setup.
   */
  describe('Property 5: Public Registration Rejection', () => {
    test('should not expose public registration method', () => {
      // Verify AuthService does not have a public register method
      expect((authService as any).register).toBeUndefined();
      expect((authService as any).createUser).toBeUndefined();
      expect((authService as any).signUp).toBeUndefined();
      
      // Only methods that should exist are login, validateToken, logout, changePassword
      expect(authService.login).toBeDefined();
      expect(authService.validateToken).toBeDefined();
      expect(authService.logout).toBeDefined();
      expect(authService.changePassword).toBeDefined();
      expect(authService.hashPassword).toBeDefined();
      expect(authService.comparePassword).toBeDefined();
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 6: CLI User Creation**
   * **Validates: Requirements 2.1, 21.4**
   * 
   * For any user created via CLI command, the system should create a valid user account
   * with bcrypt-hashed password that can be used for login.
   */
  describe('Property 6: CLI User Creation', () => {
    test('should create valid user accounts that can login', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_]+$/.test(s)),
          fc.string({ minLength: 8, maxLength: 30 }),
          async (username, password) => {
            // Simulate CLI user creation (what the CLI script does)
            const passwordHash = await authService.hashPassword(password);
            const user = await prisma.user.create({
              data: { username: `test_${username}_${Date.now()}`, passwordHash }
            });
            
            // Verify user was created
            expect(user.id).toBeDefined();
            expect(user.username).toBeDefined();
            expect(user.passwordHash).toMatch(/^\$2[ab]\$/);
            
            // Verify user can login
            const { token } = await authService.login(user.username, password);
            expect(token).toBeDefined();
            
            // Verify token is valid
            const validation = await authService.validateToken(token);
            expect(validation.valid).toBe(true);
            expect(validation.userId).toBe(user.id);
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);

    test('should reject duplicate usernames', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_]+$/.test(s)),
          fc.string({ minLength: 8, maxLength: 30 }),
          async (username, password) => {
            const uniqueUsername = `test_${username}_${Date.now()}`;
            
            // Create first user
            const passwordHash = await authService.hashPassword(password);
            await prisma.user.create({
              data: { username: uniqueUsername, passwordHash }
            });
            
            // Try to create duplicate user
            await expect(
              prisma.user.create({
                data: { username: uniqueUsername, passwordHash }
              })
            ).rejects.toThrow();
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);
  });

  /**
   * **Feature: boat-tracking-system, Property 7: Database Reset**
   * **Validates: Requirements 21.1, 21.2**
   * 
   * For any database reset operation in development, the system should drop all tables,
   * recreate the schema, and optionally create a test user if credentials are provided.
   */
  describe('Property 7: Database Reset', () => {
    test('should allow creating user after database operations', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.string({ minLength: 3, maxLength: 20 }).filter(s => /^[a-zA-Z0-9_]+$/.test(s)),
          fc.string({ minLength: 8, maxLength: 30 }),
          async (username, password) => {
            // Simulate database reset by clearing all data
            await prisma.sessionToken.deleteMany();
            await prisma.user.deleteMany();
            
            // Verify database is empty
            const userCount = await prisma.user.count();
            expect(userCount).toBe(0);
            
            // Create user (simulating what reset-db script does with --username --password)
            const passwordHash = await authService.hashPassword(password);
            const user = await prisma.user.create({
              data: { username: `test_${username}_${Date.now()}`, passwordHash }
            });
            
            // Verify user was created successfully
            expect(user.id).toBeDefined();
            
            // Verify user can login
            const { token } = await authService.login(user.username, password);
            expect(token).toBeDefined();
            
            // Verify token works
            const validation = await authService.validateToken(token);
            expect(validation.valid).toBe(true);
          }
        ),
        { numRuns: 100 }
      );
    }, 60000);
  });
});
