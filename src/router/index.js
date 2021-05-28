import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import detail from "@/views/detail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
  },

  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/detail',
    name: 'detail',
    component: detail
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
