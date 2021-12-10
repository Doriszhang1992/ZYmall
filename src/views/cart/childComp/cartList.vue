<template>
  <div class="cart-list">
  <cart-list-item  v-for ="item in cartlist" :key="item.cartlist" :item-info="item" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import cartListItem from './cartListItem.vue'
export default {
computed:{
  ...mapGetters(['cartlist'])
},
components:{
  cartListItem
}
}
</script>

<style scoped>

</style>