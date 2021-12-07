<template>
  <div class="comment" v-if="Object.keys(commentinfo).length!==0">
<div class="header">
  <div class="header-title">用户评价</div>
  <div class="get-more">更多
    <i class="arrow-right"></i>
  </div>
</div>
<div class="user">
  <img :src="commentinfo.user.avatar" alt="">
  <span>{{commentinfo.user.uname}}</span>
</div>
<div class="detail">
  <p>{{commentinfo.content}}</p>
  <div class="other">
     <span class="date">{{commentinfo.created | finalDate }}</span>
          <span>{{commentinfo.style}}</span>
  </div>
  <div class="imgs">
    <img :src="item" v-for="(item, index) in commentinfo.images" :key='index' alt="">
  </div>
</div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  data(){
    return {
   
    }
  },
props:{
  commentinfo:{
    type:Object,
    default(){
      return {}
    }
  }
},
filters:{
  
  finalDate(Value){
   
      let date=new Date(Value*1000)
     return  formatDate(date,'yyyy-MM-dd ')
  }
}
}
</script>

<style scoped>
.comment{
  padding:5px 12px;
  color:#333;
  border-bottom:5px solid #f2f5f8;
}
.header{
  height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
 .header-title {
    float: left;
    font-size: 15px;
  }
  .get-more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }

  .user {
    padding: 10px 0 5px;
  }
  .user img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }

  .detail {
    padding: 0 5px 15px;
  }
  .detail p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .detail .other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .other .date {
    margin-right: 8px;
  }
  .imgs {
    margin-top: 10px;
  }
  .imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>