<template>
  <div class="flaw-leaf-map">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :minZoom="10"
      :maxZoom="18"
      :center="[51.29488, 18.15547]"
      @move="log('move')"
    >
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-control-layers />
      <l-marker :lat-lng="[51.29488, 18.15547]" draggable @moveend="log('moveend')">
        <l-tooltip> lol </l-tooltip>
      </l-marker>

      <l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
        <l-popup> lol </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker, LControlLayers, LTooltip, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { ref } from "@vue/reactivity";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
  },
  setup() {
    const zoom = ref(14);
    const log = (a) => console.log(a);

    return { zoom, log };
  },
};
</script>

<style scoped>
.flaw-leaf-map {
  width: 100%;
  height: 100%;
}
</style>

<style>
/* hide Map controls */
.leaflet-control-container {
  display: none !important;
}
</style>
