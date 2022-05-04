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
    <p class="has-text-centered has-text-grey mb-6">
      You came this far? Check our IG 😉
    </p>
    <!-- <hr /> -->
    <!-- <FinancialPartners
      :title="partners.title"
      :organizations="partners.organizations"
      :redirect="partners.redirect"
    /> -->
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import Information from '@/components/Information.vue';
import Team from '@/components/Team.vue';
// import FinancialPartners from '@/components/FinancialPartners.vue';

export default {
  name: 'AboutUs',
  components: {
    LandingPage,
    Information,
    Team
    // FinancialPartners
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'Who is PhoGrow?',
          subtitle: `– That's us!`,
          message: 'A team of 8 young people who share a passionated vision.',
          buttons: [
            {
              message: 'Learn more',
              href: '#ourVision'
              // messageOnSide: '– Scroll down'
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
              'Dive into a digital world where you can interact with the vegetation and watch the plants grow. ' +
              'Experience the plants from every perspective at every stage of growth.'
          },
          {
            image: 'web_devices.svg',
            title: 'Accessible on every platform',
            message:
              'You can experience the beauty of our plants and mushrooms on every device, from anywhere. ' +
              'Let it be outside in the forest or on a fieldtrip using your Smartphone. ' +
              'Or simply on your Tablet and Desktop at home.'
          },
          {
            image: 'launching.svg',
            title: 'First database for 3D plant growth',
            message:
              'We provide you with the first database of 3D plant growth, ' +
              'that allows you to experience a huge variety of different vegetations in real time.'
          }
        ]
      },
      team: {
        title: 'We are...',
        people: [
          {
            workArea: 'Software',
            developers: [
              {
                image: 'tim_scheller.jpg',
                name: 'Tim Scheller',
                task: '3D software',
                message:
                  'Hi, my name is Tim. I love nature, art, and technology. ' +
                  'I try to incorporate all these passions at PhoGrow by making sure that our plants get captured ' +
                  'and reconstructed digitally in 3D.'
              },
              {
                image: 'nina_utzelmann.jpg',
                name: 'Nina Utzelmann',
                task: '3D software',
                message:
                  `Hello frens, I'm Nina. I take care of our plants growing digitally ` +
                  'and the animations look thoroughly realistic.'
              },
              {
                image: 'rene_dietz.jpg',
                name: 'René Dietz',
                task: 'Web development',
                message:
                  'Sup, René here. At PhoGrow, I do everything web-related, ' +
                  'whether the website, webserver or eventually controlling our growbox.'
              }
            ]
          },
          {
            workArea: 'Hardware',
            developers: [
              {
                image: 'philipp_schwarz.jpg',
                name: 'Philipp Schwarz',
                task: 'Engine',
                message:
                  'Hey guys, my name is Philipp. I take care of the hardware at PhoGrow. ' +
                  'From the box design to the finished construction, ' +
                  'I work with microcomputers, motors, controls, mechanics and structures ' +
                  'to create an ideal home for our plants.'
              },
              {
                image: 'michelle_graesle.jpg',
                name: 'Michelle Gräsle',
                task: 'Electronics',
                message:
                  `Hi, I'm Michelle. Hardware and electronics are part of my responsibility here. ` +
                  'I am new to the PhoGrow team and support wherever I can.'
              },
              {
                image: 'matthias_donst.jpg',
                name: 'Matthias Donst',
                task: 'Construction',
                message:
                  'Hi, my name is Matthias. I love plants, practical work with wood and like to deal with business topics. ' +
                  'In these areas, I support PhoGrow as best as possible.'
              }
            ]
          },
          {
            workArea: 'Web Presence',
            developers: [
              {
                image: 'nina_scheller.jpg',
                name: 'Nina Scheller',
                task: 'Social media',
                message:
                  `Hello, it's me, Nina. I am the woman behind our social media. ` +
                  'Taking pictures, editing and preparing new posts is my area of responsibility.'
              }
            ]
          }
        ]
      }
      // partners: {
      //   title: 'Our financial partners',
      //   organizations: [
      //     {
      //       logo: 'th_koeln.svg',
      //       alt: 'Technische Hochschule Köln',
      //       link: 'https://www.th-koeln.de'
      //     },
      //     {
      //       logo: 'startUpLab.jpg',
      //       alt: 'StartUpLab@TH Köln',
      //       link: 'https://www.th-koeln.de/forschung/startuplabth-koeln_76381.php'
      //     },
      //     {
      //       logo: 'bmbf.svg',
      //       alt: 'Bundesministerium für Bildung und Forschung',
      //       link: 'https://www.bmbf.de/'
      //     },
      //     {
      //       logo: 'cgl.svg',
      //       alt: 'Cologne Game Lab',
      //       link: 'https://colognegamelab.de'
      //     }
      //   ],
      //   redirect: [
      //     {
      //       text: `Let's look into our`,
      //       hashtag: '#future',
      //       to: 'Roadmap'
      //     },
      //     {
      //       text: 'Become part of the',
      //       hashtag: '#plontgang',
      //       to: 'Contact'
      //     }
      //   ]
      // }
    };
  }
};
</script>

<style scoped></style>
