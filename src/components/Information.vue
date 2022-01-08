<template>
  <div :id="id" class="px-5">
    <h1
      class="title is-2 has-text-weight-medium amaranth has-text-centered py-6 mb-0"
    >
      <span class="has-background-white is-rounded py-2 px-6">{{ title }}</span>
    </h1>
    <div
      v-for="{ image, title, message } of info"
      :key="title"
      class="columns is-vcentered is-centered is-gapless pb-6"
    >
      <div class="column is-3-tablet is-9-mobile">
        <img :src="require('@/assets/illustrations/' + image)" />
      </div>
      <div class="column is-narrow m-5"></div>
      <div class="column is-6-tablet">
        <p class="title is-spaced has-text-weight-medium">{{ title }}</p>
        <p class="subtitle has-text-grey">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  props: {
    title: String,
    info: Array
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
