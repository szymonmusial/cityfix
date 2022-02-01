<template>
  <v-app>
    <v-main>
      <div>test</div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { DataType } from "@/store/modules/helpers/helpersDictionary";
export default {
  name: "App",
  setup() {
    const store = useStore();
    store.dispatch("loadData", DataType.users);
  },
};
</script>
