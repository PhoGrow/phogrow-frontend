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
      <div class="columns is-centered is-gapless">
        <div class="column is-10">
          <div class="columns is-multiline is-variable is-6-tablet is-0-mobile">
            <BlogItem
              v-for="entry of blogEntries"
              :key="entry.date"
              :entry="entry"
              class="column is-6 mb-5"
            />
          </div>
        </div>
      </div>
      <ObserverItem v-if="hasEntries" @is-visible="loadNextEntries($event)">
        <o-skeleton
          :active="isLoading"
          class="is-align-items-center my-5"
          height="6rem"
          width="6rem"
          circle
        ></o-skeleton>
      </ObserverItem>
    </SlotWithTitle>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  LandingPage,
  LandingPageText,
  LandingPageImage,
  SlotWithTitle,
  BlogItem,
  ObserverItem,
} from '@/components';
import type { ILandingPageText, IBlogEntry } from '@/types';

export default defineComponent({
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
      let ok = res.ok;
      if (ok) {
        const { entries } = await res.json();
        if (entries && entries.length) {
          this.blogEntries.push(...entries);
        } else {
          ok = false;
        }
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
      if (!ok) {
        this.loadNextEntries(true);
      }
    },
  },
});
</script>

<style scoped></style>
