<template>
  <div :id="id">
    <InformationTitle :title="title" />
  </div>
</template>

<script>
import InformationTitle from '@/components/InformationTitle.vue';

export default {
  name: 'Milestones',
  components: {
    InformationTitle
  },
  props: {
    title: String,
    steps: Array
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
