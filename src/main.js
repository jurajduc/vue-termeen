import '@babel/polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
Vue.use(ElementUI);
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'
// import axios from 'axios';


import Notifications from './components/Notifications'
Vue.component('Notifications', Notifications);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL = 'https://termin.docifinder.at/api/v1';
// axios.defaults.headers['Content-Type'] = 'multipart/form-data'
//axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
