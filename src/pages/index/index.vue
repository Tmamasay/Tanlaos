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
  </div>
</template>

<script>
// import card from '@/components/card'

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
}
.title{
font-size:18px;
font-family:PingFang SC;
font-weight:700;
text-align:center;
color: #000;
}
.nianji{
  width: 100px;
font-size:15px;
font-family:PingFang SC;
text-align:center;
color: #80848f;
margin-top: 10px;
}
</style>
