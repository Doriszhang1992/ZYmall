<template>
  <div class="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tab-bar{
  display:flex;
  background-color:rgb(236,236,236);
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  z-index:10;
  box-shadow:0 -1px 1px rgba(0,0,0,0.1);
}
</style>