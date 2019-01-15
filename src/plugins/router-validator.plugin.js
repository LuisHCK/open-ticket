import store from '@/store'

export function validate(router) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => !record.meta.allowSideBar)) {
      // store.commit('disableSidenav')
    }
    /**
     * When a route requires auth check for logged user
     * if not logged send to login page
     */
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLogged) {
        // if has role requred can go to next
        if (hasRequiredRole(to)) {
          next()
        } else {
          next({ name: '403' })
        }
      } else {
        next({ name: 'login', params: { showToast: 'true' } })
      }
    } else if (to.matched.some(record => record.meta.isAuthRelated)) {
      /**
       * When an user is logged not allow to enter in auth related
       * routes like Login or Singup
       */
      if (store.getters.isLogged) {
        next({ name: 'home' })
      } else {
        next()
      }
    } else {
      next()
    }
  })
}

function hasRequiredRole(to) {
  return to.matched.some(record => {
    return store.getters.getRoles.some(r =>
      record.meta.rolesRequired.includes(r)
    )
  })
}
