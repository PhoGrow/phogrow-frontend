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
      <Milestones :steps="milestones.steps" />
    </SlotWithTitle>
    <!-- <hr /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LandingPage from '@/components/LandingPage.vue';
import LandingPageText from '@/components/LandingPageText.vue';
import LandingPageImage from '@/components/LandingPageImage.vue';
import Milestones from '@/components/Milestones.vue';
import SlotWithTitle from '@/components/SlotWithTitle.vue';

export default Vue.extend({
  name: 'Roadmap',
  components: {
    LandingPage,
    LandingPageText,
    LandingPageImage,
    SlotWithTitle,
    Milestones,
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
        },
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
        ],
      },
    };
  },
});
</script>

<style scoped></style>
