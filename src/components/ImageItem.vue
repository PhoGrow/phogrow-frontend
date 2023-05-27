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
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
