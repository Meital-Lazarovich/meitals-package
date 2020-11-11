import { shallowMount } from '@vue/test-utils';
import MPButton from '@/components/button/MPButton.vue';

describe('MPButton.vue', () => {
    it('sets props.type as a class when passed', () => {
        const type = 'round';
        const wrapper = shallowMount(MPButton, {
            propsData: { type },      
            // passing the prop type="round" to the MPButton component
        });
        expect(wrapper.classes()).toContain(type); 
        // testing if this prop is a part of the component's classes
    });
});

describe('MPButton.vue', () => {
    it('does not sets props.type as a class when wrong type is passed', () => {
        const type = 'triangle';
        const wrapper = shallowMount(MPButton, {
            propsData: { type },      
            // passing the prop type="triangle" to the MPButton component
        });
        expect(wrapper.classes()).not.toContain(type);
        // only types "round" and "rounded" should be included inside the component's classes,
        // so when passing "triangle" the classes should not contain it.
    });
});

describe('MPButton.vue', () => {
    it('renders the loader and not the content when loading=true prop is passed', () => {
        const wrapper = shallowMount(MPButton, {
            propsData: { loading: true },      
            // activating the loading state of the component by passing loading="true"
        });
        const loadingImg = wrapper.find('.mp-loading-img')
        const btnContent = wrapper.find('.mp-btn-content')
        expect(loadingImg.exists()).toBe(true) 
        // the loading image should be rendered
        expect(btnContent.exists()).toBe(false) 
        // the content of the button should not be rendered
    });
});