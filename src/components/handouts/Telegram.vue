<template>
  <div :class="`telegram ${variant}`">
    <div class="relative p-8 mx-auto" :style="containerStyles[variant]">
      <EditableField
        tag="div"
        name="Time"
        class="time text-base mt-6"
        :initialValue="time"
      />
      <EditableField
        tag="div"
        name="Salutation"
        class="salutation text-xl mt-6"
        :initialValue="salutation"
      />
      <EditableField
        tag="div"
        name="Content"
        class="content text-xl mt-6"
        :initialValue="content"
      />
      <EditableField
        tag="div"
        name="Signature"
        class="signature text-xl mt-6"
        :initialValue="signature"
      />
    </div>
  </div>
</template>

<script lang="ts">
import EditableField from "@/components/EditableField.vue";
import initialData from "@/initialData/Telegram.json";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "Telegram",
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
    const time = ref<string>(initialData[props.variant].time);
    const salutation = ref<string>(initialData[props.variant].salutation);
    const content = ref<string>(initialData[props.variant].content);
    const signature = ref<string>(initialData[props.variant].signature);

    const backgrounds = {
      default: require("@/assets/telegram-01.jpg"),
    };

    const containerStyles = {
      default: {
        background: `url(${backgrounds[props.variant]})`,
        width: "873px",
        height: "575px",
      },
    };

    return {
      time,
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
.telegram {
  &.default {
    .time,
    .salutation,
    .content,
    .signature {
      margin-top: 0;
      font-family: "Special Elite", cursive;
      text-transform: uppercase;
      position: absolute;
    }

    .time {
      top: 26%;
      left: 31px;
    }

    .salutation {
      top: 53%;
      left: 8%;
      width: 720px;
    }

    .content {
      left: 50%;
      top: 59%;
      transform: translateX(calc(-50% - 12px));
      width: 650px;
      height: 160px;
      display: flex;
      // justify-content: center;
      align-items: center;
    }

    .signature {
      top: 87%;
      left: 15%;
      width: 590px;
    }
  }
}
</style>
