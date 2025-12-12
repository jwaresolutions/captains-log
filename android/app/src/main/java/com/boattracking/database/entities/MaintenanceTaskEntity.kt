package com.boattracking.database.entities

import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.ForeignKey
import androidx.room.Index
import java.util.Date

@Entity(
    tableName = "maintenance_tasks",
    foreignKeys = [
        ForeignKey(
            entity = BoatEntity::class,
            parentColumns = ["id"],
            childColumns = ["boatId"],
            onDelete = ForeignKey.CASCADE
        )
    ],
    indices = [
        Index(value = ["boatId"]),
        Index(value = ["dueDate"]),
        Index(value = ["createdAt"])
    ]
)
data class MaintenanceTaskEntity(
    @PrimaryKey
    val id: String,
    val boatId: String,
    val title: String,
    val description: String?,
    val component: String?,
    val dueDate: Date,
    val recurrenceType: String?, // 'days', 'weeks', 'months', 'years', 'engine_hours'
    val recurrenceInterval: Int?,
    val createdAt: Date,
    val updatedAt: Date,
    val synced: Boolean = false
)