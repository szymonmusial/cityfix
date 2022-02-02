import axiosClient from "@/agent/axiosClient";
import { FlawReportsStore } from "./flawReportsType";

const flawReports: FlawReportsStore = {
  state: {
    flawReports: [],
  },
  getters: {
    getFlawReports: (state) => state.flawReports,
  },
  mutations: {
    setFlawReports(state, flawReports) {
      state.flawReports = flawReports;
    },
  },
  actions: {
    setFlawReports(context) {
      return axiosClient.get("flawReports").then((response) => {
        context.commit("setFlawReports", response.data);
      });
    },
  },
};

export default flawReports;
