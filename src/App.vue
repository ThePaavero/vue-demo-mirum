<template>
  <div id='app'>
    <header>
      <img src='./assets/mirum.jpg' class='mirum'>
      <span class='heart'>❤</span>
      <img src='./assets/logo.png' class='vue'>
    </header>
    <Home/>
  </div>
</template>

<script>
  import Home from './components/Home'

  export default {
    components: {
      Home
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

  .debug-wrapper {
    margin-top: 10vh;
  }

  header {
    margin-bottom: 10vh;
  }

  header img.mirum {
    width: 20vw;
  }

  header span {
    display: inline-block;
    font-size: 5vw;
    padding: 0 2vw;
    color: #ff214b;
  }

  header img.vue {
    width: 6vw;
  }

  .action-button {
    color: inherit;
    display: inline-block;
    text-decoration: none;
    padding: 1px 4px;
    background: rgba(41, 155, 113, 0.5);
    border-radius: 3px;
  }

</style>
