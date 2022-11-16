<template>
  <div class="container">
    <b-loading :active="isLoading"></b-loading>
    <div class="columns is-centered is-gapless">
      <div class="column is-8">
        <SlotWithTitle title="">
          <BlogItem v-if="!isLoading" :entry="blogEntry" isFullPage />
        </SlotWithTitle>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SlotWithTitle from '@/components/SlotWithTitle.vue';
import BlogItem from '@/components/BlogItem.vue';
import type { IBlogEntry } from '@/types';

export default Vue.extend({
  name: 'BlogEntry',
  components: {
    SlotWithTitle,
    BlogItem,
  },
  data() {
    return {
      isLoading: true,
      blogEntry: {} as IBlogEntry,
    };
  },
  async created() {
    await this.loadEntry();
  },
  watch: {
    async $route(): Promise<void> {
      await this.loadEntry();
    },
  },
  methods: {
    async loadEntry(): Promise<void> {
      const [year, month, ...titleInArray] =
        this.$route.params.year_month_title.split('-');
      const titleInLowerCase = titleInArray.join(' ');
      const res = await fetch('/blog/' + year + '/' + month + '.json');
      if (res.ok) {
        const { entries }: { entries: IBlogEntry[] } = await res.json();
        this.blogEntry = entries.filter(
          ({ title }) =>
            title.replaceAll('-', ' ').toLowerCase() === titleInLowerCase
        )[0];
        const markdown = await fetch(
          '/blog/' + year + '/markdown/' + this.blogEntry.text
        );
        if (markdown.ok) {
          const text = await markdown.text();
          this.blogEntry.text = text;
        }
      }
      if (!(this.blogEntry && Object.keys(this.blogEntry).length)) {
        this.$router.push('/');
      }
      this.isLoading = false;
    },
  },
});
</script>

<style scoped></style>
