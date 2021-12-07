<template>
  <div class="base-info" v-if='Object.keys(base).length!==0'>
   <div class="title">{{base.title}}</div>
   <div class="price">
  <span class="new-price">{{base.realPrice}}</span>
  <span class="old-price">{{base.oldPrice}}</span>
  <span class="discount" v-if="base.discount">{{base.discount}}</span>
   </div>
   <div class="other">
      <span>{{base.columns[0]}}</span>
    <span>{{base.columns[1]}}</span>
    <span>{{base.services[base.services.length-1].name}}</span>
   </div>
    <div class="service">
    <span class="service-item" v-for="index in base.services.length-1" :key="index.detail">
      <img :src="base.services[index-1].icon" alt="">
      <span>{{base.services[index-1].name}}</span>
    </span>
  </div>
  </div>
</template>

<script>
export default {
props:{
  base:{
    type:Object,
    default(){
      return {}
    }
  }
},

}
</script>

<style scoped>
.base-info{
  color:#999;
  padding:0 8px;
  border-bottom:5px solid #f2f5f8;
}

.title{
  padding:10px 0 15px 0;
  font-weight:600;
  line-height:1.2;
  font-size:13px;
  color:#222;
}

.price{
  margin-bottom:15px;
}

.price .new-price{
  color:var(--color-tint);
  font-size:22px;

}
.price .old-price{
  font-size:13px;
  text-decoration: line-through;
}

.price .discount{
  font-size:12px;
  color:#fff;
  background-color:var(--color-tint);
  border-radius:8px;
  padding:2px 5px;
  margin-left: 5px;
  position: relative;
  top:-8px;
}

.other{
  display:flex;
  justify-content: space-between;
 text-align: center;
  font-size:14px;
}

.service{
   display:flex;
  justify-content: space-between;
 line-height:60px;
}
.service img{
   width: 12px;
    height: 12px;
    position: relative;
    top: 2px;
}

.service span{
  font-size:12px;
  margin-left:5px;
  color:#333;
}
</style>