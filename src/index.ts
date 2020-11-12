import Vue from 'vue';
import MPButton from './components/MPButton/MPButton.vue';
import MPGraph from './components/MPGraph/MPGraph.vue';

const Components:any = {
  MPButton,
  MPGraph,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
