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
    // add error hadling and loader/spinner
    Load.User();
    Load.FlawReports();
    Load.Damage();
    Load.InfrastructureElements();
  },
};
</script>
