-- CreateTable
CREATE TABLE "SensorType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "loggingFrequency" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SensorType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SensorReading" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "sensorTypeId" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SensorReading_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SensorType_name_key" ON "SensorType"("name");

-- CreateIndex
CREATE INDEX "SensorType_name_idx" ON "SensorType"("name");

-- CreateIndex
CREATE INDEX "SensorType_loggingFrequency_idx" ON "SensorType"("loggingFrequency");

-- CreateIndex
CREATE INDEX "SensorReading_tripId_idx" ON "SensorReading"("tripId");

-- CreateIndex
CREATE INDEX "SensorReading_sensorTypeId_idx" ON "SensorReading"("sensorTypeId");

-- CreateIndex
CREATE INDEX "SensorReading_timestamp_idx" ON "SensorReading"("timestamp");

-- CreateIndex
CREATE INDEX "SensorReading_tripId_sensorTypeId_timestamp_idx" ON "SensorReading"("tripId", "sensorTypeId", "timestamp");

-- AddForeignKey
ALTER TABLE "SensorReading" ADD CONSTRAINT "SensorReading_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SensorReading" ADD CONSTRAINT "SensorReading_sensorTypeId_fkey" FOREIGN KEY ("sensorTypeId") REFERENCES "SensorType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
