<template>
  <header
    class="
      h-16
      flex
      items-center
      px-4
      z-50
      bg-gray-100
      border-b-2 border-black
      w-full
    "
  >
    <div class="logo-container">
      <router-link to="/" class="logo">HANDOUT GENERATOR</router-link>
    </div>
  </header>
  <div class="container mx-auto pt-16 pb-8">
    <router-view />
  </div>
  <!-- <footer>Footer text</footer> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
header {
  display: flex;

  .logo {
    font-family: "Bebas Neue";
    font-size: 2rem;
  }
}

.container {
  max-width: 1600px;
}
</style>
