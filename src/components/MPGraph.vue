<template>
    <section class="mp-graph">
        <img
            class="mp-loading-img"
            v-if="loading"
            src="https://i.gifer.com/ZZ5H.gif"
            alt="loading"
        />
        <div class="mp-graph-content" v-else>
            <PieChart
                class="mp-pie-chart"
                v-if="isChartShown && type === 'pie'"
                :data="data"
                :labels="labels"
                :colors="colors"
            />
            <BarChart
                class="mp-bar-chart"
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
import PieChart from "./PieChart.vue";
import BarChart from "./BarChart.vue";

@Component({
    components: {
        BarChart,
        PieChart,
    },
})
export default class MPGraph extends Vue {
    @Prop({ default: 'pie' }) type!: string;
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
.mp-graph {
    text-align: center;
    .mp-loading-img {
        height: 200px;
        padding-top: 100px;
    }
}
</style>
