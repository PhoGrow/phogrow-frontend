<template>
  <div>
    <template v-if="images.length === 1">
      <ImageItem
        v-if="images[0].includes('.')"
        :src="'/illustrations/' + images[0]"
        :alt="images[0].split('.')[0].replace('_', ' ')"
        :lazy="false"
        class="box has-background-light p-5"
      />
      <IframeVideo v-else :video-id="images[0]" />
    </template>
    <div
      v-if="images.length > 1"
      class="columns is-gapless is-multiline is-mobile box has-background-bright-green p-5"
    >
      <div v-for="(image, i) of images" :key="image" class="column is-3">
        <ImageItem
          :src="(image.includes('logo') ? '/logos/' : '/team/') + image"
          :alt="image.split('.')[0].replace('_', ' ')"
          class="is-flex is-align-items-center is-justify-content-center"
          style="height: 100%"
          :custom-class="
            i === 0
              ? 'border-top-left-rounded'
              : i === images.length / 2
              ? 'border-bottom-left-rounded'
              : i === images.length - 1
              ? 'border-bottom-right-rounded'
              : image.includes('logo')
              ? 'is-half-width'
              : ''
          "
          :lazy="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { ImageItem, IframeVideo } from '@/components';

export default defineComponent({
  name: 'LandingPageImage',
  components: {
    ImageItem,
    IframeVideo,
  },
  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style>
.border-top-left-rounded {
  border-top-left-radius: 2rem;
}

.border-bottom-left-rounded {
  border-bottom-left-radius: 2rem;
}

.border-bottom-right-rounded {
  border-bottom-right-radius: 2rem;
}

.is-half-width {
  width: 50% !important;
}
</style>
