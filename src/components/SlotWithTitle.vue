<template>
  <div :id="title.replaceAll(' ', '')">
    <div class="has-text-centered py-6">
      <h1
        :class="[
          'title is-2 has-text-weight-medium amaranth',
          { 'mb-2': note },
        ]"
      >
        <span class="has-background-white is-rounded bdb-clone py-2 px-6">{{
          title
        }}</span>
      </h1>
      <p v-if="note" class="is-size-5 has-text-grey">{{ note }}</p>
    </div>
    <div class="pt-3 pb-6">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SlotWithTitle',
  props: {
    title: String,
    note: String,
  },
});
</script>

<style scoped></style>
