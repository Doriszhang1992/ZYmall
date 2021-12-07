import {debounce} from 'common/commonuse'
export const imgListenerMixin={
  data(){
   return {
    imgListener:null
   }
  },
  mounted(){
    const newfresh=debounce(this.$refs.scroll.refresh,50)
    this.imgListener =()=>{newfresh()}
  this.$bus.$on('imgLoad',this.imgListener)
  // console.log('我是混入的imgload')
  }
}