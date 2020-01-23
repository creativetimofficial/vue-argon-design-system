import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/services/Services.vue";
import Metal from "./views/services/Metal.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/services",
      name: "services",
      components: {
        header: AppHeader,
        default: Services,
        footer: AppFooter
      }
    },
    {
      path: "/services/metal",
      name: "metal",
      components: {
        header: AppHeader,
        default: Metal,
        footer: AppFooter
      }
    },
    {
      path: "/projects",
      name: "projects",
      components: {
        header: AppHeader,
        default: Projects,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    }
  ],
});
