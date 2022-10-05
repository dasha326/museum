import { createStore } from 'vuex'
import persons from '../mocks/persons'

export default createStore({
  state: {
    persons,
    assetsPath: '../assets/'
  },
  getters: {
    getPersons(state) {
      return state.persons
    },
    getAssetsPath(state) {
      return state.assetsPath
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
