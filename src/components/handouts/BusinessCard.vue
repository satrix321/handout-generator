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
        name="Address 1"
        class="address-1 text-2xl"
        :initialValue="address1"
      />
      <EditableField
        tag="div"
        name="Address 2"
        class="address-2 text-2xl"
        :initialValue="address2"
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
      type: String as PropType<"default" | "old1" | "old2" | "old3">,
      default: "default",
    },
  },
  components: {
    EditableField,
  },
  setup(props) {
    const name = ref<string>(initialData[props.variant].name);
    const address1 = ref<string>(initialData[props.variant].address1);
    const address2 = ref<string>(initialData[props.variant].address2);
    const title = ref<string>(initialData[props.variant].title);

    const backgrounds = {
      default: require("@/assets/old-business-card-03.jpg"),
      old1: require("@/assets/old-business-card-01.jpg"),
      old2: require("@/assets/old-business-card-02.jpg"),
      old3: require("@/assets/old-business-card-03.jpg"),
    };

    const containerStyles = {
      default: {
        background: `url(${backgrounds[props.variant]}) no-repeat`,
        width: "948px",
        height: "434px",
      },
      old1: {
        background: `url(${backgrounds[props.variant]}) no-repeat`,
        width: "948px",
        height: "434px",
      },
      old2: {
        background: `url(${backgrounds[props.variant]}) no-repeat`,
        width: "948px",
        height: "434px",
      },
      old3: {
        background: `url(${backgrounds[props.variant]}) no-repeat`,
        width: "948px",
        height: "434px",
      },
    };

    return {
      name,
      address1,
      address2,
      title,
      backgrounds,
      containerStyles,
    };
  },
});
</script>

<style scoped lang="scss">
.business-card {
  &.old1,
  &.old2 {
    .name,
    .title,
    .address-1,
    .address-2 {
      font-family: "Newsreader", serif;
      font-weight: 600;
      position: absolute;
      text-align: center;
      left: 50%;
      transform: translateX(calc(-50% - 5px));
    }

    .name {
      top: 35%;
      text-transform: uppercase;
    }

    .title {
      top: 50%;
    }

    .address-1 {
      bottom: 2rem;
      left: 2rem;
      transform: none;
      width: 250px;
      font-size: 1.5rem;
    }

    .address-2 {
      bottom: 2rem;
      left: unset;
      right: 2rem;
      transform: none;
      width: 250px;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }

  &.old3 {
    .name,
    .title,
    .address-1 {
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

    .address-1 {
      top: 84%;
      left: 52%;
    }

    .address-2 {
      display: none;
    }
  }
}
</style>
