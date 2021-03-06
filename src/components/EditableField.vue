<template>
  <component
    :is="tag"
    class="
      editable-field
      relative
      p-1
      border-2 border-solid border-transparent
      hover:border-indigo-500
    "
    :class="{ 'border-indigo-500 is-editing-value': isEditingValue }"
  >
    <div
      class="
        header
        absolute
        h-8
        text-base text-white
        font-sans
        py-1
        px-2
        right-0.5
        -left-0.5
        bottom-full
        justify-between
        bg-indigo-500
      "
    >
      <div class="name">{{ name }}</div>
      <div v-show="isEditingValue" class="controls flex items-center gap-2">
        <div class="control flex justify-center items-center gap-0.5">
          <button @click="cancel"><XIcon class="h-5 w-5 text-white" /></button>
        </div>
        <div class="control flex justify-center items-center gap-0.5">
          <button @click="save">
            <CheckIcon class="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
    <div v-show="!isEditingValue" @click="editField">
      <div v-if="useMarkdown" v-html="value"></div>
      <div v-else>{{ value }}</div>
    </div>
    <AutoResizableTextarea
      ref="inputRef"
      v-show="isEditingValue"
      v-model="editedValue"
      class="w-full bg-transparent"
    />
  </component>
</template>

<script lang="ts">
import marked from "marked";
import { defineComponent, ref } from "vue";
import AutoResizableTextarea from "@/components/AutoResizableTextarea.vue";
import { XIcon, CheckIcon } from "@heroicons/vue/solid";

export default defineComponent({
  name: "EditableField",
  components: {
    AutoResizableTextarea,
    XIcon,
    CheckIcon,
  },
  props: {
    tag: String,
    name: String,
    useMarkdown: Boolean,
    initialValue: String,
  },
  setup(props) {
    const inputRef = ref<typeof AutoResizableTextarea>();
    const isEditingValue = ref<boolean>(false);
    const value = ref<string | undefined>(
      props.initialValue && props.useMarkdown
        ? marked(props.initialValue)
        : props.initialValue
    );
    const editedValue = ref<string | undefined>(props.initialValue);
    const oldEditedValue = ref<string | undefined>(props.initialValue);

    const editField = () => {
      if (!isEditingValue.value) {
        isEditingValue.value = !isEditingValue.value;
        oldEditedValue.value = editedValue.value;

        requestAnimationFrame(() => {
          inputRef.value?.resize();
          inputRef.value?.$el?.focus();
        });
      }
    };

    const cancel = () => {
      editedValue.value = oldEditedValue.value;
      isEditingValue.value = !isEditingValue.value;
    };

    const save = () => {
      value.value = props.useMarkdown
        ? marked(editedValue.value ?? "")
        : editedValue.value;
      isEditingValue.value = !isEditingValue.value;
    };

    return {
      value,
      editedValue,
      isEditingValue,
      inputRef,
      editField,
      cancel,
      save,
    };
  },
});
</script>

<style scoped lang="scss">
.editable-field {
  .header {
    display: none;
    width: calc(100% + 4px);
  }

  .name {
    text-transform: capitalize;
  }

  &.is-editing-value,
  &:hover {
    .header {
      display: flex;
    }
  }
}
</style>
