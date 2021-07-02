<template>
  <div :class="`letter relative ${variant}`">
    <img class="absolute z-2" src="@/assets/paper-texture-01.jpg" />
    <div class="relative z-1">
      <p>Content</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Letter",
  props: {
    content: String,
    variant: {
      type: String as PropType<"default" | "old">,
      default: "default",
    },
  },
});
</script>

<style scoped lang="scss">
.letter {
  &.handwritten {
  }
}
</style>
