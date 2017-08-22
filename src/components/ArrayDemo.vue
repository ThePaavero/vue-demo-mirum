<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for='item in arrayToPrint'>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['arrayToPrint', 'title']
  }
</script>

<style scoped>
</style>
