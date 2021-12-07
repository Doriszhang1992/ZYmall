<template>
  <div class="shop-info" v-if="Object.keys(shop).length!==0" >
 <div class="top">
     <img :src="shop.logo" alt="">
     <span class="title">{{shop.name}}</span>
   </div>
     <div class="middle">
     <div class="middle-item left">
       <div class="info-sell">
          <div class="sells-count">
            {{shop.sells| sellCountFilter}}
              <div class="sells-text">总销量</div>
          </div>
       </div>
       <div class="info-goods">
         <div class="goods-count">
           {{shop.goodsCount}}
         </div>
         <div class="goods-text">全部宝贝</div>
       </div>
     </div>
     <div class="middle-item right" >
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-up':item.isBetter}">{{item.isBetter?'高':"低"}}</td>
          </tr>
        </table>
     </div>
   </div>
    <div class="bottom">
     <div class="enter">进店逛逛</div>
   </div>
  </div>
</template>

<script>
export default {
props:{
  shop:{
    type:Object,
    default(){
      return {}
    }
  }
},
filters:{
  sellCountFilter:function(value){
   if(value<10000) {
     return value}
     else{
   return (value/10000).toFixed(1)+'万'
   }
  }
}
}
</script>

<style scoped>
.shop-info{
  padding:25px 8px;
  border-bottom:5px solid #f2f5f8;
}
.top{
  line-height:45px;
  /* 让元素垂直中心对齐 */
  display:flex;
  align-items: center;
}

.top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
}
.top .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .middle{
    margin-top:15px;
    display:flex;
     align-items: center;
  }
  .middle-item{
    flex:1;
  }

  .left{
    display:flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .sells-count, .goods-count {
    font-size: 18px;
  }
  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }
  .right {
    font-size: 13px;
    color: #333;
  }
 .right table {
    width: 120px;
    margin-left: 30px;
  }
  .right table td {
    padding: 5px 0;
  }
  .right .score {
    color: #5ea732;
  }
  .right .score-better{
     color: #f13e3a;
  }
  .right .better  {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
 .right .better-up {
    background-color: #f13e3a;
  }
  .bottom {
    text-align: center;
    margin-top: 10px;
  }
  .enter {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 20px;
  }
</style>