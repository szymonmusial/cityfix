<template>
  <v-app>
    <v-main>
      <the-loader />
      <the-toast />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Load } from "@/composables/OwnLoadData/useLoadData";
import TheToast from "./components/atoms/TheToast.vue";
import { ShowToast } from "@/composables/TheToast/theToast";
import TheLoader from "./components/atoms/TheLoader.vue";
import { useStore } from "vuex";
export default {
  components: { TheToast, TheLoader },
  name: "App",
  setup() {
    const store = useStore();

    const loadData = async () => {
      store.commit("setLoaderStatus", true);
      await Promise.all([
        Load.User().catch(() => ShowToast.Error("Nie udało się załadować użytkowników")),
        Load.FlawReports().catch(() => ShowToast.Error("Nie udało się załadować raportów")),
        Load.Damage().catch(() => ShowToast.Error("Nie udało się załadować możliwych typów uszkodzeń")),
        Load.InfrastructureElements().catch(() =>
          ShowToast.Error("Nie udało się załadować możliwych elementów infrastruktury")
        ),
      ]);

      store.commit("setLoaderStatus", false);
    };
    loadData();
  },
};
</script>
