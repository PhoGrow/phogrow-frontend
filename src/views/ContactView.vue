<template>
  <div class="container">
    <LandingPage :hasBgImage="landingPage.hasBgImage">
      <template #text>
        <LandingPageText :text="landingPage.text" :linkage="imprint.title" />
      </template>
    </LandingPage>
    <SlotWithTitle :title="imprint.title">
      <ImprintItem />
    </SlotWithTitle>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  LandingPage,
  LandingPageText,
  SlotWithTitle,
  ImprintItem,
} from '@/components';
import type { ILandingPageText } from '@/types';

export default defineComponent({
  name: 'ContactView',
  components: {
    LandingPage,
    LandingPageText,
    SlotWithTitle,
    ImprintItem,
  },
  data() {
    return {
      landingPage: {
        text: {
          title: `Let's connect`,
          subtitle: `Be part of our network`,
          message:
            'Questions or suggestions – Reach out to us. We look forward to your inquiry.',
          buttons: [
            {
              message: 'Send mail',
              href: 'mailto:phogrow@gmail.com',
            },
            {
              message: 'Follow us',
              href: 'https://instagram.com/phogrow3d',
            },
            {
              message: 'See imprint',
            },
          ],
        } as ILandingPageText,
        hasBgImage: true,
      },
      imprint: {
        title: 'Imprint',
      },
    };
  },
});
</script>

<style scoped></style>
