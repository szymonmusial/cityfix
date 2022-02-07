import { createStore } from "vuex";
import helpers from "./modules/helpers/helpers";
import users from "./modules/users/users";
import flawReports from "./modules/flawReports/flawReports";
import damage from "./modules/damage/damage";
import infrastructureElements from "./modules/infrastructureElement/infrastructureElements";
import auth from "./modules/auth/auth";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    helpers,
    users,
    flawReports,
    damage,
    infrastructureElements,
    auth,
  },
});
