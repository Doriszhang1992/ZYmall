<template>
  <div class="discount">
      <profile-money>
      <p slot="top" class="top"><span>0</span>个</p>
      <p slot="bottom">我的优惠</p>
    </profile-money>
  </div>
</template>

<script>
import ProfileMoney from './ProfileMoney.vue'
export default {
components:{
  ProfileMoney
}
}
</script>

<style scoped>
.discount{
   width: 33.3%;
}
.top span{
    color: #ff9950;
    font-size: 30px;
    font-weight: 700;
}
</style>