<template>
  <div :class="`letter ${variant}`">
    <div
      class="relative p-8 mx-auto"
      :style="{
        background: `url(${backgrounds[variant]})`,
        width: '800px',
      }"
    >
      <EditableField
        tag="div"
        name="Salutation"
        class="salutation text-2xl mt-6"
        :initialValue="salutation"
      />
      <EditableField
        tag="div"
        name="Content"
        class="content text-2xl mt-6"
        :initialValue="content"
        useMarkdown
      />
      <EditableField
        tag="pre"
        name="Signature"
        class="signature text-2xl mt-6"
        :initialValue="signature"
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
      type: String as PropType<"default" | "old">,
      default: "default",
    },
  },
  components: {
    EditableField,
  },
  setup() {
    const salutation = ref<string>(initialData.salutation);
    const content = ref<string>(initialData.content);
    const signature = ref<string>(initialData.signature);

    const backgrounds = {
      default: require("@/assets/paper-texture-02.jpg"),
      old: require("@/assets/paper-texture-01.jpg"),
    };

    return {
      salutation,
      content,
      signature,
      backgrounds,
    };
  },
});
</script>

<style scoped lang="scss">
.letter {
  .salutation,
  .content,
  .signature {
    font-family: "Parisienne", cursive;
    margin-top: 0;

    &::v-deep p {
      margin-bottom: 1rem;
    }
  }

  .signature {
    text-align: right;
  }
}
</style>
