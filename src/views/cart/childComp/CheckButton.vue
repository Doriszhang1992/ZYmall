<template>
  <div class="check-button" >
    <img src="~assets/img/common/check.png" alt="" :class="{check:isChecked}">
  </div>
</template>

<script>
export default {
props:{
  isChecked:{
    type:Boolean,
    default:false
  }
}
}
</script>

<style scoped>

.check-button img{
   width:20px;
  height:20px;
 -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
     border:2px solid #c0c0c0;
   
  vertical-align: middle;
  margin-bottom: 6px;
}
.check{
   border:2px solid var(--color-tint) !important;
    background-color:var(--color-tint);

}
</style>