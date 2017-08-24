<template>
  <div>
    <h3>{{ title }}</h3>
    <button @click='saveToDisk'>Click to save entire state for later use</button>
    <button v-if='this.$store.state.completeState' @click='applyFromDisk'>Click to load previously saved state</button>
    <button v-if='this.$store.state.completeState' @click='emptyDisk'>Click to remove saved state from disk</button>

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
        const state = this.$store.state
        const stateAsString = JSON.stringify(state)
        window.localStorage.setItem(myLocalStorageKey, stateAsString)
        this.$store.commit('updateCompleteState', JSON.parse(stateAsString))
      },
      loadFromDisk() {
        const onDisk = window.localStorage.getItem(myLocalStorageKey)
        if (!onDisk) {
          console.log('No state on disk...')
          return
        }
        this.$store.commit('updateCompleteState', JSON.parse(onDisk))
      },
      applyFromDisk() {
        this.$store.commit('applyCompleteStateFromDisk')
      },
      emptyDisk() {
        window.localStorage.setItem(myLocalStorageKey, null)
        this.$store.commit('updateCompleteState', null)
      }
    }
  }
</script>

<style scoped>
</style>
