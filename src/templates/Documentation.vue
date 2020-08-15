<template lang="pug">
    Layout
        div(v-html="$page.documentation.content")
        div(slot="footer")
            a(:href="githubEditPage") {{ $t("Propose an improvement") }}
</template>

<script>
import { mapGetters } from "vuex";
import "string.prototype.startswith";

export default {
    computed: {
        ...mapGetters(["language"]),
        githubFilePath() {
            return this.$page.documentation.path.replace(/\/$/, ".md");
        },
        githubEditPage() {
            return `https://github.com/open-web-doc/website/edit/master${
                this.githubFilePath
            }`;
        },
    },
    methods: {
        urlLanguageIs(language) {
            return this.$route.path.startsWith(`/documentation/${language}`);
        },
        getUrlWithLanguage(oldLanguage, newLanguage) {
            return this.$route.path.replace(
                `/documentation/${oldLanguage}`,
                `/documentation/${newLanguage}`
            );
        },
        goToUrlWithLanguage(oldLanguage, newLanguage) {
            this.$router.push({
                path: this.getUrlWithLanguage(oldLanguage, newLanguage),
            });
        },
    },
    watch: {
        language(newValue, oldValue) {
            if (!this.urlLanguageIs(newValue)) {
                this.goToUrlWithLanguage(oldValue, newValue);
            }
        },
    },
    metaInfo() {
        return {
            title: this.$page.documentation.title,
            meta: [
                {
                    name: "description",
                    content: this.$page.documentation.description,
                },
            ],
        };
    },
};
</script>

<style>
h1 {
    margin-top: 0px;
}
</style>

<page-query>
	query Documentation ($path: String!) {
		documentation: documentation (path: $path) {
			id,
			title,
			description,
			content,
            path
		}
	}
</page-query>
