<template>
  <div class="control">
   <div class="title" v-for="(item,index) in title" :key="index" @click="tabClick(index)" 
   :class="{activeColor:currentIndex===index}">
    <span>{{item}}</span>
   </div>
  </div>
</template>

<script>
export default {
  data(){
   return {
     currentIndex:0
   }
  },
props:{
  title:{
    type:Array,
    default(){
      return []
    }
  }
},
methods:{
  tabClick(index){
    this.currentIndex=index
    this.$emit('tabClick',index)
  }
}
}
</script>

<style scoped>
.control{
  display:flex;
  text-align: center;
  margin-top:5px;
  margin-bottom:12px;
}
.title{
  flex:1;
}
.title span{
  padding:5px;
}
.activeColor{
  color:var(--color-high-text);
}

.activeColor span{
  border-bottom: 3px solid var(--color-tint)
}

</style>