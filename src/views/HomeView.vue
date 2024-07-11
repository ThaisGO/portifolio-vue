<script setup>
  import About from '@/components/About.vue';
  import Experience from '@/components/Experience.vue';
  import Projects from '@/components/Projects.vue' 
  import Footer from '@/components/Footer.vue' 

  import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div id="about">
    <About />
  </div>

  <div id="experience">
    <Experience />
  </div>

  <div id="projects" class="my-1">
    <Projects />
  </div>

  <Separator />
  
  <footer>
    <Footer />
  </footer>

</template>

<style>


</style>
