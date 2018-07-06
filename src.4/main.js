// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from "vue-resource";
import App from './App'
import store from './store/'
Vue.use(VueResource);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App }, vue1 写法
  // template: '<App/>',
  render: h => h(App),//vue2写法
  store
})
