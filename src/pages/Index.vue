<template lang="pug">
    Layout
        h1.title {{ $t("Community driven documentation for the web developpers around the world.") }}
        input.search(type="search" v-model="searchTerm" @input="search" :aria-label="$t('search')" :placeholder="$t('search')")
        div(v-if="searchedSomething")
            <br />
        div(v-for="documentation in documentationsMatchingSearch" :key="documentation.id")
            g-link(:to="documentation.path") {{ documentation.title }}
        div(v-if="searchedSomething && !hasMatchingResults") {{ $t("No results found.") }}
</template>

<script>
import Fuse from "fuse.js";
import { mapGetters } from "vuex";
import "string.prototype.startswith";

export default {
    data() {
        return {
            searchTerm: "",
            documentations: [],
            documentationsMatchingSearch: [],
            fuse: null,
        };
    },
    created() {
        this.fillDocumentations();
    },
    mounted() {
        this.setFuzzySearch();
    },
    computed: {
        ...mapGetters(["language"]),
        hasMatchingResults() {
            return this.documentationsMatchingSearch.length > 0;
        },
        searchedSomething() {
            return this.searchTerm.length > 0;
        },
    },
    methods: {
        search() {
            this.documentationsMatchingSearch = this.fuse
                .search(this.searchTerm)
                .map((result) => result.item)
                .filter((item) =>
                    item.path.startsWith(`/documentation/${this.language}`)
                );
        },
        /**
         * Maps through the Gridsome documentation object, and remove the GraphQL "edges" and "node" keys.
         *
         * @return Array<Object>
         */
        fillDocumentations() {
            this.documentations = this.$static.allDocumentation.edges.map(
                function(documentation) {
                    return documentation.node;
                }
            );
        },
        /**
         * Create a Fuze.js instance.
         */
        setFuzzySearch() {
            this.fuse = new Fuse(this.documentations, {
                keys: ["title", "content"],
            });
        },
    },
    metaInfo: {
        title: "Home",
        meta: [
            {
                name: "description",
                content:
                    "Community driven documentation for developpers around the world.",
            },
        ],
    },
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}

.search {
    width: 100%;
}

.title {
    text-align: center;
    margin-top: 0px;
}
</style>

<static-query>
	query Documentation {
		allDocumentation: allDocumentation {
			edges {
				node {
					id,
					title,
					content,
					path
				}
			}
		}
	}
</static-query>
