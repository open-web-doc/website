<template lang="pug">
    .layout
        header.header
            strong
                g-link(to='/') {{ $static.metadata.siteName }}
            nav.nav
                select(v-model='selectedLang', :aria-label="$t('Language')")
                    option(v-for='lang in languages', :key='lang', :value='lang', :selected='lang == language') {{ lang | upper }}
                a.nav__link.darkmode-button(href='javascript:;', @click='toggleDarkmode') 🌓
        slot
        footer.header
            div
                slot(name="footer")
            nav.nav
                a.nav__link(href='https://github.com/open-web-doc/website') Github
                g-link.nav__link(to='/about/')
                    | {{ $t("About") }}
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import upper from "../filters/upper";

export default {
    data() {
        return {
            darkmode: null,
            languages: [],
            selectedLang: "en",
        };
    },
    async created() {
        await this.setDarkmode();
        this.setLanguages();
        this.setSelectedLang();
    },
    methods: {
        ...mapActions(["setDarkmode", "toggleDarkmode", "setLanguage"]),
        setLanguages() {
            this.languages = new Set(
                this.$static.allDocumentation.edges.map(function(
                    documentation
                ) {
                    const path = documentation.node.path;
                    const matches = path.match(/^\/documentation\/(\w+)/);

                    return matches[1];
                })
            );
        },
        setSelectedLang() {
            this.selectedLang = this.language;
            this.$i18n.locale = this.language;
        },
    },
    watch: {
        async selectedLang() {
            await this.setLanguage(this.selectedLang);
            this.$i18n.locale = this.selectedLang;
        },
    },
    computed: {
        ...mapGetters(["language"]),
    },
    filters: {
        upper,
    },
};
</script>

<static-query>
query metadata {
  metadata {
    siteName
  }

  allDocumentation {
    edges {
      node {
        path
      }
    }
  }
}
</static-query>

<style>
body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
}

.layout {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.nav__link {
    margin-left: 20px;
}

.darkmode-button {
    text-decoration: none;
}

.darkmode--activated a {
    color: black;
}
</style>
