import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/carousel'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
