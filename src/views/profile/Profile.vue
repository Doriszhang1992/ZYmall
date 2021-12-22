<template>
  <div id="profile">
    <profile-nav-bar class="nav-bar"/>
    <profile-avatar />
    <div class="bar">
       <money />
      <profile-discount />
      <profile-interval />
    </div>
     <message />
  </div>
</template>

<script>
import ProfileNavBar from './ChildComp/ProfileNavBar.vue'
import ProfileAvatar from './ChildComp/ProfileAvatar.vue'
import ProfileDiscount from './ChildComp/ProfileDiscount.vue'
import ProfileInterval from './ChildComp/ProfileIntegral.vue'
import Message from './ChildComp/Message.vue'
import Money from './ChildComp/Money.vue'
export default {
components:{
  ProfileNavBar,
  ProfileAvatar,
  ProfileDiscount,
   ProfileInterval,
   Message,
   Money
}
}
</script>

<style scoped>
.nav-bar{
  color:#fff;
  background-color: var(--color-tint);
}

  .bar {
    display: flex;
    width: 100%;
  }
</style>