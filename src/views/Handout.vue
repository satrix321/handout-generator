<template>
  <div class="handout">
    <component :is="handoutComponent" />
  </div>
</template>

<script lang="tsx">
import { Component, defineComponent, toRefs } from "vue";
import Newspaper from "@/components/handouts/Newspaper.vue";
import HandwrittenLetter from "@/components/handouts/HandwrittenLetter.vue";
import BusinessCard from "@/components/handouts/BusinessCard.vue";

export default defineComponent({
  name: "Prop",
  props: {
    handoutId: String,
  },
  setup(props) {
    const { handoutId } = toRefs(props);
    let handoutComponent: Component | undefined = undefined;

    switch (handoutId?.value) {
      case "newspaper":
        handoutComponent = <Newspaper variant="default" />;
        break;
      case "old-newspaper":
        handoutComponent = <Newspaper variant="old" />;
        break;
      case "handwritten-letter":
        handoutComponent = <HandwrittenLetter variant="default" />;
        break;
      case "old-handwritten-letter":
        handoutComponent = <HandwrittenLetter variant="old" />;
        break;
      case "old-business-card-01":
        handoutComponent = <BusinessCard variant="old1" />;
        break;
      case "old-business-card-02":
        handoutComponent = <BusinessCard variant="old2" />;
        break;
      case "old-business-card-03":
        handoutComponent = <BusinessCard variant="old3" />;
        break;
      default:
        break;
    }

    return {
      handoutComponent,
    };
  },
});
</script>
