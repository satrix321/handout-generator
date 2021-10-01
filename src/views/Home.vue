<template>
  <MasonryContainer>
    <HandoutCard
      v-for="item in filteredHandoutCards"
      :key="item.title"
      :title="item.title"
      :url="item.url"
      :image="item.image"
      width="300"
      class="masonry-item"
    />
  </MasonryContainer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import MasonryContainer from "@/components/MasonryContainer.vue";
import HandoutCard from "@/components/HandoutCard.vue";

type HandoutCardRecord = {
  title: string;
  url: string;
  image: unknown;
};

export default defineComponent({
  name: "Home",
  components: {
    MasonryContainer,
    HandoutCard,
  },
  setup() {
    const filterValue = ref<string>("");
    const handoutCards = ref<HandoutCardRecord[]>([
      {
        title: "Newspaper Article",
        url: "/handout/newspaper",
        image: require("@/assets/handout-samples/newspaper.jpg"),
      },
      {
        title: "Old Newspaper Article",
        url: "/handout/old-newspaper",
        image: require("@/assets/handout-samples/old-newspaper.jpg"),
      },
      {
        title: "Handwritten Letter",
        url: "/handout/handwritten-letter",
        image: require("@/assets/handout-samples/handwritten-letter.jpg"),
      },
      {
        title: "Old Handwritten Letter",
        url: "/handout/old-handwritten-letter",
        image: require("@/assets/handout-samples/old-handwritten-letter.jpg"),
      },
      {
        title: "Old Business Card 01",
        url: "/handout/old-business-card-01",
        image: require("@/assets/handout-samples/old-business-card-01.jpg"),
      },
    ]);

    const filteredHandoutCards = computed(() => {
      return handoutCards.value.filter((item) =>
        item.title.toLowerCase().includes(filterValue.value.toLowerCase())
      );
    });

    return {
      filterValue,
      filteredHandoutCards,
    };
  },
});
</script>
