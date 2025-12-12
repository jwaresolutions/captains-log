-- CreateTable
CREATE TABLE "MaintenanceTask" (
    "id" TEXT NOT NULL,
    "boatId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "component" TEXT,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "recurrence" JSONB,

    CONSTRAINT "MaintenanceTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaintenanceCompletion" (
    "id" TEXT NOT NULL,
    "maintenanceTaskId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cost" DOUBLE PRECISION,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MaintenanceCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MaintenanceTask_boatId_idx" ON "MaintenanceTask"("boatId");

-- CreateIndex
CREATE INDEX "MaintenanceTask_dueDate_idx" ON "MaintenanceTask"("dueDate");

-- CreateIndex
CREATE INDEX "MaintenanceTask_createdAt_idx" ON "MaintenanceTask"("createdAt");

-- CreateIndex
CREATE INDEX "MaintenanceCompletion_maintenanceTaskId_idx" ON "MaintenanceCompletion"("maintenanceTaskId");

-- CreateIndex
CREATE INDEX "MaintenanceCompletion_completedAt_idx" ON "MaintenanceCompletion"("completedAt");

-- AddForeignKey
ALTER TABLE "MaintenanceTask" ADD CONSTRAINT "MaintenanceTask_boatId_fkey" FOREIGN KEY ("boatId") REFERENCES "Boat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCompletion" ADD CONSTRAINT "MaintenanceCompletion_maintenanceTaskId_fkey" FOREIGN KEY ("maintenanceTaskId") REFERENCES "MaintenanceTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;
