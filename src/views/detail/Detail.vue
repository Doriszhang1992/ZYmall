<template>
  <div class="detail">
    <!-- <h2>{{id}}</h2> -->
  <detail-nav-bar :nav="nav" class="detail-nav" @activeClick="activeClick" ref='nav' />
  <scroll class="content" 
    :probeType="3"
    ref="scroll"
    :pullUpLoad="true"
    @scroll="contentScroll"
  >
  <detail-swiper :image="topImage" ref="base" />
  <detail-base-info :base="baseinfo" />
  <detail-shop-info :shop="shopinfo" />
  <detail-info :detail="detailinfo"  @imgLoad="imageLoad" />
  <detail-params  :paramsinfo="params" ref='params' />
  <detail-comment :commentinfo="comment" ref="comment" />
  <goods-list :goods="recommend" ref="recommend" />
  </scroll>
 <detail-bottom-bar @addtocart="addtoCart" />
 <back-top v-show="isShow" @click.native="backTop" />
  </div>
</template>

<script>
import DetailNavBar from './childComp/DetailNavBar.vue'
import DetailSwiper from './childComp/DetailSwiper.vue'
import DetailBaseInfo from './childComp/DetailBaseInfo.vue'
import DetailShopInfo from './childComp/DetailShopInfo.vue'
import DetailInfo from './childComp/DetailInfo.vue'
import DetailParams from './childComp/DetailParams.vue'
import DetailComment from './childComp/DetailComment.vue'
import DetailBottomBar from './childComp/DetailBottomBar.vue'
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'


import {debounce} from 'common/commonuse'
import {imgListenerMixin,backTopMixin} from 'common/minxin'



import {getDetaildata,BaseInfo,ShopInfo,Params,getRecommendData} from'network/detail'


export default {
 
  data(){
   return {
     id:null,
     topImage:[],
     nav:['商品','参数','评论','推荐'],
     baseinfo:{},
     shopinfo:{},
     detailinfo:{},
     params:{},
     comment:{},
     recommend:[],
     scrollYs:[],
     getScrollY:null,
     positionY:0,
     currentIndex:0,
   
   }
  },
  mixins:[imgListenerMixin,backTopMixin],
 
 activated(){
  
  this.id=this.$route.query.id
   this.getDetaildata()
   this.getRecommendData()
    this.getScrollY=debounce(()=>{
      this.scrollYs=[],
     this.scrollYs.push(this.$refs.base.$el.offsetTop),
     this.scrollYs.push(this.$refs.params.$el.offsetTop),
     this.scrollYs.push(this.$refs.comment.$el.offsetTop),
     this.scrollYs.push(this.$refs.recommend.$el.offsetTop)
      this.scrollYs.push(Number.MAX_VALUE)
    //  console.log(this.scrollYs)
     },20)
  
 },

 mounted(){
  
 },
 destroyed(){
  this.$bus.$off('imgLoad',this.imgListener)
 },
 components:{
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
   DetailShopInfo,
   DetailInfo,
   DetailParams,
   DetailComment,
   DetailBottomBar,
   

   GoodsList,
   Scroll,
 
 },
 methods:{ 
   addtoCart(){
      //1.获取数据
     const product={}
     product.image=this. topImage[0]
     product.title=this.baseinfo.title
     product.desc=this.baseinfo.desc
     product.price=this.baseinfo.realPrice
     product.id=this.id
     this.$store.dispatch('addcart',product).then(res=>{
       console.log(res)
     })
    
   
   },

   imageLoad(){
    // this.$refs.scroll.refresh()

    debounce(this.$refs.scroll.refresh(),200) 
    this.getScrollY()
   },
   activeClick(index){
    
    this.$refs.scroll.scrollTo(0,-this.scrollYs[index],200)
    
   },

   contentScroll(position){
      
  //方法一
  //  this.positionY=-position.y
   
  //  let length= this.scrollYs.length

  //   for (let i=0;i<length;i++){
     
  //     if(this.currentIndex!==i && ((i<length-1 && this.positionY>this.scrollYs[i]&&this.positionY<this.scrollYs[i+1])
  //     ||(i===length-1 && this.positionY>=this.scrollYs[i] ))){
  //         //  console.log(i)
  //         this.currentIndex =i
  //         this.$refs.nav.currentIndex=this.currentIndex
       
    
  //     }
  //   }

  //方法二
      //   let i = 0;
      //   if(-position.y >= 0 && -position.y < this.scrollYs[1]) {
      //       i = 0;
      //   }
      //   else if(-position.y >= this.scrollYs[1] && -position.y < this.scrollYs[2]) {
      //     i = 1;
      //   }
      //  else if(-position.y >= this.scrollYs[2] && -position.y < this.scrollYs[3]) {
      //     i = 2;
      //   }
      //   else if(-position.y >= this.scrollYs[3]) {
      //     i = 3;
      //   }
      //    this.currentIndex = i;
      //   this.$refs.nav.currentIndex = this.currentIndex;

//方法三
      let length= this.scrollYs.length
      this.positionY=-position.y
      
      
      for(let i=0; i<length-1;i++){
       if(this.currentIndex!==i &&(this.positionY>=this.scrollYs[i]&& this.positionY<this.scrollYs[i+1])){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
       }
      }
      this.isShow=(-position.y)>1000
     

   },
   //获取数据
   getDetaildata(){
     getDetaildata(this.id).then(res=>{
      //  console.log(res)
       const data=res.result
       this.topImage=data.itemInfo.topImages

       
       this.baseinfo=new BaseInfo(data.itemInfo,data.columns,data.shopInfo.services)

       this.shopinfo=new ShopInfo(data.shopInfo)

      this.detailinfo=data.detailInfo

      this.params=new Params(data.itemParams.info,data.itemParams.rule)

     if(data.rate.cRate ) {
      this.comment=data.rate.list[0]
     }

   
     })
   },
   getRecommendData(){
     getRecommendData().then(res=>{
     
      //  console.log(res)
       this.recommend=res.data.list
     })
   },
 }
}
</script>

<style scoped>
.detail{
 position: relative;
 z-index:10;
 height:100vh;
  background-color:#fff;
}
.detail-nav{
 
  background-color:#fff;
}

.content{
  position: absolute;
  left:0;
  right:0;
  top:44px;
  bottom:49px;
  overflow: hidden;
}
</style>