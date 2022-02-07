import { ToastType } from "./toastType";

const toast = {
  state: {
    toast: {
      type: null,
      life: 0,
      text: "",
      active: false,
    },
  },
  getters: {
    getToast: (state) => state.toast,
  },
  mutations: {
    setToast(state, toast) {
      state.toast = toast;
    },
    hideToast(state) {
      state.toast.active = false;
    },
  },
};

export default toast;
