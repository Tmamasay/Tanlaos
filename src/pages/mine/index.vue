<template>
  <div>
     <div class="contain">
      <div class="mine_img">
        <img v-if="user_info" :src="user_info.avatarUrl" alt="" srcset="">
      </div>
      <p class="mine_name">{{user_info.nickName}}</p>
      <p class="mine_age">3年级</p>
     </div>
     <div class="list">
       <i-cell-group>
        <i-cell  title="更改绑定手机号" is-link url="/pages/mine/phone/main" value="18883630318"></i-cell>
        <i-cell  title="护眼模式" is-link url="/pages/mine/eyes/main" value="已开启"></i-cell>
        <i-cell  title="关于" is-link url="/pages/mine/about/main"></i-cell>
       </i-cell-group>

     </div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {
          components: {
            // card
          },

          data () {
            return {
              user_info:''
            }
          },
          created () {
            // let key_token=this.$store.getters.user.token
          
        },
        onShow(){
          if (mpvuePlatform === 'wx') {
              console.log('------------------>')
              this.user_info=mpvue.getStorageSync('user_info');
        }
        }

}
</script>

<style>
.contain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 40rpx; */
}
.mine_img{
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius:50%;
  overflow: hidden;
}
.mine_img img{
  width: 100%;
  height: 100%;
}
.mine_name{
   font-size:18px;
  font-family:PingFang SC;
  font-weight:700;
  text-align:center;
  color: #000;
  margin-top: 8px;
}
.mine_age{
  font-size:15px;
  font-family:PingFang SC;
  text-align:center;
  color: #80848f;
  margin-top: 8px;
}
</style>
