<template>
  <transition name="fade">
    <div class="loader" v-if="loader.active">
      <v-progress-circular :size="100" :width="8" color="amber" indeterminate></v-progress-circular>
    </div>
  </transition>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "TheLoader",
  setup() {
    const store = useStore();
    const loader = computed(() => store.getters.getLoader);

    return { loader };
  },
};
</script>

<style scoped>
.loader {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 100000000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7ecff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
