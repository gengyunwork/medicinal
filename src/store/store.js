import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      alias: "",
      avatar: "",
      sex: "",
      birthday: "",
      mobile: "",
      address: ""
    }
  },
  mutations,
  actions: {}
});
