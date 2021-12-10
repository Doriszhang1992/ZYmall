<template>
<div class="bottom">
<div class="left">

<div class="service item">
  <i class="icon"></i>
    <span class="text">客服</span>

</div>
<div class="shop item">
   <i class="icon"></i>
     <span class="text">店铺</span>

</div>
<div class="collect item">
   <i class="icon"></i>
   <span class="text">收藏</span>
 
</div>
</div>

<span class="sicon"></span>
<span class="hicon"></span>
<span class="cicon"></span>

<div class="addcart" @click="addtocart">加入购物车</div>
<div class="buy">购买</div>
  </div>
</template>

<script>
export default {
methods:{
  addtocart(){
    this.$emit('addtocart')
  }
}
}
</script>

<style scoped>
.bottom{
  height:49px;
  line-height:49px;
  background-color:#fff;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  font-size:14px;
}
.left{
  flex:1;
  color:#333;
  display:flex;
 
}
.left .item{
 flex:1;
text-align: center;
}
.left .item .icon{
  display: block;
    width: 22px;
    height: 22px;
    margin:5px auto -11px auto;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .left .text{
    font-size: 13px;
   
  }
 .left .service .icon{
    background-position:0 -53px;
  }
  .left .shop .icon{
    background-position:0 -98px;
  }
 
.addcart{
  padding:0 5px;
  background-color:yellow;
}
.buy{
  padding:0 20px;
  color:#fff;
  background-color:var(--color-tint);
}
</style>