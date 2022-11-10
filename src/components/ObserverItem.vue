<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ObserverItem',
  props: {
    unobserve: Boolean,
  },
  data() {
    return {
      observer: {} as IntersectionObserver,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(this.isIntersecting);
    this.observer.observe(this.$el);
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    isIntersecting(entries: IntersectionObserverEntry[]): void {
      this.$emit('is-visible', entries[0].isIntersecting);
      if (entries[0].isIntersecting && this.unobserve) {
        this.observer.unobserve(this.$el);
      }
    },
  },
});
</script>

<style scoped></style>
