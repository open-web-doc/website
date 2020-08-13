<template>
  <Layout>
    <ul>
      <li
        v-for="documentation in $static.allDocumentation.edges"
        :key="documentation.node.id"
      >
        <a :href="documentation.node.path">
          {{ documentation.node.title }}
        </a>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<static-query>
	query Documentation {
		allDocumentation: allDocumentation {
			edges {
				node {
					id,
					title,
					path
				}
			}
		}
	}
</static-query>
