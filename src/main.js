import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// require("babel-polyfill")
import {CAN_USE_WEBP, WEBP_EXT} from './api/config'
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/carousel'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.directive('webp', function (el, binding) {
  if (CAN_USE_WEBP) {
    el.src += WEBP_EXT
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
