<template>
  <div :id="id" class="px-5">
    <InformationTitle :title="title" :note="note" />
    <div
      v-for="({ image, animation, title, subtitle, message }, i) of info"
      :key="title"
      class="columns is-vcentered is-centered is-gapless pb-6"
    >
      <div class="column is-3-tablet is-9-mobile">
        <figure v-if="image" class="image">
          <img :src="require('@/assets/illustrations/' + image)" />
        </figure>
        <Observer
          v-if="animation"
          @isVisible="(option) => $set(isVisible, i, option)"
          class="has-background-white br-2"
        >
          <Animation v-if="isVisible" :animation="animation" />
        </Observer>
      </div>
      <div class="column is-narrow m-5"></div>
      <div class="column is-6-tablet">
        <p
          :class="[{ 'is-spaced': !subtitle }, 'title has-text-weight-medium']"
        >
          {{ title }}
        </p>
        <p v-if="subtitle" class="subtitle is-4 has-text-grey">
          {{ subtitle }}
        </p>
        <p class="subtitle has-text-grey">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import InformationTitle from '@/components/InformationTitle.vue';
import Observer from '@/components/Observer.vue';
import Animation from '@/components/Animation.vue';

export default {
  name: 'Information',
  components: {
    InformationTitle,
    Observer,
    Animation
  },
  props: {
    title: String,
    note: String,
    info: Array
  },
  data() {
    return {
      isVisible: []
    };
  },
  created() {
    for (let i = 0; i < this.info.length; i++) {
      this.isVisible.push(false);
    }
  },
  computed: {
    id() {
      let id = '';
      for (const [i, word] of this.title.split(' ').entries()) {
        id +=
          i == 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1);
      }
      return id;
    }
  }
};
</script>

<style scoped></style>
