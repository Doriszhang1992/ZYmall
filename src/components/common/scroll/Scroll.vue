<template>
  <div class="wrapper" ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
   probeType:{
    type:Number,
    default:0
   },
   pullUpLoad:{
     type:Boolean,
     default:false
   }
  },
data(){
  return {
    scroll:null,
  }
},
mounted(){
  //创建BScroll
  this.scroll=new BScroll(this.$refs.wrapper,{
    click:true,
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad
  }),
  //监听滚动的位置
  this.scroll.on('scroll',(position)=>{
    this.$emit('scroll',position)
  })
  //监听上拉加载
  this.scroll.on('pullingUp',()=>{
    this.$emit('pullingUp')
  })
},
methods:{
scrollTo(x,y,time=300){
 this.scroll && this.scroll.scrollTo(x,y,time)
},
finishPullUp(){
  this.scroll && this.scroll.finishPullUp()
},
//刷新
refresh(){
  this.scroll && this.scroll.refresh()
  console.log('---doris')
}
}//methods结尾
}
</script>

<style>

</style>