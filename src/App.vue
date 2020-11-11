<template>
  <div id="app">
    <MPButton type="rounded" outlined="true" :loading="isLoading" >
      test
    </MPButton>
    <MPGraph type="bar" :loading="isLoading" :data="[25, 75, 30, 14, 27, 64, 39, 48, 15, 68, 57, 71]" :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
     colors="lightblue" title="Expenses per month" />
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
export default class App extends Vue {
  private isLoading: boolean = true;
  
  mounted() {
    setTimeout(() => {this.isLoading = false}, 2000)
  }
}
</script>

<style lang="scss">
</style>
