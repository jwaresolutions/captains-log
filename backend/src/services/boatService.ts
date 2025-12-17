import { PrismaClient, Boat } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface BoatCreateDTO {
  name: string;
  metadata?: Record<string, any>;
}

export interface BoatUpdateDTO {
  name?: string;
  metadata?: Record<string, any>;
}

export class BoatService {
  /**
   * Create a new boat
   * The first boat created becomes the active boat automatically
   */
  async createBoat(data: BoatCreateDTO): Promise<Boat> {
    if (!data.name || data.name.trim() === '') {
      throw new Error('Boat name is required');
    }

    // Check if this is the first boat
    const boatCount = await prisma.boat.count();
    const isFirstBoat = boatCount === 0;

    const boat = await prisma.boat.create({
      data: {
        name: data.name.trim(),
        metadata: data.metadata || undefined,
        isActive: isFirstBoat, // First boat becomes active
        enabled: true
      }
    });

    logger.info('Boat created', { boatId: boat.id, name: boat.name, isActive: boat.isActive });

    return boat;
  }

  /**
   * Get a boat by ID
   */
  async getBoat(id: string): Promise<Boat | null> {
    const boat = await prisma.boat.findUnique({
      where: { id }
    });

    return boat;
  }

  /**
   * List all boats
   */
  async listBoats(): Promise<Boat[]> {
    const boats = await prisma.boat.findMany({
      orderBy: [
        { isActive: 'desc' }, // Active boat first
        { createdAt: 'asc' }
      ]
    });

    // Debug: Log the actual boat data from Prisma
    boats.forEach(boat => {
      logger.info('Raw boat from Prisma', {
        id: boat.id,
        name: boat.name,
        createdAt: boat.createdAt,
        createdAtType: typeof boat.createdAt,
        createdAtConstructor: boat.createdAt?.constructor?.name,
        updatedAt: boat.updatedAt,
        updatedAtType: typeof boat.updatedAt,
        updatedAtConstructor: boat.updatedAt?.constructor?.name
      });
    });

    return boats;
  }

  /**
   * Update a boat
   */
  async updateBoat(id: string, data: BoatUpdateDTO): Promise<Boat> {
    const boat = await prisma.boat.findUnique({ where: { id } });

    if (!boat) {
      throw new Error('Boat not found');
    }

    if (data.name !== undefined && data.name.trim() === '') {
      throw new Error('Boat name cannot be empty');
    }

    const updated = await prisma.boat.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name.trim() }),
        ...(data.metadata !== undefined && { metadata: data.metadata })
      }
    });

    logger.info('Boat updated', { boatId: id });

    return updated;
  }

  /**
   * Toggle boat enabled/disabled status
   */
  async toggleBoatStatus(id: string, enabled: boolean): Promise<Boat> {
    const boat = await prisma.boat.findUnique({ where: { id } });

    if (!boat) {
      throw new Error('Boat not found');
    }

    const updated = await prisma.boat.update({
      where: { id },
      data: { enabled }
    });

    // If boat is being disabled, remove its maintenance notifications
    if (!enabled) {
      // Import here to avoid circular dependency
      const { notificationService } = await import('./notificationService');
      await notificationService.removeNotificationsForBoat(id);
    }

    logger.info('Boat status toggled', { boatId: id, enabled });

    return updated;
  }

  /**
   * Set a boat as the active boat
   * Only one boat can be active at a time
   */
  async setActiveBoat(id: string): Promise<Boat> {
    const boat = await prisma.boat.findUnique({ where: { id } });

    if (!boat) {
      throw new Error('Boat not found');
    }

    // Use a transaction to ensure atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Deactivate all boats
      await tx.boat.updateMany({
        where: { isActive: true },
        data: { isActive: false }
      });

      // Activate the selected boat
      const activeBoat = await tx.boat.update({
        where: { id },
        data: { isActive: true }
      });

      return activeBoat;
    });

    logger.info('Active boat changed', { boatId: id, name: result.name });

    return result;
  }

  /**
   * Get the currently active boat
   */
  async getActiveBoat(): Promise<Boat | null> {
    const boat = await prisma.boat.findFirst({
      where: { isActive: true }
    });

    return boat;
  }

  /**
   * Delete a boat (for testing purposes)
   */
  async deleteBoat(id: string): Promise<void> {
    await prisma.boat.delete({
      where: { id }
    });

    logger.info('Boat deleted', { boatId: id });
  }
}

export const boatService = new BoatService();
