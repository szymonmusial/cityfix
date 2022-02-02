<template>
  <v-table fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Status Zgłoszenia</th>
          <th class="text-left">Data Utworzenia</th>
          <th class="text-left">Osoba</th>
          <th class="text-left">Element Infrastruktury</th>
          <th class="text-left">Rodzaj Uszkodzeń</th>
          <th class="text-left">Lokalizacja GPS</th>
          <th class="text-left">Komentarz</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in flawReports" :key="item.name">
          <td>{{ item.status }}</td>
          <td>{{ item.createTime }}</td>
          <td>{{ item.person }}</td>
          <td>{{ item.infrastructureElement }}</td>
          <td>{{ item.damageType }}</td>
          <td>{{ item.gpsLocation }}</td>
          <td>{{ item.comment }}</td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "FlawTable",
  setup() {
    const store = useStore();
    const flawReports = computed(() => store.getters.getFlawReports);

    return { flawReports };
  },
};
</script>

<style></style>
