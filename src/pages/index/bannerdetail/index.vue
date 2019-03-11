<template>
  <div>
    <div class="video_contain">
      <div class="video_play1"></div>
      <div class="video_js">
        <p class="video_t1" >超有用的技巧课</p>
        <p class="video_t2">让孩子从此爱上学数学</p>
        <p class="video_t3">每节5分钟的数学技巧课,专业的教研团队</p>
        <p class="video_t4">精心打造和设计</p>
        <div class="video_play"><img src="../../../../static/images/index/play.png" alt="" srcset=""></div>
      </div>
    </div>
  </div>
</template>

<script>
// import card from '@/components/card' #61D2FC dbdbdb

export default {
  data () {
    return {
    }
  },
 computed:{
  },
  components: {},

  methods: {
    
  },

  created () {
    // let app = getApp()
  },
  
  onShow(){
  }
}
</script>

<style scoped>
.video_contain{
width: 100%;
height: 200px;
position: relative;
background-color: rgba(0, 0, 0, .5);
}
.video_js{
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
}
.video_t1{
  font-size:24px;
  font-family:PingFang SC; 
  font-weight:700;
  text-align:center;
  color: #fff;
  /* margin-top: 25px; */
}
.video_t2{
  font-size:24px;
  font-family:PingFang SC;
  font-weight:700;
  text-align:center;
  color: #fff;
  margin-top: 5px;
}
.video_t3{
  font-size:15px;
  font-family:PingFang SC;
  font-weight:300;
  text-align:center;
  color: #fff;
  margin-top: 15px;
}
.video_t4{
  font-size:15px;
  font-family:PingFang SC;
  font-weight:300;
  text-align:center;
  color: #fff;
  margin-top: 5px;
}
.video_play{
  width: 35px;
  height: 35px;
  margin: 0 auto;
   margin-top: 15px;
   overflow: hidden;
}
.video_play img{
  width: 100%;
  height: 100%;
}
</style>
