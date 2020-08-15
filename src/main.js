// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "gridsome-plugin-remark-prismjs-all/themes/night-owl.css";
import { start, done, configure } from "nprogress";
import "nprogress/nprogress.css";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import store from "./store";
import i18n from "./i18n";

configure({
  showSpinner: false,
});

export default function(Vue, { router, appOptions }) {
  Vue.use(Vuex);
  Vue.use(VueI18n);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  appOptions.store = new Vuex.Store(store);
  appOptions.i18n = new VueI18n(i18n);

  router.beforeEach((to, from, next) => {
    if (process.isClient) {
      start();
    }

    next();
  });
  router.afterEach(() => done());
  router.onError(() => done());
}
