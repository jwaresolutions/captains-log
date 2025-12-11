import * as fc from 'fast-check';
import { PrismaClient } from '@prisma/client';
import { NoteService } from '../../src/services/noteService';
import { BoatService } from '../../src/services/boatService';
import { TripService } from '../../src/services/tripService';
import { describe, test, beforeEach, afterAll } from '@jest/globals';

const prisma = new PrismaClient();
const noteService = new NoteService();
const boatService = new BoatService();
const tripService = new TripService();

/**
 * Property-Based Tests for Note Service
 */

describe('Note Service Property Tests', () => {
  // Clean up database before and after tests
  beforeEach(async () => {
    await prisma.note.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
  });

  afterAll(async () => {
    await prisma.note.deleteMany();
    await prisma.gPSPoint.deleteMany();
    await prisma.trip.deleteMany();
    await prisma.boat.deleteMany();
    await prisma.$disconnect();
  });

  /**
   * **Feature: boat-tracking-system, Property 16: Note-Trip Association**
   * **Validates: Requirements 5.6, 7.3**
   * 
   * For any note attached to a trip, querying notes for that trip should return the attached note.
   */
  describe('Property 16: Note-Trip Association', () => {
    test('should return trip notes when querying by trip ID', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            noteContent: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
            tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0), { maxLength: 5 })
          }),
          async ({ boatName, noteContent, tags }) => {
            // Clean database
            await prisma.note.deleteMany();
            await prisma.gPSPoint.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();

            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });

            // Create a trip
            const trip = await tripService.createTrip({
              boatId: boat.id,
              startTime: new Date(),
              endTime: new Date(Date.now() + 3600000), // 1 hour later
              waterType: 'inland',
              role: 'captain',
              gpsPoints: [
                {
                  latitude: 40.7128,
                  longitude: -74.0060,
                  timestamp: new Date()
                }
              ]
            });

            // Create a trip note
            const note = await noteService.createNote({
              content: noteContent,
              type: 'trip',
              tripId: trip.id,
              tags
            });

            // Query notes for this trip
            const tripNotes = await noteService.getTripNotes(trip.id);

            // Verify the note is returned
            expect(tripNotes.length).toBe(1);
            expect(tripNotes[0].id).toBe(note.id);
            expect(tripNotes[0].content).toBe(noteContent.trim());
            expect(tripNotes[0].type).toBe('trip');
            expect(tripNotes[0].tripId).toBe(trip.id);
            expect(tripNotes[0].boatId).toBeNull();

            // Verify tags are preserved
            expect(tripNotes[0].tags).toEqual(tags);

            // Clean up
            await prisma.note.deleteMany();
            await prisma.gPSPoint.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should not return trip notes when querying different trip', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            noteContent: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0)
          }),
          async ({ boatName, noteContent }) => {
            // Clean database
            await prisma.note.deleteMany();
            await prisma.gPSPoint.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();

            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });

            // Create two trips
            const trip1 = await tripService.createTrip({
              boatId: boat.id,
              startTime: new Date(),
              endTime: new Date(Date.now() + 3600000),
              waterType: 'inland',
              role: 'captain',
              gpsPoints: [
                {
                  latitude: 40.7128,
                  longitude: -74.0060,
                  timestamp: new Date()
                }
              ]
            });

            const trip2 = await tripService.createTrip({
              boatId: boat.id,
              startTime: new Date(Date.now() + 7200000), // 2 hours later
              endTime: new Date(Date.now() + 10800000), // 3 hours later
              waterType: 'inland',
              role: 'captain',
              gpsPoints: [
                {
                  latitude: 40.7589,
                  longitude: -73.9851,
                  timestamp: new Date(Date.now() + 7200000)
                }
              ]
            });

            // Create a note for trip1
            await noteService.createNote({
              content: noteContent,
              type: 'trip',
              tripId: trip1.id
            });

            // Query notes for trip2
            const trip2Notes = await noteService.getTripNotes(trip2.id);

            // Verify no notes are returned for trip2
            expect(trip2Notes.length).toBe(0);

            // Clean up
            await prisma.note.deleteMany();
            await prisma.gPSPoint.deleteMany();
            await prisma.trip.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 24: Boat-Specific Note Association**
   * **Validates: Requirements 7.2**
   * 
   * For any note created as boat-specific, querying notes for that boat should return the note.
   */
  describe('Property 24: Boat-Specific Note Association', () => {
    test('should return boat notes when querying by boat ID', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            noteContent: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
            tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0), { maxLength: 5 })
          }),
          async ({ boatName, noteContent, tags }) => {
            // Clean database
            await prisma.note.deleteMany();
            await prisma.boat.deleteMany();

            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });

            // Create a boat-specific note
            const note = await noteService.createNote({
              content: noteContent,
              type: 'boat',
              boatId: boat.id,
              tags
            });

            // Query notes for this boat
            const boatNotes = await noteService.getBoatNotes(boat.id);

            // Verify the note is returned
            expect(boatNotes.length).toBe(1);
            expect(boatNotes[0].id).toBe(note.id);
            expect(boatNotes[0].content).toBe(noteContent.trim());
            expect(boatNotes[0].type).toBe('boat');
            expect(boatNotes[0].boatId).toBe(boat.id);
            expect(boatNotes[0].tripId).toBeNull();

            // Verify tags are preserved
            expect(boatNotes[0].tags).toEqual(tags);

            // Clean up
            await prisma.note.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should not return boat notes when querying different boat', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boat1Name: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            boat2Name: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            noteContent: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0)
          }).filter(({ boat1Name, boat2Name }) => boat1Name !== boat2Name),
          async ({ boat1Name, boat2Name, noteContent }) => {
            // Clean database
            await prisma.note.deleteMany();
            await prisma.boat.deleteMany();

            // Create two boats
            const boat1 = await boatService.createBoat({ name: boat1Name });
            const boat2 = await boatService.createBoat({ name: boat2Name });

            // Create a note for boat1
            await noteService.createNote({
              content: noteContent,
              type: 'boat',
              boatId: boat1.id
            });

            // Query notes for boat2
            const boat2Notes = await noteService.getBoatNotes(boat2.id);

            // Verify no notes are returned for boat2
            expect(boat2Notes.length).toBe(0);

            // Clean up
            await prisma.note.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 25: General Note Independence**
   * **Validates: Requirements 7.4**
   * 
   * For any note created as general, the note should not be associated with any boat or trip.
   */
  describe('Property 25: General Note Independence', () => {
    test('should create general notes without boat or trip associations', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            noteContent: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
            tags: fc.array(fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0), { maxLength: 5 })
          }),
          async ({ noteContent, tags }) => {
            // Clean database
            await prisma.note.deleteMany();

            // Create a general note
            const note = await noteService.createNote({
              content: noteContent,
              type: 'general',
              tags
            });

            // Verify the note has no associations
            expect(note.type).toBe('general');
            expect(note.boatId).toBeNull();
            expect(note.tripId).toBeNull();
            expect(note.content).toBe(noteContent.trim());
            expect(note.tags).toEqual(tags);

            // Query general notes
            const generalNotes = await noteService.getGeneralNotes();

            // Verify the note is returned in general notes
            expect(generalNotes.length).toBe(1);
            expect(generalNotes[0].id).toBe(note.id);
            expect(generalNotes[0].boatId).toBeNull();
            expect(generalNotes[0].tripId).toBeNull();

            // Clean up
            await prisma.note.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should reject general notes with boat or trip associations', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            boatName: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            noteContent: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0)
          }),
          async ({ boatName, noteContent }) => {
            // Clean database
            await prisma.note.deleteMany();
            await prisma.boat.deleteMany();

            // Create a boat
            const boat = await boatService.createBoat({ name: boatName });

            // Attempt to create a general note with boat association
            await expect(
              noteService.createNote({
                content: noteContent,
                type: 'general',
                boatId: boat.id
              })
            ).rejects.toThrow('General notes cannot be associated with boats or trips');

            // Clean up
            await prisma.note.deleteMany();
            await prisma.boat.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  /**
   * **Feature: boat-tracking-system, Property 26: Note Tag Filtering**
   * **Validates: Requirements 7.5**
   * 
   * For any tag filter applied to notes, the system should return only notes that have that tag.
   */
  describe('Property 26: Note Tag Filtering', () => {
    test('should return only notes with specified tags', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            targetTag: fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
            otherTags: fc.array(fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0), { maxLength: 3 }),
            notesWithTag: fc.array(
              fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              { minLength: 1, maxLength: 3 }
            ),
            notesWithoutTag: fc.array(
              fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0),
              { minLength: 1, maxLength: 3 }
            )
          }).filter(({ targetTag, otherTags }) => !otherTags.includes(targetTag)),
          async ({ targetTag, otherTags, notesWithTag, notesWithoutTag }) => {
            // Clean database
            await prisma.note.deleteMany();

            // Create notes with the target tag
            const createdNotesWithTag = [];
            for (const content of notesWithTag) {
              const note = await noteService.createNote({
                content,
                type: 'general',
                tags: [targetTag, ...otherTags]
              });
              createdNotesWithTag.push(note);
            }

            // Create notes without the target tag
            for (const content of notesWithoutTag) {
              await noteService.createNote({
                content,
                type: 'general',
                tags: otherTags
              });
            }

            // Filter notes by the target tag
            const filteredNotes = await noteService.listNotes({
              tags: [targetTag]
            });

            // Verify only notes with the target tag are returned
            expect(filteredNotes.length).toBe(createdNotesWithTag.length);

            for (const filteredNote of filteredNotes) {
              expect(filteredNote.tags).toContain(targetTag);
              // Verify this note was one of the ones we created with the tag
              const matchingNote = createdNotesWithTag.find(n => n.id === filteredNote.id);
              expect(matchingNote).toBeDefined();
            }

            // Clean up
            await prisma.note.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });

    test('should return notes with multiple specified tags', async () => {
      await fc.assert(
        fc.asyncProperty(
          fc.record({
            requiredTags: fc.array(
              fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
              { minLength: 2, maxLength: 3 }
            ),
            additionalTags: fc.array(
              fc.string({ minLength: 1, maxLength: 20 }).filter(s => s.trim().length > 0),
              { maxLength: 2 }
            ),
            noteContent: fc.string({ minLength: 1, maxLength: 100 }).filter(s => s.trim().length > 0)
          }).filter(({ requiredTags, additionalTags }) => {
            // Ensure no overlap between required and additional tags
            return !requiredTags.some(tag => additionalTags.includes(tag));
          }),
          async ({ requiredTags, additionalTags, noteContent }) => {
            // Clean database
            await prisma.note.deleteMany();

            // Create a note with all required tags plus additional tags
            const noteWithAllTags = await noteService.createNote({
              content: noteContent,
              type: 'general',
              tags: [...requiredTags, ...additionalTags]
            });

            // Create a note with only some required tags (should not match)
            const partialTags = requiredTags.slice(0, -1); // Remove last required tag
            if (partialTags.length > 0) {
              await noteService.createNote({
                content: 'partial note',
                type: 'general',
                tags: [...partialTags, ...additionalTags]
              });
            }

            // Filter notes by all required tags
            const filteredNotes = await noteService.listNotes({
              tags: requiredTags
            });

            // Verify only the note with all required tags is returned
            expect(filteredNotes.length).toBe(1);
            expect(filteredNotes[0].id).toBe(noteWithAllTags.id);

            // Verify the note contains all required tags
            for (const requiredTag of requiredTags) {
              expect(filteredNotes[0].tags).toContain(requiredTag);
            }

            // Clean up
            await prisma.note.deleteMany();
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});