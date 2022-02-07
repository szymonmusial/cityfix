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
    Load.User().catch(() => ShowToast.Error("Nie udało się załadować użytkowników"));
    Load.FlawReports().catch(() => ShowToast.Error("Nie udało się załadować raportów"));
    Load.Damage().catch(() => ShowToast.Error("Nie udało się załadować możliwych typów uszkodzeń"));
    Load.InfrastructureElements().catch(() =>
      ShowToast.Error("Nie udało się załadować możliwych elementów infrastruktury")
    );
  },
};
</script>
