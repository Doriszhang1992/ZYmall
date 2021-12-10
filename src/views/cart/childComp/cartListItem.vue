<template>
  <div class="item-list">
    <div class="selector">
    <check-button />
    </div>
    <div class="image">
      <img :src="itemInfo.image" alt="">
    </div>
    <div class="item-info">
      <div class="title">{{itemInfo.title}}</div>
      <div class="desc">{{itemInfo.desc}}</div>
      <div class="bottom">
        <div class="price left">¥{{itemInfo.price}}</div>
        <div class="count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
props:{
  itemInfo:{
    type:Object,
    default(){
      return {}
    }
  }
},
components:{
  CheckButton
}
}
</script>

<style scoped>
.item-list{
  width:100%;
  display:flex;
  padding:10px 0px;
  box-sizing: border-box;
  border-bottom:1px solid #ccc;
  text-align: center;
 
  
}
.selector{
 width:14%;
 display:flex;
  justify-content:center;
  align-items:center;
  padding:0 10px;

  }
  

.image {
  text-align: center;
}
.image img{

  width:80px;
   border-radius:20px;
}
.item-info {
    font-size: 16px;
    color: #333;
    padding: 15px 20px;
    position: relative;
    overflow: hidden;
  }
.item-info .title{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
.item-info .desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .bottom .price {
    color: orangered;
    position: absolute;
     left: 15px;
     bottom: 0px;
     
  }
  .bottom .count{
    color: #777;
    background-color:rgb(226, 226, 226);
    padding:3px 4px;;
    border-radius:5px;
  }
</style>