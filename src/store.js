import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  mainTitle: 'Example Vue Application',
  introText: 'Hello, world!',
  demoArray: ['A', 'B', 'C'],
  demoDynamicArray: [1, 2, 3, 4],
  demoDynamicArrayItemsAdded: 0
}

const mutations = {
  updateMainTitle(state, newMainTitle) {
    state.mainTitle = newMainTitle
  },
  updateIntroText(state, newIntroText) {
    state.introText = newIntroText
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

const getters = {
  getFormattedMainTitle(state) {
    return `"${state.mainTitle}"`.toUpperCase()
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
