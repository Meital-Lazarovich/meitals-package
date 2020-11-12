<template>
    <canvas ref="bar" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Chart from 'chart.js';

@Component
export default class BarChart extends Vue {
    @Prop({ default: [] }) readonly labels!: Array<string>;
    @Prop({ default: [] }) readonly data!: Array<number>;
    @Prop() readonly title!: string;
    @Prop({ default: 'rgb(86, 202, 97)' }) readonly colors!: string | Array<string>;
    @Prop({
        default: () => {
            const options = Chart.defaults.bar;
            options.scales.yAxes[0].ticks = {beginAtZero : true} // for making the chart start at zero rather than at the smallest value
            options.legend = {display: false} // for hiding the labels-legend above the graph
            options.responsive = false;
            options.aspectRatio = 1;
            return options
        },
    })
    readonly options: object | undefined;

    mounted() {
        this.createChart({
            datasets: [
                {
                    data: this.data,
                    backgroundColor: this.colors,
                    label: this.title,
                },
            ],
            labels: this.labels,
        });
    }

    createChart(chartData: object) {
        const canvas = this.$refs.bar as HTMLCanvasElement;
        const options = {
            type: 'bar',
            data: chartData,
            options: this.options,
        };
        new Chart(canvas, options);
    }
}
</script>