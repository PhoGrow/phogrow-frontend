<template>
  <div class="container">
    <LandingPage>
      <template #text>
        <LandingPageText
          :text="landingPage.text"
          :linkage="information.title"
        />
      </template>
      <template #image>
        <LandingPageImage :images="landingPage.images" />
      </template>
    </LandingPage>
    <hr />
    <SlotWithTitle :title="information.title">
      <InformationItem :info="information.info" />
    </SlotWithTitle>
    <hr />
    <SlotWithTitle :title="team.title">
      <TeamItem :people="team.people" />
    </SlotWithTitle>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  LandingPage,
  LandingPageText,
  LandingPageImage,
  SlotWithTitle,
  InformationItem,
  TeamItem,
} from '@/components';
import type { ILandingPageText, IInformation, ITeam } from '@/types';

export default defineComponent({
  name: 'AboutUs',
  components: {
    LandingPage,
    LandingPageText,
    LandingPageImage,
    SlotWithTitle,
    InformationItem,
    TeamItem,
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'We are PhoGrow',
          subtitle: `A Cologne-based AI startup`,
          message:
            'We are a motivated team tackling the most ambitious challenges of our time from a new perspective by providing smart digital twins for agriculture.',
          buttons: [{ message: 'Learn more' }],
        } as ILandingPageText,
        images: [
          'tim_scheller.jpg',
          'nina_utzelmann.jpg',
          'rene_dietz.jpg',
          'logo_black.svg',
          'philipp_schwarz.jpg',
          'michelle_graesle.jpg',
          'matthias_donst.jpg',
          'nina_scheller.jpg',
        ],
      },
      information: {
        title: 'Our vision',
        info: [
          {
            image: 'convert.svg',
            title: 'Digital twins for agriculture',
            message: `We provide digital twins for agriculture as high-quality, flexible and annotated 4D scans from individual plants to holistic fields.`,
          },
          {
            image: 'data.svg',
            title: 'Importance of accurate data',
            message: `In order to overcome the lack of high quality data, accurate data is needed to meet the challenges of our time.`,
          },
          {
            image: 'forming_ideas.svg',
            title: 'Tackle challenges in farming',
            message: `GPS navigation inaccuracies of up to 50 cm and reception latency make precision farming difficult.
              More than 400 wheat ears per square meter need to be accurately detected by optical sensor systems.`,
          },
        ] as IInformation[],
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
                  'and reconstructed digitally in 3D.',
              },
              {
                image: 'nina_utzelmann.jpg',
                name: 'Nina Utzelmann',
                task: '3D software',
                message:
                  `Hello friends, I'm Nina. I take care of our plants growing digitally ` +
                  'and the animations look thoroughly realistic.',
              },
              {
                image: 'rene_dietz.jpg',
                name: 'René Dietz',
                task: 'Web development',
                message:
                  'Hey, René here. At PhoGrow, I do everything web-related, ' +
                  'whether the website, webserver, or eventually controlling our growbox.',
              },
            ],
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
                  'I work with microcomputers, motors, controls, mechanics, and structures ' +
                  'to create an ideal home for our plants.',
              },
              {
                image: 'michelle_graesle.jpg',
                name: 'Michelle Gräsle',
                task: 'Electronics',
                message:
                  `Hi, I'm Michelle. Hardware and electronics are part of my responsibility here. ` +
                  'I am new to the PhoGrow team and support wherever I can.',
              },
              {
                image: 'matthias_donst.jpg',
                name: 'Matthias Donst',
                task: 'Construction',
                message:
                  'Hi, my name is Matthias. I love plants, practical work with wood, and like to deal with business topics. ' +
                  'In these areas, I support PhoGrow as best as possible.',
              },
            ],
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
                  'Taking pictures, editing, and preparing new posts is my area of responsibility.',
              },
            ],
          },
        ] as ITeam[],
      },
    };
  },
});
</script>

<style scoped></style>
