import './assets/css/app.css'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

/* Vue imports */
import Vue from 'vue'
import App from './App'
import Router from './router'
import Meta from 'vue-meta'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VueCookies from 'vue-cookies'
import Axios from 'axios'

Axios.defaults.withCredentials = true;
Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(Meta);
Vue.use(VueResource);
Vue.use(Vuetify, {
  theme: {
    primary: '#02B4E2',
    secondary: '#DE4313',
    accent: '#B051E5',
    error: '#DE4313',
    warning: '#FEC163',
    info: '#02B4E2',
    success: '#02CCBA',
    blue: '#02B4E2',
    orange: '#FEC163',
    red: '#DE4313',
    green: '#02CCBA',
    violet: '#B051E5'
  }
});

Vue.http.options.credentials = true;
Vue.http.options.xhr = {withCredentials: true};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>',
});
