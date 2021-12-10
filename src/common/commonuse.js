//防抖动函数的封装
// export function debounce(func,delay){
//   let timer = null
//   return function(...args){
//     if(timer)clearTimeout(timer)
//     timer=setTimeout(()=>{
//       func.apply(this,args)
//     },delay)
//   }
// }


export function debounce(func,delay) {
  let timer = null
  return function () {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=> {
      func()
    },delay)
  }
}