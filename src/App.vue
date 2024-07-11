<script setup>
import { ref, watchEffect } from 'vue'
import { RouterView } from "vue-router";
import { useColorMode } from '@vueuse/core'

import Welcome from "@/components/Particles.vue";

import { Switch } from '@/components/ui/switch'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

const mode = useColorMode()
const isDarkMode = ref(mode.value === 'dark')

watchEffect(() => {
  isDarkMode.value = mode.value === 'dark'
})

const toggleTheme = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Welcome />

  <main class="bg-background w-11/12 my-8 mx-auto p-4 rounded-xl">
    <header class="flex">
      <h1>
        TG
      </h1>
      <nav>
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

      <div>
        <Switch :checked="isDarkMode" @update:checked="toggleTheme" />
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
main {
  max-width: 1400px;
  /* margin: 2rem auto; */
  /* padding: 1rem; */
  /* border-radius: 0.75rem; */
  opacity: 0.8;
}

header {
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  border: 1px solid aliceblue;
  padding: 4px 8px;
}


nav a.router-link-exact-active {
  color: var(--primary);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
