<template>
  <report-app-bar />
  <div class="flaw-report-form">
    <v-card class="form">
      <v-form ref="form">
        <fake-v-select v-model="inputs.person" :options="personOptions" label="Wybierz osobe" target="name" />
      </v-form>
    </v-card>
    <div class="map"></div>
  </div>
</template>
<script lang="ts">
import { ref } from "@vue/reactivity";
import ReportAppBar from "@/components/organisms/ReportAppBar.vue";
import FakeVSelect from "@/components/atoms/FakeVSelect.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  components: { ReportAppBar, FakeVSelect },
  name: "FlawReportForm",
  setup() {
    const inputs = ref({
      person: "",
    });

    const store = useStore();

    const personOptions = computed(() => store.getters.getUsers);

    return { inputs, personOptions };
  },
};
</script>

<style scoped>
.flaw-report-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.form,
.map {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

.form {
  flex: 1;
}

.map {
  flex: 1.5;
}
</style>
