<template>
  <Layout>
    <ul>
      <li
        v-for="documentation in $static.allDocumentation.edges"
        :key="documentation.node.id"
      >
        <g-link :to="documentation.node.path">
          {{ documentation.node.title }}
        </g-link>
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
