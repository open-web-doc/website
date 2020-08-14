<template>
  <Layout>
    <h1 class="title">Community driven documentation for the web developpers around the world.</h1>
    <input
      type="search"
      v-model="searchTerm"
      @input="search"
      class="search"
      aria-label="Search"
      placeholder="search"
    />

    <div v-if="hasMatchingResults">
      <br />
    </div>

    <div v-for="documentation in documentationsMatchingSearch" :key="documentation.id">
      <g-link :to="documentation.path">{{ documentation.title }}</g-link>
    </div>
  </Layout>
</template>

<script>
import Fuse from "fuse.js";

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
    hasMatchingResults() {
      return this.documentationsMatchingSearch.length > 0;
    },
  },
  methods: {
    search() {
      this.documentationsMatchingSearch = this.fuse
        .search(this.searchTerm)
        .map(function (result) {
          return result.item;
        });
    },
    /**
     * Maps through the Gridsome documentation object, and remove the GraphQL "edges" and "node" keys.
     *
     * @return Array<Object>
     */
    fillDocumentations() {
      this.documentations = this.$static.allDocumentation.edges.map(function (
        documentation
      ) {
        return documentation.node;
      });
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
    title: "Hello, world!",
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
