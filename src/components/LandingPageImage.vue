<template>
  <img v-if="image" :src="require('@/assets/illustrations/' + image)" />
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
