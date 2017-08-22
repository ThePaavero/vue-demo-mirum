<template>
  <div>
    <h1>{{ mainTitle }}</h1>
    <h2>{{ mainTitleFormatted }}</h2>
    <p>
      {{ introText }}
    </p>
    <section>
      <ArrayDemo
        title='Demo array from state'
        :arrayToPrint='this.$store.state.demoArray'
      />
    </section>
    <section>
      <DynamicArrayDemo
        title='Demo array from state with functionality'
        :arrayToPrint='this.$store.state.demoDynamicArray'
      />
    </section>
  </div>
</template>

<script>
  import DynamicArrayDemo from './DynamicArrayDemo.vue'

  import ArrayDemo from './ArrayDemo.vue'

  export default {
    props: ['mainTitle', 'mainTitleFormatted', 'introText'],
    data () {
      return {}
    },
    components: {
  DynamicArrayDemo,

      ArrayDemo
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  section {
    border-top: solid 2px rgba(0, 0, 0, 0.25);
  }
</style>
