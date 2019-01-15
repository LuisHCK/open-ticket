import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/materialdesignicons.css'
import '@/plugins/moment.plugin'
import '@/plugins/axios.plugin'
import '@/assets/main.scss'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
