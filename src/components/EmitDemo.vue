<template>
  <div>
    <h3>{{ title }}</h3>
    <div class='parentComponent'>
      <h5>{{ ownTitle }}</h5>
      <EmitDemoChild @childHasBeenClicked='onChildHasBeenClicked'/>
    </div>
  </div>
</template>

<script>
  import EmitDemoChild from './EmitDemoChild.vue'

  const defaultOwnTitle = 'I\'m the parent component'

  export default{
    props: ['title'],
    components: {
      EmitDemoChild
    },
    data() {
      return {
        ownTitle: defaultOwnTitle
      }
    },
    methods: {
      toggleOwnTitle() {
        this.ownTitle = this.ownTitle === defaultOwnTitle ? 'Child component was clicked!' : defaultOwnTitle
      },
      onChildHasBeenClicked () {
        this.toggleOwnTitle()
        setTimeout(() => {
          this.toggleOwnTitle()
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  .parentComponent {
    background: rgba(0, 0, 0, 0.1);
    padding: 5px 20px;
    padding-bottom: 20px;
  }
</style>
