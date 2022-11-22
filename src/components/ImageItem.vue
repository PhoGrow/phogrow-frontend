<template>
  <figure class="image">
    <img
      :src="src"
      :alt="alt"
      :class="customClass"
      :loading="lazy ? 'lazy' : 'eager'"
    />
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageItem',
  props: {
    src: String,
    alt: String,
    customClass: String,
    lazy: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
