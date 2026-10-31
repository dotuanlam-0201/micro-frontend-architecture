<script setup lang="ts">
import Button from '@repo/ui/vue/Button'
import buttonStyles from '@repo/ui/styles/button.module.css'
</script>

<template>
  <main>
    <h1>order</h1>
    <p>
      The order management app in this monorepo, built with Vue and rendered with headless
      components from <code>@repo/ui</code>.
    </p>
    <ul>
      <li>Native, unstyled primitives from Base UI Vue</li>
      <li>
        Shared styling through CSS modules in <code>packages/ui/styles</code>
      </li>
      <li>
        Ships alongside <code>web</code>, <code>docs</code> and <code>dashboard</code> in the same
        Turborepo workspace
      </li>
    </ul>
    <Button :class="buttonStyles.Button">Create order</Button>
  </main>
</template>
