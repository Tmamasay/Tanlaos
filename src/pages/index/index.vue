<template>
  <div>
   <div class="head">
     <div class="head_left">
       <img v-if="avatarUrl" :src="avatarUrl" alt="" srcset="">
     </div>
     <div class="head_middle">
       <p class="title">{{nickName}}</p>
       <p class="nianji">{{motto}}</p>
     </div>
     <div class="head_right">切换年级</div>
   </div>
   <div class="showBg">
     <img src="../../../static/images/index/banner.png" alt="" srcset="">
      <button class="godetail">了解课程</button>
   </div>
   <div class="gozh">
     <img src="../../../static/images/index/gzh.png" alt="" srcset="">
   </div>
   <p class="fudao">辅导班</p>
   <div class="course">
     <div class="course_img">
       <img src="../../../static/images/index/ke_1.png" alt="" srcset="">
     </div>
     <div class="course_content">
       <p class="course_content_t1">春季班</p>
       <p class="course_content_t2">44课时.赠送练习册</p>
     </div>
     <div class="course_price">
       <p class="course_price_t1">￥<span>550</span></p>
       <p class="course_price_t2">限时团</p>
     </div>
   </div>
     <div class="course">
     <div class="course_img">
       <img src="../../../static/images/index/ke_2.png" alt="" srcset="">
     </div>
     <div class="course_content">
       <p class="course_content_t1">谭老师体验班</p>
       <p class="course_content_t2">2课时.</p>
     </div>
     <div class="course_price">
       <p class="course_price_t1">￥<span>9.9</span></p>
       <p class="course_price_t2">限时团</p>
     </div>
   </div>
  </div>
</template>

<script>
// import card from '@/components/card' #61D2FC dbdbdb

export default {
  data () {
    return {
      motto: '3年级',
      // userInfo: {
      //   nickName:'' ,
      //   avatarUrl:'' 
      // }
    }
  },
 computed:{
   avatarUrl(){
     console.log('-----kaishi')
     console.log(this.$store.getters.avatar)
    return this.$store.getters.avatar;
   },
   nickName(){
     return this.$store.getters.name;
   }
 
  },
  components: {
    // card
  },

  methods: {
    
  },

  created () {
    // let app = getApp()
  },
  
  onShow(){
    // console.log(this.$store.getters.userinfo)
    // console.log(this.$store.getters.avatar)
     let user_token
    if (mpvuePlatform === 'wx') {
      console.log('------------------>')
      user_token = mpvue.getStorageSync('Admin-Token');
     
    if(!user_token){
      console.log('-------去授权----------->')
       wx.navigateTo({
            url: '/pages/shouquan/main',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
        })
    }
    // this.logs = logs.map(log => formatTime(new Date(log)))
  }
  }
}
</script>

<style scoped>
.head{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
  margin: 0 auto;
}
.head_left{
  width: 60px;
  height: 60px;
   border-radius:50%;
   overflow:hidden;
}
.head_left img{
  width: 100%;
  height: 100%
}
.head_middle{
  align-items: flex-start;
  width: 200px;
  /* margin-left: -20px; */
}
.title{
  font-size:18px;
  font-family:PingFang SC;
  font-weight:700;
  text-align:left;
  color: #000;
  margin-top: 5px;
}
.nianji{
  /* width: 100px; */
  font-size:15px;
  font-family:PingFang SC;
  text-align:left;
  color: #80848f;
  margin-top: 10px;
}
.head_right{
  font-size:16px;
  font-family:PingFang SC;
  font-weight:700;
  text-align:left;
  color: #000;
  line-height: 60px;
}

.showBg{
  position: relative;
  width: 90%;
  margin: 20px auto;
  height:180px;
  border-radius:10px;
  box-shadow: 0px 10px 10px rgba(177, 177, 177, 0.16);
  overflow: hidden;
}
.showBg img{
  width: 100%;
  height: 100%;
}
.godetail{
  position: absolute;
  background-color: #fff;
  color: #755BFD;
   border-radius:20px;
    font-size:13px;
  font-family:PingFang SC;
   left: 17px;
   bottom: 25px;
}
.gozh{
  width: 90%;
  height: 50px;
  margin: 15px auto;
}
.gozh img{
  width: 100%;
  height: 100%;
}
.fudao{
 width: 90%;
  margin: 25px auto;
  font-size:18px;
  font-family:PingFang SC;
  font-weight:700;
  text-align:left;
  color: #000;
}
.course{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
  margin: 15px auto;
  
}
.course_img{
  width: 120px;
  height: 80px;
   border-radius:10px;
   overflow: hidden;
   background-color: #9290FE
}
.course_img img{
  width: 100%;
  height: 100%;
}
.course_content{
  width: 140px;
}
.course_price{
  width: 70px;
}
.course_content_t1{
   font-size:18px;
  font-family:PingFang SC;
  font-weight:700;
  text-align:left;
  color: #000;
  margin-top: 15px;
}
.course_content_t2{
  font-size:16px;
  font-family:PingFang SC;
  text-align:left;
  color: #787B86;
  margin-top: 5px
}
.course_price_t1{
  color: #EF3F4E;
  font-size:13px;
  font-weight:700;
  font-family:PingFang SC;
  text-align:center;
  margin-top: 5px;
}
.course_price_t1 span{
  font-size:30px;
  font-weight:700;
}
.course_price_t2{
  background-color: #FBDAE3;
  color: #EF3F4E;
  font-size:13px;
  font-family:PingFang SC;
  text-align:center;
   font-weight:900;
  border-radius:25px;
   overflow: hidden;
   padding: 3px 2px;
}
</style>
