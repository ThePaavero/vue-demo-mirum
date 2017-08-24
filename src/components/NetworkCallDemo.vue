<template>
  <div class='demo'>
    <h3>{{ title }}</h3>
    <div class='columns'>
      <div class='column'>
        <h4>Action</h4>
        <button @click.prevent='doNetworkCall'>Click to fetch random Reddit feed</button>
      </div><!-- column -->
      <div class='column'>
        <h4>Output ({{ 'reddit.com/r/' + this.$store.state.networkDemoSubReddit || 'Nothing yet' }})</h4>
        <div class='output-div' v-html='this.$store.state.networkDemoOutput || "Click the button!"'></div>
      </div><!-- column -->
    </div><!-- columns -->
  </div>
</template>

<script>
  import axios from 'axios'
  import prettyjson from 'prettyjson'

  let subRedditIndex = 0
  const subReddits = [
    'vive',
    'wheredidthesodago',
    'technology',
    'roomporn'
  ]

  const getSubReddit = () => {
    subRedditIndex = subRedditIndex < (subReddits.length - 1) ? subRedditIndex + 1 : 0
    return subReddits[subRedditIndex]
  }

  const formatJson = (data) => {
    return '<pre>' + prettyjson.render(data) + '</pre>'
  }

  export default{
    props: ['title'],
    methods: {
      doNetworkCall() {
        const subReddit = getSubReddit()
        axios.get('https://www.reddit.com/r/' + subReddit + '.json?limit=5').then(response => {
          this.$store.commit('updateNetworkDemoOutput', formatJson(response.data))
          this.$store.commit('updateNetworkDemoSubReddit', subReddit)
        })
      }
    }
  }
</script>

<style lang='scss' type='text/scss' scoped>
  .columns {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .column {
    flex-basis: 50%;
    overflow: auto;
    height: 30vh;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-right: solid 2px #fff;

    &:last-child {
      border: none;
    }
  }

  .output-div {
    background: #000;
    color: greenyellow;
    padding: 10px;
    font-size: 11px;
    overflow: auto;
  }
</style>
