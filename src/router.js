import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import KnowledgeBase from "./views/KnowledgeBase.vue";
import Support from "./views/Support.vue";
import Datenschutz from "./views/Datenschutz.vue";
import Nutzungsvereinbarung from "./views/Nutzungsvereinbarung.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/knowledgebase",
      name: "knowledgebase",
      components: {
        header: AppHeader,
        default: KnowledgeBase,
        footer: AppFooter
      }
    },
    {
      path: "/support",
      name: "support",
      components: {
        header: AppHeader,
        default: Support,
        footer: AppFooter
      }
    },
    {
      path: "/datenschutz",
      name: "datenschutz",
      components: {
        header: AppHeader,
        default: Datenschutz,
        footer: AppFooter
      }
    },
    {
      path: "/nutzungsvereinbarung",
      name: "nutzungsvereinbarung",
      components: {
        header: AppHeader,
        default: Nutzungsvereinbarung,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
