<template>
  <div class="flaw-report-table">
    <report-app-bar />
    <flaw-table />
  </div>
</template>

<script lang="ts">
import FlawTable from "@/components/organisms/FlawTable.vue";
import ReportAppBar from "@/components/organisms/ReportAppBar.vue";

export default {
  components: { FlawTable, ReportAppBar },
  name: "FlawReportTable",
};
</script>

<style>
.flaw-report-table {
  height: calc(100vh);
  overflow: hidden;
  width: 100%;
  position: relative;
}
</style>
