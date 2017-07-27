// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'

import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import lodash from 'lodash'
import moment from 'moment'
import 'moment/locale/pl'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import Firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store/index'
require('./stylus/main.styl')

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueFire)
Vue.use(VueLodash, lodash)

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).locale('pl').format('llll')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
