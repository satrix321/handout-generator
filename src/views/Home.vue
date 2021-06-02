<template>
  <div class="home">
    <Card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "Home",
  components: {
    Card,
  },
});
</script>
