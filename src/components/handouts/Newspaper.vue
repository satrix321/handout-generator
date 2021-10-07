<template>
  <div :class="`newspaper ${variant}`">
    <div class="relative p-8 mx-auto" :style="containerStyles[variant]">
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
  setup(props) {
    const title = ref<string>(initialData[props.variant].title);
    const content = ref<string>(initialData[props.variant].content);

    const backgrounds = {
      default: require("@/assets/paper-texture-02.jpg"),
      old: require("@/assets/paper-texture-01.jpg"),
    };

    const containerStyles = {
      default: {
        background: `url(${backgrounds[props.variant]})`,
        width: "600px",
      },
      old: {
        background: `url(${backgrounds[props.variant]})`,
        width: "600px",
      },
    };

    return {
      title,
      content,
      backgrounds,
      containerStyles,
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

  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    font-family: "Bebas Neue", cursive;
    text-align: center;
    line-height: 1;
    margin-bottom: 1rem;
  }

  :deep(h1) {
    font-size: 4rem;
  }

  :deep(h2) {
    font-size: 3.5rem;
  }

  :deep(h3) {
    font-size: 3rem;
  }

  :deep(h4) {
    font-size: 2.5rem;
  }

  :deep(h5) {
    font-size: 2rem;
  }

  :deep(h6) {
    font-size: 1.5rem;
  }

  :deep(p) {
    margin-bottom: 1rem;
  }
}
</style>
