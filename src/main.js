import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
// import './styles/style.css'

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
