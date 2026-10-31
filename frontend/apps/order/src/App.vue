<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import typographyStyles from '@repo/ui/styles/typography.module.css'

const apps = [
  { name: 'web', url: `http://localhost:${import.meta.env.PORT_WEB}` },
  { name: 'docs', url: `http://localhost:${import.meta.env.PORT_DOCS}` },
  { name: 'order', url: `http://localhost:${import.meta.env.PORT_ORDER}` },
  { name: 'dashboard', url: `http://localhost:${import.meta.env.PORT_DASHBOARD}` },
]
</script>

<template>
  <div :class="typographyStyles.Typography">
    <nav class="apps">
      <a
        v-for="app in apps"
        :key="app.name"
        :href="app.url"
        :class="{ active: app.name === 'order' }"
      >
        {{ app.name }}
      </a>
    </nav>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem 0;
  max-width: 42rem;
  margin: 0 auto;
  font-weight: 600;
}

nav a {
  color: var(--color-text-muted);
  text-decoration: none;
}

nav.apps a.active {
  color: var(--color-link);
}

nav a.router-link-exact-active {
  color: var(--color-link);
}
</style>
