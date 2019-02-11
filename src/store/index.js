import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

const apiKey = "5c1272dbe908ae6c73f6226f"
axios.defaults.headers.common = {"x-apikey": apiKey}
axios.defaults.baseURL = "https://calicali-5c80.restdb.io/rest/"

import appointments from "./modules/appointments"
import notifications from "./modules/notifications"
import patients from "./modules/patients"
import services from "./modules/services"
import settings from "./modules/settings"

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    appointments,
    notifications,
    patients,
    services,
    settings,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
