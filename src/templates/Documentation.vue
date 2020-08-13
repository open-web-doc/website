<template>
  <Layout>
    <div v-html="$page.documentation.content"></div>
  </Layout>
</template>

<page-query>
	query Documentation ($path: String!) {
		documentation: documentation (path: $path) {
			id,
			title,
			content
		}
	}
</page-query>
