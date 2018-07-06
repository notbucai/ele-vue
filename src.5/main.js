// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store/'

//导入ui库
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import { Button, Field, Checklist } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Checklist.name, Checklist);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App }, vue1 写法
  // template: '<App/>',
  render: h => h(App),//vue2写法
  store,
})
