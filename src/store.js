import Vue from 'vue';
import Vuex from 'vuex';
import axios from './plugins/axios'

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
    async login({ commit }, credentials) {
      const { data } = await axios.post('/api/login', credentials)
      commit('setToken', data.token)
    },
    async register({ commit }, registry) {
      const { data } = await axios.post('/api/register', registry)
      commit('setToken', data.token)
    },
    async saveProduct({ commit }, product) {

    },
    async updateProduct({ commit }, {id, product}) {

    },
    async deleteProduct({ commit }, id) {
      
    },
  },
});
