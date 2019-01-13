import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Landing from './views/Landing.vue'

Vue.use(Router)

export default new Router({
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
      component: Home
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('./views/Tickets.vue')
    },
    {
      path: '/tickets/:id',
      name: 'ticket',
      component: () => import('./views/Ticket.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('./views/Customers.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        withoutSideBar: true
      }
    }
  ]
})
