<template>
  <v-app>
    <v-main>
      <the-toast />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Load } from "@/composables/OwnLoadData/useLoadData";
import TheToast from "./components/atoms/TheToast.vue";
import { ShowToast } from "@/composables/TheToast/theToast";
export default {
  components: { TheToast },
  name: "App",
  setup() {
    // add error hadling and loader/spinner
    Load.User();
    Load.FlawReports();
    Load.Damage();
    Load.InfrastructureElements();
    ShowToast.Success("DZIAŁA!");
  },
};
</script>
