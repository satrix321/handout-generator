<template>
  <textarea
    ref="inputRef"
    class="textarea"
    v-model="data"
    @input="onEdit"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AutoResizableTextarea",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let data = ref<string>(props.modelValue ? props.modelValue : "");
    let inputRef = ref<HTMLTextAreaElement | null>(null);

    const resize = () => {
      if (inputRef.value) {
        inputRef.value.style.height = "0px";
        inputRef.value.style.height = `${inputRef.value.scrollHeight}px`;
      }
    };
    const onEdit = () => {
      resize();
      emit("update:modelValue", data);
    };
    onMounted(() => {
      resize();
    });
    return {
      data,
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
