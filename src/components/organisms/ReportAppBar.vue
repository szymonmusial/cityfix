<template>
  <app-bar :routes="routes" :cta="cta" />
</template>

<script lang="ts">
import AppBar from "@/components/atoms/AppBar.vue";
import { ref } from "@vue/reactivity";

export default {
  components: { AppBar },
  name: "ReportAppBar",
  setup() {
    const routes = ref([
      { name: "Widok Mapy", path: "/zglaszanie/mapa", id: 0 },
      { name: "Widok Tabeli", path: "/zglaszanie/tabela", id: 1 },
    ]);

    const cta = ref({ name: "DODAJ ZGŁOSZENIE", path: "/zglaszanie/formularz" });

    return { routes, cta };
  },
};
</script>
