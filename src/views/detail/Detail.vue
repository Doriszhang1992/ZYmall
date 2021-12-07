<template>
  <div class="detail">
  <detail-nav-bar :nav="nav" class="detail-nav"/>
  <scroll class="content" 
    :probeType="3"
    ref="scroll"
    :pullUpLoad="true"
  >
  <detail-swiper :image="topImage" />
  <detail-base-info :base="baseinfo" />
  <detail-shop-info :shop="shopinfo" />
  <detail-info :detail="detailinfo"  @imgLoad="imageLoad" />
  <detail-params  :paramsinfo="params" />
  <detail-comment :commentinfo="comment" />
  <goods-list :goods="recommend" />
  </scroll>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
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
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import {imgListenerMixin} from 'common/minxin'
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
     recommend:[]
   }
  },
  mixins:[imgListenerMixin],
 activated(){
   this.id=this.$route.query.id
   this.getDetaildata()
   this.getRecommendData()
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

   GoodsList,
   Scroll,
 
 },
 methods:{ 

   imageLoad(){
    this.$refs.scroll.refresh()
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
     
       console.log(res)
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