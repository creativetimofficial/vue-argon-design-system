/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import VueMarkdown from 'vue-markdown';
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSpinners from 'vue-spinners'
import VueGoogleApi from 'vue-google-api'

import './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyDLASxmRzFM9QroycxD-MNfP0L1bwWx0Ec',
  clientId: '678304282895-j9do95s9dt0kvh4no3ng2ll1e82kcvt8.apps.googleusercontent.com',
  scope: 'profile email calendar'
}

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueMarkdown);
Vue.use(VueAxios, axios);
Vue.use(VueSpinners);
Vue.use(VueGoogleApi, config)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");