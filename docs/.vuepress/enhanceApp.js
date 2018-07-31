import DemoBlock from './demo-block/demo-block'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import * as Components from '@/components/index'
import ArgonKit from '@/plugins/argon-kit'
import VueClipboard from 'vue-clipboard2'
import BootstrapVue from '../../node_modules/bootstrap-vue';
import './doc_styles.scss'
import './argon-docs.css'
import getElements from './utils/get-sidebar-elements';

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  locale.use(lang);
  Vue.use(ArgonKit)
  Vue.use(VueClipboard);
  Vue.use(BootstrapVue);
  Vue.component('demo-block', DemoBlock);
  let componentEntries = Object.entries(Components);
  for(let [name, component] of componentEntries) {
    Vue.component(component.name || name, component)
  }
  Vue.prototype.$docs = Object.values(Components);
  let docComponents = getElements(componentEntries);
  siteData.themeConfig.sidebar = siteData.themeConfig.sidebar.concat(docComponents);
}
