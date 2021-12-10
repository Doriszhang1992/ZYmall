<template>
  <div class="cart">
   <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
     <scroll class="content" :probeType="3"
    ref="scroll"
    :pullUpLoad="true">
    <cart-list class="cart" />
</scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar' 
import cartList from './childComp/cartList.vue'
import scroll from 'components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
export default {
computed:{
    ...mapGetters(['cartLength'])
  },
components:{
  NavBar,
  cartList,
  scroll

},
activated(){
  
  this.$refs.scroll.refresh()
}
}
</script>

<style scoped>
.cart{
  height:100vh;
  position: relative;
}
.nav-bar{
  background-color:var(--color-tint);
  color:#fff;
}
.content{
  position:absolute;
  left:0;
  right:0;
  top:44px;
  bottom:49px;
  overflow: hidden;
}
.cart{
  width:100%;
}
</style>