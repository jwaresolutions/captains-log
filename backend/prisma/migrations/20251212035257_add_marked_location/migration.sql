-- CreateTable
CREATE TABLE "MarkedLocation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "notes" TEXT,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarkedLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MarkedLocation_category_idx" ON "MarkedLocation"("category");

-- CreateIndex
CREATE INDEX "MarkedLocation_latitude_longitude_idx" ON "MarkedLocation"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "MarkedLocation_createdAt_idx" ON "MarkedLocation"("createdAt");
