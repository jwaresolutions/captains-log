package com.captainslog.nautical.tile

import org.osmdroid.tileprovider.tilesource.OnlineTileSourceBase
import org.osmdroid.util.MapTileIndex

object NauticalTileSources {

    val openSeaMap = object : OnlineTileSourceBase(
        "OpenSeaMap", 1, 18, 256, ".png",
        arrayOf("https://tiles.openseamap.org/seamark/")
    ) {
        override fun getTileURLString(pMapTileIndex: Long): String {
            val zoom = MapTileIndex.getZoom(pMapTileIndex)
            val x = MapTileIndex.getX(pMapTileIndex)
            val y = MapTileIndex.getY(pMapTileIndex)
            return "${baseUrl[0]}$zoom/$x/$y.png"
        }
    }

    val noaaCharts = object : OnlineTileSourceBase(
        "NOAACharts", 1, 16, 256, ".png",
        arrayOf("https://tileservice.charts.noaa.gov/tiles/50000_1/")
    ) {
        override fun getTileURLString(pMapTileIndex: Long): String {
            val zoom = MapTileIndex.getZoom(pMapTileIndex)
            val x = MapTileIndex.getX(pMapTileIndex)
            val y = MapTileIndex.getY(pMapTileIndex)
            return "${baseUrl[0]}$zoom/$x/$y.png"
        }
    }

    fun getSourceById(id: String): OnlineTileSourceBase? = when (id) {
        "openseamap" -> openSeaMap
        "noaa-charts" -> noaaCharts
        else -> null
    }

    val tileProviderIds = listOf("openseamap", "noaa-charts")
}
