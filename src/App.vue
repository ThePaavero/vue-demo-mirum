<template>
  <div id='app'>
    <header>
      <img src='./assets/mirum.jpg' class='mirum'>
      <span class='heart'>❤</span>
      <img src='./assets/logo.png' class='vue'>
    </header>
    <DemoArea/>
    <footer>
      <p>
        <a href='https://github.com/ThePaavero/vue-demo-mirum/tree/master/src' target='_blank'>Complete application source</a>
      </p>
    </footer>
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
    font-family: 'Asap', sans-serif;
    color: #131b26;
    padding: 4vh 10vw;
  }

  h3 {
    font-size: 3vw;
  }

  input[type=text],
  textarea {
    font-family: 'Asap', sans-serif;
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
    padding: 2px 4px;
    background: rgba(40, 155, 113, 0.5);
    border-radius: 5px;
    font-size: 1vw;
  }

  button {
    cursor: pointer;
    padding: 5px 10px;
  }

  ul {
    margin-left: 20px;
    list-style-type: square;
    padding: 0;
  }

  a {
    color: inherit;
  }

  footer {
    border-top: solid 2px rgba(0, 0, 0, 0.25);
    padding: 20px 0;
    margin-top: 30px;
  }
</style>
