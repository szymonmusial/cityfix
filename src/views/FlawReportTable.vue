<template>
  <div class="flaw-report-table">
    <flaw-table />
  </div>
</template>

<script lang="ts">
import FlawTable from "@/components/organisms/FlawTable.vue";

export default {
  components: { FlawTable },
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
