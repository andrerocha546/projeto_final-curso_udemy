import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFuZHJlIFMuIFJvY2hhIiwiZW1haWwiOiJhbmRyZXJvY2hhNTQ2QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDEwNjU1NTYsImV4cCI6MTYwMTMyNDc1Nn0.AOEuQCfoVQPxtL61yFoYuQldmA61rETrAYJW7DEQkZg'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')