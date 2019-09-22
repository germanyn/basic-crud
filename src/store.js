import Vue from 'vue';
import Vuex from 'vuex';
import axios from './plugins/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token')
      ? localStorage.getItem('token')
      : undefined,
  },
  mutations: {
    setToken(state, token) {
      token
        ? localStorage.setItem('token', token) 
        : localStorage.removeItem('token')
      state.token = token
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const { data } = await axios.post('/api/login', credentials)
      commit('setToken', data)
    },
    async logout({ commit }, credentials) {
      commit('setToken', undefined)
      location.reload(1)
    },
    async register({ commit }, registry) {
      const { data } = await axios.post('/api/register', registry)
      commit('setToken', data)
    },
    async getProducts({ commit }, product) {
      const { data } = await axios.get(`/api/products`, product)
      return data
    },
    async getProduct({ commit }, id) {
      const { data } = await axios.get(`/api/products/${id}`)
      return data
    },
    async createProduct({ commit }, product) {
      const { data } = await axios.post(`/api/products`, product)
      return data
    },
    async updateProduct({ commit }, {id, product}) {
      const { data } = await axios.put(`/api/products/${id}`, product)
      return data
    },
    async deleteProduct({ commit }, id) {
      const { data } = await axios.delete(`/api/products/${id}`)
      return data
    },
  },
});
