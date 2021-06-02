<template>
  <component :is="tag" class="relative editable-field">
    <div class="absolute field-name">{{ name }}</div>
    <div v-show="!isEditingValue" @click="editField">
      <div v-if="useMarkdown" v-html="value"></div>
      <div v-else>{{ value }}</div>
    </div>
    <AutoResizableTextarea
      ref="inputRef"
      v-show="isEditingValue"
      v-model="editedValue"
      class="w-full bg-transparent input"
    />
  </component>
</template>

<script lang="ts">
import marked from "marked";
import { defineComponent, ref, onBeforeUnmount } from "vue";
import AutoResizableTextarea from "@/components/AutoResizableTextarea.vue";

export default defineComponent({
  name: "EditableField",
  components: {
    AutoResizableTextarea,
  },
  props: {
    tag: String,
    name: String,
    useMarkdown: Boolean,
    initialValue: String,
  },
  setup(props) {
    let inputRef = ref<typeof AutoResizableTextarea | null>(null);
    let isEditingValue = ref<boolean>(false);
    let value = ref<string | undefined>(
      props.initialValue && props.useMarkdown
        ? marked(props.initialValue)
        : props.initialValue
    );
    let editedValue = ref<string | undefined>(props.initialValue);

    const stopEditing = (e: MouseEvent) => {
      if (e.target !== inputRef.value?.$el) {
        isEditingValue.value = false;
        window.removeEventListener("click", stopEditing);
      }
    };

    const editField = () => {
      if (!isEditingValue.value) {
        isEditingValue.value = !isEditingValue.value;
        requestAnimationFrame(() => {
          inputRef.value?.resize();
          inputRef.value?.$el?.focus();
          window.addEventListener("click", stopEditing);
        });
      }
    };

    const saveField = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isEditingValue.value) {
        value.value = editedValue.value;
        isEditingValue.value = !isEditingValue.value;
      } else if (e.key === "Escape" && isEditingValue.value) {
        editedValue.value = value.value;
        isEditingValue.value = !isEditingValue.value;
      }
    };

    onBeforeUnmount(() => {
      if (isEditingValue.value) {
        window.removeEventListener("click", stopEditing);
      }
    });

    return {
      value,
      editedValue,
      isEditingValue,
      inputRef,
      editField,
      saveField,
    };
  },
});
</script>

<style scoped lang="scss">
.input {
  text-align: inherit;
  resize: none;
  overflow: hidden;
}

.editable-field {
  .field-name {
    display: none;
    top: 0;
    left: 0;
    background: cornflowerblue;
    color: white;
    font-size: 1rem;
    font-family: initial;
    padding: 0 0.25rem;
  }

  &:hover {
    outline: 2px dotted black;

    .field-name,
    .field-controls {
      display: block;
    }
  }
}
</style>
