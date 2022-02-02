import { createStore } from "vuex";
import helpers from "./modules/helpers/helpers";
import users from "./modules/users/users";
import flawReports from "./modules/flawReports/flawReports";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    helpers,
    users,
    flawReports,
  },
});
