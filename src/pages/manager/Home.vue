<template>
  <div class="home">
    <van-row>
      <img style="width:100%" src="../../assets/images/homea.gif" alt="">
    </van-row>
    <van-row>
      <!-- 栏目 -->
      <ul class="categories">
        <li v-for="c in categories" :key="c.id" @click="toCategoryListHandler(index)">
          <div><img :src="c.icon" alt="">  </div>
          <div>{{c.name}}</div>
        </li>
      </ul>
      <!-- 推荐 -->
      <!-- <van-grid :column-num="3" @click="toCategoryListHandler">
        <van-grid-item
          v-for="c in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name"
        />
      </van-grid> -->
      <!-- <ul class="advs">
        <li v-for="p in products" :key="p.id" @click="toCategoryListHandler(0)">
          <div><img src="p.photo" alt=""></div>
          <div>{{p.name}}</div>
        </li>
      </ul> -->
    </van-row>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  created(){
    this.findAllCategories();
    this.findAllProducts();
  },
  computed:{
    ...mapState("category",["categories"]),
    ...mapState("product",["products"])
  },
  methods:{
    ...mapActions("category",["findAllCategories"]),
    ...mapActions("product",["findAllProducts"]),
    toCategoryListHandler(){
        this.$router.push({path:'/category'})
    }

  }
}
</script>
<style scoped>
html,body{
  font-size: 12px;
}
#home {
  padding-bottom: 60px;
}
ul,ol{
  font-size: 12px;
}
.categories {
  text-align: center;
  margin-bottom: .5em;
}
.categories::after {
  content: "";
  clear:both;
  display: block
}
.categories > li {
  width: 33.33333%;
  float: left;
  height: 100px;
}
/* .advs {
  box-sizing: border-box;
  border-top:  1px solid #ededed;
  border-bottom:  1px solid #ededed;
  display: flex;
}
.advs > li {
  box-sizing: border-box;
  height: auto;
  text-align: center;
  flex:1;
}
.advs > li img {
  width: 95%;
} */
</style>