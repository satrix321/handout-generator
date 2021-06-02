<template>
  <div class="handwritten-letter relative">
    <img class="absolute z-2" src="@/assets/paper-texture-01.jpg" />
    <div class="relative z-1">
      <p>Content</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HandwrittenLetter",
  props: {
    content: String,
  },
});
</script>

<style scoped lang="scss"></style>
