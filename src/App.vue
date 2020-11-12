<template>
  <div id="app">
    <MPButton :loading="isLoading" >
      test
    </MPButton>
    <MPButton type="round" :loading="isLoading" >
      test
    </MPButton>
    <MPButton type="rounded" outlined="true" :loading="isLoading" >
      test
    </MPButton>
    <MPGraph type="bar" :loading="isLoading" :data="graphData" :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
     colors="lightblue" title="Expenses per month" />
    <MPGraph :loading="isLoading" :data="graphData" :labels="['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6', 'Client 7']" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MPButton from './components/MPButton/MPButton.vue';
import MPGraph from './components/MPGraph/MPGraph.vue';

@Component({
  components: {
    MPButton,
    MPGraph,
  },
})
export default class App extends Vue {
  private isLoading: boolean = true;
  private graphData: Array<number> = [25, 75, 30, 14, 27, 48, 55];
  
  mounted() {
    setTimeout(() => {this.isLoading = false}, 2000)
    setTimeout(this.updateData, 5000)
  }

  updateData() {
    this.graphData = [15, 79, 34, 48, 7, 55, 17]
  }
}
</script>

<style lang="scss">
</style>
