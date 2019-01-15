import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Landing from './views/Landing.vue'
import { validate } from './plugins/router-validator.plugin'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
      meta: {
        withoutSideBar: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true, rolesRequired: ['admin', 'moderator'] }
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('./views/Tickets.vue'),
      meta: {
        requiresAuth: true,
        rolesRequired: ['admin', 'moderator', 'customer']
      }
    },
    {
      path: '/tickets/:id',
      name: 'ticket',
      component: () => import('./views/Ticket.vue'),
      meta: {
        requiresAuth: true,
        rolesRequired: ['admin', 'moderator', 'customer']
      }
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('./views/Customers.vue'),
      meta: { requiresAuth: true, rolesRequired: ['admin', 'moderator'] }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        withoutSideBar: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        withoutSideBar: true
      }
    },
    {
      path: '/403',
      name: '403',
      component: () => import('./views/403.vue')
    }
  ]
})
validate(router)
export default router
