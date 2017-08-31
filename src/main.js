import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'assets/css/reset.css'
import 'assets/css/bootfont.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueLazyload, {
  loading: require('assets/images/defaultFolderImage@2x.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
