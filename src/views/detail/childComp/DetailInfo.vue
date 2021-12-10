<template>
  <div class="detail-info" v-if="Object.keys(detail).length!==0">
  <div class="info-desc">
    <div class="start"></div>
    <div class="desc">{{detail.desc}}</div>
    <div class="end"></div>
  </div>
  <div class="info-key">{{detail.detailImage[0].key}}</div>
  <div class="image-list">
    <img :src="item" alt="" v-for="(item,index) in detail.detailImage[0].list" :key="index" @load="imgLoad">
  </div>
  </div>
</template>

<script>
export default {
  data(){
  return {
    counter:0,
    imageLength:0
  }
  },
props:{
  detail:{
    type:Object,
    return: {}
  }
},
methods:{
  imgLoad(){
    // if(++this.counter===this.imageLength){
     this.$emit('imgLoad')
    // }
   
  }
},
watch:{
   //detail(){
   //  this.imageLength = this.detail.detailImage[0].list.length
  // }
}
}
</script>

<style scoped>
.detail-info{
  padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}
 .info-desc {
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

   .info-desc .start {
    float: left;
  }
  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
    text-align: center;
  }
 .image-list img {
    width: 100%;
  }
</style>