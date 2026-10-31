<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
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
