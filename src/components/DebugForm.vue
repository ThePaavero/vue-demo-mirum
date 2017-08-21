<template>
  <div>
    <form @keyup='updateState'>
      <a href='#' @click.prevent='closeDebugForm' class='closer'>×</a>
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
      },
      closeDebugForm(){
        this.$store.commit('openDebugForm', false)
      }
    }
  }
</script>

<style scoped>
  form {
    text-align: left;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    padding: 5px;
    position: relative;
    margin-top: 5vh;
  }

  .closer {
    color: inherit;
    position: absolute;
    text-decoration: none;
    right: 10px;
    font-size: 20px;
  }

  form .field-wrapper {
    padding: 10px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    margin: 0 1px;
  }
</style>
