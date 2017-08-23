<template>
  <div>
    <section>
      <StateBasicsDemo
        title='State basics'
        :mainTitle='this.$store.state.mainTitle'
        :mainTitleFormatted='this.$store.getters.getFormattedMainTitle'
        :introText='this.$store.state.introText'
      />
      <SourceLink demoKey='StateBasicsDemo'/>
    </section>
    <section>
      <ArrayDemo
        title='Demo array from state'
        :arrayToPrint='this.$store.state.demoArray'
      />
      <SourceLink demoKey='ArrayDemo'/>
    </section>
    <section>
      <DynamicArrayDemo
        title='Demo array from state with functionality'
        :arrayToPrint='this.$store.state.demoDynamicArray'
      />
      <SourceLink demoKey='DynamicArrayDemo'/>
    </section>
    <section>
      <CtrlKeyCombinationDemo title='Key combinations'/>
      <SourceLink demoKey='CtrlKeyCombinationDemo'/>
    </section>
    <section>
      <EmitDemo title='Emitting from child to parent'/>
      <SourceLink demoKey='EmitDemo'/>
    </section>
    <section>
      <DynamicStylesDemo title='Dynamic styles + persistent state (localStorage) example'/>
      <SourceLink demoKey='DynamicStylesDemo'/>
    </section>
    <section>
      <NetworkCallDemo title='Network call demo'/>
      <SourceLink demoKey='NetworkCallDemo'/>
    </section>
  </div>
</template>

<script>
  import NetworkCallDemo from './NetworkCallDemo.vue'
  import SourceLink from './SourceLink.vue'
  import DynamicStylesDemo from './DynamicStylesDemo.vue'
  import EmitDemo from './EmitDemo.vue'
  import StateBasicsDemo from './StateBasicsDemo.vue'
  import CtrlKeyCombinationDemo from './CtrlKeyCombinationDemo.vue'
  import DynamicArrayDemo from './DynamicArrayDemo.vue'
  import ArrayDemo from './ArrayDemo.vue'

  export default {
    components: {
      NetworkCallDemo,
      SourceLink,
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
