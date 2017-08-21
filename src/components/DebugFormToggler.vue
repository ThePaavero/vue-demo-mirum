<template>
  <div>
    <a href='#' @click.prevent='openForm'>Open debug form</a>
  </div>
</template>

<script>
  export default{
    props: [],
    data() {
      return {}
    },
    methods: {
      openForm(){
        this.$store.commit('openDebugForm', true)
      }
    }
  }
</script>

<style scoped>
</style>
