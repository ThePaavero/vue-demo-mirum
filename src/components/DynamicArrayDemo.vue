<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for='item in arrayToPrint'>
        {{ item }}
        <a href='#' title='Delete item' @click.prevent='deleteItem(item)'>×</a>
      </li>
    </ul>
    <a href='#' title='Click to add item to array' @click.prevent='addItem'>+</a>
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
  li {
    padding: 5px 0;
  }

  a {
    color: inherit;
    display: inline-block;
    text-decoration: none;
    padding: 1px 4px;
    background: rgba(41, 155, 113, 0.5);
  }
</style>
