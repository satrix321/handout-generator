<template>
  <router-link
    :to="url"
    class="handout-card"
    :data-image-loaded="isImageLoaded"
  >
    <div>
      <img
        class="rounded-xl mb-2"
        ref="imgRef"
        :style="{ width: `${width}px` }"
        :src="image"
      />
      <p class="mx-2">{{ title }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

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
    const imgRef = ref<HTMLImageElement>();
    const isImageLoaded = ref<boolean>(false);

    onMounted(() => {
      if (imgRef.value) {
        if (imgRef.value.complete) {
          isImageLoaded.value = true;
        } else {
          imgRef.value.addEventListener("load", () => {
            isImageLoaded.value = true;
          });
        }
      }
    });

    return {
      imgRef,
      isImageLoaded,
    };
  },
});
</script>

<style scoped lang="scss">
.handout-card {
  display: block;
}
</style>
