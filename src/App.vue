<template>
  <div id='app'>
    <header>
      <img src='./assets/mirum.jpg' class='mirum'>
      <span class='heart'>❤</span>
      <img src='./assets/logo.png' class='vue'>
    </header>
    <DemoArea/>
  </div>
</template>

<script>
  import DemoArea from './components/DemoArea'

  export default {
    components: {
      DemoArea
    }
  }
</script>

<style>
  #app {
    font-family: Arial, sans-serif;
    color: #131b26;
    padding: 4vh 10vw;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  header {
    margin-bottom: 4vh;
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
    width: 9vw;
    transform: translateY(1.5vw);
  }

  .action-button {
    color: inherit;
    display: inline-block;
    text-decoration: none;
    padding: 1px 4px;
    background: rgba(41, 155, 113, 0.5);
    border-radius: 3px;
  }

  ul {
    margin-left: 20px;
    list-style-type: square;
    padding: 0;
  }

</style>
