-- CreateIndex
CREATE INDEX "GPSPoint_tripId_timestamp_idx" ON "GPSPoint"("tripId", "timestamp");

-- CreateIndex
CREATE INDEX "GPSPoint_isStopPoint_idx" ON "GPSPoint"("isStopPoint");

-- CreateIndex
CREATE INDEX "GPSPoint_latitude_longitude_idx" ON "GPSPoint"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "Note_type_boatId_idx" ON "Note"("type", "boatId");

-- CreateIndex
CREATE INDEX "Note_tags_idx" ON "Note"("tags");

-- CreateIndex
CREATE INDEX "Trip_boatId_startTime_idx" ON "Trip"("boatId", "startTime");

-- CreateIndex
CREATE INDEX "Trip_waterType_idx" ON "Trip"("waterType");

-- CreateIndex
CREATE INDEX "Trip_role_idx" ON "Trip"("role");

-- CreateIndex
CREATE INDEX "Trip_createdAt_idx" ON "Trip"("createdAt");
