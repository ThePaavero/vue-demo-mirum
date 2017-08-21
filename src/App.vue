<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Home
      :mainTitle='this.$store.state.mainTitle'
      :introText='this.$store.state.introText'
    />
    <DebugForm/>
  </div>
</template>

<script>
  import Home from './components/Home'
  import DebugForm from './components/DebugForm'

  export default {
    components: {
      Home,
      DebugForm
    },
    data() {
      return {}
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
