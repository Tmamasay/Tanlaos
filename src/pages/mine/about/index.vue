<template>
<div>
  <div class="contain_about">
    <p class="about_title">关于我们</p>
    <div class="about_content">
    <div class="about_con">
      <div class="about_dec">
        <p class="img_ab"></p>
      <p>专注于趣味化教育</p>
      </div>
      <p class="about_detail">专注于小学数学趣味化教育,他们好动、爱玩,注意力难以长时间的集中在学习上,自我控制力差.文章就如何吸引学生的注意,调动学生的积极性,培养他们的学习兴趣进行了探讨.实践证明,学生既然爱玩,那就可让他们在'玩'中不知不觉渗透学习数学,让数学课堂趣味化.</p>
    </div>
  </div>
<!--咨询-->
<p class="about_title">课程咨询</p>
    <div class="about_content">
    <div class="about_con">
      <p class="about_detail1"><span>咨询微信</span>&nbsp;&nbsp;XU95520</p>
      <p class="about_detail1"><span>工作时间</span>&nbsp;&nbsp;周一至周日&nbsp;9:00-19:00</p>
    </div>
  </div>
<!--客服-->
<p class="about_title">联系客服</p>
    <div class="about_content">
    <div class="about_con">
      <p class="about_detail1"><span>客服电话</span>&nbsp;&nbsp;188883630318</p>
      <p class="about_detail1"><span>工作时间</span>&nbsp;&nbsp;周一至周日&nbsp;9:00-22:00</p>
    </div>
  </div>
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
      
        }

}
</script>

<style>
.contain_about{
  width: 95%;
  margin: 0 auto;
}
.about_content{
  width: 95%;
}
.about_con{
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(177, 177, 177, 0.16);
  overflow: hidden;
  margin-top: 5px;
  margin-top: 10px
}
.img_ab{
  display: inline-block;
  width: 5px;
  height: 18px;
  border-radius: 10px;
  background-color: #61D2FC;
  box-shadow: 2px 2px 2px 2px rgba(97, 210, 252, 0.1);
  margin-top: 5px;
  margin-right: 7px;
}
.about_title{
   font-size:18px;
  font-family:PingFang SC;
  font-weight:700;
  text-align:left;
  color: #000;
  margin-left: 2.5%;
  margin-top: 20px
}
.about_dec{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size:15px;
  font-family:PingFang SC;
  font-weight:500;
  text-align:left;
  color: #000;
  line-height: 30px;
  padding: 5px 15px;
  margin-top: 10px
}
.about_detail1{
   font-size:13px;
  font-family:PingFang SC;
  text-align:left;
  color: #80848f;
  padding: 5px 8px;
  line-height: 23px;
}
.about_detail{
   font-size:13px;
  font-family:PingFang SC;
  text-align:center;
  color: #80848f;
  padding: 5px 8px;
  line-height: 23px;
  /* margin-top: 5px; */
}
.about_detail1 span{
font-size:16px;
font-weight:500;
}
</style>
