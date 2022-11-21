<template>
  <component
    :is="isFullPage ? 'div' : 'router-link'"
    :to="
      '/blog/' +
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1 < 10 ? '0' : '') +
      (date.getMonth() + 1) +
      '-' +
      entry.title.replaceAll(' ', '-').toLowerCase()
    "
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="card">
      <div class="card-image">
        <ImageItem
          :src="'/blog/' + date.getFullYear() + '/images/' + entry.image"
        />
      </div>
      <header class="px-6 py-5">
        <div :class="['tags mb-0', { 'are-medium': isFullPage }]">
          <span
            v-for="category of entry.categories"
            :key="category"
            class="tag is-rounded"
          >
            {{ category }}
          </span>
        </div>
        <p class="title is-3">{{ entry.title }}</p>
        <p class="subtitle is-6 has-text-grey">
          {{
            date.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
          }}
          • {{ entry.author }}
        </p>
      </header>
      <div
        :class="['card-content py-0', { 'line-clamp': !isFullPage }]"
        style="border-bottom: 3rem solid transparent"
      >
        <p :class="{ 'box has-background-light p-5 my-1': isFullPage }">
          <span v-if="isFullPage" class="has-text-weight-semibold">TLDR</span>
          {{ entry.tldr }}
        </p>
        <p
          v-if="isFullPage && markdownInHtml"
          v-html="markdownInHtml"
          class="content pt-5"
        ></p>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import Vue, { type PropType } from 'vue';
import ImageItem from '@/components/ImageItem.vue';
import { marked } from 'marked';
import type { IBlogEntry } from '@/types';

export default Vue.extend({
  name: 'BlogItem',
  props: {
    entry: Object as PropType<IBlogEntry>,
    isFullPage: Boolean,
  },
  components: {
    ImageItem,
  },
  data() {
    return {
      date: {} as Date,
      markdownInHtml: '',
    };
  },
  created() {
    this.date = new Date(this.entry.date);
    this.markdownInHtml = marked.parse(this.entry.text);
  },
});
</script>

<style scoped></style>
