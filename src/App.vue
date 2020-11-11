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
    <MPGraph type="bar" :loading="isLoading" :data="[25, 75, 30, 14, 27, 64, 39, 48, 15, 68, 57, 71]" :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']"
     colors="lightblue" title="Expenses per month" />
    <MPGraph :loading="isLoading" :data="[25, 75, 30, 14, 27, 48, 55]" :labels="['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6', 'Client 7']"
     title="Expenses per month" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MPButton from './components/button/MPButton.vue';
import MPGraph from './components/graph/MPGraph.vue';

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
