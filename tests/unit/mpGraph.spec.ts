import { shallowMount } from '@vue/test-utils';
import MPGraph from '@/components/graph/MPGraph.vue';

describe('MPGraph.vue', () => {
    it('renders the graph content and not the loader when loading=true prop is passed', () => {
        const wrapper = shallowMount(MPGraph, {
            propsData: { loading: false },      
            // deactivating the loading state of the component by passing loading="false"
        });
        const loadingImg = wrapper.find('.mp-loading-img')
        const graphContent = wrapper.find('.mp-graph-content')
        expect(loadingImg.exists()).toBe(false) 
        // the loading image should not be rendered
        expect(graphContent.exists()).toBe(true) 
        // the content of graph should be rendered
    });
});

describe('MPGraph.vue', () => {
    it('renders the bar-chart graph when type=bar prop is passed ', () => {
        const wrapper = shallowMount(MPGraph, {
            propsData: { type: 'bar' },      
            // passing the prop type="bar" to the MPGraph component
        });
        const barChart = wrapper.find('.mp-bar-chart')
        const pieChart = wrapper.find('.mp-pie-content')
        expect(barChart.exists()).toBe(true) 
        // the bar chart should be rendered
        expect(pieChart.exists()).toBe(false) 
        // the pie chart should not be rendered
    });
});

