// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import {ClientTable} from 'vue-tables-2'
import VueMaterial from 'vue-material'

Vue.config.productionTip = false
Vue.use(ClientTable)
Vue.use(VueMaterial)
import 'vue-material/dist/vue-material.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
