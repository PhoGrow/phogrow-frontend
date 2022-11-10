<template>
  <span :class="['icon', size]">
    <i class="material-icons-round" :style="{ fontSize }">{{ icon }}</i>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
      fontSizes: [
        {
          size: 'is-normal',
          sizeInRem: 1.5,
        },
        {
          size: 'is-medium',
          sizeInRem: 2,
        },
        {
          size: 'is-large',
          sizeInRem: 3,
        },
      ],
    };
  },
  computed: {
    fontSize(): string {
      const { sizeInRem } = this.fontSizes.filter(
        ({ size }) => size === this.size
      )[0];
      return sizeInRem + 'rem';
    },
  },
});
</script>

<style scoped></style>
