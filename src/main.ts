import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios, {AxiosStatic} from 'axios'
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(BootstrapVue)

Vue.use(BootstrapVueIcons)
declare module 'vue/types/vue' {

  interface Vue {
    $http: AxiosStatic
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
