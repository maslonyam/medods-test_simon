import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.prototype.$test = [];

new Vue({
  render(h) { return h(App); },
}).$mount('#app');
