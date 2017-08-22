import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mainTitle: 'Example Vue Application',
    introText: 'Hello, world!',
    showDebugForm: false,
    demoArray: ['A', 'B', 'C'],
    demoDynamicArray: [1, 2, 3, 4],
    demoDynamicArrayItemsAdded: 0
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
    },
    deleteDynamicDemoArrayItem(state, index) {
      state.demoDynamicArray.splice(state.demoDynamicArray.indexOf(index), 1)
    },
    addOneToDynamicDemoArray(state) {
      state.demoDynamicArrayItemsAdded++
      state.demoDynamicArray.push(
          'Added item #' + state.demoDynamicArrayItemsAdded)
    }
  }
})

export default store
