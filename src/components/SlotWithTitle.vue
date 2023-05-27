<template>
  <div :id="title?.split(' ').join('')">
    <div v-if="title" class="has-text-centered py-6">
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
    <div :class="['pb-6', title ? 'pt-3' : 'pt-6']">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SlotWithTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    note: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped></style>
