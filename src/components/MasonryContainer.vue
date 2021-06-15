<template>
  <div
    :style="{ opacity: isInitialized ? 1 : 0 }"
    ref="containerRef"
    class="masonry-container"
  >
    <slot> </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "MasonryContainer",
  setup() {
    const containerRef = ref<HTMLDivElement>();
    const isInitialized = ref<boolean>(false);
    const itemWidth = 300;
    const gapWidth = 25;
    const gapHeight = 25;

    const calculateColumnsCount = (
      containerWidth: number,
      itemWidth: number,
      gapWidth: number
    ) => {
      let tempContainerWidth = containerWidth - itemWidth;
      let freeWidth = 0;
      let columnsCount = 0;

      do {
        columnsCount++;
        freeWidth = tempContainerWidth;
        tempContainerWidth = tempContainerWidth - itemWidth - gapWidth;
      } while (tempContainerWidth >= 0);

      return {
        columnsCount,
        freeWidth,
      };
    };

    const findLowestValueIndex = (array: Array<number>) => {
      if (array.length <= 0) {
        return null;
      }

      let index = 0;
      let tempValue = array[0];

      for (let i = 1; i < array.length; i++) {
        if (array[i] < tempValue) {
          index = i;
          tempValue = array[i];
        }
      }

      return index;
    };

    const reflow = () => {
      if (containerRef.value?.children) {
        const containerHtmlElement = containerRef.value;
        const containerWidth = Math.min(
          containerHtmlElement.clientWidth +
            containerHtmlElement.offsetLeft * 2,
          1600
        );
        const calculatedColumnsData = calculateColumnsCount(
          containerWidth,
          itemWidth,
          gapWidth
        );
        const columnsData = new Array(calculatedColumnsData.columnsCount).fill(
          0
        );
        containerHtmlElement.style.marginLeft = `${
          calculatedColumnsData.freeWidth / 2
        }px`;
        containerHtmlElement.style.marginRight = `${
          calculatedColumnsData.freeWidth / 2
        }px`;

        for (const item of containerRef.value.children) {
          const htmlElement = item as HTMLElement;
          const itemHeight = htmlElement.offsetHeight;
          const columnIndex = findLowestValueIndex(columnsData) as number;
          htmlElement.dataset.gridColumn = columnIndex.toString();
          htmlElement.dataset.top = columnsData[columnIndex];
          htmlElement.style.position = "absolute";
          htmlElement.style.left = `${columnIndex * (itemWidth + gapWidth)}px`;
          htmlElement.style.top = `${columnsData[columnIndex]}px`;
          columnsData[columnIndex] += Number(itemHeight) + gapHeight;
        }
      }
    };

    onMounted(() => {
      reflow();
      window.addEventListener("resize", reflow);
      isInitialized.value = true;
    });

    onUnmounted(() => {
      window.removeEventListener("resize", reflow);
    });

    return {
      containerRef,
      isInitialized,
    };
  },
});
</script>

<style scoped lang="scss">
.masonry-container {
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
</style>
