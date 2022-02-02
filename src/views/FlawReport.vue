<template>
  <div class="flaw-report">
    <flaw-table />
    <flaw-map />
  </div>
</template>

<script>
import FlawTable from "@/components/organisms/FlawTable.vue";
import FlawMap from "@/components/organisms/FlawMap.vue";

export default {
  components: { FlawTable, FlawMap },
  name: "FlawReport",
};
</script>

<style></style>
