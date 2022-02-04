<template>
  <report-app-bar />
  <div class="flaw-report-form">
    <v-card class="form">
      <v-form ref="form" class="form__inner">
        <fake-v-select v-model="inputs.person" :options="personOptions" label="Wybierz osobe" target="name" />
        <fake-v-select
          v-model="inputs.damageType"
          :options="damageOptions"
          label="Wybierz Typ Uszkodzenia"
          target="name"
        />
        <fake-v-select
          v-model="inputs.infrastructureElement"
          :options="infrastructureElementOptions"
          label="Wybierz Element Infrastruktury"
          target="name"
        />
        <fake-v-date-picker @test="(value) => (inputs.createTime = value)" />
        <v-text-field label="Komentarz" v-model="inputs.comment" />
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
import FakeVDatePicker from "@/components/atoms/FakeVDatePicker.vue";
export default {
  components: { ReportAppBar, FakeVSelect, FakeVDatePicker },
  name: "FlawReportForm",
  setup() {
    const inputs = ref({
      person: "",
      damageType: "",
      comment: "",
      infrastructureElement: "",
      createTime: "",
    });

    const store = useStore();

    const personOptions = computed(() => store.getters.getUsers);
    const damageOptions = computed(() => store.getters.getDamages);
    const infrastructureElementOptions = computed(() => store.getters.getInfrastructureElements);
    return { inputs, personOptions, damageOptions, infrastructureElementOptions };
  },
};
</script>

<style scoped>
.form__inner div {
  margin: 24px;
}

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
