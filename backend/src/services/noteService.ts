import { PrismaClient, Note } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

export interface NoteCreateDTO {
  content: string;
  type: 'general' | 'boat' | 'trip';
  boatId?: string;
  tripId?: string;
  tags?: string[];
}

export interface NoteUpdateDTO {
  content?: string;
  tags?: string[];
}

export interface NoteFilters {
  type?: 'general' | 'boat' | 'trip';
  boatId?: string;
  tripId?: string;
  tags?: string[];
  search?: string;
}

export class NoteService {
  /**
   * Create a new note
   */
  async createNote(data: NoteCreateDTO): Promise<Note> {
    if (!data.content || data.content.trim() === '') {
      throw new Error('Note content is required');
    }

    // Validate note type and associations
    if (data.type === 'boat' && !data.boatId) {
      throw new Error('Boat ID is required for boat-specific notes');
    }

    if (data.type === 'trip' && !data.tripId) {
      throw new Error('Trip ID is required for trip-specific notes');
    }

    if (data.type === 'general' && (data.boatId || data.tripId)) {
      throw new Error('General notes cannot be associated with boats or trips');
    }

    // Verify boat exists if boatId is provided
    if (data.boatId) {
      const boat = await prisma.boat.findUnique({ where: { id: data.boatId } });
      if (!boat) {
        throw new Error('Boat not found');
      }
    }

    // Verify trip exists if tripId is provided
    if (data.tripId) {
      const trip = await prisma.trip.findUnique({ where: { id: data.tripId } });
      if (!trip) {
        throw new Error('Trip not found');
      }
    }

    const note = await prisma.note.create({
      data: {
        content: data.content.trim(),
        type: data.type,
        boatId: data.boatId || null,
        tripId: data.tripId || null,
        tags: data.tags || []
      }
    });

    logger.info('Note created', { 
      noteId: note.id, 
      type: note.type, 
      boatId: note.boatId, 
      tripId: note.tripId 
    });

    return note;
  }

  /**
   * Get a note by ID
   */
  async getNote(id: string): Promise<Note | null> {
    const note = await prisma.note.findUnique({
      where: { id },
      include: {
        boat: true,
        trip: true
      }
    });

    return note;
  }

  /**
   * List notes with optional filters
   */
  async listNotes(filters: NoteFilters = {}): Promise<Note[]> {
    const where: any = {};

    if (filters.type) {
      where.type = filters.type;
    }

    if (filters.boatId) {
      where.boatId = filters.boatId;
    }

    if (filters.tripId) {
      where.tripId = filters.tripId;
    }

    if (filters.tags && filters.tags.length > 0) {
      where.tags = {
        hasEvery: filters.tags
      };
    }

    if (filters.search) {
      where.content = {
        contains: filters.search,
        mode: 'insensitive'
      };
    }

    const notes = await prisma.note.findMany({
      where,
      include: {
        boat: true,
        trip: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return notes;
  }

  /**
   * Update a note
   */
  async updateNote(id: string, data: NoteUpdateDTO): Promise<Note> {
    const note = await prisma.note.findUnique({ where: { id } });

    if (!note) {
      throw new Error('Note not found');
    }

    if (data.content !== undefined && data.content.trim() === '') {
      throw new Error('Note content cannot be empty');
    }

    const updated = await prisma.note.update({
      where: { id },
      data: {
        ...(data.content !== undefined && { content: data.content.trim() }),
        ...(data.tags !== undefined && { tags: data.tags })
      }
    });

    logger.info('Note updated', { noteId: id });

    return updated;
  }

  /**
   * Delete a note
   */
  async deleteNote(id: string): Promise<void> {
    const note = await prisma.note.findUnique({ where: { id } });

    if (!note) {
      throw new Error('Note not found');
    }

    await prisma.note.delete({
      where: { id }
    });

    logger.info('Note deleted', { noteId: id });
  }

  /**
   * Add tags to a note
   */
  async addTags(noteId: string, tags: string[]): Promise<Note> {
    const note = await prisma.note.findUnique({ where: { id: noteId } });

    if (!note) {
      throw new Error('Note not found');
    }

    // Merge existing tags with new tags, removing duplicates
    const existingTags = note.tags || [];
    const newTags = [...new Set([...existingTags, ...tags])];

    const updated = await prisma.note.update({
      where: { id: noteId },
      data: { tags: newTags }
    });

    logger.info('Tags added to note', { noteId, addedTags: tags });

    return updated;
  }

  /**
   * Remove tags from a note
   */
  async removeTags(noteId: string, tags: string[]): Promise<Note> {
    const note = await prisma.note.findUnique({ where: { id: noteId } });

    if (!note) {
      throw new Error('Note not found');
    }

    // Remove specified tags from existing tags
    const existingTags = note.tags || [];
    const newTags = existingTags.filter(tag => !tags.includes(tag));

    const updated = await prisma.note.update({
      where: { id: noteId },
      data: { tags: newTags }
    });

    logger.info('Tags removed from note', { noteId, removedTags: tags });

    return updated;
  }

  /**
   * Get all unique tags across all notes
   */
  async getAllTags(): Promise<string[]> {
    const notes = await prisma.note.findMany({
      select: { tags: true }
    });

    // Flatten all tags and get unique values
    const allTags = notes.flatMap(note => note.tags || []);
    const uniqueTags = [...new Set(allTags)].sort();

    return uniqueTags;
  }

  /**
   * Get notes for a specific boat
   */
  async getBoatNotes(boatId: string): Promise<Note[]> {
    return this.listNotes({ type: 'boat', boatId });
  }

  /**
   * Get notes for a specific trip
   */
  async getTripNotes(tripId: string): Promise<Note[]> {
    return this.listNotes({ type: 'trip', tripId });
  }

  /**
   * Get general notes (not associated with boats or trips)
   */
  async getGeneralNotes(): Promise<Note[]> {
    return this.listNotes({ type: 'general' });
  }
}

export const noteService = new NoteService();