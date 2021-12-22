<template>
  <div class="bottom-bar">
   <div class="choose" >
     <check-button class="button" :is-checked="sellectAll" @click.native="chooseClick" />
     <span>全选</span>
   </div>
   <div class="price">
     总计:¥{{totalPrice}}
   </div>
   <div class="calculate" @click='calcuClick'>去结算({{realLength}})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckButton from './CheckButton.vue'
export default {
components:{
   CheckButton
},
computed:{
  ...mapGetters(['cartlist']),
  totalPrice(){
      return this.cartlist.filter(item=>{
        return item.isCheck
    }).reduce((preValue,item)=>{
       return preValue + item.price*item.count
     },0).toFixed(2)
  },
 realLength(){
    return this.cartlist.filter(item=>{
      return item.isCheck
    }).length
  },
sellectAll(){
   if(this.cartlist.length === 0) {
          return false;
        }
  return !(this.cartlist.filter(item=>!item.isCheck).length>0)
}
},
methods:{
chooseClick(){
 if(this.sellectAll){
   this.cartlist.forEach(item => item.isCheck=false )
 }else{
    this.cartlist.forEach(item => item.isCheck=true)
 }
},
calcuClick(){
  if(this.cartlist.length===0 || !this.cartlist.find(item=>item.checked)){
    this.$toast.show('请选择商品再结算')
  }
 
}
}
}
</script>

<style scoped>
.bottom-bar{
  display:flex;
  line-height:40px;
 
  text-align: center;
}

.choose{
  width:80px;
}
.choose .button{
  display:inline-block;
  align-items: center;
  margin-right:5px;
}
.check .button{
   border:2px solid var(--color-tint) !important;
    background-color:var(--color-tint);
}
.price{
  flex:1;
}
.calculate{
  width:100px;
  padding:0 3px;
  color:#fff;
  background-color:var(--color-tint);
}
</style>