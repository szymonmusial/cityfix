<template>
  <v-layout>
    <v-app-bar class="app-bar">
      <v-btn text class="app-bar__nav-item mr-4 ml-5" v-for="link in routes" :key="link.id">
        <router-link :to="link.path" class="app-bar__a">{{ link.name }}</router-link></v-btn
      >
      <v-spacer></v-spacer>
      <v-divider inset vertical></v-divider>

      <v-btn plain class="mr-4 ml-5 button--call-to-action">
        <v-icon left icon="mdi-handshake-outline"></v-icon>
        <span>Dodaj Zgłoszenie</span>
      </v-btn>
    </v-app-bar>
  </v-layout>
</template>

<script>
export default {
  name: "AppBar",
  props: {
    routes: Array,
  },
};
</script>

<style scoped>
.app-bar {
  position: relative;
  background-color: #e7ecff;
  z-index: 10000000 !important;
}

.button--call-to-action {
  background: #ffebdb;
  color: #25424c;
  border: 2px solid #25424c;
  border-radius: 8px;
  padding: 20px 28px !important;
  font-weight: 600;
}

.app-bar__nav-item {
  background: #25424c;
}

.app-bar__a {
  color: #fff !important;
  text-decoration: none;
}
</style>
