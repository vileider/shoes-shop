import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/women',
    name: 'Women',
    component: () => import('../views/Women.vue')
  },
  {
    path: '/men',
    name: 'Men',
    component: () => import('../views/Men.vue')
  },
  {
    path: '/kids',
    name: 'Kids',
    component: () => import('../views/Kids.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
