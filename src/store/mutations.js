export default{
  addcount(state,payload){
   
    payload.count+=1
  },
  addnewCart(state,payload){
    payload.isCheck=true
    payload.count=1
   state.cartList.push(payload)
  }
}