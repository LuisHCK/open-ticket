import axios from 'axios'
import Vue from 'vue'
import store from '../store'
// import EventBus from '@/plugins/event-bus'

const Axios = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const http = {
  install(Vue) {
    Vue.prototype.$http = Axios
  }
}

/**
 * JWT has an expiration time.
 * This method validates if token is expired or not
 * Compares curren time with date given from server,
 * when is valid continues with execution
 * buen if token isn't valid raises an error an display
 * an alert
 */
function validateExpritation() {
  const expirationDate = store.getters.getExpDate
  const now = new Date()
  if (now.getTime() > expirationDate.getTime()) {
    // Emit an alert to main Vue component
    // EventBus.$emit('token-expired')
    store.dispatch('logOut')
  }
}

Axios.interceptors.request.use(
  function(config) {
    const token = store.getters.getToken
    const logged = store.getters.isLogged
    if (logged) {
      // If token exists validate token expriration
      validateExpritation()
      config.headers.Authorization = token
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

Vue.use(http)
