<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for='item in arrayToPrint'>
        {{ item }}
        <a href='#' @click.prevent='deleteItem(item)'>×</a>
      </li>
    </ul>
    <a href='#' @click.prevent='addItem'>+</a>
  </div>
</template>

<script>
  export default{
    props: ['title', 'arrayToPrint'],
    data() {
      return {}
    },
    methods: {
      deleteItem(item) {
        this.$store.commit('deleteDynamicDemoArrayItem', item)
      },
      addItem() {
        this.$store.commit('addOneToDynamicDemoArray')
      }
    }
  }
</script>

<style scoped>
</style>
