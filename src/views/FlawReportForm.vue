<template>
  <report-app-bar />
  <div class="flaw-report-form">
    <v-card class="form">
      <v-form ref="form" class="form__inner">
        <v-alert prominent type="error" class="ma-2" v-if="!isValidForm && submited">
          Formularz został błędnie wypełniony
        </v-alert>
        <h2>Dodaj nowe zgłoszenie</h2>
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
        <fake-v-date-picker @update="(value) => (inputs.createTime = value)" />
        <v-text-field label="Komentarz" v-model="inputs.comment" />
        <v-text-field label="Wybierz Lokalizacje GPS" v-model="inputs.gpsLocation" />
        <v-btn plain class="mr-4 ml-5 button--submit" @click="submit">
          <v-icon left icon="mdi-handshake-outline"></v-icon>
          <span> Wyślij zgłoszenie </span>
        </v-btn>
      </v-form>
    </v-card>
    <div class="map"><form-map @updateLangLan="updateGps" /></div>
  </div>
</template>
<script lang="ts">
import { ref } from "@vue/reactivity";
import ReportAppBar from "@/components/organisms/ReportAppBar.vue";
import FakeVSelect from "@/components/atoms/FakeVSelect.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import FakeVDatePicker from "@/components/atoms/FakeVDatePicker.vue";
import { Applicationstatus } from "@/businessRules/bussniessRules";
import router from "@/router";
import FormMap from "@/components/molecules/FormMap.vue";
import { ShowToast } from "@/composables/TheToast/theToast";

export default {
  components: { ReportAppBar, FakeVSelect, FakeVDatePicker, FormMap },
  name: "FlawReportForm",
  setup() {
    const inputs = ref({
      person: "",
      damageType: "",
      comment: "",
      infrastructureElement: "",
      createTime: Date(),
      gpsLocation: "",
      lat: null,
      lng: null,
    });

    const updateGps = (val) => {
      inputs.value.lat = val.lat.toString().slice(0, 10);
      inputs.value.lng = val.lng.toString().slice(0, 10);
      inputs.value.gpsLocation = inputs.value.lat + " " + inputs.value.lng;
    };
    const store = useStore();
    const formatedCreateTime = computed(() => {
      const date = new Date(inputs.value.createTime);

      const formatedDate =
        ("00" + date.getDate()).slice(-2) +
        "-" +
        ("00" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        date.getFullYear() +
        " " +
        ("00" + date.getHours()).slice(-2) +
        ":" +
        ("00" + date.getMinutes()).slice(-2);

      return formatedDate;
    });
    const isValidForm = computed(
      () => inputs.value.person !== "" && inputs.value.createTime !== "" && inputs.value.infrastructureElement !== ""
    );
    const submited = ref<null | Boolean>(null);
    const submit = () => {
      submited.value = true;
      if (isValidForm.value) {
        store.commit("setLoaderStatus", true);
        const report = {
          person: inputs.value.person,
          damageType: inputs.value.damageType,
          comment: inputs.value.comment,
          infrastructureElement: inputs.value.infrastructureElement,
          createTime: formatedCreateTime.value,
          status: Applicationstatus.Zgloszone,
          gpsLocation: inputs.value.gpsLocation,
          lat: inputs.value.lat,
          lang: inputs.value.lng,
        };

        store
          .dispatch("addFlawReport", report)
          .then(() => {
            ShowToast.Success("Udało się dodać zgłoszenie");
            submited.value = false;
            router.push("/zglaszanie/tabela");
          })
          .catch(() => ShowToast.Error("Nie Udało się dodać zgłoszenie"))
          .finally(() => store.commit("setLoaderStatus", false));
      }
    };
    const personOptions = computed(() => store.getters.getUsers);
    const damageOptions = computed(() => store.getters.getDamages);
    const infrastructureElementOptions = computed(() => store.getters.getInfrastructureElements);
    return {
      inputs,
      personOptions,
      damageOptions,
      infrastructureElementOptions,
      submit,
      submited,
      formatedCreateTime,
      isValidForm,
      updateGps,
    };
  },
};
</script>

<style scoped>
.button--submit {
  background: #ffebdb;
  color: #25424c;
  border: 2px solid #25424c;
  border-radius: 8px;
  padding: 20px 40px !important;
  font-weight: 600;
  width: calc(100% - 48px);
  margin-top: 24px;
  min-height: 52px;
}

.form__inner div,
h2 {
  margin: 24px;
}

.flaw-report-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100% - 64px);
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

<style>
.flaw-report-form .v-input__details {
  display: none !important;
}
</style>
