<template>
  <div v-if="images">
    <figure v-if="images.length == 1" class="image">
      <img :src="require('@/assets/illustrations/' + images[0])" />
    </figure>
    <div
      v-if="images.length > 1"
      class="columns is-gapless is-multiline is-mobile has-background-bright-green"
    >
      <div v-for="image of images" :key="image" class="column is-3">
        <figure
          class="image is-flex is-align-items-center is-justify-content-center"
          style="height: 100%"
        >
          <img
            :src="
              require('@/assets/' +
                (image != 'logo_black.svg' ? 'team/' : '') +
                image)
            "
            :style="image == 'logo_black.svg' ? 'width: 50%' : ''"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPageImage',
  props: {
    images: Array
  }
};
</script>

<style scoped></style>
