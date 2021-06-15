<template>
  <MasonryContainer>
    <HandoutCard
      title="Old Newspaper Article"
      :image="require('@/assets/newspaper-headline.jpg')"
      url="/handout/old-newspaper"
      width="300"
      class="masonry-item"
    />
  </MasonryContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MasonryContainer from "@/components/MasonryContainer.vue";
import HandoutCard from "@/components/HandoutCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    MasonryContainer,
    HandoutCard,
  },
});
</script>
