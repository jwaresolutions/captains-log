-- CreateIndex
CREATE INDEX "MaintenanceEvent_dueDate_completedAt_idx" ON "MaintenanceEvent"("dueDate", "completedAt");

-- CreateIndex
CREATE INDEX "MaintenanceEvent_templateId_dueDate_idx" ON "MaintenanceEvent"("templateId", "dueDate");

-- CreateIndex
CREATE INDEX "MaintenanceEvent_templateId_completedAt_idx" ON "MaintenanceEvent"("templateId", "completedAt");

-- CreateIndex
CREATE INDEX "MaintenanceTemplate_boatId_isActive_idx" ON "MaintenanceTemplate"("boatId", "isActive");

-- CreateIndex
CREATE INDEX "MaintenanceTemplate_isActive_createdAt_idx" ON "MaintenanceTemplate"("isActive", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_read_createdAt_idx" ON "Notification"("read", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_type_read_idx" ON "Notification"("type", "read");

-- CreateIndex
CREATE INDEX "OfflineChange_synced_timestamp_idx" ON "OfflineChange"("synced", "timestamp");

-- CreateIndex
CREATE INDEX "OfflineChange_entityType_synced_idx" ON "OfflineChange"("entityType", "synced");

-- CreateIndex
CREATE INDEX "OfflineChange_syncAttempts_lastSyncAttempt_idx" ON "OfflineChange"("syncAttempts", "lastSyncAttempt");

-- CreateIndex
CREATE INDEX "SessionToken_userId_isRevoked_idx" ON "SessionToken"("userId", "isRevoked");

-- CreateIndex
CREATE INDEX "SessionToken_expiresAt_isRevoked_idx" ON "SessionToken"("expiresAt", "isRevoked");

-- CreateIndex
CREATE INDEX "TodoItem_todoListId_completed_idx" ON "TodoItem"("todoListId", "completed");

-- CreateIndex
CREATE INDEX "TodoItem_completed_completedAt_idx" ON "TodoItem"("completed", "completedAt");

-- CreateIndex
CREATE INDEX "Trip_role_endTime_idx" ON "Trip"("role", "endTime");

-- CreateIndex
CREATE INDEX "Trip_startTime_endTime_idx" ON "Trip"("startTime", "endTime");

-- CreateIndex
CREATE INDEX "Trip_boatId_role_startTime_idx" ON "Trip"("boatId", "role", "startTime");

-- CreateIndex
CREATE INDEX "Trip_endTime_role_idx" ON "Trip"("endTime", "role");
