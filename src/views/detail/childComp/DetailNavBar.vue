<template>
  <div class="detail-nav">
<nav-bar>
    <div slot="left" class="back-home" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="center">
      <div v-for="(item,index) in nav" :key='index' class="item"
      :class="{isActive:currentIndex===index}"
      @click="activeClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data(){
   return {
     currentIndex:0
   }
  },
  props:{
   nav:{
     type:Array,
     default(){
       return []
     }
   }
  },
components:{
   NavBar
 },
 methods:{
   backHome(){
     this.$router.back()
   },
   activeClick(index){
     this.currentIndex=index
    this.$emit('activeClick',index)
   
   }
 }
}
</script>

<style scoped>
.detail-nav .center{
  display:flex;
  font-size:12px;
  text-align: center;
}
.detail-nav .center .item{
  flex:1
}
.back-home{
 line-height: 44px;
 margin-top:5px;
 
}
.isActive{
 color:var(--color-tint);
}
</style>