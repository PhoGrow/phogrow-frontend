<template>
  <div class="container">
    <LandingPage>
      <template #text>
        <LandingPageText :text="landingPage.text" :linkage="blog.title" />
      </template>
      <template #image>
        <LandingPageImage :images="landingPage.images" />
      </template>
    </LandingPage>
    <hr />
    <SlotWithTitle :title="blog.title">
      <div class="columns is-multiline is-variable is-6-tablet is-0-mobile">
        <BlogItem
          v-for="entry of blogEntries"
          :key="entry.date"
          :entry="entry"
          class="column is-4 mb-5"
        />
      </div>
      <ObserverItem
        v-if="hasEntries"
        @is-visible="(option) => loadNextEntries(option)"
        class="is-relative p-6"
      >
        <b-loading
          :active="isLoading"
          :is-full-page="false"
          class="br-2"
        ></b-loading>
      </ObserverItem>
    </SlotWithTitle>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LandingPage from '@/components/LandingPage.vue';
import LandingPageText from '@/components/LandingPageText.vue';
import LandingPageImage from '@/components/LandingPageImage.vue';
import SlotWithTitle from '@/components/SlotWithTitle.vue';
import BlogItem from '@/components/BlogItem.vue';
import ObserverItem from '@/components/ObserverItem.vue';
import type { ILandingPageText, IBlogEntry } from '@/types';

export default Vue.extend({
  name: 'BlogView',
  components: {
    LandingPage,
    LandingPageText,
    LandingPageImage,
    SlotWithTitle,
    BlogItem,
    ObserverItem,
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'What are we up to?',
          subtitle: '– Our blog hopefully helps out.',
          message:
            'We want to give a better perspective on our work and beyond.',
          buttons: [{ message: 'Learn more' }],
        } as ILandingPageText,
        images: ['social_user.svg'],
      },
      blog: {
        title: 'Our blog posts',
      },
      lastEntryYear: 2022,
      lastEntryMonth: 11,
      currentYear: 0,
      currentMonth: 0,
      isLoading: false,
      hasEntries: true,
      blogEntries: [] as IBlogEntry[],
    };
  },
  created() {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth() + 1;
  },
  methods: {
    async loadNextEntries(loadMore: boolean): Promise<void> {
      if (!loadMore) {
        return;
      }
      this.isLoading = true;
      const res = await fetch(
        '/blog/' +
          this.currentYear +
          '/' +
          (this.currentMonth < 10 ? '0' : '') +
          this.currentMonth +
          '.json'
      );
      if (res.ok) {
        const { entries }: { entries: IBlogEntry[] } = await res.json();
        this.blogEntries.push(...entries);
      }
      this.isLoading = false;
      if (
        this.currentYear === this.lastEntryYear &&
        this.currentMonth === this.lastEntryMonth
      ) {
        this.hasEntries = false;
        return;
      }
      if (this.currentMonth === 1) {
        this.currentMonth = 12;
        this.currentYear -= 1;
      } else {
        this.currentMonth -= 1;
      }
      if (!res.ok) {
        this.loadNextEntries(true);
      }
    },
  },
});
</script>

<style scoped></style>
