<template>
  <div class="contain">
    <div class="contain_eyes">
      <div class="eyes_left">
        <p class="eyes_title">护眼提醒</p>
        <p class="eyes_dec">连续使用30分钟提醒已打开</p>
      </div>
      <div class="eyes_right">
         <switch checked @change="switch1Change" color="#61D2FC" />
      </div>
    </div>
    <div class="eyes_content">
     为了预防小朋友们在学习过程中用眼过度，小程序上线了护眼功能提醒，当使用时间达到30分钟后，小程序会自动弹出护眼提醒，提示小朋友们可以站起身、眺望放松一下，避免长时间盯着屏幕对视力照成伤害。

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
          
        },methods:{
            switch1Change(e){
             console.log(e)
             if(e.mp.detail.value){
               
             }
            }
        },
        onShow(){
      
        }

}
</script>

<style>
.contain_eyes{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 8px 10px 10px 10px rgba(177, 177, 177, 0.16);
  overflow: hidden;
  margin-top: 20px
}
.eyes_left{
  padding: 20px 10px
}
.eyes_title{
   font-size:17px;
  font-family:PingFang SC;
  font-weight:600;
  text-align:left;
  color: #000;
  /* margin-top: 5px; */
}
.eyes_dec{
  font-size:13px;
  font-family:PingFang SC;
  text-align:left;
  color: #80848f;
  margin-top: 5px;
}
.eyes_right{
  padding: 20px 10px
}
.eyes_content{
  width: 90%;
  margin: 15px auto;
  font-size:13px;
  text-align: center;
  line-height: 22px;
  font-family:PingFang SC;
  color: #80848f;
}
</style>
