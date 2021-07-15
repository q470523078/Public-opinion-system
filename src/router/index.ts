import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/components/Admin.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
