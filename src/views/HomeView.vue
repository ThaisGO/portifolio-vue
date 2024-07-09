<script>
import Welcome from '../components/Welcome.vue';

export default {
  name: "HomeView",
  components: { Welcome },

  setup() {

  }
}
</script>

<template>
  <nav>nav hehre</nav>
  <main>
    <div class="content">
      
    </div>
  </main>
</template>

<style>
.content {
  height: 100px;
}

.particles-js {
    background-image: url("./assets/sky.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
