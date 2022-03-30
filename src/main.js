import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import vuetify from './plugins/vuetify'
import '@/assets/css/scrollbar.css'
import '@/assets/css/global.css'
import VueTheMask from 'vue-the-mask'
import Toasted from 'vue-toasted';
import moment from "moment";


Vue.use(VueTheMask)
Vue.use(Toasted, {
  closeOnSwipe: true,
  position: "top-right",
  iconPack: "mdi",
  duration: null,
  action : {
    icon: 'mdi-close',
    onClick : (e, toastObject) => {
      toastObject.goAway(0);
    }
  },
})

Vue.prototype.$moment = moment
Vue.prototype.$console = console
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
