<template>
  <transition name="slide-fade">
    <div class="toast" v-if="toast.active">
      <v-alert :type="toast.type" class="toast__alert"> {{ toast.text }} </v-alert>
    </div>
  </transition>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { Toast } from "@/store/modules/toast/toastType";
import { computed } from "@vue/runtime-core";
export default {
  name: "TheToast",
  setup() {
    const store = useStore();

    const toast = computed((): Toast => store.getters.getToast);

    return { toast };
  },
};
</script>

<style scoped>
.toast {
  position: absolute;
  z-index: 1000000000;
  right: 0;
  margin: 8px;
}

.toast__alert {
  padding: 18px 36px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
