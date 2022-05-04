<template>
  <div class="container">
    <LandingPage :text="landingPage.text" :images="landingPage.images" />
    <hr />
    <div v-for="{ title, note, info } of information" :key="title">
      <Information :title="title" :note="note" :info="info" />
      <hr />
    </div>
    <FinancialPartners
      :title="partners.title"
      :organizations="partners.organizations"
      :redirect="partners.redirect"
    />
    <hr />
    <FurtherLinks :title="furtherLinks.title" :links="furtherLinks.links" />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import Information from '@/components/Information.vue';
import FinancialPartners from '@/components/FinancialPartners.vue';
import FurtherLinks from '@/components/FurtherLinks.vue';

export default {
  name: 'Home',
  components: {
    LandingPage,
    Information,
    FinancialPartners,
    FurtherLinks
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'PhoGrow',
          subtitle: 'Experience plant growth in 3D.',
          message:
            'We create digital growing plants for your own creative use case.',
          buttons: [
            {
              message: 'Learn more',
              href: '#whatWeDo'
              // messageOnSide: '– Scroll down'
            }
          ]
        },
        images: ['flowers.svg']
      },
      information: [
        {
          title: 'What we do',
          note: '',
          info: [
            {
              image: 'team.jpg',
              title: 'Capture plants',
              message:
                'In our PhoGrow-Box, real plants grow autonomously under variable conditions. ' +
                'This growth process is captured by cameras from different perspectives.'
            },
            {
              animation: 'austernSeitling_reduced.glb',
              title: 'Our Results',
              message:
                'We create photorealistic animations of real plants and mushrooms, just like the one on your left. ' +
                'You can look at it from different perspectives by clicking and dragging.'
            },
            {
              image: 'animating.svg',
              title: 'Applications',
              message:
                'Now you can use the animations in your applications. ' +
                'Place our plants on your website, movies and video games. ' +
                'Or, of course, in your very own use cases where you want to make nature more real.'
            }
          ]
        }
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
            link: 'https://www.th-koeln.de'
          },
          {
            logo: 'startUpLab.jpg',
            alt: 'StartUpLab@TH Köln',
            link: 'https://www.th-koeln.de/forschung/startuplabth-koeln_76381.php'
          },
          {
            logo: 'bmbf.svg',
            alt: 'Bundesministerium für Bildung und Forschung',
            link: 'https://www.bmbf.de/'
          },
          {
            logo: 'cgl.svg',
            alt: 'Cologne Game Lab',
            link: 'https://colognegamelab.de'
          }
        ],
        redirect: [
          {
            text: 'Become part of the',
            hashtag: '#plontgang',
            to: 'Contact'
          }
        ]
      },
      furtherLinks: {
        title: 'Who we are',
        links: [
          {
            title: 'Who is PhoGrow?',
            linkTo: 'About Us'
          },
          {
            title: 'Bump into PhoGrow?',
            linkTo: 'Contact'
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
