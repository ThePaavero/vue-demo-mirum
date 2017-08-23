<template>
  <div class='demo'>
    <h3>{{ title }}</h3>
    <div class='columns'>
      <div class='column'>
        <h4>Action</h4>
        <button @click.prevent='doNetworkCall'>Click to fetch random Reddit feed</button>
      </div><!-- column -->
      <div class='column'>
        <h4>Output ({{ this.$store.state.networkDemoSubReddit || 'Nothing yet' }})</h4>
        <div>
          {{ this.$store.state.networkDemoOutput || '(Click the button to load some JSON from reddit.com)' }}
        </div>
      </div><!-- column -->
    </div><!-- columns -->
  </div>
</template>

<script>
  import axios from 'axios'

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

  export default{
    props: ['title'],
    methods: {
      doNetworkCall() {
        const subReddit = getSubReddit()
        axios.get('https://www.reddit.com/r/' + subReddit + '.json').then(response => {
          this.$store.commit('updateNetworkDemoOutput', response.data)
          this.$store.commit('updateNetworkDemoSubReddit', subReddit)
        })
      }
    }
  }
</script>

<style scoped>
  .columns {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .column {
    flex-basis: 50%;
    overflow: auto;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-right: solid 2px #fff;
    height: 30vh;
  }

  .column:last-child {
    border: none;
  }
</style>
