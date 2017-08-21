<template>
  <div>
    <form @keyup='updateState'>
      <div class='field-wrapper'>
        <label>
          <input type='text' v-model='mainTitle'/>
        </label>
      </div>
      <div class='field-wrapper'>
        <label>
          <input type='text' v-model='introText'/>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
  export default{
    props: [],
    data() {
      return {
        mainTitle: this.$store.state.mainTitle,
        introText: this.$store.state.introText,
      }
    },
    methods: {
      updateState(){
        this.$store.commit('updateMainTitle', this.mainTitle)
        this.$store.commit('updateIntroText', this.introText)
      }
    }
  }
</script>

<style scoped>
  form {
    background: rgba(0, 0, 0, 0.2);
  }
</style>
