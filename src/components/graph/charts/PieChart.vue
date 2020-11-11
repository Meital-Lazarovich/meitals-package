<template>
    <canvas ref="pie" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Chart from 'chart.js';

@Component
export default class PieChart extends Vue {
    @Prop({ default: [] }) readonly labels!: Array<string>;
    @Prop({ default: [] }) readonly data!: Array<number>;
    @Prop({
        default: () => {
            return ['#FF9999', '#FFCC99', '#FFFF99', '#CCFF99', '#99FF99', '#99FFFF', '#99CCFF', '#CC99FF', '#FF99FF', '#FF99CC']
        }
    }) 
    readonly colors!: Array<string>;
    @Prop({
        default: () => {
            return Chart.defaults.pie;
        },
    })
    readonly options: object | undefined;

    mounted() {
        this.createChart({
            datasets: [
                {
                    data: this.data,
                    backgroundColor: this.colors,
                },
            ],
            labels: this.labels,
        });
    }

    createChart(chartData: object) {
        const canvas = this.$refs.pie as HTMLCanvasElement;
        const options = {
            type: 'pie',
            data: chartData,
            options: this.options,
        };
        new Chart(canvas, options);
    }
}
</script>