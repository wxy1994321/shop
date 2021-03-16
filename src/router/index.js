import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const home = () => import('views/home/home.vue')
const classify = () => import('views/classify/classify.vue')
const shopcat = () => import('views/shopcat/shopcat.vue')
const login = () => import('views/login/login.vue')
const detail = () => import('views/detail/detail.vue')

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/shopcat',
    component: shopcat
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router