<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <a class="nav__link" href="https://github.com/open-web-doc/website"
          >Github</a
        >
        <g-link class="nav__link" to="/about/">About</g-link>
        <a
          href="javascript:;"
          class="nav__link darkmode-button"
          @click="toggleDarkmode"
          >🌓</a
        >
      </nav>
    </header>
    <slot />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      darkmode: null,
    };
  },
  async created() {
    await this.setDarkmode();
  },
  methods: {
    ...mapActions(["setDarkmode", "toggleDarkmode"]),
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
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
