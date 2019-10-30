<template>
  <div class="user">
     <van-nav-bar fixed :title="'我的'"/>
      <van-divider />
     <div>
       <div class="photo">
         <dir class="map">
           <img src="../../assets/images/logo.jpg" width="170px">
           <div style="text-align:center"></div>
         </dir>

       </div>
       <!-- <div style="text-align:center;line-height:3em">{{user.name}}</div> -->

     </div>
     <div class="id">
       <div class="link" @click="toAddressHandler">
       常用地址
     </div>
     <van-divider />
     <div class="link" @click="logoutHandler">
       退出
     </div>
     </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState("app",["user"])
  },
  methods:{
    toAddressHandler(){
      this.$router.push("/address");
    },
    logoutHandler(){
      this.$router.push("/login")
    }
  }
}
</script>
<style scoped>
/* .link {
  width: 100px;
  height: 20px;
} */
.photo {
  padding-top: 2em;
  text-align: center;
}
.photo>.map {
  margin: 0 auto;
  width: 9em;
  height: 9em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #eedded;
  overflow:hidden;
  padding: 1em;
  /* margin-right: 200px; */

}
#img {
  margin: 0 auto;
}

.id {
  margin-top: 150px;
  text-align: center;
}
</style>