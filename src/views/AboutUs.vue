<template>
  <div class="container">
    <LandingPage :text="landingPage.text" :images="landingPage.images" />
    <hr />
    <Information
      :title="information.title"
      :note="information.note"
      :info="information.info"
    />
    <hr />
    <People :people="people" />
    <hr />
    <!-- <FurtherLinks :links="links" /> -->
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import Information from '@/components/Information.vue';
import People from '@/components/People.vue';

export default {
  name: 'AboutUs',
  components: {
    LandingPage,
    Information,
    People
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'Who is PhoGrow?',
          subtitle: `– That's us.`,
          message:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          buttonMsg: 'Learn more',
          buttonHref: '#ourVision',
          buttonMsgSide: '– Scroll down'
        },
        images: [
          'tim_scheller.png',
          'nina_utzelmann.png',
          'rene_dietz.png',
          'logo_black.svg',
          'phillipp_schwarz.png',
          'michelle_graesle.png',
          'matthias_donst.png',
          'nina_scheller.png'
        ]
      },
      information: {
        title: 'Our Vision',
        note: '',
        info: [
          {
            image: 'explore.svg',
            title: 'Explore plants interactively in 3D',
            message:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
          },
          {
            image: 'web_devices.svg',
            title: 'Accessible on every platform',
            message:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
          },
          {
            image: 'launching.svg',
            title: 'Solutions for different applications',
            message:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
          }
        ]
      },
      people: [
        {
          workArea: 'Software',
          developers: [
            {
              image: 'tim_scheller.png',
              name: 'Tim Scheller',
              task: '3D software',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: 'nina_utzelmann.png',
              name: 'Nina Utzelmann',
              task: '3D software',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: 'rene_dietz.png',
              name: 'René Dietz',
              task: 'Web development',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            }
          ]
        },
        {
          workArea: 'Hardware',
          developers: [
            {
              image: 'phillipp_schwarz.png',
              name: 'Phillipp Schwarz',
              task: 'Specialist',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: 'michelle_graesle.png',
              name: 'Michelle Gräsle',
              task: 'Specialist',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            },
            {
              image: 'matthias_donst.png',
              name: 'Matthias Donst',
              task: 'Specialist',
              message:
                'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
            }
          ]
        },
        {
          workArea: 'Support',
          developers: [
            {
              image: 'nina_scheller.png',
              name: 'Nina Scheller',
              task: 'Social media',
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
