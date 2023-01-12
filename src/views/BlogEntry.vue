<template>
  <div class="container">
    <o-skeleton
      :active="isLoading"
      height="100%"
      :rounded="false"
      class="is-absolute"
      style="height: 100%"
    ></o-skeleton>
    <div class="columns is-centered is-gapless">
      <div class="column is-8">
        <SlotWithTitle title="">
          <BlogItem v-if="!isLoading" :entry="blogEntry" is-full-page />
        </SlotWithTitle>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SlotWithTitle, BlogItem } from '@/components';
import type { IBlogEntry } from '@/types';

export default defineComponent({
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
      const [year, month, ...titleInArray] = (
        this.$route.params.year_month_title as string
      ).split('-');
      const titleInLowerCase = titleInArray.join(' ');
      const res = await fetch('/blogs/' + year + '/' + month + '.json');
      if (res.ok) {
        const { entries }: { entries: IBlogEntry[] } = await res.json();
        this.blogEntry = entries.filter(
          ({ title }) =>
            title.split('-').join(' ').toLowerCase() === titleInLowerCase
        )[0];
        const markdown = await fetch(
          '/blogs/' + year + '/markdown/' + this.blogEntry.text
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
