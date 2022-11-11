<template>
  <div :class="{ 'px-6': text.buttons.length > 1 }">
    <h1 class="title is-1 amaranth">{{ text.title }}</h1>
    <h2 class="subtitle is-3 amaranth">{{ text.subtitle }}</h2>
    <p class="subtitle">{{ text.message }}</p>
    <div class="buttons">
      <a
        v-for="{ message, href } of text.buttons"
        :key="message"
        :href="href ? href : '#' + linkage.replaceAll(' ', '')"
        class="button is-medium is-rounded mr-3 mb-3"
      >
        <span>{{ message }}</span>
        <b-image
          v-if="href && href.includes('instagram')"
          src="/logos/instagram.png"
          class="is-32x32 ml-3"
        ></b-image>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { type PropType } from 'vue';
import type { ILandingPageText } from '@/types';

export default Vue.extend({
  name: 'LandingPageText',
  props: {
    text: Object as PropType<ILandingPageText>,
    linkage: String,
  },
});
</script>

<style scoped></style>
