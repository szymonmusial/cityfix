<template>
  <div class="flaw-report-map">
    <report-app-bar />
    <flaw-map :fullScreen="true" />
  </div>
</template>

<script lang="ts">
import FlawMap from "@/components/organisms/FlawMap.vue";
import ReportAppBar from "@/components/organisms/ReportAppBar.vue";

export default {
  components: { FlawMap, ReportAppBar },
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
