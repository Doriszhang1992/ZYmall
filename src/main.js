import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
//安装toast插件
Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
