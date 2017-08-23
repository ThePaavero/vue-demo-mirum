<template>
  <div>
    <a :href='getHref(demoKey)' target='_blank'>Source</a>
  </div>
</template>

<script>
  export default{
    props: ['demoKey'],
    methods: {
      getHref(key) {
        return 'https://github.com/ThePaavero/vue-demo-mirum/blob/master/src/components/' + key + '.vue'
      }
    }
  }
</script>

<style scoped>
  a {
    opacity: 0.6;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    padding: 5px 10px;
    margin-top: 20px;
  }

  a:hover {
    opacity: 1;
  }
</style>
