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
    <Team :title="team.title" :people="team.people" />
    <hr />
    <FinancialPartners
      :title="partners.title"
      :organizations="partners.organizations"
      :redirect="partners.redirect"
    />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import Information from '@/components/Information.vue';
import Team from '@/components/Team.vue';
import FinancialPartners from '@/components/FinancialPartners.vue';

export default {
  name: 'AboutUs',
  components: {
    LandingPage,
    Information,
    Team,
    FinancialPartners
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'Who is PhoGrow?',
          subtitle: `– That's us!`,
          message:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          buttons: [
            {
              message: 'Learn more',
              href: '#ourVision',
              messageOnSide: '– Scroll down'
            }
          ]
        },
        images: [
          'tim_scheller.jpg',
          'nina_utzelmann.jpg',
          'rene_dietz.jpg',
          'logo_black.svg',
          'philipp_schwarz.jpg',
          'michelle_graesle.jpg',
          'matthias_donst.jpg',
          'nina_scheller.jpg'
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
      team: {
        title: 'We are...',
        people: [
          {
            workArea: 'Software maniacs',
            developers: [
              {
                image: 'tim_scheller.jpg',
                name: 'Tim Scheller',
                task: '3D software',
                message:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              },
              {
                image: 'nina_utzelmann.jpg',
                name: 'Nina Utzelmann',
                task: '3D software',
                message:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              },
              {
                image: 'rene_dietz.jpg',
                name: 'René Dietz',
                task: 'Web development',
                message:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            workArea: 'Hardware maniacs',
            developers: [
              {
                image: 'philipp_schwarz.jpg',
                name: 'Philipp Schwarz',
                task: 'Specialist',
                message:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              },
              {
                image: 'michelle_graesle.jpg',
                name: 'Michelle Gräsle',
                task: 'Specialist',
                message:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              },
              {
                image: 'matthias_donst.jpg',
                name: 'Matthias Donst',
                task: 'Specialist',
                message:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            workArea: 'Support maniacs',
            developers: [
              {
                image: 'nina_scheller.jpg',
                name: 'Nina Scheller',
                task: 'Social media',
                message:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              }
            ]
          }
        ]
      },
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
            text: `Let's look into our`,
            hashtag: '#future',
            to: 'Roadmap'
          },
          {
            text: 'Become part of the',
            hashtag: '#plontgang',
            to: 'Contact'
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
