import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './firebase'
import Vuefire from 'vuefire'

Vue.use(Vuefire);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
