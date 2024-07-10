<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useColorMode } from '@vueuse/core'

import Welcome from "@/components/Particles.vue";

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

const mode = useColorMode()
</script>

<template>
  <Welcome />

  <main class="bg-background">
    <header class="flex">
      <div> < TG ></div>
      <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#about" :class="navigationMenuTriggerStyle()">
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

      <div class="btn">
        <Button @click="mode = 'dark'" variant="outline">Dark</Button>
        <Button @click="mode = 'light'" variant="outline">Light</Button>
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 90%;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 0.75rem;
  opacity: 0.8;
}

header {
  justify-content: space-between;
  margin-bottom: 2rem;
}


nav a.router-link-exact-active {
  color: var(--primary);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

</style>
