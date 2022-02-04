<template>
  <div class="flaw-leaf-map">
    <l-map :zoom="startZoom" :minZoom="minZoom" :maxZoom="maxZoom" :center="mapCenter">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker
        v-for="item in flawReports"
        :key="item.id"
        :lat-lng="[item.lat, item.lang]"
        :draggable="pinsAreDraggable"
        class="l-marker"
        :style="PinIconColor"
        :icon="createIconPin(item.infrastructureElement)"
        @mouseout="changeSelectedHoverPin(null)"
        @mouseover="changeSelectedHoverPin(item.id)"
        @click="() => (isOpenPopup = true)"
      >
        <l-tooltip class="l-tooltip">
          {{ item.infrastructureElement }}
        </l-tooltip>
        <l-popup>
          <a class="leaflet-popup-close" @click="closePopup">×</a>
          <p class="popup-field"><span class="popup-filed-name">Nazwa: </span>{{ item.infrastructureElement }}</p>
          <p class="popup-field"><span class="popup-filed-name">Uszkodzenie: </span>{{ item.damageType }}</p>
          <p class="popup-field"><span class="popup-filed-name">Status: </span>{{ item.status }}</p>
        </l-popup>
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
import useLeafMapIcon from "@/composables/LeafMapIcon/leafMapIcon";
import { LeafMapIcon } from "@/composables/LeafMapIcon/leafMapIconDictionary";
import { MainMapPlaces, MapZoom } from "@/businessRules/bussniessRules";

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
  setup(props, { emit }) {
    const isOpenPopup = ref(false);
    const { createIcon } = useLeafMapIcon();
    const mapCenter = JSON.parse(MainMapPlaces.center.toString());
    const minZoom = MapZoom.minZoom;
    const maxZoom = MapZoom.maxZoom;
    const startZoom = MapZoom.startZoom;
    const closePopup = () => {
      isOpenPopup.value = false;
      changeSelectedHoverPin(null);
      // dont'look at this (*_*)

      // @ts-ignore: Unreachable code error
      document.querySelector(".leaflet-popup-close-button").click();
    };
    const changeSelectedHoverPin = (id: number | null) => {
      if (!isOpenPopup.value) {
        emit("hoverPin", id);
      }
    };

    const createIconPin = (text) => createIcon(LeafMapIcon.mdiPin, true, text);

    return { createIconPin, isOpenPopup, changeSelectedHoverPin, closePopup, mapCenter, minZoom, maxZoom, startZoom };
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
