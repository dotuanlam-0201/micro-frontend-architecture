<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import typographyStyles from '@repo/ui/styles/typography.module.css'
</script>

<template>
  <div :class="typographyStyles.Typography">
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

nav a.router-link-exact-active {
  color: var(--color-link);
}
</style>
