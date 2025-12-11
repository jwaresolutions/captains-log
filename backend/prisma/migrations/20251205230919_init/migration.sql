-- CreateTable
CREATE TABLE "Boat" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Boat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "boatId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "waterType" TEXT NOT NULL DEFAULT 'inland',
    "role" TEXT NOT NULL DEFAULT 'captain',
    "timezone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "durationSeconds" INTEGER,
    "distanceMeters" DOUBLE PRECISION,
    "averageSpeedKnots" DOUBLE PRECISION,
    "maxSpeedKnots" DOUBLE PRECISION,
    "engineHours" DOUBLE PRECISION,
    "fuelConsumed" DOUBLE PRECISION,
    "weatherConditions" TEXT,
    "numberOfPassengers" INTEGER,
    "destination" TEXT,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GPSPoint" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitude" DOUBLE PRECISION,
    "accuracy" DOUBLE PRECISION,
    "speed" DOUBLE PRECISION,
    "heading" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "isStopPoint" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GPSPoint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Boat_enabled_idx" ON "Boat"("enabled");

-- CreateIndex
CREATE INDEX "Boat_isActive_idx" ON "Boat"("isActive");

-- CreateIndex
CREATE INDEX "Trip_boatId_idx" ON "Trip"("boatId");

-- CreateIndex
CREATE INDEX "Trip_startTime_idx" ON "Trip"("startTime");

-- CreateIndex
CREATE INDEX "Trip_endTime_idx" ON "Trip"("endTime");

-- CreateIndex
CREATE INDEX "GPSPoint_tripId_idx" ON "GPSPoint"("tripId");

-- CreateIndex
CREATE INDEX "GPSPoint_timestamp_idx" ON "GPSPoint"("timestamp");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_boatId_fkey" FOREIGN KEY ("boatId") REFERENCES "Boat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GPSPoint" ADD CONSTRAINT "GPSPoint_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;
