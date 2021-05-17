import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
const echarts = require('echarts');
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
