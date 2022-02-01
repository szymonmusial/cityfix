import { createStore } from "vuex";
import helpers from "./modules/helpers/helpers";
import users from "./modules/users/users";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    helpers,
    users,
  },
});
