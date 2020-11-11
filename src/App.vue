<template>
  <div id="app">
    <MPButton type="triangle" >
      test
    </MPButton>
    <MPGraph></MPGraph>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MPButton from './components/MPButton.vue';
import MPGraph from './components/MPGraph.vue';

@Component({
  components: {
    MPButton,
    MPGraph,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
