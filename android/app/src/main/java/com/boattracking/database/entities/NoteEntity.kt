package com.boattracking.database.entities

import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.TypeConverters
import com.boattracking.database.converters.DateConverter
import java.util.Date
import java.util.UUID

@Entity(tableName = "notes")
@TypeConverters(DateConverter::class)
data class NoteEntity(
    @PrimaryKey
    val id: String = UUID.randomUUID().toString(),
    val content: String,
    val type: String, // 'general', 'boat', 'trip'
    val boatId: String? = null,
    val tripId: String? = null,
    val tags: List<String> = emptyList(),
    val synced: Boolean = false,
    val lastModified: Date = Date(),
    val createdAt: Date = Date()
)