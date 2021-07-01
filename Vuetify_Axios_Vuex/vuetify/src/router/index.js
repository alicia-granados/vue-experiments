import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "grid" */ '../views/Grid.vue')
  },
  {
    path: '/botones',
    name: 'Botones',
    component: () => import(/* webpackChunkName: "grid" */ '../views/Botones.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
