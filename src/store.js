import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: undefined,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
  },
  actions: {
    async login({ mutations }, credentials) {
      
    },
    async register({ mutations }, registry) {

    },
  },
});
