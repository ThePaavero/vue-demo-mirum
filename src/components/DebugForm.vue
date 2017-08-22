<template>
  <div>
    <form @keyup='updateState'>
      <div class='field-wrapper'>
        <label>
          Main Title
          <input type='text' v-model='mainTitle'/>
        </label>
      </div>
      <div class='field-wrapper'>
        <label>
          Intro text
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
    display: flex;
    position: relative;
  }

  form .field-wrapper label {
    font-size: 13px;
  }

  form .field-wrapper {
    padding: 10px;
    background: rgba(0, 0, 0, 0.1);
    margin: 0 1px;
  }

  input[type=text] {
    padding: 2px 3px;
  }
</style>
