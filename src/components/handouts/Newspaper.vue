<template>
  <div class="newspaper">
    <div
      class="relative p-8 mx-auto"
      :style="{
        background: `url(${require('@/assets/paper-texture-01.jpg')})`,
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Newspaper",
  components: {
    EditableField,
  },
  setup() {
    let title = ref<string>(initialData.title);
    let content = ref<string>(initialData.content);

    return {
      title,
      content,
    };
  },
});
</script>

<style scoped lang="scss">
.headline {
  font-family: "Bebas Neue", cursive;
}

.content {
  font-family: "Newsreader", serif;
}
</style>
