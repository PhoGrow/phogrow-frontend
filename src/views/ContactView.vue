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
import Vue from 'vue';
import LandingPage from '@/components/LandingPage.vue';
import LandingPageText from '@/components/LandingPageText.vue';
import SlotWithTitle from '@/components/SlotWithTitle.vue';
import ImprintItem from '@/components/ImprintItem.vue';

export default Vue.extend({
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
          title: 'Bump into PhoGrow?',
          subtitle: `– We've got you covered!`,
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
        },
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
