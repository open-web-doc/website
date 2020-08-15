// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "gridsome-plugin-remark-prismjs-all/themes/night-owl.css";
import Vuex from "vuex";
import modules from "./modules";
import Darkmode from "darkmode-js";
import { start, done, configure } from "nprogress";
import "nprogress/nprogress.css";
import VueI18n from "vue-i18n";

configure({
  showSpinner: false,
});

export default function(Vue, { router, appOptions }) {
  Vue.use(Vuex);
  Vue.use(VueI18n);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  let language = "en";

  if (process.isClient) {
    language = localStorage.getItem("language") ?? JSON.stringify("en");

    try {
      language = JSON.parse(language);
    } catch (exception) {
      language = "en";
    }
  }

  appOptions.store = new Vuex.Store({
    modules,
    state: {
      darkmode: null,
      language,
    },
    getters: {
      darkmode: (state) => state.darkmode,
      language: (state) => state.language,
    },
    actions: {
      setDarkmode: async ({ commit }) => await commit("setDarkmode"),
      toggleDarkmode: async ({ commit }) => await commit("toggleDarkmode"),
      setLanguage: async ({ commit }, language) =>
        await commit("setLanguage", language),
    },
    mutations: {
      setDarkmode: (state) => {
        if (!state.darkmode) {
          state.darkmode = new Darkmode();
        }
      },
      toggleDarkmode: (state) => state.darkmode?.toggle(),
      setLanguage: (state, language) => {
        localStorage.setItem("language", JSON.stringify(language));
        state.language = language;
      },
    },
  });

  appOptions.i18n = new VueI18n({
    fallbackLocale: "en",
    locale: "en",
    messages: {
      en: {
        About: "About",
        "Community driven documentation for the web developpers around the world.":
          "Community driven documentation for the web developpers around the world.",
        "I am a web developer that largely used MDN to document myself for my web projects.":
          "I am a web developer that largely used MDN to document myself for my web projects.",
        search: "search",
        "After having heard the Mozilla layoffs, people were concerned about the future of MDN. If you think about it, for the most part of our job, we rely on information coming from this website.":
          "After having heard the Mozilla layoffs, people were concerned about the future of MDN. If you think about it, for the most part of our job, we rely on information coming from this website.",
        "Usually, having a single actor for such an important service is not a safe position for all of us, Mozilla included. This isn't driving for a constant improvement, nor push for innovative way to bring the information.":
          "Usually, having a single actor for such an important service is not a safe position for all of us, Mozilla included. This isn't driving for a constant improvement, nor push for innovative way to bring the information.",
        "This being a fact, I wanted to offer an alternative to MDN documentation, with new ideas to make searching information easier. I hope you will like the idea.":
          "This being a fact, I wanted to offer an alternative to MDN documentation, with new ideas to make searching information easier. I hope you will like the idea.",
        "Open Web Doc is driven by Github contributions. Like MDN, you can contribute to it since you are logged on Github. Just make a pull request, submit your change or your addition, and it will be reviewed before pushed to our Github hosted documentation website.":
          "Open Web Doc is driven by Github contributions. Like MDN, you can contribute to it since you are logged on Github. Just make a pull request, submit your change or your addition, and it will be reviewed before pushed to our Github hosted documentation website.",
      },
      fr: {
        About: "À propos",
        "Community driven documentation for the web developpers around the world.":
          "Documentation dirigé par la communauté pour les développeurs du monde entier.",
        search: "rechercher",
        "I am a web developer that largely used MDN to document myself for my web projects.":
          "Je suis un développeur web qui a très largement utilisé MDN afin de me documentation pour mes projets web.",
        "After having heard the Mozilla layoffs, people were concerned about the future of this website. If you think about it, for the most part of our job, we rely on information coming from this website.":
          "Après avoir entendu les licenciements chez Mozilla, les gens furent concernés par le future de ce site web. Si vous y réflechissez, pour la plus grande partie de notre travail, nous dépendons des informations qui proviennent de ce site web.",
        "Usually, having a single actor for such an important service is not a safe position for all of us, Mozilla included. This isn't driving for a constant improvement, nor push for innovative way to bring the information.":
          "La plus part du temps, avoir un seul et même acteur pour un service aussi important n'est pas une situation saine pour nous tous, y compris pour Mozilla. Ceci n'aide pas à pousser une amélioration constante, ni motive à apporter de l'innovation dans la façon dont l'information est transmise.",
        "This being a fact, I wanted to offer an alternative to MDN documentation, with new ideas to make searching information easier. I hope you will like the idea.":
          "De ce fait, j'ai voulu offrir une alternative à la documentation MDN, avec de nouvelles idées pour rendre l'information plus simple à trouver. J'espère que vous aimerez l'idée.",
        "Open Web Doc is driven by Github contributions. Like MDN, you can contribute to it since you are logged on Github. Just make a pull request, submit your change or your addition, and it will be reviewed before pushed to our Github hosted documentation website.":
          "Open Web Doc est dirigé par les contributions Github. Comme MDN, vous pouvez contribuer du moment que vous êtes connecté à Github. Créez simplement une Pull Request, validez votre changement ou votre ajout, et il sera relu avant d'être poussé sur notre documentation hébergée sur Github.",
      },
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
