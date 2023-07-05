import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Work from "./views/Work.vue";
import Education from "./views/Education.vue"
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/education",
      name: "education",
      components: {
        header: AppHeader,
        default: Education,
        footer: AppFooter
      }
    },
    {
      path: "/work",
      name: "work",
      components: {
        header: AppHeader,
        default: Work,
        footer: AppFooter
      }
    },


  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
