// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入ui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Button } from 'mint-ui'

//引入路由器
import router from './router'
//注册全局插件
Vue.use(MintUI);
//注册全局组件
Vue.component(Button.name, Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
