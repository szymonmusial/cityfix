<template>
  <div class="flaw-leaf-map">
    <l-map :zoom="startZoom" :minZoom="minZoom" :maxZoom="maxZoom" :center="mapCenter">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker
        :lat-lng="mapCenter"
        :draggable="true"
        class="l-marker"
        :style="PinIconColor"
        :icon="createIconPin()"
        @update:latLng="(val) => $emit('updateLangLan', val)"
      >
      </l-marker>
    </l-map>
  </div>
</template>
<script lang="ts">
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import useLeafMapIcon from "@/composables/LeafMapIcon/leafMapIcon";
import { LeafMapIcon } from "@/composables/LeafMapIcon/leafMapIconDictionary";
import { MainMapPlaces, MapZoom } from "@/businessRules/bussniessRules";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },

  setup() {
    const mapCenter = JSON.parse(MainMapPlaces.center.toString());
    const { createIcon } = useLeafMapIcon();
    const minZoom = MapZoom.minZoom;
    const maxZoom = MapZoom.maxZoom;
    const startZoom = MapZoom.startZoom;
    const createIconPin = () => createIcon(LeafMapIcon.mdiPin, false);
    return { createIconPin, mapCenter, minZoom, maxZoom, startZoom };
  },
};
</script>

<style scoped>
.flaw-leaf-map {
  width: 100%;
  height: 100%;
}

.leaflet-popup-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 6px 0 0;
  border: none;
  text-align: center;
  width: 18px;
  height: 14px;
  font: 16px/14px Tahoma, Verdana, sans-serif;
  color: #c3c3c3;
  text-decoration: none;
  font-weight: bold;
  background: transparent;
  color: #25424c;
}

.popup-field {
  font-size: 14px;
}
.popup-filed-name {
  font-weight: 600;
}
</style>

<style>
/* hide Map controls */
.leaflet-control-container {
  display: none !important;
}

.flaw-leaf-map .leaflet-popup-close-button {
  opacity: 0;
  z-index: -1;
}

.l-tooltip {
  background-color: rgb(251, 119, 13);
  inset: auto;
  display: block;
  padding: 8px 12px !important;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 12px;
}

.leaflet-tooltip {
  padding: 0px;
  border: 0px !important;
  opacity: 1 !important;
  border-radius: 12px;
}

.leaflet-tooltip-left:before {
  border-left-color: rgb(251, 119, 13);
}
</style>
