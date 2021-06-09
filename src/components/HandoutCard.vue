<template>
  <router-link :to="url">
    <div>
      <img
        class="rounded-xl mb-2"
        style="width: 300px"
        src="../assets/newspaper-headline.jpg"
      />
      <p class="mx-2">{{ title }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HandoutCard",
  props: {
    title: String,
    url: {
      type: String,
      default: "/",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
