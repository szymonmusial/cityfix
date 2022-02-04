import axiosClient from "@/agent/axiosClient";
import { DamagesStore } from "./damagesType";

const damages: DamagesStore = {
  state: {
    damages: [],
  },
  getters: {
    getDamages: (state) => state.damages,
  },
  mutations: {
    setDamages(state, damages) {
      state.damages = damages;
    },
  },
  actions: {
    setDamages(context) {
      return axiosClient.get("damageType").then((response) => {
        context.commit("setDamages", response.data);
      });
    },
  },
};

export default damages;
