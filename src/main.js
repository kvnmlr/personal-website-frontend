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
    primary: '#4DA7DC',
    secondary: '#9C53A2',
    accent: '#F7BE7B',
    error: '#9C53A2',
    warning: '#F7BE7B',
    info: '#4DA7DC',
    success: '#49c3b7',
    blue: '#4DA7DC',
    orange: '#F7BE7B',
    red: '#9C53A2',
    green: '#49c3b7',
    violet: '#7B83C1'
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
