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
          <th class="text-center">Edytuj</th>
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
          <td class="text-center">
            <drop-down-select
              :options="options"
              label="Wybierz edycje"
              @onSelect="(value) => updateFlawStatus(value, item.id)"
            />
          </td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
import DropDownSelect from "../atoms/DropDownSelect.vue";
export default {
  components: { DropDownSelect },
  name: "FlawTable",
  setup() {
    const store = useStore();
    const updateFlawStatus = (status, id) => {
      console.log(status);
      console.log(id);
    };
    const flawReports = computed(() => store.getters.getFlawReports);
    const options = ref([
      { name: "Odrzuć Zgłoszenie", value: "Odrzuc" },
      { name: "Zakończ Zgłoszenie", value: "Zakoncz" },
    ]);
    return { flawReports, options, updateFlawStatus };
  },
};
</script>

<style scoped>
thead th {
  background-color: #25424c !important;
  color: #fff;
}

tr:nth-child(odd) {
  background-color: #dff2f9;
}

tr:nth-child(even) {
  background-color: #e7ecff;
}
</style>
