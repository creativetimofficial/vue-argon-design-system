import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    }
  ]
});
