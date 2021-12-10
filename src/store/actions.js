export default {

  addcart(context,payload){
    console.log(payload)
   return new Promise(resolve=>{
    const oldInfo = context.state.cartList.find(item=>{
      return item.id===payload.id
    })

  if(oldInfo){
    context.commit('addcount',oldInfo)
    resolve('数量加一')
  }else{
    context.commit('addnewCart',payload)
    resolve('添加商品')
  }
 })
  }
}