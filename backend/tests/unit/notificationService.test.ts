/**
 * Unit tests for NotificationService
 * Tests core CRUD operations with mocked Prisma.
 * Note: Property tests in notification-test.property.test.ts cover integration scenarios
 * (checkMaintenanceDue, boat enable/disable). These unit tests cover the simpler methods.
 */

jest.mock('../../src/utils/logger', () => ({
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
  },
}));

// Mock PrismaClient
const mockPrisma = {
  notification: {
    create: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    updateMany: jest.fn(),
    delete: jest.fn(),
    deleteMany: jest.fn(),
  },
  maintenanceEvent: {
    findMany: jest.fn(),
  },
};

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => mockPrisma),
}));

// Import after mocks
import { NotificationService } from '../../src/services/notificationService';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new NotificationService();
  });

  describe('createNotification', () => {
    it('should create a notification with all fields', async () => {
      const mockNotification = {
        id: 'notif-1',
        type: 'maintenance_due',
        title: 'Oil Change Due',
        message: 'Oil change due tomorrow',
        entityType: 'maintenance_event',
        entityId: 'event-1',
        read: false,
        createdAt: new Date(),
      };
      mockPrisma.notification.create.mockResolvedValue(mockNotification);

      const result = await service.createNotification({
        type: 'maintenance_due',
        title: 'Oil Change Due',
        message: 'Oil change due tomorrow',
        entityType: 'maintenance_event',
        entityId: 'event-1',
      });

      expect(result).toEqual(mockNotification);
      expect(mockPrisma.notification.create).toHaveBeenCalledWith({
        data: {
          type: 'maintenance_due',
          title: 'Oil Change Due',
          message: 'Oil change due tomorrow',
          entityType: 'maintenance_event',
          entityId: 'event-1',
          read: false,
        },
      });
    });

    it('should create a notification without optional fields', async () => {
      const mockNotification = {
        id: 'notif-2',
        type: 'system',
        title: 'System Update',
        message: 'System updated',
        entityType: undefined,
        entityId: undefined,
        read: false,
        createdAt: new Date(),
      };
      mockPrisma.notification.create.mockResolvedValue(mockNotification);

      await service.createNotification({
        type: 'system',
        title: 'System Update',
        message: 'System updated',
      });

      expect(mockPrisma.notification.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          type: 'system',
          title: 'System Update',
          read: false,
        }),
      });
    });
  });

  describe('getActiveNotifications', () => {
    it('should return all notifications without filters', async () => {
      mockPrisma.notification.findMany.mockResolvedValue([]);
      await service.getActiveNotifications();
      expect(mockPrisma.notification.findMany).toHaveBeenCalledWith({
        where: {},
        orderBy: { createdAt: 'desc' },
      });
    });

    it('should apply type filter', async () => {
      mockPrisma.notification.findMany.mockResolvedValue([]);
      await service.getActiveNotifications({ type: 'maintenance_due' });
      expect(mockPrisma.notification.findMany).toHaveBeenCalledWith({
        where: { type: 'maintenance_due' },
        orderBy: { createdAt: 'desc' },
      });
    });

    it('should apply read filter', async () => {
      mockPrisma.notification.findMany.mockResolvedValue([]);
      await service.getActiveNotifications({ read: false });
      expect(mockPrisma.notification.findMany).toHaveBeenCalledWith({
        where: { read: false },
        orderBy: { createdAt: 'desc' },
      });
    });

    it('should apply multiple filters', async () => {
      mockPrisma.notification.findMany.mockResolvedValue([]);
      await service.getActiveNotifications({
        type: 'maintenance_due',
        read: false,
        entityType: 'maintenance_event',
        entityId: 'evt-1',
      });
      expect(mockPrisma.notification.findMany).toHaveBeenCalledWith({
        where: {
          type: 'maintenance_due',
          read: false,
          entityType: 'maintenance_event',
          entityId: 'evt-1',
        },
        orderBy: { createdAt: 'desc' },
      });
    });
  });

  describe('markAsRead', () => {
    it('should update notification read status to true', async () => {
      const mockNotification = { id: 'notif-1', read: true };
      mockPrisma.notification.update.mockResolvedValue(mockNotification);

      const result = await service.markAsRead('notif-1');

      expect(result).toEqual(mockNotification);
      expect(mockPrisma.notification.update).toHaveBeenCalledWith({
        where: { id: 'notif-1' },
        data: { read: true },
      });
    });
  });

  describe('markAllAsRead', () => {
    it('should mark all unread notifications as read', async () => {
      mockPrisma.notification.updateMany.mockResolvedValue({ count: 5 });

      const count = await service.markAllAsRead();

      expect(count).toBe(5);
      expect(mockPrisma.notification.updateMany).toHaveBeenCalledWith({
        where: { read: false },
        data: { read: true },
      });
    });

    it('should apply filters when marking all as read', async () => {
      mockPrisma.notification.updateMany.mockResolvedValue({ count: 2 });

      const count = await service.markAllAsRead({
        type: 'maintenance_due',
        entityType: 'maintenance_event',
      });

      expect(count).toBe(2);
      expect(mockPrisma.notification.updateMany).toHaveBeenCalledWith({
        where: {
          read: false,
          type: 'maintenance_due',
          entityType: 'maintenance_event',
        },
        data: { read: true },
      });
    });
  });

  describe('deleteNotification', () => {
    it('should delete a notification by id', async () => {
      mockPrisma.notification.delete.mockResolvedValue({});

      await service.deleteNotification('notif-1');

      expect(mockPrisma.notification.delete).toHaveBeenCalledWith({
        where: { id: 'notif-1' },
      });
    });
  });

  describe('deleteOldNotifications', () => {
    it('should delete read notifications older than specified days', async () => {
      mockPrisma.notification.deleteMany.mockResolvedValue({ count: 10 });

      const count = await service.deleteOldNotifications(30);

      expect(count).toBe(10);
      expect(mockPrisma.notification.deleteMany).toHaveBeenCalledWith({
        where: {
          read: true,
          createdAt: {
            lt: expect.any(Date),
          },
        },
      });
    });

    it('should default to 30 days if not specified', async () => {
      mockPrisma.notification.deleteMany.mockResolvedValue({ count: 0 });

      await service.deleteOldNotifications();

      expect(mockPrisma.notification.deleteMany).toHaveBeenCalled();
    });
  });

  describe('removeNotificationsForBoat', () => {
    it('should remove notifications for all maintenance events of a boat', async () => {
      mockPrisma.maintenanceEvent.findMany.mockResolvedValue([
        { id: 'evt-1' },
        { id: 'evt-2' },
      ]);
      mockPrisma.notification.deleteMany.mockResolvedValue({ count: 2 });

      const count = await service.removeNotificationsForBoat('boat-1');

      expect(count).toBe(2);
      expect(mockPrisma.maintenanceEvent.findMany).toHaveBeenCalledWith({
        where: { template: { boatId: 'boat-1' } },
        select: { id: true },
      });
      expect(mockPrisma.notification.deleteMany).toHaveBeenCalledWith({
        where: {
          type: 'maintenance_due',
          entityType: 'maintenance_event',
          entityId: { in: ['evt-1', 'evt-2'] },
        },
      });
    });

    it('should return 0 when boat has no maintenance events', async () => {
      mockPrisma.maintenanceEvent.findMany.mockResolvedValue([]);

      const count = await service.removeNotificationsForBoat('boat-no-events');

      expect(count).toBe(0);
      expect(mockPrisma.notification.deleteMany).not.toHaveBeenCalled();
    });
  });

  describe('removeNotificationsForCompletedEvent', () => {
    it('should remove notifications for a completed event', async () => {
      mockPrisma.notification.deleteMany.mockResolvedValue({ count: 1 });

      const count = await service.removeNotificationsForCompletedEvent('evt-1');

      expect(count).toBe(1);
      expect(mockPrisma.notification.deleteMany).toHaveBeenCalledWith({
        where: {
          type: 'maintenance_due',
          entityType: 'maintenance_event',
          entityId: 'evt-1',
        },
      });
    });
  });
});
