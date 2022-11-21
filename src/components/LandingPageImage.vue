<template>
  <div>
    <ImageItem
      v-if="images.length === 1"
      :src="'/illustrations/' + images[0]"
      :lazy="false"
      class="box has-background-light p-5"
    />
    <div
      v-if="images.length > 1"
      class="columns is-gapless is-multiline is-mobile box has-background-bright-green p-5"
    >
      <div v-for="(image, i) of images" :key="image" class="column is-3">
        <ImageItem
          :src="(image.includes('logo') ? '/logos/' : '/team/') + image"
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
import Vue from 'vue';
import ImageItem from '@/components/ImageItem.vue';

export default Vue.extend({
  name: 'LandingPageImage',
  components: {
    ImageItem,
  },
  props: {
    images: Array<string>,
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
