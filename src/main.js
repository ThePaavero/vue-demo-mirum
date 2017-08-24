import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {App}
})
