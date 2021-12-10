import {debounce} from 'common/commonuse'
import BackTop from 'components/content/backtop/BackTop'
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


export const backTopMixin={
  components:{
    BackTop
  },
  data(){
  return{
    isShow:false
  }
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
     },
  }
 
}