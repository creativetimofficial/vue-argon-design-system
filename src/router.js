import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Components from "./views/Components.vue";
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    }
  ]
});
