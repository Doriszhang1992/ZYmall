import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
