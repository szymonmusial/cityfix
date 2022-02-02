export type DataStatus = {
  name: string;
  status: boolean;
};

export type LoadedStatus = {
  users: boolean | null;
  flawReports: boolean | null;
};

export type HelperState = {
  loadedStatus: LoadedStatus;
};

export type HelperStore = {
  state: HelperState;
  getters: {
    isDataLoaded: (state: HelperState) => (name: string) => any;
  };
  mutations: {
    setLoadedStatus(state: HelperState, payload: DataStatus): void;
  };
  actions: {
    loadData(context: any, actionName: string): void;
  };
};
