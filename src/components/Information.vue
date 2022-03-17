<template>
  <div :id="id">
    <InformationTitle :title="title" :note="note" />
    <div
      v-for="({ image, animation, title, subtitle, message }, i) of info"
      :key="title"
      :class="[
        'columns is-centered is-gapless is-multiline m-0',
        { 'pb-6': i == info.length - 1 }
      ]"
    >
      <div class="column is-10-tablet">
        <div
          class="columns is-vcentered is-gapless has-background-white p-5 br-2"
        >
          <div class="column is-4-tablet is-9-mobile">
            <figure v-if="image" class="image has-background-light p-5 br-2">
              <img :src="require('@/assets/illustrations/' + image)" />
            </figure>
            <Observer
              v-if="animation"
              @isVisible="(option) => $set(isVisible, i, option)"
            >
              <Animation
                v-if="isVisible[i]"
                :animation="animation"
                class="has-background-light br-2"
              />
            </Observer>
          </div>
          <div class="column is-narrow m-5"></div>
          <div class="column is-6-tablet">
            <p
              :class="[
                { 'is-spaced': !subtitle },
                'title has-text-weight-medium'
              ]"
            >
              {{ title }}
            </p>
            <p v-if="subtitle" class="subtitle is-4 has-text-grey">
              {{ subtitle }}
            </p>
            <p class="subtitle has-text-grey">{{ message }}</p>
          </div>
          <div class="column is-narrow m-2 is-hidden-tablet"></div>
        </div>
      </div>
      <div v-if="i < info.length - 1" class="column is-12-tablet">
        <div class="columns is-centered is-mobile m-0">
          <div class="column is-narrow py-6 px-0 dashed-border"></div>
        </div>
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
