import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mainTitle: 'Example Vue Application',
    introText: 'Hello, world!'
  },
  mutations: {}
})

export default store
