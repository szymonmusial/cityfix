<template>
  <v-app>
    <v-main>
      <v-btn color="primary">dd</v-btn>
      <router-view app />
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
