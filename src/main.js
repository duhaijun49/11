// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
// 京东组件
import WotDesign from 'wot-design'
import 'wot-design/lib/theme-default/index.css'
Vue.use(WotDesign)
import XLSX from 'xlsx'
import Chat from 'vue-beautiful-chat'
Vue.use(Chat)

import uploader from 'vue-simple-uploader';
Vue.use(uploader);

// VUEX
import store from './store/store'
// 图表
// 引入echarts
import * as echarts from 'echarts'

// 设置全局变量
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  store,
  template: '<App/>'
})
