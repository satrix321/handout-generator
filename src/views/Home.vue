<template>
  <div>
    <HandoutCard title="Newspaper Article" url="/handout/newspaper" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HandoutCard from "@/components/HandoutCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    HandoutCard,
  },
});
</script>
