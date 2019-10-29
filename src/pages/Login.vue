<template>
  <div class="login">
    <div class="content">
      <div class="header">
        <div class="logo">
          <div class="quan">
            <img src="../assets/images/logo.jpg" alt="图裂了" style="width:80px;height:80px;box-sizing: border-box;
border-radius: 50%;">
          </div>
          
        </div>
        <div class="title">
          小马管家
        </div>
      </div>
      <div class="login_content">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入密码" />
        </van-cell-group>
      </div>
      <div class="login_submit">
        <van-button round type="info" style="width:80%" id="button" url="/home">登录</van-button>
      </div>
      

    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
html{
  font-size: 12px;
}
.header{
  box-sizing: border-box;
  height: 200px;
  background-color:#7598ff;
  color:#fff;
  text-align: center;
  padding: 50px 0;
}
.logo{
  height: 80px;
  line-height: 80px;
}
.title{
  font-size: 28px;
}
#button{
  color:#333;
  background-color:#fff;
  border: 1px solid#ededed;
  height: 44px;
  margin-left: 25px;
}

</style>