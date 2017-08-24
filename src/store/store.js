import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
