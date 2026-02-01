package com.captainslog.nautical.service

import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import okhttp3.*
import org.json.JSONObject

data class AISVessel(
    val mmsi: Long,
    val name: String,
    val latitude: Double,
    val longitude: Double,
    val heading: Double,
    val speed: Double,
    val timestamp: Long
)

class AISStreamService {

    private var webSocket: WebSocket? = null
    private val client = OkHttpClient()
    private val vessels = mutableMapOf<Long, AISVessel>()

    private val _vesselFlow = MutableStateFlow<List<AISVessel>>(emptyList())
    val vesselFlow: StateFlow<List<AISVessel>> = _vesselFlow.asStateFlow()

    fun connect(apiKey: String, minLat: Double, minLng: Double, maxLat: Double, maxLng: Double) {
        disconnect()

        val request = Request.Builder()
            .url("wss://stream.aisstream.io/v0/stream")
            .build()

        webSocket = client.newWebSocket(request, object : WebSocketListener() {
            override fun onOpen(ws: WebSocket, response: Response) {
                val subscribeMsg = JSONObject().apply {
                    put("APIKey", apiKey)
                    put("BoundingBoxes", org.json.JSONArray().apply {
                        put(org.json.JSONArray().apply {
                            put(org.json.JSONArray().apply { put(minLat); put(minLng) })
                            put(org.json.JSONArray().apply { put(maxLat); put(maxLng) })
                        })
                    })
                }
                ws.send(subscribeMsg.toString())
            }

            override fun onMessage(ws: WebSocket, text: String) {
                try {
                    val data = JSONObject(text)
                    val report = data.optJSONObject("Message")?.optJSONObject("PositionReport") ?: return
                    val meta = data.optJSONObject("MetaData") ?: return
                    val mmsi = meta.optLong("MMSI")
                    val vessel = AISVessel(
                        mmsi = mmsi,
                        name = meta.optString("ShipName", "MMSI $mmsi").trim(),
                        latitude = report.optDouble("Latitude"),
                        longitude = report.optDouble("Longitude"),
                        heading = report.optDouble("TrueHeading", report.optDouble("Cog", 0.0)),
                        speed = report.optDouble("Sog", 0.0),
                        timestamp = System.currentTimeMillis()
                    )
                    vessels[mmsi] = vessel
                    // Prune stale
                    val cutoff = System.currentTimeMillis() - 600_000
                    vessels.entries.removeAll { it.value.timestamp < cutoff }
                    _vesselFlow.value = vessels.values.toList()
                } catch (_: Exception) {}
            }

            override fun onFailure(ws: WebSocket, t: Throwable, response: Response?) {
                // Silent failure
            }
        })
    }

    fun disconnect() {
        webSocket?.close(1000, "Closing")
        webSocket = null
        vessels.clear()
        _vesselFlow.value = emptyList()
    }
}
