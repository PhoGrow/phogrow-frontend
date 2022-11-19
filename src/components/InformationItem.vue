<template>
  <div>
    <div
      v-for="({ image, animation, title, subtitle, message }, i) of info"
      :key="title"
      class="columns is-centered is-gapless is-multiline m-0"
    >
      <div class="column is-8-tablet">
        <div class="columns is-vcentered is-gapless box">
          <div class="column is-5-tablet is-10-mobile">
            <b-image
              v-if="image"
              :src="
                (image.includes('.svg') ? '/illustrations/' : '/team/') + image
              "
              :class="{
                'box has-background-light p-5': image.includes('.svg'),
              }"
              :custom-class="image.includes('.jpg') ? 'br-2' : ''"
            ></b-image>
            <ObserverItem
              v-if="animation"
              @is-visible="$set(isVisible, i, $event)"
            >
              <AnimationItem v-if="isVisible[i]" :animation="animation" />
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
import Vue from 'vue';
import ObserverItem from '@/components/ObserverItem.vue';
import AnimationItem from '@/components/AnimationItem.vue';
import type { IInformation } from '@/types';

export default Vue.extend({
  name: 'InformationItem',
  components: {
    ObserverItem,
    AnimationItem,
  },
  props: {
    info: Array<IInformation>,
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
});
</script>

<style scoped></style>
