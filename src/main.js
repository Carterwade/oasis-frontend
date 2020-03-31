// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Echarts from 'echarts'

Vue.prototype.$echarts = Echarts

Vue.config.productionTip = false
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/backend_oasis_war/'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
