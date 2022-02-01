<template>
  <v-app>
    <v-main>
      <div>test</div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Load } from "@/composables/OwnLoadData/useLoadData";

export default {
  name: "App",
  setup() {
    Load.User();
  },
};
</script>
