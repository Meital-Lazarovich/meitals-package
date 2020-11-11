<template>
    <section class="graph">
        <!-- <BarChart /> -->
        <DoughnutChart
            :data="[25, 75, 30]"
            :labels="['Red', 'Green', 'Blue']"
            :colors="['red', 'green', 'blue']"
        />
        <BarChart
            :data="[25, 75, 30]"
            :labels="['Red', 'Green', 'Blue']"
            :colors="['red', 'green', 'blue']"
        />
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import BarChart from './BarChart.vue';
import DoughnutChart from './DoughnutChart.vue';
import BarChart from './BarChart.vue';

@Component({
  components: {
    // BarChart,
    DoughnutChart,
    BarChart,
  },
})
export default class MPGraph extends Vue {}
</script>

<style scoped lang="scss">
</style>
