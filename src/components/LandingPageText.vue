<template>
  <div :class="{ 'px-6': text.buttons.length > 1 }">
    <h1 class="title is-1 amaranth">{{ text.title }}</h1>
    <h2 class="subtitle is-3 amaranth">{{ text.subtitle }}</h2>
    <p class="subtitle">{{ text.message }}</p>
    <div class="buttons">
      <a
        v-for="{ message, href } of text.buttons"
        :key="message"
        :href="href ? href : '#' + linkage?.split(' ').join('')"
        class="button is-medium is-rounded mr-3 mb-3"
      >
        <span>{{ message }}</span>
        <ImageItem
          v-if="href && href.includes('instagram')"
          src="/logos/instagram.png"
          alt="instagram logo"
          :lazy="false"
          class="is-32x32 ml-3"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { ImageItem } from '@/components';
import type { ILandingPageText } from '@/types';

export default defineComponent({
  name: 'LandingPageText',
  components: {
    ImageItem,
  },
  props: {
    text: {
      type: Object as PropType<ILandingPageText>,
      required: true,
    },
    linkage: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
