<template>
  <div class="recommend">
   <div class="recommend-item" v-for="item in recommend" :key="item.recommend">
     <a :href="item.link">
    <img :src="item.image" alt=""></a>
    <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display:flex;
  
}
.recommend-item {
text-align: center;
flex:1;
margin-top:5px;
font-size:12px;
}

.recommend-item img{
  width:65px;
  height:65px;
  margin-bottom:3px;
}
</style>