<template>
  <Layout>
    <div v-html="$page.documentation.content"></div>
  </Layout>
</template>

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
			content
		}
	}
</page-query>
