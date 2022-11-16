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
        <b-image
          :src="'/blog/' + date.getFullYear() + '/images/' + entry.image"
        ></b-image>
      </div>
      <header class="px-6 py-5">
        <b-taglist class="m-0">
          <b-tag
            v-for="category of entry.categories"
            :key="category"
            :size="isFullPage ? 'is-medium' : ''"
            rounded
            >{{ category }}</b-tag
          >
        </b-taglist>
        <p :class="['title', isFullPage ? 'is-2' : 'is-3']">
          {{ entry.title }}
        </p>
        <p :class="['subtitle has-text-grey', isFullPage ? 'is-5' : 'is-6']">
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
        :class="['card-content', isFullPage ? 'is-size-5' : 'line-clamp']"
        style="border-bottom: 3rem solid transparent"
      >
        <p :class="{ 'has-background-light br-2 p-5 my-3': isFullPage }">
          <span v-if="isFullPage" class="has-text-weight-semibold">TLDR</span>
          {{ entry.tldr }}
        </p>
        <p
          v-if="isFullPage && markdownInHtml"
          v-html="markdownInHtml"
          id="markdown"
          class="pt-5"
        ></p>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import Vue, { type PropType } from 'vue';
import { marked } from 'marked';
import type { IBlogEntry } from '@/types';

export default Vue.extend({
  name: 'BlogItem',
  props: {
    entry: Object as PropType<IBlogEntry>,
    isFullPage: Boolean,
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
  mounted() {
    if (this.isFullPage) {
      this.setClassesForMarkdown();
    }
  },
  methods: {
    setClassesForMarkdown(): void {
      const markdown = this.$el.querySelector('#markdown');
      const headers = markdown?.querySelectorAll('h1, h2, h3, h4, h5, h6');
      if (headers) {
        for (const header of headers) {
          header.classList.add('title', 'is-4', 'pt-5');
        }
      }
      const paragraphs = markdown?.querySelectorAll('p, pre');
      if (paragraphs) {
        for (const paragraph of paragraphs) {
          paragraph.classList.add('mb-3');
        }
      }
    },
  },
});
</script>

<style>
ul {
  list-style: unset;
  margin-left: 1.5rem;
}
</style>
