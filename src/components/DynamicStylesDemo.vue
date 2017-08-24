<template>
  <div>
    <h3>{{ title }}</h3>
    <input
      type='range'
      min='50'
      max='1400'
      :value='this.$store.state.dynamicImageWidth'
      @input='updateFromInput'
    />
    <img src='./../assets/mirum.jpg' class='mirum' :style='getInlineStyles()'>
  </div>
</template>

<script>
  export default{
    props: ['title'],
    mounted() {
      const fromDisk = window.localStorage.getItem('dynamicImageWidth')
      if (fromDisk) {
        this.updateState(fromDisk)
      }
    },
    methods: {
      updateFromInput(e) {
        const val = e.currentTarget.value
        this.saveStateToDisk(val)
        this.updateState(val)
      },
      saveStateToDisk(val) {
        window.localStorage.setItem('dynamicImageWidth', val)
      },
      updateState(val) {
        this.$store.commit('updateDynamicImageWidth', val)
        this.$el.querySelector('input').value = val
      },
      getInlineStyles() {
        return 'width: ' + this.$store.state.dynamicImageWidth + 'px'
      }
    }
  }
</script>

<style lang='scss' type='text/scss' scoped>
  img {
    display: block;
    margin-top: 20px;
  }
</style>
