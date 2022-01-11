<template>
  <div class="container">
    <LandingPage :text="landingPage.text" :image="landingPage.image" />
    <hr />
    <div v-for="{ title, note, info } of information" :key="title">
      <Information :title="title" :note="note" :info="info" />
      <hr />
    </div>
    <FurtherLinks :links="links" />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import Information from '@/components/Information.vue';
import FurtherLinks from '@/components/FurtherLinks.vue';

export default {
  name: 'Home',
  components: {
    LandingPage,
    Information,
    FurtherLinks
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'PhoGrow',
          subtitle: 'Experience plant growth in 3D.',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          buttonMsg: 'Learn more',
          buttonHref: '#whatWeDo',
          buttonMsgSide: '– Scroll down'
        },
        image: 'flowers.svg'
      },
      information: [
        {
          title: 'What we do',
          note: '',
          info: [
            {
              image: 'photo_session.svg',
              title: 'Capture plants',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: '3d_modeling.svg',
              title: 'Create 3D objects',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: 'animating.svg',
              title: 'Animate plant growth',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            }
          ]
        },
        {
          title: 'What you can do',
          note: '',
          info: [
            {
              image: 'designer.svg',
              title: 'Assets for your game',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: 'crypto_flowers.svg',
              title: 'Get exclusive NFTs',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: 'gardening.svg',
              title: 'Make biology interesting again!',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            }
          ]
        },
        {
          title: 'What you get',
          note: 'Some examples below.',
          info: [
            {
              image: '',
              title: 'Scientific plant name 1',
              subtitle: 'Common name',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: '',
              title: 'Scientific plant name 2',
              subtitle: 'Common name',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: '',
              title: 'Scientific plant name 3',
              subtitle: 'Common name',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            }
          ]
        }
      ],
      links: [
        {
          title: 'Who is PhoGrow?',
          linkTo: 'About Us'
        },
        {
          title: 'What is your contact?',
          linkTo: 'Contact'
        }
      ]
    };
  }
};
</script>

<style scoped></style>
