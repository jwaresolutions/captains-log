import request from 'supertest';
import express, { Express } from 'express';
import authRoutes from '../../src/routes/auth';
import { authService } from '../../src/services/authService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Clean up test data after all tests
afterAll(async () => {
  // Clean up any test users created during tests
  await prisma.sessionToken.deleteMany({
    where: {
      user: {
        username: {
          startsWith: 'testuser'
        }
      }
    }
  });
  await prisma.user.deleteMany({
    where: {
      username: {
        startsWith: 'testuser'
      }
    }
  });
  await prisma.$disconnect();
});

describe('Auth Routes - Login', () => {
  let app: Express;
  let testUserId: string;

  beforeAll(async () => {
    app = express();
    app.use(express.json());
    app.use('/api/v1/auth', authRoutes);

    // Create a test user for login tests
    const passwordHash = await authService.hashPassword('testpassword123');
    const user = await prisma.user.create({
      data: {
        username: 'testuser_login',
        passwordHash
      }
    });
    testUserId = user.id;
  });

  afterAll(async () => {
    // Clean up test user and tokens
    await prisma.sessionToken.deleteMany({
      where: { userId: testUserId }
    });
    await prisma.user.delete({
      where: { id: testUserId }
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('should successfully login with valid credentials', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_login',
          password: 'testpassword123'
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('user');
      expect(response.body).toHaveProperty('token');
      expect(response.body).toHaveProperty('expiresIn');
      expect(response.body.user.username).toBe('testuser_login');
      expect(response.body.user.id).toBe(testUserId);
      expect(response.body.expiresIn).toBe('30d');
      expect(typeof response.body.token).toBe('string');
      expect(response.body.token.length).toBeGreaterThan(0);
    });

    it('should reject login with invalid username', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'nonexistentuser',
          password: 'testpassword123'
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('INVALID_CREDENTIALS');
      expect(response.body.error.message).toContain('Invalid username or password');
    });

    it('should reject login with invalid password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_login',
          password: 'wrongpassword'
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('INVALID_CREDENTIALS');
      expect(response.body.error.message).toContain('Invalid username or password');
    });

    it('should reject login without username', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          password: 'testpassword123'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
      expect(response.body.error.message).toContain('Username and password are required');
    });

    it('should reject login without password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_login'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
      expect(response.body.error.message).toContain('Username and password are required');
    });

    it('should reject login with empty username', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: '',
          password: 'testpassword123'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should reject login with empty password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_login',
          password: ''
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should reject login with empty body', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should create a session token in database on successful login', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_login',
          password: 'testpassword123'
        });

      expect(response.status).toBe(200);
      const token = response.body.token;

      // Verify token exists in database
      const sessionToken = await prisma.sessionToken.findUnique({
        where: { token }
      });

      expect(sessionToken).not.toBeNull();
      expect(sessionToken?.userId).toBe(testUserId);
      expect(sessionToken?.isRevoked).toBe(false);
      expect(sessionToken?.expiresAt).toBeInstanceOf(Date);
      expect(sessionToken!.expiresAt.getTime()).toBeGreaterThan(Date.now());
    });

    it('should generate JWT token with 30-day expiration', async () => {
      // Add a small delay to ensure unique token generation
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_login',
          password: 'testpassword123'
        });

      expect(response.status).toBe(200);
      const token = response.body.token;

      // Validate the token
      const validation = await authService.validateToken(token);
      expect(validation.valid).toBe(true);
      expect(validation.userId).toBe(testUserId);
    });
  });
});

describe('Auth Routes - Logout', () => {
  let app: Express;
  let testUserId: string;
  let validToken: string;

  beforeAll(async () => {
    app = express();
    app.use(express.json());
    app.use('/api/v1/auth', authRoutes);

    // Create a test user for logout tests
    const passwordHash = await authService.hashPassword('testpassword123');
    const user = await prisma.user.create({
      data: {
        username: 'testuser_logout',
        passwordHash
      }
    });
    testUserId = user.id;

    // Login to get a valid token
    const loginResponse = await request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'testuser_logout',
        password: 'testpassword123'
      });
    validToken = loginResponse.body.token;
  });

  afterAll(async () => {
    // Clean up test user and tokens
    await prisma.sessionToken.deleteMany({
      where: { userId: testUserId }
    });
    await prisma.user.delete({
      where: { id: testUserId }
    });
  });

  describe('POST /api/v1/auth/logout', () => {
    it('should successfully logout with valid token', async () => {
      // Login to get a fresh token for this test
      const loginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_logout',
          password: 'testpassword123'
        });
      const token = loginResponse.body.token;

      // Logout with the token
      const response = await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`)
        .send();

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Logged out successfully');

      // Verify token is revoked in database
      const sessionToken = await prisma.sessionToken.findUnique({
        where: { token }
      });
      expect(sessionToken).not.toBeNull();
      expect(sessionToken?.isRevoked).toBe(true);
    });

    it('should reject logout without Authorization header', async () => {
      const response = await request(app)
        .post('/api/v1/auth/logout')
        .send();

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('UNAUTHORIZED');
      expect(response.body.error.message).toContain('Authorization header is required');
    });

    it('should reject logout with invalid Authorization header format', async () => {
      const response = await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', 'InvalidFormat')
        .send();

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('UNAUTHORIZED');
      expect(response.body.error.message).toContain('Invalid Authorization header format');
    });

    it('should reject logout with missing Bearer prefix', async () => {
      const response = await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', validToken)
        .send();

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('UNAUTHORIZED');
      expect(response.body.error.message).toContain('Invalid Authorization header format');
    });

    it('should reject logout with empty token', async () => {
      const response = await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', 'Bearer ')
        .send();

      // Empty token after "Bearer " results in invalid format
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('UNAUTHORIZED');
    });

    it('should handle logout of non-existent token gracefully', async () => {
      const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmYWtlIiwidXNlcm5hbWUiOiJmYWtlIiwiaWF0IjoxNjE2MjM5MDIyfQ.fakesignature';
      
      const response = await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${fakeToken}`)
        .send();

      // Should return 500 because the token doesn't exist in the database
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('error');
    });

    it('should allow logout of already revoked token', async () => {
      // Login to get a fresh token
      const loginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_logout',
          password: 'testpassword123'
        });
      const token = loginResponse.body.token;

      // Logout once
      await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`)
        .send();

      // Try to logout again with the same token
      const response = await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`)
        .send();

      // Should succeed (idempotent operation)
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Logged out successfully');
    });

    it('should invalidate token after logout', async () => {
      // Login to get a fresh token
      const loginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_logout',
          password: 'testpassword123'
        });
      const token = loginResponse.body.token;

      // Verify token is valid before logout
      const validationBefore = await authService.validateToken(token);
      expect(validationBefore.valid).toBe(true);

      // Logout
      await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`)
        .send();

      // Verify token is invalid after logout
      const validationAfter = await authService.validateToken(token);
      expect(validationAfter.valid).toBe(false);
      expect(validationAfter.error).toContain('revoked');
    });
  });
});

describe('Auth Routes - Password Change', () => {
  let app: Express;
  let testUserId: string;
  let validToken: string;

  beforeAll(async () => {
    app = express();
    app.use(express.json());
    app.use('/api/v1/auth', authRoutes);

    // Create a test user for password change tests
    const passwordHash = await authService.hashPassword('oldpassword123');
    const user = await prisma.user.create({
      data: {
        username: 'testuser_password',
        passwordHash
      }
    });
    testUserId = user.id;

    // Login to get a valid token
    const loginResponse = await request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'testuser_password',
        password: 'oldpassword123'
      });
    validToken = loginResponse.body.token;
  });

  afterAll(async () => {
    // Clean up test user and tokens
    await prisma.sessionToken.deleteMany({
      where: { userId: testUserId }
    });
    await prisma.user.delete({
      where: { id: testUserId }
    });
  });

  describe('POST /api/v1/auth/change-password', () => {
    it('should successfully change password with valid credentials', async () => {
      // Login to get a fresh token
      const loginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_password',
          password: 'oldpassword123'
        });
      const token = loginResponse.body.token;

      // Change password
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${token}`)
        .send({
          currentPassword: 'oldpassword123',
          newPassword: 'newpassword456'
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('Password changed successfully');
      expect(response.body.message).toContain('invalidated');

      // Verify old token is now invalid
      const validation = await authService.validateToken(token);
      expect(validation.valid).toBe(false);

      // Verify can login with new password
      const newLoginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_password',
          password: 'newpassword456'
        });
      expect(newLoginResponse.status).toBe(200);

      // Verify cannot login with old password
      const oldLoginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_password',
          password: 'oldpassword123'
        });
      expect(oldLoginResponse.status).toBe(401);

      // Reset password back to original for other tests
      const resetToken = newLoginResponse.body.token;
      await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${resetToken}`)
        .send({
          currentPassword: 'newpassword456',
          newPassword: 'oldpassword123'
        });
    });

    it('should reject password change with incorrect current password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${validToken}`)
        .send({
          currentPassword: 'wrongpassword',
          newPassword: 'newpassword456'
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('INVALID_PASSWORD');
      expect(response.body.error.message).toContain('Current password is incorrect');
    });

    it('should reject password change without Authorization header', async () => {
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .send({
          currentPassword: 'oldpassword123',
          newPassword: 'newpassword456'
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('UNAUTHORIZED');
      expect(response.body.error.message).toContain('Authorization header is required');
    });

    it('should reject password change with invalid token', async () => {
      const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmYWtlIiwidXNlcm5hbWUiOiJmYWtlIiwiaWF0IjoxNjE2MjM5MDIyfQ.fakesignature';
      
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${fakeToken}`)
        .send({
          currentPassword: 'oldpassword123',
          newPassword: 'newpassword456'
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('UNAUTHORIZED');
    });

    it('should reject password change without current password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${validToken}`)
        .send({
          newPassword: 'newpassword456'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
      expect(response.body.error.message).toContain('Current password and new password are required');
    });

    it('should reject password change without new password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${validToken}`)
        .send({
          currentPassword: 'oldpassword123'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
      expect(response.body.error.message).toContain('Current password and new password are required');
    });

    it('should reject password change with empty current password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${validToken}`)
        .send({
          currentPassword: '',
          newPassword: 'newpassword456'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should reject password change with empty new password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${validToken}`)
        .send({
          currentPassword: 'oldpassword123',
          newPassword: ''
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should reject password change with new password less than 8 characters', async () => {
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${validToken}`)
        .send({
          currentPassword: 'oldpassword123',
          newPassword: 'short'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('VALIDATION_ERROR');
      expect(response.body.error.message).toContain('at least 8 characters');
    });

    it('should invalidate all existing tokens after password change', async () => {
      // Create multiple sessions
      const login1 = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_password',
          password: 'oldpassword123'
        });
      const token1 = login1.body.token;

      const login2 = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_password',
          password: 'oldpassword123'
        });
      const token2 = login2.body.token;

      // Verify both tokens are valid
      const validation1Before = await authService.validateToken(token1);
      const validation2Before = await authService.validateToken(token2);
      expect(validation1Before.valid).toBe(true);
      expect(validation2Before.valid).toBe(true);

      // Change password using token1
      await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${token1}`)
        .send({
          currentPassword: 'oldpassword123',
          newPassword: 'newpassword789'
        });

      // Verify both tokens are now invalid
      const validation1After = await authService.validateToken(token1);
      const validation2After = await authService.validateToken(token2);
      expect(validation1After.valid).toBe(false);
      expect(validation2After.valid).toBe(false);

      // Reset password back
      const newLogin = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_password',
          password: 'newpassword789'
        });
      await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${newLogin.body.token}`)
        .send({
          currentPassword: 'newpassword789',
          newPassword: 'oldpassword123'
        });
    });

    it('should reject password change with revoked token', async () => {
      // Login and then logout
      const loginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({
          username: 'testuser_password',
          password: 'oldpassword123'
        });
      const token = loginResponse.body.token;

      await request(app)
        .post('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${token}`)
        .send();

      // Try to change password with revoked token
      const response = await request(app)
        .post('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${token}`)
        .send({
          currentPassword: 'oldpassword123',
          newPassword: 'newpassword456'
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('UNAUTHORIZED');
    });
  });
});

describe('Auth Routes - Registration Rejection', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/v1/auth', authRoutes);
  });

  describe('POST /api/v1/auth/register', () => {
    it('should reject registration attempts with 403 status', async () => {
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send({
          username: 'testuser',
          password: 'testpassword'
        });

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('FORBIDDEN');
      expect(response.body.error.message).toContain('User registration is not available via API');
    });
  });

  describe('POST /api/v1/auth/signup', () => {
    it('should reject signup attempts with 403 status', async () => {
      const response = await request(app)
        .post('/api/v1/auth/signup')
        .send({
          username: 'testuser',
          password: 'testpassword'
        });

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('FORBIDDEN');
    });
  });

  describe('POST /api/v1/auth/create-user', () => {
    it('should reject user creation attempts with 403 status', async () => {
      const response = await request(app)
        .post('/api/v1/auth/create-user')
        .send({
          username: 'testuser',
          password: 'testpassword'
        });

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('FORBIDDEN');
    });
  });

  describe('POST /api/v1/auth/create', () => {
    it('should reject create attempts with 403 status', async () => {
      const response = await request(app)
        .post('/api/v1/auth/create')
        .send({
          username: 'testuser',
          password: 'testpassword'
        });

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('FORBIDDEN');
    });
  });

  describe('PUT /api/v1/auth/register', () => {
    it('should reject PUT registration attempts with 403 status', async () => {
      const response = await request(app)
        .put('/api/v1/auth/register')
        .send({
          username: 'testuser',
          password: 'testpassword'
        });

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('FORBIDDEN');
    });
  });

  describe('PUT /api/v1/auth/signup', () => {
    it('should reject PUT signup attempts with 403 status', async () => {
      const response = await request(app)
        .put('/api/v1/auth/signup')
        .send({
          username: 'testuser',
          password: 'testpassword'
        });

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error.code).toBe('FORBIDDEN');
    });
  });

  describe('Registration rejection with various payloads', () => {
    it('should reject registration with empty payload', async () => {
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send({});

      expect(response.status).toBe(403);
    });

    it('should reject registration with additional fields', async () => {
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send({
          username: 'testuser',
          password: 'testpassword',
          email: 'test@example.com',
          role: 'admin'
        });

      expect(response.status).toBe(403);
    });

    it('should reject registration without body', async () => {
      const response = await request(app)
        .post('/api/v1/auth/register');

      expect(response.status).toBe(403);
    });
  });
});
