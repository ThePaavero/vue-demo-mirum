import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  mainTitle: 'Example Vue Application',
  introText: 'Hello, world!',
  demoArray: ['A', 'B', 'C'],
  demoDynamicArray: [1, 2, 3, 4],
  demoDynamicArrayItemsAdded: 0,
  dynamicImageWidth: 150,
  networkDemoOutput: null,
  networkDemoSubReddit: null
}

const mutations = {
  updateMainTitle(state, val) {
    state.mainTitle = val
  },
  updateIntroText(state, val) {
    state.introText = val
  },
  deleteDynamicDemoArrayItem(state, index) {
    state.demoDynamicArray.splice(state.demoDynamicArray.indexOf(index), 1)
  },
  addOneToDynamicDemoArray(state) {
    state.demoDynamicArrayItemsAdded++
    state.demoDynamicArray.push(
        'Added item #' + state.demoDynamicArrayItemsAdded)
  },
  updateDynamicImageWidth(state, val) {
    state.dynamicImageWidth = val
  },
  updateNetworkDemoOutput(state, val) {
    state.networkDemoOutput = val
  },
  updateNetworkDemoSubReddit(state, val) {
    state.networkDemoSubReddit = val
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
