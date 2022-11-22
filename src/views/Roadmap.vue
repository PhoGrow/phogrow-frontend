<template>
  <div class="container">
    <LandingPage>
      <template #text>
        <LandingPageText :text="landingPage.text" :linkage="milestones.title" />
      </template>
      <template #image>
        <LandingPageImage :images="landingPage.images" />
      </template>
    </LandingPage>
    <hr />
    <SlotWithTitle :title="milestones.title">
      <MileStones :steps="milestones.steps" />
    </SlotWithTitle>
    <!-- <hr /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  LandingPage,
  LandingPageText,
  LandingPageImage,
  SlotWithTitle,
  MileStones,
} from '@/components';
import type { ILandingPageText, IMilestone } from '@/types';

export default defineComponent({
  name: 'RoadMap',
  components: {
    LandingPage,
    LandingPageText,
    LandingPageImage,
    SlotWithTitle,
    MileStones,
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'What is your plan?',
          subtitle: '– Just take a look!',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          buttons: [{ message: 'Learn more' }],
        } as ILandingPageText,
        images: ['scrum_board.svg'],
      },
      milestones: {
        title: 'Our Milestones',
        steps: [
          {
            year: 2020,
            items: [
              {
                marker: 'groups',
                quarter: 'Q4',
                title: 'The beginning of PhoGrow',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
              },
            ],
          },
          {
            year: 2021,
            items: [
              {
                marker: 'inventory_2',
                quarter: 'Q1',
                title: 'Growbox – First prototypes',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
              },
              {
                marker: 'flag',
                quarter: 'Q2',
                title: 'Proof of concept',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
              },
              {
                marker: 'co_present',
                quarter: 'Q3',
                title: 'Pitch – WES',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
              },
              {
                marker: 'support',
                quarter: 'Q4',
                title: 'Workshop – Drip Consulting',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
              },
            ],
          },
          {
            year: 2022,
            items: [
              {
                marker: 'web',
                quarter: 'Q1',
                title: 'Public website – This one!',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
              },
            ],
          },
        ] as IMilestone[],
      },
    };
  },
});
</script>

<style scoped></style>
