<template>
  <div>
    <div
      v-for="({ image, animation, title, subtitle, message, mail }, i) of info"
      :key="title"
      class="columns is-centered is-gapless is-multiline m-0"
    >
      <div class="column is-8-tablet">
        <div class="columns is-vcentered is-gapless box">
          <div class="column is-5-tablet is-10-mobile">
            <ImageItem
              v-if="image"
              :src="`/${getImagePath(image)}/${image}`"
              :alt="image.split('.')[0].replace('_', ' ')"
              :class="{
                'box has-background-light p-5': image.includes('.svg'),
                'has-background-light': image.includes('.avif'),
              }"
              :custom-class="
                image.includes('.jpg') || image.includes('.avif') ? 'br-2' : ''
              "
            />
            <ObserverItem v-if="animation" @is-visible="isVisible[i] = $event">
              <AnimationItem v-if="isVisible[i]" :animation="animation" />
              <ImageItem
                v-else
                :src="'/animations/' + animation.replace('glb', 'png')"
                :alt="animation.split('.')[0].replace('_', ' ')"
                class="box has-background-light p-0"
              />
            </ObserverItem>
          </div>
          <div class="column is-narrow m-5"></div>
          <div class="column">
            <h1
              :class="[
                'title has-text-weight-medium',
                { 'is-spaced': !subtitle },
              ]"
            >
              {{ title }}
            </h1>
            <h2 v-if="subtitle" class="subtitle is-4 has-text-grey">
              {{ subtitle }}
            </h2>
            <p class="subtitle has-text-grey">{{ message }}</p>
            <a v-if="mail" :href="`mailto:${mail}`">{{ mail }}</a>
          </div>
        </div>
      </div>
      <div v-if="i < info.length - 1" class="column is-12-tablet">
        <div class="columns is-centered is-mobile m-0">
          <div class="column is-narrow py-5 px-0 dashed-border"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { ImageItem, AnimationItem } from '@/components';
import ObserverItem from '@/components/ObserverItem.vue';
import type { IInformation } from '@/types';

export default defineComponent({
  name: 'InformationItem',
  components: {
    ImageItem,
    ObserverItem,
    AnimationItem,
  },
  props: {
    info: {
      type: Array as PropType<IInformation[]>,
      required: true,
    },
  },
  data() {
    return {
      isVisible: [] as boolean[],
    };
  },
  created() {
    for (let i = 0; i < this.info.length; i++) {
      this.isVisible.push(false);
    }
  },
  methods: {
    getImagePath(image: string): string {
      switch (true) {
        case image.includes('.svg'):
          return 'illustrations';
        case image.includes('.avif'):
          return 'images';
        default:
          return 'team';
      }
    },
  },
});
</script>

<style scoped></style>
