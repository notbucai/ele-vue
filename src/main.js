// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';

import 'mint-ui/lib/style.css'
import { Search, Cell, Header, Button,TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);

Vue.config.productionTip = false


Vue.use(VueAwesomeSwiper);
import router from "./router";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App }, vue1 写法
  // template: '<App/>',
  render: h => h(App),//vue2写法
  router,
})
