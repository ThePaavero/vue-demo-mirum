<template>
  <div>
    <section>
      <StateBasicsDemo
        title='State basics'
        :mainTitle='this.$store.state.mainTitle'
        :mainTitleFormatted='this.$store.getters.getFormattedMainTitle'
        :introText='this.$store.state.introText'
      />
    </section>
    <section>
      <ArrayDemo
        title='Demo array from state'
        :arrayToPrint='this.$store.state.demoArray'
      />
    </section>
    <section>
      <DynamicArrayDemo
        title='Demo array from state with functionality'
        :arrayToPrint='this.$store.state.demoDynamicArray'
      />
    </section>
    <section>
      <CtrlKeyCombinationDemo title='Key combinations'/>
    </section>
    <section>
      <EmitDemo title='Emitting from child to parent'/>
    </section>
    <section>
      <DynamicStylesDemo title='Dynamic styles + persistent state (localStorage) example'/>
    </section>
  </div>
</template>

<script>
  import DynamicStylesDemo from './DynamicStylesDemo.vue'
  import EmitDemo from './EmitDemo.vue'
  import StateBasicsDemo from './StateBasicsDemo.vue'
  import CtrlKeyCombinationDemo from './CtrlKeyCombinationDemo.vue'
  import DynamicArrayDemo from './DynamicArrayDemo.vue'
  import ArrayDemo from './ArrayDemo.vue'

  export default {
    components: {
      DynamicStylesDemo,
      EmitDemo,
      StateBasicsDemo,
      CtrlKeyCombinationDemo,
      DynamicArrayDemo,
      ArrayDemo
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

  section {
    border-top: solid 2px rgba(0, 0, 0, 0.25);
    padding: 20px 0;
  }

  section:first-of-type {
    border: none;
  }
</style>
