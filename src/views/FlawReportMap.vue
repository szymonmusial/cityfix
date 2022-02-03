<template>
  <div class="flaw-report-map">
    <flaw-map :fullScreen="true" />
  </div>
</template>

<script lang="ts">
import FlawMap from "@/components/organisms/FlawMap.vue";

export default {
  components: { FlawMap },
  name: "FlawService",
};
</script>

<style>
.flaw-report-map {
  height: calc(100vh);
  overflow: hidden;
  width: 100%;
  position: relative;
}
</style>
