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
          title: 'What is your contact?',
          subtitle: `– We've got you covered!`,
          message:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
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
        title: 'Imprint',
        text: [
          'This site is still work in progress and not publicly advertised.',
          'The imprint will be updated once content is completely added.',
          'We care about laws, but this is our first project. Give us time.'
          // 'TH Köln',
          // 'Claudiusstr. 1',
          // '50678 Köln',
          // '-',
          // 'Postanschrift',
          // 'Gustav-Heinemann-Ufer 54',
          // '50968 Köln',
          // '-',
          // 'T: + 49 221-8275-0',
          // 'F: + 49 221-8275-3131',
          // 'E: poststelle@th-koeln.de',
          // '-',
          // 'Die TH Köln (Technische Hochschule Köln) ist eine Körperschaft des Öffentlichen Rechts.',
          // 'Sie wird durch den Präsidenten Prof. Dr. Stefan Herzig gesetzlich vertreten.',
          // '-',
          // 'Zuständige Aufsichtsbehörde:',
          // 'Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen',
          // 'Völklinger Str. 49',
          // '40221 Düsseldorf',
          // 'T: +49 211-896-04',
          // 'F: +49 211-896-4555',
          // 'http://www.wissenschaft.nrw.de/',
          // '-',
          // 'Umsatzsteuer-Identifikationsnummer gem. § 27a Umsatzsteuergesetz:',
          // 'DE 122653679'
        ]
      }
    };
  }
};
</script>

<style scoped></style>
