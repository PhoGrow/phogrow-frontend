<template>
  <div class="container">
    <LandingPage :text="landingPage.text" :images="landingPage.images" />
    <hr />
    <Milestones :title="milestones.title" :steps="milestones.steps" />
    <hr />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import Milestones from '@/components/Milestones.vue';

export default {
  name: 'Roadmap',
  components: {
    LandingPage,
    Milestones
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'What is your plan?',
          subtitle: '– Just take a look!',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          buttons: [
            {
              message: 'Learn more',
              href: '#ourMilestones',
              messageOnSide: '– Scroll down'
            }
          ]
        },
        images: ['scrum_board.svg']
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
                title: 'The begin of PhoGrow',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            year: 2021,
            items: [
              {
                marker: 'inventory_2',
                quarter: 'Q1',
                title: 'Growbox – First prototypes',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              },
              {
                marker: 'flag',
                quarter: 'Q2',
                title: 'Proof of concept',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              },
              {
                marker: 'co_present',
                quarter: 'Q3',
                title: 'Pitch – WES',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              },
              {
                marker: 'support',
                quarter: 'Q4',
                title: 'Workshop – Drip Consulting',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              }
            ]
          },
          {
            year: 2022,
            items: [
              {
                marker: 'web',
                quarter: 'Q1',
                title: 'Public website – This one!',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
