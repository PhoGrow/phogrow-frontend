<template>
  <section
    :class="[
      'hero',
      hasBgImage
        ? 'is-fullheight-with-navbar bg-image br-2 mt-2 mb-6'
        : 'is-halfheight',
    ]"
  >
    <div class="hero-body px-0">
      <div
        :class="[
          'columns is-vcentered is-gapless is-flex-direction-row-reverse',
          { 'has-background-white p-6 br-2': !hasBgImage },
        ]"
        style="width: 100%"
      >
        <div class="column is-5-tablet">
          <slot name="image"></slot>
        </div>
        <div v-if="!hasBgImage" class="column is-narrow m-5"></div>
        <div class="column">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LandingPage',
  props: {
    hasBgImage: Boolean,
  },
});
</script>

<style scoped>
.bg-image {
  background: linear-gradient(
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    url('/team/team.jpg') no-repeat center center;
  background-size: cover;
}
</style>
