import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFuZHJlIFMuIFJvY2hhIiwiZW1haWwiOiJhbmRyZXJvY2hhNTQ2QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDEzMTExOTIsImV4cCI6MTYwMTU3MDM5Mn0.zFuPhS5IaBikKV4RmPuHUylHCDnwfadSCOZy3PvNPKg'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app') 