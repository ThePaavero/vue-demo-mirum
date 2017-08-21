<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Home
      :mainTitle='this.$store.state.mainTitle'
      :introText='this.$store.state.introText'
    />
    <transition name="fade" mode="out-in">
      <DebugForm v-if='this.$store.state.showDebugForm'/>
      <DebugFormToggler v-else/>
    </transition>
  </div>
</template>

<script>
  import Home from './components/Home'
  import DebugForm from './components/DebugForm'
  import DebugFormToggler from './components/DebugFormToggler'

  export default {
    components: {
      Home,
      DebugForm,
      DebugFormToggler
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 10vh 10vw;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
