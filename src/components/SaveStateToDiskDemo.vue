<template>
  <div>
    <h3>{{ title }}</h3>
    <button @click='saveToDisk'>Click to save entire state for later use</button>
    <button v-if='this.$store.state.completeStateAvailableOnDisk' @click='applyFromDisk'>Click to load previously saved state</button>
    <button v-if='this.$store.state.completeStateAvailableOnDisk' @click='emptyDisk'>Click to remove saved state from disk</button>
  </div>
</template>

<script>
  const myLocalStorageKey = 'completeState'

  export default {
    props: ['title'],
    mounted() {
      this.loadFromDisk()
    },
    methods: {
      saveToDisk() {
        const stateAsString = JSON.stringify(this.$store.state)
        window.localStorage.setItem(myLocalStorageKey, stateAsString)
        this.$store.commit('updateCompleteStateAvailableOnDisk', true)
      },
      loadFromDisk() {
        const onDisk = window.localStorage.getItem(myLocalStorageKey)
        if (!onDisk) {
          return
        }
        this.$store.commit('updateCompleteStateAvailableOnDisk', !!onDisk)
      },
      applyFromDisk() {
        this.$store.commit('applyCompleteStateFromDisk', JSON.parse(window.localStorage.getItem(myLocalStorageKey)))
      },
      emptyDisk() {
        window.localStorage.setItem(myLocalStorageKey, null)
        this.$store.commit('updateCompleteStateAvailableOnDisk', false)
      }
    }
  }
</script>

<style lang='scss' type='text/scss' scoped>
</style>
