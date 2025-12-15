-- CreateTable
CREATE TABLE "OfflineChange" (
    "id" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "changeType" TEXT NOT NULL,
    "changeData" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "synced" BOOLEAN NOT NULL DEFAULT false,
    "syncAttempts" INTEGER NOT NULL DEFAULT 0,
    "lastSyncAttempt" TIMESTAMP(3),
    "syncError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OfflineChange_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "OfflineChange_entityType_entityId_idx" ON "OfflineChange"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "OfflineChange_synced_idx" ON "OfflineChange"("synced");

-- CreateIndex
CREATE INDEX "OfflineChange_syncAttempts_idx" ON "OfflineChange"("syncAttempts");

-- CreateIndex
CREATE INDEX "OfflineChange_timestamp_idx" ON "OfflineChange"("timestamp");

-- CreateIndex
CREATE INDEX "OfflineChange_userId_idx" ON "OfflineChange"("userId");
