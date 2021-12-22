<template>
  <div class="message">
       <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .message {
    height: 40px;
    /*line-height: 40px;*/
    font-size: 20px;
    padding: 10px 0;
  }
</style>