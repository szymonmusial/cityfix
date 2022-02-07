import store from "@/store/";
import { ToastType } from "@/store/modules/toast/toastType";
import { ShowToastFunction } from "./theToastType";
//time in seconds
const life = 3;

const showToast = (text: string, type: ToastType) => {
  const toast = {
    type: type,
    life: life * 1000,
    text: text,
    active: true,
  };
  store.commit("setToast", toast);
  hideToast(toast.life);
};

const hideToast = (time) =>
  setTimeout(() => {
    store.commit("hideToast");
  }, time);

export const ShowToast: ShowToastFunction = {
  Success: (text: string) => showToast(text, ToastType.success),
  Info: (text: string) => showToast(text, ToastType.info),
  Warning: (text: string) => showToast(text, ToastType.warning),
  Error: (text: string) => showToast(text, ToastType.error),
};
