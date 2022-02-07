<template>
  <div class="form">
    <v-card class="form__inner">
      <v-card-title>Zaloguj się</v-card-title>
      <fake-v-select label="Wybierz typ konta" :options="accountType" target="value" v-model="form.accountType" />
      <v-text-field label="Login" v-model="form.login" />
      <v-text-field label="Hasło" v-model="form.password" type="password" />
      <v-btn plain class="mr-4 ml-5 button--submit" @click="submit">
        <v-icon left icon="mdi-handshake-outline"></v-icon>
        <span> Wyślij zgłoszenie </span>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import FakeVSelect from "@/components/atoms/FakeVSelect.vue";
import { ref } from "@vue/reactivity";
import { Role } from "@/infrastructure/permission/permissions";

export default {
  name: "LogInForm",
  emits: ["submit"],
  components: {
    FakeVSelect,
  },
  setup(props, { emit }) {
    const accountType = ref([
      { name: "Obsługa", value: Role.service, id: 0 },
      { name: "Zgłaszanie", value: Role.reporting, id: 1 },
    ]);

    const form = ref({
      login: "",
      password: "",
      accountType: "",
    });

    const submit = () => {
      emit("submit", form);
    };

    return { accountType, form, submit };
  },
};
</script>

<style scoped>
.form {
  padding: 32px;
}

.form__inner {
  padding: 24px;
}

.form__inner div {
  padding: 16px 0px;
}

.button--submit {
  background: #ffebdb;
  color: #25424c;
  border: 2px solid #25424c;
  border-radius: 8px;
  padding: 20px 40px !important;
  font-weight: 600;
  margin-top: 24px;
  min-height: 52px;
  width: 100%;
  margin-left: 0px !important;
}
</style>

<style>
.form__inner .v-input__details {
  display: none;
}
</style>
