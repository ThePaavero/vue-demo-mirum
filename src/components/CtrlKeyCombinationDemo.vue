<template>
  <div>
    <h3>{{ title }}</h3>
    <input
      type='text'
      placeholder='Focus here, write something and press CTRL + Down arrow'
      v-model='currentString'
      @keydown.ctrl.down.prevent='doPseudoSubmit'
    />
  </div>
</template>

<script>
  export default{
    props: ['title'],
    components: {},
    data() {
      return {
        currentString: null
      }
    },
    methods: {
      doPseudoSubmit() {
        if (this.currentString === '') {
          return
        }
        window.alert(this.currentString)
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
