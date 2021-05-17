import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dataV from '@jiaminghi/data-view'
import Charts from '@jiaminghi/charts'
import { changeDefaultConfig } from '@jiaminghi/charts'
import chartsConfig from './assets/js/defaultConfig'
Vue.use(dataV)
const echarts = require('echarts');
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$charts = Charts


for (let [key, value] of Object.entries(chartsConfig)){
  changeDefaultConfig(key, value)
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
