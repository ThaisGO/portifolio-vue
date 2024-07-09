<script setup>
import { RouterLink, RouterView } from "vue-router";
import Welcome from "@/components/Particles.vue";

import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
</script>

<template>
  <Welcome />

  <main class="">
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem class="bg-">
            <NavigationMenuLink href="#" :class="navigationMenuTriggerStyle()">
              About Me
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#" :class="navigationMenuTriggerStyle()">
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#" :class="navigationMenuTriggerStyle()">
              Experience
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  background-color: var(--background);
  opacity: 0.7;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
} */

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
