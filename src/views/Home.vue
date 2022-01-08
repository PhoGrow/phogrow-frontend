<template>
  <div class="container">
    <LandingPage :text="landingPage.text" :image="landingPage.image" />
    <hr />
    <Information :title="information[0].title" :info="information[0].info" />
    <hr />
    <Information :title="information[0].title" :info="information[0].info" />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import Information from '@/components/Information.vue';

export default {
  name: 'Home',
  components: {
    LandingPage,
    Information
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
          buttonMsgSide: '– Scroll down'
        },
        image: 'flowers.svg'
      },
      information: [
        {
          title: 'What we do',
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
        }
      ]
    };
  }
};
</script>

<style scoped></style>
