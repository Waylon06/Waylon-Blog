import Vue from 'vue'
import App from './App.vue'

import router from '../router'

import { Switch} from 'element-ui'

Vue.use(Switch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
