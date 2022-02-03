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
    editStatusFlawReport(state, { status, id }) {
      const index = state.flawReports.findIndex((item) => item.id === id);
      state.flawReports[index].status = status;
    },
  },
  actions: {
    setFlawReports(context) {
      return axiosClient.get("flawReports").then((response) => {
        context.commit("setFlawReports", response.data);
      });
    },
    editStatusFlawReport(context, { status, id }) {
      return axiosClient
        .patch("flawReports/" + id, {
          status: status,
        })
        .then(() => {
          context.commit("editStatusFlawReport", { status, id });
        });
    },
  },
};

export default flawReports;
