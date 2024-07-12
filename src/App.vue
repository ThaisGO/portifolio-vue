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

  <main class="bg-background w-11/12 my-8 mx-auto p-8 rounded-xl opacity-80">
    <header class="flex justify-between items-center mb-10">
      <h1 class="text-2xl font-bold border-4 py-1 px-2"> TG </h1>
      <nav>
        <NavigationMenu class="border-2 rounded-3xl">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink class="rounded-3xl" href="#about" :class="navigationMenuTriggerStyle()">
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink class="rounded-3xl" href="#projects" :class="navigationMenuTriggerStyle()">
                Experiência
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink class="rounded-3xl" href="#experience" :class="navigationMenuTriggerStyle()">
                Projetos
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
