<template>
  <div class="flaw-map">
    <flaw-leaf-map />
  </div>
</template>

<script>
import FlawLeafMap from "../molecules/FlawLeafMap.vue";
export default {
  components: { FlawLeafMap },
  name: "FlawMap",
};
</script>

<style scoped>
.flaw-map {
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
}
</style>
