<template>
  <div :class="`letter ${variant}`">
    <div class="relative p-8 mx-auto" :style="containerStyles[variant]">
      <EditableField
        tag="div"
        name="Salutation"
        class="salutation text-3xl mt-6"
        :initialValue="salutation"
      />
      <EditableField
        tag="div"
        name="Content"
        class="content text-3xl mt-6"
        :initialValue="content"
        useMarkdown
      />
      <EditableField
        tag="pre"
        name="Signature"
        class="signature text-3xl mt-6"
        :initialValue="signature"
      />
    </div>
  </div>
</template>

<script lang="ts">
import EditableField from "@/components/EditableField.vue";
import initialData from "@/initialData/HandwrittenLetter.json";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "HandwrittenLetter",
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
    const salutation = ref<string>(initialData[props.variant].salutation);
    const content = ref<string>(initialData[props.variant].content);
    const signature = ref<string>(initialData[props.variant].signature);

    const backgrounds = {
      default: require("@/assets/paper-texture-02.jpg"),
      old: require("@/assets/paper-texture-01.jpg"),
    };

    const containerStyles = {
      default: {
        background: `url(${backgrounds[props.variant]})`,
        width: "800px",
      },
      old: {
        background: `url(${backgrounds[props.variant]})`,
        width: "800px",
      },
    };

    return {
      salutation,
      content,
      signature,
      backgrounds,
      containerStyles,
    };
  },
});
</script>

<style scoped lang="scss">
.letter {
  .salutation,
  .content,
  .signature {
    font-family: "Ephesis", cursive;
    margin-top: 0;

    :deep(p) {
      margin-bottom: 1rem;
    }
  }

  .signature {
    text-align: right;
  }
}
</style>
