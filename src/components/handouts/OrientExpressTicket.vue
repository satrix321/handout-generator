<template>
  <div :class="`orient-express-ticket ${variant}`">
    <div class="relative p-8 mx-auto" :style="containerStyles[variant]">
      <EditableField
        tag="div"
        name="Month"
        class="month text-4xl"
        :initialValue="month"
      />
      <EditableField
        tag="div"
        name="Year"
        class="year text-xl"
        :initialValue="year"
      />
      <EditableField
        tag="div"
        name="DepartureTime"
        class="departure-time text-xl"
        :initialValue="departureTime"
      />
      <EditableField
        tag="div"
        name="DepartureLocation"
        class="departure-location text-base"
        :initialValue="departureLocation"
      />
    </div>
  </div>
</template>

<script lang="ts">
import EditableField from "@/components/EditableField.vue";
import initialData from "@/initialData/OrientExpressTicket.json";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "OrientExpressTicket",
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
    const month = ref<string>(initialData[props.variant].month);
    const year = ref<string>(initialData[props.variant].year);
    const departureTime = ref<string>(initialData[props.variant].departureTime);
    const departureLocation = ref<string>(
      initialData[props.variant].departureLocation
    );

    const backgrounds = {
      default: require("@/assets/orient-express-ticket.jpg"),
    };

    const containerStyles = {
      default: {
        background: `url(${backgrounds[props.variant]})`,
        width: "1000px",
        height: "437px",
      },
    };

    return {
      month,
      year,
      departureTime,
      departureLocation,
      backgrounds,
      containerStyles,
    };
  },
});
</script>

<style scoped lang="scss">
.orient-express-ticket {
  font-family: "Newsreader", serif;
  color: #555555;

  .month {
    position: absolute;
    bottom: 102px;
    left: 76px;
    width: 333px;
    text-align: center;
  }
  .year {
    position: absolute;
    bottom: 66px;
    left: 76px;
    width: 333px;
    text-align: center;
  }
  .departure-time {
    position: absolute;
    bottom: 123px;
    left: 589px;
    width: 334px;
    text-align: center;
  }
  .departure-location {
    position: absolute;
    bottom: 100px;
    left: 589px;
    width: 334px;
    text-align: center;
  }
}
</style>
