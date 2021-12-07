import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('views/home/Home')
const Category=()=>import('views/category/Category')
const ShopCart =()=>import('views/cart/ShopCart')
const Profile =()=>import('views/profile/Profile')
const Detail =()=>import('views/detail/Detail')
Vue.use(Router)
  

const routes =[
  {
    path: '',
   redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail',
    component:Detail
  },
]

const router = new Router ({
  routes,
  mode:'history'
})

export default router