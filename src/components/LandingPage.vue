<template>
  <section
    :class="[
      bgImage
        ? 'is-fullheight-with-navbar bg-image br-2 mt-2'
        : 'is-halfheight',
      'hero'
    ]"
  >
    <div class="hero-body">
      <div
        class="columns is-vcentered is-gapless is-flex-direction-row-reverse"
      >
        <div class="column is-5-tablet is-10-mobile">
          <LandingPageImage :images="images" />
        </div>
        <div v-if="images" class="column is-narrow m-5"></div>
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
    images: Array,
    bgImage: Boolean
  }
};
</script>

<style scoped>
.bg-image {
  background: linear-gradient(
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    url('../assets/team/team.jpg') no-repeat center center;
  background-size: cover;
}
</style>
