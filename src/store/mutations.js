import _ from 'lodash'

export default {
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
  },
  updateCompleteStateAvailableOnDisk(state, val) {
    state.completeStateAvailableOnDisk = val
  },
  applyCompleteStateFromDisk(state, val) {
    Object.assign(state, _.cloneDeep(val))
  }
}
