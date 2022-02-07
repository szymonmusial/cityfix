import { createStore } from "vuex";
import loadData from "./modules/loadData/loadData";
import users from "./modules/users/users";
import flawReports from "./modules/flawReports/flawReports";
import damage from "./modules/damage/damage";
import infrastructureElements from "./modules/infrastructureElement/infrastructureElements";
import auth from "./modules/auth/auth";
import toast from "./modules/toast/toast";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loadData,
    users,
    flawReports,
    damage,
    infrastructureElements,
    auth,
    toast,
  },
});
