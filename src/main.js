// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import Github from './components/github'
import Hello from './components/Hello'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'


Vue.use(Vuetify)
Vue.use(Vuex)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  
  template: '<App/>',
  components: { App}
})
