import Home from '@/views/Home/Home.vue'
// import Landing from "@/views/Landing/Landing.vue";
import Statistics from '@/views/Statistics/Statistics.vue'
import Teams from '@/views/Teams/Teams.vue'
import { getAuth } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const auth = getAuth()

const router = createRouter({
  linkActiveClass: 'active-menu',
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    },
    {
      path: '/teams',
      name: 'teams',
      // meta: {
      //   needsAuth: true,
      // },
      component: Teams
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        next()
      } else {
        next('/landing')
      }
    })
  } else {
    next()
  }
})
export default router
