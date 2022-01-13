<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Observer',
  props: {
    unobserve: Boolean
  },
  data() {
    return {
      observer: new IntersectionObserver(this.isIntersecting)
    };
  },
  mounted() {
    this.observer.observe(this.$el);
  },
  methods: {
    isIntersecting(entries) {
      this.$emit('isVisible', entries[0].isIntersecting);
      if (entries[0].isIntersecting && this.unobserve) {
        this.observer.unobserve(this.$el);
      }
    }
  }
};
</script>

<style scoped></style>
