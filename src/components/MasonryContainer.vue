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
    const columnsData = ref<Array<number>>([]);
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

    const prepareContainer = () => {
      if (containerRef.value) {
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

        columnsData.value = new Array<number>(
          calculatedColumnsData.columnsCount
        ).fill(0);
        containerHtmlElement.style.marginLeft = `${
          calculatedColumnsData.freeWidth / 2
        }px`;
        containerHtmlElement.style.marginRight = `${
          calculatedColumnsData.freeWidth / 2
        }px`;
      }
    };

    const calculateItemPosition = (htmlElement: HTMLElement) => {
      const itemHeight = htmlElement.offsetHeight;
      const columnIndex = findLowestValueIndex(columnsData.value) as number;
      htmlElement.dataset.gridColumn = columnIndex.toString();
      htmlElement.dataset.left = (
        columnIndex *
        (itemWidth + gapWidth)
      ).toString();
      htmlElement.dataset.top = columnsData.value[columnIndex].toString();
      htmlElement.dataset.positioned = "true";
      htmlElement.style.position = "absolute";
      htmlElement.style.left = `${columnIndex * (itemWidth + gapWidth)}px`;
      htmlElement.style.top = `${columnsData.value[columnIndex]}px`;
      columnsData.value[columnIndex] += Number(itemHeight) + gapHeight;
    };

    const reflow = () => {
      prepareContainer();

      if (containerRef.value) {
        for (const item of containerRef.value.children) {
          const htmlItem = item as HTMLElement;
          if (htmlItem.dataset.imageLoaded === "true") {
            calculateItemPosition(htmlItem);
          }
        }
      }
    };

    onMounted(() => {
      prepareContainer();
      window.addEventListener("resize", reflow);
      isInitialized.value = true;

      setInterval(() => {
        if (containerRef.value) {
          for (const item of containerRef.value.children) {
            const htmlItem = item as HTMLElement;
            if (
              htmlItem.dataset.imageLoaded === "true" &&
              htmlItem.dataset.positioned !== "true"
            ) {
              calculateItemPosition(htmlItem);
            }
          }
        }
      }, 200); // TODO: replace this with something else, maybe an event emitter?
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
