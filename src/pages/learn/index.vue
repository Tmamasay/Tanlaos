<template>
  <div>
     <div v-if="learn.length" class="contain">
       
     </div>
     <div v-else class="contain_null">
        <div class="con_img">
          <img src="../../../static/images/learn/book.png" alt="" srcset="">
        </div>
        <p class="con_t">暂无正在学习的课程</p>
        <div class="goadd">+添加新课程</div>
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
      learn:[]
    }
  },
  created () {
    // let key_token=this.$store.getters.user.token
   
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
.contain_null{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  margin: 0 auto
}
.con_img{
  width: 270px;
  height: 240px;
  margin: 35px auto;

}
.con_img img{
  width: 100%;
  height: 100%;
}
.con_t{
  /* margin: 0 auto; */
   font-size:16px;
  font-family:PingFang SC;
  text-align:center;
  color: #787B86;
  margin-top: 5px
}
.goadd{
  margin: 0 auto;
  background-color: #61D2FC;
  width: 80px;
  color: #fff;
  font-size:13px;
  font-family:PingFang SC;
  text-align:center;
   font-weight:700;
  border-radius:25px;
   overflow: hidden;
   padding: 9px 12px;
   margin-top: 10px;
}
</style>
