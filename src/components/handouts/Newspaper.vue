<template>
  <div :class="`newspaper ${variant}`">
    <div
      class="relative p-8 mx-auto"
      :style="{
        background: `url(${backgrounds[variant]})`,
        width: '600px',
      }"
    >
      <EditableField
        tag="h1"
        name="Title"
        class="headline text-7xl mb-2 text-center leading-snug"
        :initialValue="title"
      />
      <hr class="border-t-2 border-black" />
      <EditableField
        tag="div"
        name="Content"
        class="content text-lg mt-6"
        :initialValue="content"
        useMarkdown
      />
    </div>
  </div>
</template>

<script lang="ts">
import EditableField from "@/components/EditableField.vue";
import initialData from "@/initialData/Newspaper.json";
import { defineComponent, ref, PropType } from "vue";

export default defineComponent({
  name: "Newspaper",
  props: {
    variant: {
      type: String as PropType<"default" | "old">,
      default: "default",
    },
  },
  components: {
    EditableField,
  },
  setup() {
    const title = ref<string>(initialData.title);
    const content = ref<string>(initialData.content);

    const backgrounds = {
      default: require("@/assets/paper-texture-02.jpg"),
      old: require("@/assets/paper-texture-01.jpg"),
    };

    return {
      title,
      content,
      backgrounds,
    };
  },
});
</script>

<style scoped lang="scss">
.headline {
  font-family: "Bebas Neue", cursive;
  line-height: 1;
}

.content {
  font-family: "Newsreader", serif;
  text-align: justify;

  &::v-deep h1,
  &::v-deep h2,
  &::v-deep h3,
  &::v-deep h4,
  &::v-deep h5,
  &::v-deep h6 {
    font-family: "Bebas Neue", cursive;
    text-align: center;
    line-height: 1;
    margin-bottom: 1rem;
  }

  &::v-deep h1 {
    font-size: 4rem;
  }

  &::v-deep h2 {
    font-size: 3.5rem;
  }

  &::v-deep h3 {
    font-size: 3rem;
  }

  &::v-deep h4 {
    font-size: 2.5rem;
  }

  &::v-deep h5 {
    font-size: 2rem;
  }

  &::v-deep h6 {
    font-size: 1.5rem;
  }

  &::v-deep p {
    margin-bottom: 1rem;
  }
}
</style>
