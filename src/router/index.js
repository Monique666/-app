import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'
import Address from '../pages/manager/Address.vue'
import Category from '../pages/manager/Category.vue'
import ConfirmOrder from '../pages/manager/ConfirmOrder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manager',
    component: Manager,
    children:[{
      path:"home",
      component:() => import('../pages/manager/Home.vue')
    },{
      path:"order",
      component:() => import('../pages/manager/Order.vue')
    },{
      path:"user",
      component:() => import('../pages/manager/User.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },{
    path: '/address',
    name: 'address',
    component: () => import('../pages/manager/Address.vue')
  },{
    path:'/category/',
    name:'category',
    component:() =>import('../pages/manager/Category.vue')
  },{
    path:'/confirmorder',
    name:'confirmorder',
    component:() =>import('../pages/manager/ConfirmOrder.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
