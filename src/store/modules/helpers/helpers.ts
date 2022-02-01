import { ActionNameToDataType } from "@/dataType";

const users = {
  state: {
    loadedStatus: {
      users: null,
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
    loadData(context, actionName: string) {
      const payload = {
        name: ActionNameToDataType[actionName],
        status: false,
      };
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
    },
  },
};

export default users;
