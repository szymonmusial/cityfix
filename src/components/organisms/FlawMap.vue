<template>
  <div class="flaw-map flaw-map--show" v-bind:class="mapIsVisable ? 'flaw-map--show' : 'flaw-map--hide'">
    <hide-map-button @showHideMap="showHideMap" :mapIsVisable="mapIsVisable" />
    <flaw-leaf-map class="flaw-leaf-map" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import HideMapButton from "../atoms/HideMapButton.vue";
import FlawLeafMap from "../molecules/FlawLeafMap.vue";
export default {
  components: { FlawLeafMap, HideMapButton },
  name: "FlawMap",
  setup() {
    const mapIsVisable = ref(true);
    const showHideMap = () => (mapIsVisable.value = !mapIsVisable.value);

    return { showHideMap, mapIsVisable };
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
  bottom: calc(-60vh + 24px);
}

.flaw-leaf-map {
  border-top: 3px solid #25424c;
}
</style>
