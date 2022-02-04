<template>
  <report-app-bar />
  <div class="flaw-report-form">
    <v-card class="form">
      <v-form ref="form">
        <fake-v-select v-model="inputs.person" :options="personOptions" label="Wybierz osobe" />
      </v-form>
    </v-card>
    <div class="map"></div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import ReportAppBar from "@/components/organisms/ReportAppBar.vue";
import FakeVSelect from "@/components/atoms/FakeVSelect.vue";
export default {
  components: { ReportAppBar, FakeVSelect },
  name: "FlawReportForm",
  setup() {
    const inputs = ref({
      person: "",
    });

    const personOptions = ref([
      { name: "Szymon Musiał", value: "Szymon Musiał", id: 0 },
      { name: "Kuba Musiał", value: "Kuba Musiał", id: 1 },
    ]);

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
