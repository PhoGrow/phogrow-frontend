<template>
  <figure v-if="image" class="image">
    <img :src="require('@/assets/illustrations/' + image)" />
  </figure>
</template>

<script>
export default {
  name: 'LandingPageImage',
  props: {
    image: String
  }
};
</script>

<style scoped></style>
