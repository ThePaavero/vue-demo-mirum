import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mainTitle: 'Example Vue Application',
    introText: 'Hello, world!',
    showDebugForm: false
  },
  getters: {
    getFormattedMainTitle(state) {
      return `"${state.mainTitle}"`.toUpperCase()
    }
  },
  mutations: {
    updateMainTitle(state, newMainTitle) {
      state.mainTitle = newMainTitle
    },
    updateIntroText(state, newIntroText) {
      state.introText = newIntroText
    },
    openDebugForm(state, bool) {
      state.showDebugForm = bool
    }
  }
})

export default store
