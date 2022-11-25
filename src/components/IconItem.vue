<template>
  <span :class="['icon', size]">
    <i class="material-icons-rounded" :style="{ fontSize }">{{ icon }}</i>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconItem',
  props: {
    icon: String,
    size: {
      type: String,
      default: 'is-normal',
    },
  },
  data() {
    return {
      fontSizes: {
        isSmall: 1,
        isNormal: 1.5,
        isMedium: 2,
        isLarge: 3,
      } as { [size: string]: number },
    };
  },
  computed: {
    fontSize(): string {
      const size = this.size.replace(
        `-${this.size[3]}`,
        this.size[3].toUpperCase()
      );
      return `${this.fontSizes[size]}rem`;
    },
  },
});
</script>

<style scoped></style>
