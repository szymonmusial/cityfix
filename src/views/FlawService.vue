<template>
  <div class="flaw-service">
    <flaw-table :hoveredItemId="hoverPinId" />
    <flaw-map @hoverPin="(id) => (hoverPinId = id)" />
  </div>
</template>

<script lang="ts">
import FlawTable from "@/components/organisms/FlawTable.vue";
import FlawMap from "@/components/organisms/FlawMap.vue";
import { ref } from "@vue/reactivity";

export default {
  components: { FlawTable, FlawMap },
  name: "FlawService",
  setup() {
    const hoverPinId = ref<null | number>(null);

    return { hoverPinId };
  },
};
</script>

<style>
.flaw-service {
  height: calc(100vh);
  overflow: hidden;
  width: 100%;
  position: relative;
}
</style>
