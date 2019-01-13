import Vue from 'vue'
import Moment from 'moment'

const moment = {
  install(Vue) {
    Vue.prototype.$moment = Moment
  }
}

Vue.use(moment)

Vue.filter('fromNow', function(value) {
  return Moment(value)
    .startOf('hour')
    .fromNow()
})

Vue.filter('calendar', function(value) {
  return Moment(value).calendar()
})
