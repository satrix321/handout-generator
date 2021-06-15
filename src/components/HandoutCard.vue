<template>
  <router-link :to="url" class="handout-card">
    <div>
      <img
        class="rounded-xl mb-2"
        :style="{ width: `${width}px` }"
        :src="image"
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
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: "/",
    },
    image: {
      type: String,
      required: true,
    },
    width: Number,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.handout-card {
  display: block;
}
</style>
