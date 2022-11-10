<template>
  <div class="container">
    <LandingPage>
      <template #text>
        <LandingPageText
          :text="landingPage.text"
          :linkage="information[0].title"
        />
      </template>
      <template #image>
        <LandingPageImage :images="landingPage.images" />
      </template>
    </LandingPage>
    <hr />
    <div v-for="{ title, info } of information" :key="title">
      <SlotWithTitle :title="title">
        <InformationItem :info="info" />
      </SlotWithTitle>
      <hr />
    </div>
    <SlotWithTitle :title="partners.title">
      <FinancialPartners
        :organizations="partners.organizations"
        :redirect="partners.redirect"
      />
    </SlotWithTitle>
    <hr />
    <SlotWithTitle :title="furtherLinks.title">
      <FurtherLinks :links="furtherLinks.links" />
    </SlotWithTitle>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LandingPage from '@/components/LandingPage.vue';
import LandingPageText from '@/components/LandingPageText.vue';
import LandingPageImage from '@/components/LandingPageImage.vue';
import SlotWithTitle from '@/components/SlotWithTitle.vue';
import InformationItem from '@/components/InformationItem.vue';
import FinancialPartners from '@/components/FinancialPartners.vue';
import FurtherLinks from '@/components/FurtherLinks.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    LandingPage,
    LandingPageText,
    LandingPageImage,
    SlotWithTitle,
    InformationItem,
    FinancialPartners,
    FurtherLinks,
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'PhoGrow',
          subtitle: 'Experience plant growth in 3D.',
          message:
            'We create digital growing plants for your own creative use case.',
          buttons: [{ message: 'Learn more' }],
        },
        images: ['flowers.svg'],
      },
      information: [
        {
          title: 'What we do',
          info: [
            {
              image: 'team.jpg',
              title: 'Capture plants',
              message:
                'In our PhoGrow-Box, real plants grow autonomously under variable conditions. ' +
                'This growth process is captured by cameras from different perspectives.',
            },
            {
              animation: 'austernSeitling_reduced.glb',
              title: 'Our Results',
              message:
                'We create photorealistic animations of real plants and mushrooms, just like the one on your left. ' +
                'You can look at it from different perspectives by clicking and dragging.',
            },
            {
              image: 'animating.svg',
              title: 'Applications',
              message:
                'Now you can use the animations in your application. ' +
                'Place our plants inside your website, movie, or video game. ' +
                'Or, of course, in your very own use case where you want to make nature more real.',
            },
          ],
        },
        // {
        //   title: 'What you can do',
        //   note: '',
        //   info: [
        //     {
        //       image: 'designer.svg',
        //       title: 'Assets for your game',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     },
        //     {
        //       image: 'crypto_flowers.svg',
        //       title: 'Get exclusive NFTs',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     },
        //     {
        //       image: 'gardening.svg',
        //       title: 'Make biology interesting again!',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     }
        //   ]
        // },
        // {
        //   title: 'What you get',
        //   note: 'Some examples below.',
        //   info: [
        //     {
        //       animation: 'reduced_tex.glb',
        //       title: 'Scientific plant name 1',
        //       subtitle: 'Common name',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     },
        //     {
        //       animation: 'reduced_tex.glb',
        //       title: 'Scientific plant name 2',
        //       subtitle: 'Common name',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     },
        //     {
        //       animation: 'reduced_tex.glb',
        //       title: 'Scientific plant name 3',
        //       subtitle: 'Common name',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     }
        //   ]
        // }
      ],
      partners: {
        title: 'Our financial partners',
        organizations: [
          {
            logo: 'th_koeln.svg',
            alt: 'Technische Hochschule Köln',
            link: 'https://www.th-koeln.de',
          },
          {
            logo: 'cgl.svg',
            alt: 'Cologne Game Lab',
            link: 'https://colognegamelab.de',
          },
          {
            logo: 'startUpLab.jpg',
            alt: 'StartUpLab@TH Köln',
            link: 'https://www.th-koeln.de/forschung/startuplabth-koeln_76381.php',
          },
          {
            logo: 'bmbf.svg',
            alt: 'Bundesministerium für Bildung und Forschung',
            link: 'https://www.bmbf.de/',
          },
        ],
        redirect: [
          // {
          //   text: `Let's look into our`,
          //   hashtag: '#future',
          //   to: 'Roadmap',
          // },
          {
            text: 'Become part of our',
            hashtag: '#plantgang',
            to: 'Contact',
          },
        ],
      },
      furtherLinks: {
        title: 'Who we are',
        links: [
          {
            title: 'Who is PhoGrow?',
            linkTo: 'About Us',
          },
          {
            title: 'Bump into PhoGrow?',
            linkTo: 'Contact',
          },
        ],
      },
    };
  },
});
</script>

<style scoped></style>
