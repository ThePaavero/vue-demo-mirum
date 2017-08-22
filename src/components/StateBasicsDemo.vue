<template>
  <div>
    <h3>{{ title }}</h3>
    <h4>
      <small>mainTitle:</small>
      {{ mainTitle }}
    </h4>
    <h5>
      <small>mainTitleFormatted:</small>
      {{ mainTitleFormatted }}
    </h5>
    <p>
      <small>introText:</small>
      {{ introText }}
    </p>
    <div class='debug-wrapper'>
      <transition name='fade' mode='out-in'>
        <DebugForm/>
      </transition>
    </div>
  </div>
</template>

<script>
  import DebugForm from './DebugForm'

  export default{
    props: ['title', 'mainTitle', 'mainTitleFormatted', 'introText'],
    components: {
      DebugForm
    }
  }
</script>

<style scoped>
  .debug-wrapper {
    margin-top: 10px;
  }

  small {
    opacity: 0.6;
  }
</style>
