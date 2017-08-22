<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>{{ mainTitle }}</h4>
    <h5>{{ mainTitleFormatted }}</h5>
    <p>
      {{ introText }}
    </p>
    <div class='debug-wrapper'>
      <transition name='fade' mode='out-in'>
        <DebugForm v-if='this.$store.state.showDebugForm'/>
        <DebugFormToggler v-else/>
      </transition>
    </div>
  </div>
</template>

<script>
  import DebugForm from './DebugForm'
  import DebugFormToggler from './DebugFormToggler'

  export default{
    props: ['title', 'mainTitle', 'mainTitleFormatted', 'introText'],
    components: {
      DebugForm,
      DebugFormToggler
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
</style>
