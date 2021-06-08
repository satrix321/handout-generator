<template>
  <textarea
    ref="inputRef"
    class="textarea"
    :value="modelValue"
    @input="onEdit"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, TextareaHTMLAttributes } from "vue";

export default defineComponent({
  name: "AutoResizableTextarea",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let inputRef = ref<HTMLTextAreaElement | null>(null);

    const resize = () => {
      if (inputRef.value) {
        inputRef.value.style.height = "0px";
        inputRef.value.style.height = `${inputRef.value.scrollHeight}px`;
      }
    };
    const onEdit = (e: InputEvent) => {
      resize();
      emit("update:modelValue", (e.target as TextareaHTMLAttributes).value);
    };
    onMounted(() => {
      resize();
    });
    return {
      inputRef,
      onEdit,
      resize,
    };
  },
});
</script>

<style lang="scss" scoped>
.textarea {
  resize: none;
  height: 20px;
  overflow: hidden;
}
</style>
