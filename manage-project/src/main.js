// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import echarts from 'echarts'
import config from './config'
import 'element-ui/lib/theme-chalk/index.css'
 /*引入公共样式*/
import './assets/css/sb-admin-2.css'
import './vendor/bootstrap/css/bootstrap.css'
// import './vendor/datatables-plugins/dataTables.bootstrap.css'
import './vendor/font-awesome/css/font-awesome.min.css'
// 引入js

import helpers from './scripts'

Vue.config.productionTip = false
Vue.use(ElementUI, VueAxios, axios, echarts)
Vue.use(helpers)
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  config,
  router,
  components: { App },
  template: '<App/>'
})
