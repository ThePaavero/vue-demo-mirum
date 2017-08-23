<template>
  <div>
    <h3>{{ title }}</h3>
    <input
      type='text'
      placeholder='Focus here, write something and press CTRL + Down arrow'
      v-model='currentString'
      @keydown.ctrl.down.prevent='submitChanges'
    />
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data() {
      return {
        currentString: ''
      }
    },
    methods: {
      submitChanges() {
        if (this.currentString === '') {
          return
        }
        window.alert(`You wrote:\n${this.currentString}`)
        this.currentString = ''
      }
    }
  }
</script>

<style scoped>
  input {
    width: 100%;
    padding: 3px 5px;
  }
</style>
