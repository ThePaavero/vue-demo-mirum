<template>
  <div>
    <h1>{{ mainTitle }}</h1>
    <h2>{{ mainTitleFormatted }}</h2>
    <p>
      {{ introText }}
    </p>
  </div>
</template>

<script>
  export default {
    props: ['mainTitle', 'mainTitleFormatted', 'introText'],
    data () {
      return {}
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
