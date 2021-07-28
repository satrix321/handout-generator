<template>
  <div :class="`sample ${variant}`">
    <div
      class="relative p-8 mx-auto"
      :style="{
        background: `url(${backgrounds[variant]})`,
        width: '600px',
      }"
    >
      <EditableField
        tag="div"
        name="Content"
        class="content text-2xl mt-6"
        :initialValue="content"
        useMarkdown
      />
    </div>
  </div>
</template>

<script lang="ts">
import EditableField from "@/components/EditableField.vue";
import initialData from "@/initialData/Letter.json";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "HandwrittenLetter",
  props: {
    variant: {
      type: String as PropType<"default">,
      default: "default",
    },
  },
  components: {
    EditableField,
  },
  setup() {
    const content = ref<string>(initialData.content);

    const backgrounds = {
      default: require("@/assets/paper-texture-01.jpg"),
    };

    return {
      content,
      backgrounds,
    };
  },
});
</script>

<style scoped lang="scss">
.sample {
  .content {
    margin-top: 0;
  }
}
</style>
