<template>
  <div :class="`business-card ${variant}`">
    <div class="relative p-8 mx-auto" :style="containerStyles[variant]">
      <EditableField
        tag="div"
        name="Name"
        class="name text-5xl"
        :initialValue="name"
      />
      <EditableField
        tag="div"
        name="Title"
        class="title text-2xl"
        :initialValue="title"
      />
      <EditableField
        tag="div"
        name="Address"
        class="address text-2xl"
        :initialValue="address"
      />
    </div>
  </div>
</template>

<script lang="ts">
import EditableField from "@/components/EditableField.vue";
import initialData from "@/initialData/BusinessCard.json";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "BusinessCard",
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
    const name = ref<string>(initialData.name);
    const address = ref<string>(initialData.address);
    const title = ref<string>(initialData.title);

    const backgrounds = {
      default: require("@/assets/old-business-card-01.jpg"),
      old: require("@/assets/old-business-card-01.jpg"),
    };

    const containerStyles = {
      default: {
        background: `url(${backgrounds[props.variant]}) no-repeat`,
        width: "948px",
        height: "434px",
      },
      old: {
        background: `url(${backgrounds[props.variant]}) no-repeat`,
        width: "948px",
        height: "434px",
      },
    };

    return {
      name,
      address,
      title,
      backgrounds,
      containerStyles,
    };
  },
});
</script>

<style scoped lang="scss">
.business-card {
  &.old {
    .name,
    .title,
    .address {
      font-family: "Rye", cursive;
      position: absolute;
      text-align: center;
      left: 50%;
      transform: translateX(calc(-50% - 5px));
    }

    .name {
      top: 40%;
    }

    .title {
      top: 57%;
    }

    .address {
      top: 84%;
      left: 52%;
    }
  }
}
</style>
