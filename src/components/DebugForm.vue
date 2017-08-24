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
      <SourceLink demoKey='DebugForm' class='source-link'/>
    </form>
  </div>
</template>

<script>
  import SourceLink from './SourceLink'

  export default {
    data() {
      return {
        mainTitle: this.$store.state.mainTitle,
        introText: this.$store.state.introText,
      }
    },
    methods: {
      updateState() {
        this.$store.commit('updateMainTitle', this.mainTitle)
        this.$store.commit('updateIntroText', this.introText)
      }
    },
    components: {
      SourceLink
    }
  }
</script>

<style lang='scss' type='text/scss' scoped>
  form {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: relative;

    .field-wrapper {
      padding: 10px;
      background: rgba(0, 0, 0, 0.1);
      margin: 0 1px;
      flex: 1;
      padding-bottom: 30px;

      label {
        font-size: 13px;
      }
    }
  }

  input[type=text] {
    padding: 2px 3px;
    display: block;
    width: 98%;
  }

  .source-link {
    position: absolute;
    bottom: 0;
  }
</style>
