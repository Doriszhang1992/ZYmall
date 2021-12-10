import axios from 'axios'
export function request(config){
 const instance = axios.create({
   baseURL:'http://152.136.185.210:7878/api/hy66',
   timeout:5000
 })



//拦截器

instance.interceptors.request.use(config=>{
  return config 
})

//响应式拦截
instance.interceptors.response.use(res=>{
  // console.log(res)
  return res.data
},err=>{
  // console.log(err)
})


//发送真正的网络请求
return instance(config)

}