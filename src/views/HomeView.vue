<script setup>
  import { onBeforeMount } from 'vue';
  
  import About from '@/components/About.vue';
  import Experience from '@/components/Experience.vue';
  import Projects from '@/components/Projects.vue' 
  import Footer from '@/components/Footer.vue' 

  import { Separator } from '@/components/ui/separator'
  import getExperience from '@/composables/getExperience';

  const {listExp, error, getExp} = getExperience()

  onBeforeMount(() => {
    getExp();
  })
</script>

<template>
  <div id="about" class="mb-10">
    <About />
  </div>

  <div id="experience" class="mb-10">
    <Experience :experiences="listExp"/>
  </div>

  <div id="projects" class="mb-10">
    <Projects />
  </div>

  <Separator class="mb-6"/>
  
  <footer>
    <Footer />
  </footer>
</template>

