<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Load } from "@/composables/OwnLoadData/useLoadData";

export default {
  name: "App",
  setup() {
    Load.User();
    Load.FlawReports();
  },
};
</script>
