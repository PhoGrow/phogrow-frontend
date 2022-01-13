<template>
  <div id="imprint">
    <InformationTitle :title="title" />
    <div class="columns is-centered is-gapless px-5 mb-6">
      <div class="column is-narrow">
        <p v-for="(paragraph, i) of text" :key="i">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import InformationTitle from '@/components/InformationTitle.vue';

export default {
  name: 'Imprint',
  components: {
    InformationTitle
  },
  props: {
    title: String,
    text: Array
  }
};
</script>

<style scoped></style>
