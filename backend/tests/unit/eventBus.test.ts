/**
 * Unit tests for EventBus service
 * Tests the SSE client management and event publishing infrastructure.
 */

// We need to test EventBus as a class, not the singleton, so we can control the heartbeat.
// Import the module to get the types, but we'll create our own instance.

import { Response } from 'express';

// Mock the logger to avoid console noise
jest.mock('../../src/utils/logger', () => ({
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
  },
}));

// We need to extract the EventBus class. Since only the singleton is exported,
// we'll re-implement the test against the exported singleton but reset state between tests.
// Actually, let's just import and test the singleton - we can add/remove clients to reset.

describe('EventBus', () => {
  let eventBus: any;

  beforeEach(() => {
    // Use jest fake timers to control heartbeat
    jest.useFakeTimers();

    // Clear module cache to get a fresh EventBus instance each test
    jest.resetModules();

    // Re-require to get fresh instance
    const mod = require('../../src/services/eventBus');
    eventBus = mod.eventBus;
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  function createMockResponse(): Response {
    const res: any = {
      write: jest.fn().mockReturnValue(true),
      writeHead: jest.fn(),
      end: jest.fn(),
      on: jest.fn(),
    };
    return res as Response;
  }

  describe('addClient / removeClient / getClientCount', () => {
    it('should start with zero clients', () => {
      expect(eventBus.getClientCount()).toBe(0);
    });

    it('should add a client and increase count', () => {
      const res = createMockResponse();
      eventBus.addClient('client-1', res);
      expect(eventBus.getClientCount()).toBe(1);
    });

    it('should add multiple clients', () => {
      eventBus.addClient('c1', createMockResponse());
      eventBus.addClient('c2', createMockResponse());
      eventBus.addClient('c3', createMockResponse());
      expect(eventBus.getClientCount()).toBe(3);
    });

    it('should remove a client by id', () => {
      const res1 = createMockResponse();
      const res2 = createMockResponse();
      eventBus.addClient('c1', res1);
      eventBus.addClient('c2', res2);
      expect(eventBus.getClientCount()).toBe(2);

      eventBus.removeClient('c1');
      expect(eventBus.getClientCount()).toBe(1);
    });

    it('should handle removing a non-existent client gracefully', () => {
      eventBus.addClient('c1', createMockResponse());
      eventBus.removeClient('non-existent');
      expect(eventBus.getClientCount()).toBe(1);
    });

    it('should handle removing from empty client list', () => {
      expect(() => eventBus.removeClient('any')).not.toThrow();
      expect(eventBus.getClientCount()).toBe(0);
    });
  });

  describe('publish', () => {
    it('should send event data to all connected clients', () => {
      const res1 = createMockResponse();
      const res2 = createMockResponse();
      eventBus.addClient('c1', res1);
      eventBus.addClient('c2', res2);

      eventBus.publish('boat', 'updated', 'boat-123');

      expect(res1.write).toHaveBeenCalledTimes(1);
      expect(res2.write).toHaveBeenCalledTimes(1);

      // Verify the written data is valid JSON with correct fields
      const writtenData = (res1.write as jest.Mock).mock.calls[0][0] as string;
      expect(writtenData).toMatch(/^data: /);
      expect(writtenData).toMatch(/\n\n$/);

      const jsonStr = writtenData.replace('data: ', '').trim();
      const parsed = JSON.parse(jsonStr);
      expect(parsed.type).toBe('boat');
      expect(parsed.action).toBe('updated');
      expect(parsed.entityId).toBe('boat-123');
      expect(parsed.timestamp).toBeDefined();
    });

    it('should send event without entityId', () => {
      const res = createMockResponse();
      eventBus.addClient('c1', res);

      eventBus.publish('system', 'heartbeat');

      const writtenData = (res.write as jest.Mock).mock.calls[0][0] as string;
      const parsed = JSON.parse(writtenData.replace('data: ', '').trim());
      expect(parsed.type).toBe('system');
      expect(parsed.action).toBe('heartbeat');
      expect(parsed.entityId).toBeUndefined();
    });

    it('should remove clients that throw on write', () => {
      const goodRes = createMockResponse();
      const badRes = createMockResponse();
      (badRes.write as jest.Mock).mockImplementation(() => {
        throw new Error('Connection closed');
      });

      eventBus.addClient('good', goodRes);
      eventBus.addClient('bad', badRes);
      expect(eventBus.getClientCount()).toBe(2);

      eventBus.publish('test', 'action');

      // Bad client should have been removed
      expect(eventBus.getClientCount()).toBe(1);
      // Good client should still have received the event
      expect(goodRes.write).toHaveBeenCalledTimes(1);
    });

    it('should do nothing when no clients are connected', () => {
      expect(() => eventBus.publish('test', 'action')).not.toThrow();
    });
  });

  describe('heartbeat', () => {
    it('should send heartbeat comments to all clients every 30 seconds', () => {
      const res1 = createMockResponse();
      const res2 = createMockResponse();
      eventBus.addClient('c1', res1);
      eventBus.addClient('c2', res2);

      // Advance timer by 30 seconds to trigger heartbeat
      jest.advanceTimersByTime(30000);

      expect(res1.write).toHaveBeenCalledWith(': heartbeat\n\n');
      expect(res2.write).toHaveBeenCalledWith(': heartbeat\n\n');
    });

    it('should remove clients that fail during heartbeat', () => {
      const goodRes = createMockResponse();
      const badRes = createMockResponse();
      (badRes.write as jest.Mock).mockImplementation(() => {
        throw new Error('Connection reset');
      });

      eventBus.addClient('good', goodRes);
      eventBus.addClient('bad', badRes);
      expect(eventBus.getClientCount()).toBe(2);

      // Trigger heartbeat
      jest.advanceTimersByTime(30000);

      // Bad client removed during heartbeat
      expect(eventBus.getClientCount()).toBe(1);
    });

    it('should send multiple heartbeats over time', () => {
      const res = createMockResponse();
      eventBus.addClient('c1', res);

      jest.advanceTimersByTime(90000); // 3 heartbeat cycles

      // Should have received 3 heartbeats
      expect(res.write).toHaveBeenCalledTimes(3);
    });
  });
});
