<template>
 <swiper class="detail-swiper">
    <swiper-item v-for="item in image" :key="item.detail">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
  
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  props:{
    image:{
      type:Array,
       default(){
       return []
     }
    }
  },
components:{
  Swiper,SwiperItem
}
}
</script>

<style scoped>
.detail-swiper{
  height:300px;
}
</style>