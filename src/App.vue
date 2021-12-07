<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
   <keep-alive> <router-view /></keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
    
  }
}
</script>

<style>

@import './assets/css/base.css';
</style>
