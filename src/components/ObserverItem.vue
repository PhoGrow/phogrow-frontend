<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ObserverItem',
  props: {
    unobserve: Boolean,
  },
  emits: ['is-visible'],
  data() {
    return {
      observer: {} as IntersectionObserver,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(this.isIntersecting);
    this.observer.observe(this.$el);
  },
  beforeUnmount() {
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
