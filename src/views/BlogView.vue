<template>
  <div class="container">
    <LandingPage>
      <template #text>
        <LandingPageText :text="landingPage.text" :linkage="blogs.title" />
      </template>
      <template #image>
        <LandingPageImage :images="landingPage.images" />
      </template>
    </LandingPage>
    <hr />
    <SlotWithTitle :title="blogs.title">
      <BlogItem />
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
import type { ILandingPageText, IBlogEntry } from '@/types';

export default Vue.extend({
  name: 'BlogView',
  components: {
    LandingPage,
    LandingPageText,
    LandingPageImage,
    SlotWithTitle,
    BlogItem,
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
        images: ['blog_post.svg'],
      },
      blogs: {
        title: 'Our blog posts',
      },
      currentYear: 2022,
      currentMonth: 11,
      isLoading: false,
      blogPosts: [] as IBlogEntry[],
    };
  },
  async created() {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth() + 1;
  },
  methods: {
    async getNextPosts(): Promise<void> {
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
        this.blogPosts.push(await res.json());
      }
      this.isLoading = false;
      if (this.currentMonth === 1) {
        this.currentMonth = 12;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
  },
});
</script>

<style scoped></style>
