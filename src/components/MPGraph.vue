<template>
    <section class="graph">
        <img
            class="loading-img"
            v-if="loading"
            src="https://i.gifer.com/ZZ5H.gif"
            alt="loading"
        />
        <div v-else>
            <DoughnutChart
                v-if="isChartShown && type === 'doughnut'"
                :data="data"
                :labels="labels"
                :colors="colors"
            />
            <BarChart
                v-if="isChartShown && type === 'bar'"
                :data="data"
                :labels="labels"
                :title="title"
                :colors="colors"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import DoughnutChart from "./DoughnutChart.vue";
import BarChart from "./BarChart.vue";

@Component({
    components: {
        BarChart,
        DoughnutChart,
    },
})
export default class MPGraph extends Vue {
    @Prop({ default: "doughnut" }) type!: string;
    @Prop({ default: () => [] }) labels!: Array<string>;
    @Prop() title?: string;
    @Prop({ default: () => [] }) data!: Array<number>;
    @Prop() colors?: Array<string>;
    @Prop() options?: object | undefined;
    @Prop({ default: false }) loading?: boolean;

    private isChartShown: boolean = true;

    @Watch("data")
    dataChanged() {
        this.isChartShown = false;
        setTimeout(() => (this.isChartShown = true), 1);
    }
}
</script>

<style scoped lang="scss">
.graph {
  text-align: center;
    .loading-img {
        height: 200px;
        padding-top: 100px;
    }
}
</style>
