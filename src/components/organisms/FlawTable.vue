<template>
  <v-table>
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
        <tr v-for="item in desserts" :key="item.name">
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
import { ref } from "@vue/reactivity";
export default {
  name: "FlawTable",
  setup() {
    const desserts = ref([
      {
        status: "Zgłoszone",
        createTime: "02-02-2020: 10:30",
        person: "Szymon Musiał",
        infrastructureElement: "Lampa",
        damageType: "Wybuch",
        gpsLocation: "51.2948800° 18.1554700°",
        comment: "Wybuchła zarówka lampy",
      },
    ]);

    return { desserts };
  },
};
</script>

<style></style>
