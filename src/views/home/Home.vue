<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control :title="['流行','新款','精选']" 
    @tabClick="tabClick" ref="tabcontrol1"
    class="tab-control" v-show="tabShow"
     />
    <scroll class="content"
    :probeType="3"
    ref="scroll"
    :pullUpLoad="true"
     @scroll='appear'
     @pullingUp='loadMore'
    >
    <home-swiper :itemlist="banner" @pictureLoad="pictureLoad" />
    <home-recommend :recommend="recommend" />
    <home-feature />
    <tab-control :title="['流行','新款','精选']" 
    @tabClick="tabClick" 
    ref="tabcontrol2"
    />
    <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShow" />
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
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import scroll from 'components/common/scroll/Scroll'



import {getHomeMultiData,getHomeGoodsData} from 'network/home'
import {imgListenerMixin,backTopMixin} from 'common/minxin'
import HomeSwiper from './childComp/HomeSwiper.vue'
import HomeRecommend from './childComp/HomeRecommend.vue'
import HomeFeature from './childComp/HomeFeature.vue'

export default {
  data(){
    return {
      banner:[],
       recommend:[],
       goods:{
    'pop':{page:0,list:[]},
    'new':{page:0,list:[]},
    'sell':{page:0,list:[]},
       },
       currentType:'pop',
       tabShow:false,
      tabControlTop:0,
      saveY:0,
      
    }
  },
mixins:[imgListenerMixin,backTopMixin],
components:{
  NavBar,
TabControl,
GoodsList,
scroll,

HomeSwiper,
HomeRecommend,
HomeFeature,

},

created(){
this.getHomeMultiData()
this.getHomeGoodsData('pop')
this.getHomeGoodsData('new')
this.getHomeGoodsData('sell')
},
mounted(){
 
// this.$refs.scroll.refresh()




},
//这个操作还需要keep-alive
activated(){
  
  this.$refs.scroll.scrollTo(0,this.saveY,0)
  this.$refs.scroll.refresh()
},
deactivated(){
 this.saveY=this.$refs.scroll.scroll.y

 this.$bus.$off('imgLoad',this.imgListener)
},
methods:{
  //单击响应事件
  tabClick(index){
   switch(index){
     case 0:
         this.currentType='pop'
         break
        case 1:
        this.currentType='new'
         break
         case 2:
        this.currentType='sell'
         break
   }
   this.$refs.tabcontrol1.currentIndex=index
   this.$refs.tabcontrol2.currentIndex=index
  },
 
  appear(position){
   this.isShow=(-position.y)>1000
   if(-position.y>=this.tabControlTop){
     this.tabShow=true
   }else{
      this.tabShow=false
   }
  },
  loadMore(){
   this.getHomeGoodsData(this.currentType)
  },

  pictureLoad(){
    this.tabControlTop=this.$refs.tabcontrol2.$el.offsetTop
   
  },
  //请求数据
  getHomeMultiData(){
     getHomeMultiData().then(res=>{
       console.log(res)
       this.banner=res.data.banner.list
       this.recommend=res.data.recommend.list
     })
     },
    getHomeGoodsData(type){
      const page = this.goods[type].page + 1
      getHomeGoodsData(type,page).then(res=>{
         this.goods[type].list.push(...res.data.list)
         this.goods[type].page += 1
         this.$refs.scroll.finishPullUp()
      })
    } 
  
}
}
</script>

<style scoped>
#home{
  position: relative;
  height:100vh;
}
.nav-bar{
  background-color: var(--color-high-text);
  color:#fff;
  font-size:16px;
  font-weight: bold;
}

.content{
  overflow: hidden;
  position: absolute;
  left:0;
  right:0;
  top:44px;
  bottom:49px;
}
.tab-control{
 position: relative;
 top:-5px;
  z-index: 9;
  background-color: #fff;
  height:40px;
  line-height:40px;
}
</style>