import { ActionNameToDataType } from "@/store/modules/helpers/helpersDictionary";
import { DataStatus, HelperStore } from "./helpersType";

const helpers: HelperStore = {
  state: {
    loadedStatus: {
      users: null,
      flawReports: null,
      damages: null,
    },
  },
  getters: {
    isDataLoaded: (state) => (name) => state.loadedStatus[name],
  },
  mutations: {
    setLoadedStatus(state, payload) {
      state.loadedStatus[payload.name] = payload.status;
    },
  },
  actions: {
    loadData(context, actionName) {
      const payload: DataStatus = {
        name: ActionNameToDataType[actionName],
        status: false,
      };

      const loadedStatus: boolean = context.getters.isDataLoaded(payload.name);
      if (!loadedStatus) {
        context
          .dispatch(actionName)
          .then(() => {
            payload.status = true;
            context.commit("setLoadedStatus", payload);
          })
          .catch(() => {
            payload.status = false;
            context.commit("setLoadedStatus", payload);
          });
      }
    },
  },
};

export default helpers;
