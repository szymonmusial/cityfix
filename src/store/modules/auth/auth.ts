import axiosClient from "@/agent/axiosClient";

const auth = {
  state: {
    auth: {
      role: "",
    },
  },
  getters: {
    getAuth: (state) => state.auth,
  },
  mutations: {
    setRole(state, role) {
      state.auth.role = role;
    },
  },
  actions: {
    setAuth: (context, auth) => {
      return axiosClient.post("auth", auth).then((response) => {
        context.commit("setRole", response.data.accountType);
      });
    },
  },
};

export default auth;
