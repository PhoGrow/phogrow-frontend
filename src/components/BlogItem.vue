<template>
  <div>
    <router-link
      v-if="!isFullPage"
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
            <b-tag v-for="category of entry.categories" rounded>{{
              category
            }}</b-tag>
          </b-taglist>
          <p class="title is-4">{{ entry.title }}</p>
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
        <p
          class="card-content line-clamp"
          style="border-bottom: 3rem solid transparent"
        >
          {{ entry.tldr }}
        </p>
      </div>
    </router-link>
    <div v-else></div>
  </div>
</template>

<script lang="ts">
import Vue, { type PropType } from 'vue';
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
    };
  },
  created() {
    this.date = new Date(this.entry.date);
  },
});
</script>

<style scoped></style>
