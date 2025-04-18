import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/project',
      name: 'project',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contactview.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/facebook',
      name: 'facebook',
      beforeEnter(to, from, next) {
        window.location.replace('https://facebook.com/daemperor.d')
      }
    },
    {
      path: '/github',
      name: 'github',
      beforeEnter(to, from, next) {
        window.location.replace('https://github.com/emdes12')
      }
    },
    {
      path: '/linkedin',
      name: 'linkedin',
      beforeEnter(to, from, next) {
        window.location.replace('https://linkedin.com/in/alawiye-muritala')
      }
    },
  ],
})

export default router
