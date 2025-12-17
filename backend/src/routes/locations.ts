import express from 'express';
import {
  createMarkedLocation,
  updateMarkedLocation,
  getMarkedLocation,
  deleteMarkedLocation,
  listMarkedLocations,
  findNearbyLocations,
  getMarkedLocationsWithDistance,
  MarkedLocationCreateDTO,
  MarkedLocationUpdateDTO,
  LocationFilters,
  GPSCoordinate,
} from '../services/locationService';
import { sendJsonResponse } from '../utils/serialization';

const router = express.Router();

/**
 * POST /api/v1/locations
 * Create a new marked location
 */
router.post('/', async (req, res) => {
  try {
    const { name, latitude, longitude, category, notes, tags } = req.body;

    // Validate required fields
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Name is required and must be a string' });
    }

    if (typeof latitude !== 'number' || latitude < -90 || latitude > 90) {
      return res.status(400).json({ error: 'Latitude must be a number between -90 and 90' });
    }

    if (typeof longitude !== 'number' || longitude < -180 || longitude > 180) {
      return res.status(400).json({ error: 'Longitude must be a number between -180 and 180' });
    }

    const validCategories = ['fishing', 'marina', 'anchorage', 'hazard', 'other'];
    if (!category || !validCategories.includes(category)) {
      return res.status(400).json({ 
        error: `Category is required and must be one of: ${validCategories.join(', ')}` 
      });
    }

    if (notes && typeof notes !== 'string') {
      return res.status(400).json({ error: 'Notes must be a string' });
    }

    if (tags && !Array.isArray(tags)) {
      return res.status(400).json({ error: 'Tags must be an array' });
    }

    const locationData: MarkedLocationCreateDTO = {
      name,
      latitude,
      longitude,
      category,
      notes,
      tags,
    };

    const location = await createMarkedLocation(locationData);
    sendJsonResponse(res, location, 201);
  } catch (error) {
    console.error('Error creating marked location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/v1/locations
 * List marked locations with optional filters
 */
router.get('/', async (req, res) => {
  try {
    const { category, tags, search, lat, lon } = req.query;

    const filters: LocationFilters = {};

    if (category && typeof category === 'string') {
      filters.category = category;
    }

    if (tags) {
      if (typeof tags === 'string') {
        filters.tags = [tags];
      } else if (Array.isArray(tags)) {
        filters.tags = tags.filter(tag => typeof tag === 'string');
      }
    }

    if (search && typeof search === 'string') {
      filters.search = search;
    }

    // If lat/lon provided, return locations with distances
    if (lat && lon) {
      const latitude = parseFloat(lat as string);
      const longitude = parseFloat(lon as string);

      if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ error: 'Invalid latitude or longitude' });
      }

      const referencePoint: GPSCoordinate = { latitude, longitude };
      const locations = await getMarkedLocationsWithDistance(referencePoint, filters);
      return sendJsonResponse(res, locations);
    }

    const locations = await listMarkedLocations(filters);
    sendJsonResponse(res, locations);
  } catch (error) {
    console.error('Error listing marked locations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/v1/locations/nearby
 * Find marked locations within a specified radius
 */
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lon, radius } = req.query;

    if (!lat || !lon || !radius) {
      return res.status(400).json({ 
        error: 'lat, lon, and radius parameters are required' 
      });
    }

    const latitude = parseFloat(lat as string);
    const longitude = parseFloat(lon as string);
    const radiusMeters = parseFloat(radius as string);

    if (isNaN(latitude) || isNaN(longitude) || isNaN(radiusMeters)) {
      return res.status(400).json({ 
        error: 'lat, lon, and radius must be valid numbers' 
      });
    }

    if (latitude < -90 || latitude > 90) {
      return res.status(400).json({ error: 'Latitude must be between -90 and 90' });
    }

    if (longitude < -180 || longitude > 180) {
      return res.status(400).json({ error: 'Longitude must be between -180 and 180' });
    }

    if (radiusMeters <= 0) {
      return res.status(400).json({ error: 'Radius must be greater than 0' });
    }

    const center: GPSCoordinate = { latitude, longitude };
    const nearbyLocations = await findNearbyLocations(center, radiusMeters);

    sendJsonResponse(res, nearbyLocations);
  } catch (error) {
    console.error('Error finding nearby locations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/v1/locations/:id
 * Get a specific marked location by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const location = await getMarkedLocation(id);
    if (!location) {
      return res.status(404).json({ error: 'Marked location not found' });
    }

    sendJsonResponse(res, location);
  } catch (error) {
    console.error('Error getting marked location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * PUT /api/v1/locations/:id
 * Update a marked location
 */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, latitude, longitude, category, notes, tags } = req.body;

    // Check if location exists
    const existingLocation = await getMarkedLocation(id);
    if (!existingLocation) {
      return res.status(404).json({ error: 'Marked location not found' });
    }

    // Validate fields if provided
    if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
      return res.status(400).json({ error: 'Name must be a non-empty string' });
    }

    if (latitude !== undefined && (typeof latitude !== 'number' || latitude < -90 || latitude > 90)) {
      return res.status(400).json({ error: 'Latitude must be a number between -90 and 90' });
    }

    if (longitude !== undefined && (typeof longitude !== 'number' || longitude < -180 || longitude > 180)) {
      return res.status(400).json({ error: 'Longitude must be a number between -180 and 180' });
    }

    const validCategories = ['fishing', 'marina', 'anchorage', 'hazard', 'other'];
    if (category !== undefined && !validCategories.includes(category)) {
      return res.status(400).json({ 
        error: `Category must be one of: ${validCategories.join(', ')}` 
      });
    }

    if (notes !== undefined && typeof notes !== 'string') {
      return res.status(400).json({ error: 'Notes must be a string' });
    }

    if (tags !== undefined && !Array.isArray(tags)) {
      return res.status(400).json({ error: 'Tags must be an array' });
    }

    const updateData: MarkedLocationUpdateDTO = {};
    if (name !== undefined) updateData.name = name;
    if (latitude !== undefined) updateData.latitude = latitude;
    if (longitude !== undefined) updateData.longitude = longitude;
    if (category !== undefined) updateData.category = category;
    if (notes !== undefined) updateData.notes = notes;
    if (tags !== undefined) updateData.tags = tags;

    const updatedLocation = await updateMarkedLocation(id, updateData);
    sendJsonResponse(res, updatedLocation);
  } catch (error) {
    console.error('Error updating marked location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * DELETE /api/v1/locations/:id
 * Delete a marked location
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if location exists
    const existingLocation = await getMarkedLocation(id);
    if (!existingLocation) {
      return res.status(404).json({ error: 'Marked location not found' });
    }

    await deleteMarkedLocation(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting marked location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;