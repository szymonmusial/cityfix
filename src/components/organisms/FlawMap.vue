<template>
  <div
    class="flaw-map"
    v-bind:class="[mapIsVisable ? 'flaw-map--show' : 'flaw-map--hide', fullScreen ? 'flaw-leaf-map--full-screen' : '']"
  >
    <hide-map-button @showHideMap="showHideMap" :mapIsVisable="mapIsVisable" v-if="!fullScreen" />
    <flaw-leaf-map
      class="flaw-leaf-map"
      :pinsAreDraggable="pinsAreDraggable"
      :flawReports="flawReports"
      @hoverPin="(id) => $emit('hoverPin', id)"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import HideMapButton from "../atoms/HideMapButton.vue";
import FlawLeafMap from "../molecules/FlawLeafMap.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { FlawReports } from "@/store/modules/flawReports/flawReportsType";
export default {
  components: { FlawLeafMap, HideMapButton },
  name: "FlawMap",
  props: {
    fullScreen: Boolean,
  },
  setup() {
    const store = useStore();
    const mapIsVisable = ref(true);
    const pinsAreDraggable = ref(false);

    const flawReports = computed((): FlawReports => store.getters.getFlawReports);
    const showHideMap = () => (mapIsVisable.value = !mapIsVisable.value);

    return { showHideMap, mapIsVisable, pinsAreDraggable, flawReports };
  },
};
</script>

<style scoped>
.flaw-map {
  width: 100%;
  height: 60vh;
  position: absolute;
  bottom: 0px;
  transition: 1s all;
  margin-bottom: 48px;
}

.flaw-map--show {
  bottom: 0;
}

.flaw-map--hide {
  bottom: calc(24px);
  transform: translate(0, +100%);
}

.flaw-leaf-map {
  border-top: 3px solid #25424c;
}

.flaw-leaf-map--full-screen {
  height: 100vh !important;
  top: 0px;
}
.flaw-leaf-map--full-screen .flaw-leaf-map {
  border: none !important;
}
</style>
