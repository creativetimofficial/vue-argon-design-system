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
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import GAuth from 'vue-google-oauth2'
import './registerServiceWorker'

const gauthOption = {
  clientId: 'landingpage-273416.apps.googleusercontent.com',
  scope: 'profile email calendar',
  prompt: 'select_account'
}

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(GAuth, gauthOption)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");