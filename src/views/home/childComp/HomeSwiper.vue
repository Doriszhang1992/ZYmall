<template>
  <swiper>
    <swiper-item v-for="item in itemlist" :key='item.swiper' >
      <a :href="item.link">
        <img :src="item.image" alt="" @load='imgLoad'>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper ,SwiperItem} from 'components/common/swiper/index'
export default {
  data(){
   return {
     isLoad:false
   }
  },
  props:{
  itemlist:{
    type:Array,
    default(){
      return []
    }
  }
  },
  components:{
    Swiper ,SwiperItem
  },
  methods:{
    imgLoad(){
      if(!this.isLoad)
      this.$emit('pictureLoad')
      this.isLoad=true
    }
  }
}
</script>

<style>

</style>