import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAwesomeSwiper, axios, VueAxios /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
