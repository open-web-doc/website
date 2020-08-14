// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "gridsome-plugin-remark-prismjs-all/themes/night-owl.css";
import Vuex from "vuex";
import modules from "./modules";
import Darkmode from "darkmode-js";
import { start, done, configure } from "nprogress";
import "nprogress/nprogress.css";

configure({
  showSpinner: false,
});

export default function(Vue, { router, appOptions }) {
  Vue.use(Vuex);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  appOptions.store = new Vuex.Store({
    modules,
    state: {
      darkmode: null,
    },
    getters: {
      darkmode: (state) => state.darkmode,
    },
    actions: {
      setDarkmode: async ({ commit }) => await commit("setDarkmode"),
      toggleDarkmode: async ({ commit }) => await commit("toggleDarkmode"),
    },
    mutations: {
      setDarkmode: (state) => {
        if (!state.darkmode) {
          state.darkmode = new Darkmode();
        }
      },
      toggleDarkmode: (state) => state?.darkmode?.toggle(),
    },
  });

  router.beforeEach((to, from, next) => {
    if (process.isClient) {
      start();
    }

    next();
  });

  router.afterEach(() => done());

  router.onError(() => done());
}
