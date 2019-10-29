import {get,post_json} from './../http/axios'
export default {
  namespaced:true,
  state: {
    info:{} //用户信息
  },
  mutations: {
    refreshInfo(state,info){
      state.info = info;
    }
  },
  actions: {
    async login(context,payload){
      // 1.登录
      let response = await post_json("/user/login",payload);
      let token = response.data.token;
      // 将token缓存起来？cookie、sessionStorage、localStorage
      // 2. 通过token换取用户基本信息
      await context.dispatch("info",token);
    },
    async info(context,token){
      let response = await get("/user/info",{token});
      // 将用户信息设置到info中
      context.commit("refreshInfo",response.data)
    }
  }
}