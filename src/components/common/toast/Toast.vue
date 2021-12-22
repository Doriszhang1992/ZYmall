<template>
  <div class="toast" v-show='isShow'>
   <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
       message:'',
       isShow:false
    }
  },
methods:{
  show( message,duration=2000){
   this.isShow=true;
   this.message=message
   setTimeout(()=>{
    this.isShow=false;
    this.message=''
   },duration)
  }
}
}
</script>

<style scoped>
.toast{
  position:fixed;
  left:50%;
  top:65%;
  padding:8px 12px;
  transform: translate(-35%,-50%);
  color:white;
  background-color: rgba(0,0,0,0.7);
 z-index: 999;
 border-radius: 10px;
}

</style>