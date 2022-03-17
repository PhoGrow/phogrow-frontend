<template>
  <div v-if="images">
    <figure
      v-if="images.length == 1"
      class="image has-background-light p-5 br-2"
    >
      <img :src="require('@/assets/illustrations/' + images[0])" />
    </figure>
    <div
      v-if="images.length > 1"
      class="columns is-gapless is-multiline is-mobile has-background-bright-green p-5 br-2"
    >
      <div v-for="(image, i) of images" :key="image" class="column is-3">
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
            :class="{
              'border-top-left-rounded': i == 0,
              'border-bottom-left-rounded': i == images.length / 2,
              'border-bottom-right-rounded': i == images.length - 1
            }"
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

<style scoped>
.border-top-left-rounded {
  border-top-left-radius: 2rem;
}

.border-bottom-left-rounded {
  border-bottom-left-radius: 2rem;
}

.border-bottom-right-rounded {
  border-bottom-right-radius: 2rem;
}
</style>
