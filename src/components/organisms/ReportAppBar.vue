<template>
  <app-bar :routes="routes" />
</template>

<script lang="ts">
import AppBar from "@/components/atoms/AppBar.vue";

export default {
  components: { AppBar },
  name: "ReportAppBar",
  setup() {
    const routes = [
      { name: "Widok Mapy", path: "/zglaszanie/mapa", id: 0 },
      { name: "Widok Tabeli", path: "/zglaszanie/tabela", id: 1 },
    ];

    return { routes };
  },
};
</script>
