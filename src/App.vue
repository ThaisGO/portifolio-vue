<script setup>
import { RouterLink, RouterView } from "vue-router";
import Welcome from "@/components/Particles.vue";
</script>

<template>
  <Welcome />

  <main>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  background-color: var(--color-background-soft);
  opacity: 0.7;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */
</style>
