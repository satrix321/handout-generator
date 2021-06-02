<template>
  <header class="fixed h-16 flex items-center mx-4 z-50 bg-white w-full">
    <router-link to="/">HANDOUT GENERATOR</router-link>
  </header>
  <div class="container mx-auto pt-16">
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
}
</style>
