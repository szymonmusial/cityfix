<template>
  <div class="hide-map">
    <v-badge
      :model-value="hover"
      color="#FB770D"
      content="Schowaj mape"
      transition="slide-x-transition"
      class="hide-map__button"
      @click="$emit('showHideMap')"
      v-if="mapIsVisable"
    >
      <v-hover v-slot="{ props }" v-model="hover">
        <v-icon color="#fff" size="large" v-bind="props"> mdi-arrow-down </v-icon>
      </v-hover>
    </v-badge>

    <v-badge
      :model-value="hover"
      color="#FB770D"
      content="Pokaż mape"
      transition="slide-x-transition"
      class="hide-map__button"
      @click="$emit('showHideMap')"
      v-else
    >
      <v-hover v-slot="{ props }" v-model="hover">
        <v-icon color="#fff" size="large" v-bind="props"> mdi-arrow-up </v-icon>
      </v-hover>
    </v-badge>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "FlawMap",
  emits: ["hideMap,showMap"],
  props: { mapIsVisable: Boolean },
  setup() {
    const hover = ref(false);

    return { hover };
  },
};
</script>

<style scoped>
.hide-map {
  text-align: center;
  transform: translate(0, +50%);
  z-index: 1000000000;
  position: relative;
}
/* 25424C • FFA45B • FFEBDB • FB770D */
.hide-map__button {
  background-color: #25424c;
  color: #fff;
  padding: 8px;
  border-radius: 100%;
  cursor: pointer;
}
</style>

<style>
.v-badge__badge {
  background-color: rgb(251, 119, 13);
  inset: auto;
  display: block;
  padding: 8px 12px !important;
  height: auto !important;
  transform: translate(-50%, -100%);
  z-index: -1;
}
</style>
