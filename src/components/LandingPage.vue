<template>
  <section class="hero is-halfheight">
    <div class="hero-body">
      <div
        class="columns is-vcentered is-gapless is-flex-direction-row-reverse"
      >
        <div class="column is-5-tablet is-10-mobile">
          <LandingPageImage :image="image" :images="images" />
        </div>
        <div class="column is-narrow m-5"></div>
        <div class="column">
          <LandingPageText :text="text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LandingPageText from '@/components/LandingPageText.vue';
import LandingPageImage from '@/components/LandingPageImage.vue';

export default {
  name: 'LandingPage',
  components: {
    LandingPageText,
    LandingPageImage
  },
  props: {
    text: Object,
    image: String,
    images: Array
  }
};
</script>

<style scoped></style>
