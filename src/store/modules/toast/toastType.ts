export type Toast = {
  type: null | ToastType;
  life: number;
  text: string;
  active: boolean;
};

export type ToastStore = {
  state: {
    toast: Toast;
  };
  getters: {
    getToast: (state: Toast) => any;
  };
  mutations: {
    setToast(state: Toast, toast: Toast): void;
    hideToast(state: any): void;
  };
};

export enum ToastType {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}
