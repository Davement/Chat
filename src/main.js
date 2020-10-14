import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import router from './router'
import 'vuesax/dist/vuesax.css'
import 'boxicons/css/boxicons.css'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(Vuesax)
Vue.use(VueCookies)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')