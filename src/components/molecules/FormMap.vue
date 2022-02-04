<template>
  <div class="flaw-leaf-map">
    <l-map v-model:zoom="zoom" :minZoom="10" :maxZoom="18" :center="[51.29488, 18.15547]">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker
        :lat-lng="[51.29488, 18.15547]"
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
import { ref } from "@vue/reactivity";
import useLeafMapIcon from "@/composables/LeafMapIcon/leafMapIcon";
import { LeafMapIcon } from "@/composables/LeafMapIcon/leafMapIconDictionary";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },

  setup() {
    const zoom = ref(14);
    const { createIcon } = useLeafMapIcon();
    const createIconPin = () => createIcon(LeafMapIcon.mdiPin, false);
    return { zoom, createIconPin };
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
