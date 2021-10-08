<template>
  <div :class="`sample ${variant}`">
    <div class="relative p-8 mx-auto" :style="containerStyles[variant]">
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
import initialData from "@/initialData/Sample.json";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "Sample",
  props: {
    variant: {
      type: String as PropType<"default">,
      default: "default",
    },
  },
  components: {
    EditableField,
  },
  setup(props) {
    const content = ref<string>(initialData[props.variant].content);

    const backgrounds = {
      default: require("@/assets/paper-texture-01.jpg"),
    };

    const containerStyles = {
      default: {
        background: `url(${backgrounds[props.variant]})`,
        width: "600px",
      },
    };

    return {
      content,
      backgrounds,
      containerStyles,
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
