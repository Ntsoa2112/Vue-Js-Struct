import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'
import Login from '../views/Login.vue'
import store from '../store' // your vuex store 

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters["user/isAuthenticated"]) {
    next()
    return;
  }
  next('/home')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters["user/isAuthenticated"]) {
    next()
    return;
  }
  next('/')
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Accueil.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/membre/:id',
    name: 'show',
    component: Show,
    beforeEnter: ifAuthenticated,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router