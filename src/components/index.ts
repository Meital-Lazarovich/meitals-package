// import MPButton from './MPButton.vue';
// import MPGraph from './MPGraph.vue';

// export {
//   MPButton,
//   MPGraph
// };

import Vue from 'vue';
import MPButton from './MPButton.vue';
import MPGraph from './MPGraph.vue';

const Components:any = {
  MPButton,
  MPGraph,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
