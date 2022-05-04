<template>
  <div class="container">
    <LandingPage :text="landingPage.text" :bgImage="landingPage.bgImage" />
    <Imprint :title="imprint.title" :text="imprint.text" />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import Imprint from '@/components/Imprint.vue';

export default {
  name: 'Contact',
  components: {
    LandingPage,
    Imprint
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
              href: 'mailto:phogrow@gmail.com'
            },
            {
              message: 'Follow us',
              href: 'https://instagram.com/phogrow3d'
            },
            {
              message: 'See imprint',
              href: '#imprint'
            }
          ]
        },
        bgImage: true
      },
      imprint: {
        title: 'Imprint'
      }
    };
  }
};
</script>

<style scoped></style>
