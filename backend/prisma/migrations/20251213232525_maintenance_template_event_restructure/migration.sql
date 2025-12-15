/*
  Warnings:

  - You are about to drop the column `entityId` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the column `entityType` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the `MaintenanceCompletion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MaintenanceTask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MaintenanceCompletion" DROP CONSTRAINT "MaintenanceCompletion_maintenanceTaskId_fkey";

-- DropForeignKey
ALTER TABLE "MaintenanceTask" DROP CONSTRAINT "MaintenanceTask_boatId_fkey";

-- DropIndex
DROP INDEX "Photo_entityType_entityId_idx";

-- AlterTable
ALTER TABLE "MarkedLocation" ADD COLUMN     "boatId" TEXT,
ADD COLUMN     "tripId" TEXT;

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "entityId",
DROP COLUMN "entityType",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'general',
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "numberOfCrew" INTEGER;

-- DropTable
DROP TABLE "MaintenanceCompletion";

-- DropTable
DROP TABLE "MaintenanceTask";

-- CreateTable
CREATE TABLE "MaintenanceTemplate" (
    "id" TEXT NOT NULL,
    "boatId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "component" TEXT NOT NULL,
    "estimatedCost" DOUBLE PRECISION,
    "estimatedTime" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "recurrence" JSONB NOT NULL,

    CONSTRAINT "MaintenanceTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaintenanceEvent" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "actualCost" DOUBLE PRECISION,
    "actualTime" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MaintenanceEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntityPhoto" (
    "id" TEXT NOT NULL,
    "photoId" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EntityPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MaintenanceTemplate_boatId_idx" ON "MaintenanceTemplate"("boatId");

-- CreateIndex
CREATE INDEX "MaintenanceTemplate_isActive_idx" ON "MaintenanceTemplate"("isActive");

-- CreateIndex
CREATE INDEX "MaintenanceTemplate_createdAt_idx" ON "MaintenanceTemplate"("createdAt");

-- CreateIndex
CREATE INDEX "MaintenanceEvent_templateId_idx" ON "MaintenanceEvent"("templateId");

-- CreateIndex
CREATE INDEX "MaintenanceEvent_dueDate_idx" ON "MaintenanceEvent"("dueDate");

-- CreateIndex
CREATE INDEX "MaintenanceEvent_completedAt_idx" ON "MaintenanceEvent"("completedAt");

-- CreateIndex
CREATE INDEX "EntityPhoto_photoId_idx" ON "EntityPhoto"("photoId");

-- CreateIndex
CREATE INDEX "EntityPhoto_entityType_entityId_idx" ON "EntityPhoto"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "EntityPhoto_photoId_entityType_entityId_key" ON "EntityPhoto"("photoId", "entityType", "entityId");

-- CreateIndex
CREATE INDEX "MarkedLocation_boatId_idx" ON "MarkedLocation"("boatId");

-- CreateIndex
CREATE INDEX "MarkedLocation_tripId_idx" ON "MarkedLocation"("tripId");

-- CreateIndex
CREATE INDEX "Photo_category_idx" ON "Photo"("category");

-- AddForeignKey
ALTER TABLE "MaintenanceTemplate" ADD CONSTRAINT "MaintenanceTemplate_boatId_fkey" FOREIGN KEY ("boatId") REFERENCES "Boat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceEvent" ADD CONSTRAINT "MaintenanceEvent_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "MaintenanceTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkedLocation" ADD CONSTRAINT "MarkedLocation_boatId_fkey" FOREIGN KEY ("boatId") REFERENCES "Boat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkedLocation" ADD CONSTRAINT "MarkedLocation_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntityPhoto" ADD CONSTRAINT "EntityPhoto_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Photo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
