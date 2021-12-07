<template>
  <div class="goods-list-item" @click="detailClick">
   <img :src="showImg" alt="" @load="imgLoad">
    <div class="info">
      <p class="title">{{listitem.title}}</p>
     <span class="price">{{listitem.price}}</span>
     <span class="collect">{{listitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
props:{
  listitem:{
    type:Object,
    default(){
      return {}
    }
  }
},
computed:{
  showImg(){
    return this.listitem.image || this.listitem.show.img
  }
},
methods:{
  imgLoad(){
    this.$bus.$emit('imgLoad')
  },
  detailClick(){
    return this.$router.push({
      path:'/detail',
      query:{
        id:this.listitem.iid
      }
    })
  }
}
}
</script>

<style scoped>
.goods-list-item{
  width:48%;
 padding-bottom:40px;
 position: relative;
}
.goods-list-item img{
  width:100%;
 border-radius:5px;
}

.info{
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}

.info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom:3px;
}
.info .price {
    color: var(--color-tint);
    margin-right: 20px;
  }

  .info .collect{
    position: relative;
  }
.info .collect::before{
  content:'';
  position: absolute;
  left:-15px;
  top:-1px;
  width:14px;
  height:14px;
  background:url('~assets/img/common/collect.svg') 0 0/14px 14px;
}

</style>