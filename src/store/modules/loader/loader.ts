const loader = {
  state: {
    loader: {
      active: false,
    },
  },
  getters: {
    getLoader: (state) => state.loader,
  },
  mutations: {
    setLoaderStatus(state, status) {
      state.loader.active = status;
    },
  },
};

export default loader;
