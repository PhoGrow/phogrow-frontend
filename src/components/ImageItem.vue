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
import Vue from 'vue';

export default Vue.extend({
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
