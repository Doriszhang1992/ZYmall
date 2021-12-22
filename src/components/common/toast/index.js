import Vue from "vue"
import Toast from './Toast'
const obj={}

obj.install=function(){
  //创建组件构造器
  const toastConstructor=Vue.extend(Toast)
  //new的方式
  const toast =new toastConstructor()
  //手动挂载到元素上
  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast =toast
}

export default obj