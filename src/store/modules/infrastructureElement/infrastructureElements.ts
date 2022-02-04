import axiosClient from "@/agent/axiosClient";
import { InfrastructureElementsStore } from "./infrastructureElementsType";

const infrastructureElements: InfrastructureElementsStore = {
  state: {
    infrastructureElements: [],
  },
  getters: {
    getInfrastructureElements: (state) => state.infrastructureElements,
  },
  mutations: {
    setInfrastructureElements(state, infrastructureElements) {
      state.infrastructureElements = infrastructureElements;
    },
  },
  actions: {
    setInfrastructureElements(context) {
      return axiosClient.get("infrastructureElements").then((response) => {
        context.commit("setInfrastructureElements", response.data);
      });
    },
  },
};

export default infrastructureElements;
