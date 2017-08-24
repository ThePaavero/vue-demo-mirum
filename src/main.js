import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'

Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: {App}
})
