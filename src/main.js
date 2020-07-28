import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'

import ZLink from './components/general/ZLink'

Vue.config.productionTip = false

Vue.component('z-link', ZLink)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
