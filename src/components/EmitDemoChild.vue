<template>
  <div class='childComponent'>
    <h5>{{ title }}
      <small>(clicked {{ clickedCounter }} times)</small>
    </h5>
    <button @click='onButtonClicked'>Click to emit event to parent</button>
    <SourceLink demoKey='EmitDemoChild'/>
  </div>
</template>

<script>
  import SourceLink from './SourceLink'
  export default{
    data() {
      return {
        clickedCounter: 0,
        title: 'I\'m the child'
      }
    },
    methods: {
      onButtonClicked() {
        this.clickedCounter++
        this.$emit('childHasBeenClicked')
      }
    },
    components: {
      SourceLink
    }
  }
</script>

<style scoped>
  .childComponent {
    background: rgba(0, 0, 0, 0.1);
    padding: 5px 20px;
    padding-bottom: 20px;
  }

  button {
    cursor: pointer;
    padding: 5px 10px;
  }

  small {
    opacity: 0.6;
  }
</style>
