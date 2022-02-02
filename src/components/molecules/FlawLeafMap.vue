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
      <l-marker
        v-for="item in flawReports"
        :key="item.id"
        :lat-lng="[item.lat, item.lang]"
        :draggable="pinsAreDraggable"
        @moveend="log('moveend')"
        class="l-marker"
      >
        <l-tooltip class="l-tooltip"> {{ item.infrastructureElement }} </l-tooltip>
        <l-popup> lol </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
<script lang="ts">
import { LMap, LTileLayer, LMarker, LTooltip, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { ref } from "@vue/reactivity";
import { FlawReports } from "@/store/modules/flawReports/flawReportsType";
import { PropType } from "@vue/runtime-core";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
  },
  props: {
    pinsAreDraggable: Boolean,
    flawReports: Object as PropType<FlawReports>,
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
