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
          <th class="text-center" v-if="canEditStatus()">Edytuj</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in flawReports" :key="item.name" :class="isHoveredItem(item.id) ? 'hovered' : ''">
          <td>{{ item.status }}</td>
          <td>{{ item.createTime }}</td>
          <td>{{ item.person }}</td>
          <td class="infrastructure-element">
            {{ item.infrastructureElement }}
            <TextToColorIcon :text="item.infrastructureElement" />
          </td>
          <td>{{ item.damageType }}</td>
          <td>{{ item.gpsLocation }}</td>
          <td>{{ item.comment }}</td>
          <td class="text-center" v-if="canEditStatus()">
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

<script lang="ts">
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
import DropDownSelect from "../atoms/DropDownSelect.vue";
import TextToColorIcon from "../atoms/TextToColorIcon.vue";
import { canEditStatus } from "@/infrastructure/permission/usePermission";

export default {
  components: { DropDownSelect, TextToColorIcon },
  name: "FlawTable",
  props: { hoveredItemId: Number },
  setup(props) {
    const store = useStore();
    const updateFlawStatus = (status, id) => store.dispatch("editStatusFlawReport", { status, id });
    const flawReports = computed(() => store.getters.getFlawReports);

    const isHoveredItem = (id: number) => props.hoveredItemId == id;

    const options = ref([
      { name: "Odrzuć Zgłoszenie", value: "Odrzuc" },
      { name: "Zakończ Zgłoszenie", value: "Zakoncz" },
    ]);
    return { flawReports, options, updateFlawStatus, isHoveredItem, canEditStatus };
  },
};
</script>

<style scoped>
.hovered,
tr:hover {
  background: #ffebdb !important;
  opacity: 1 !important;
}

thead th {
  background-color: #25424c !important;
  color: #fff;
}

td {
  min-height: 72px !important;
}

tr:nth-child(odd) {
  background-color: #dff2f9;
}

tr:nth-child(even) {
  background-color: #e7ecff;
}

.infrastructure-element {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
</style>
