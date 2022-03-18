<template>
  <div class="container">
    <LandingPage :text="landingPage.text" :images="landingPage.images" />
    <hr />
    <Milestones :title="milestones.title" :steps="milestones.steps" />
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
        steps: [{}]
      }
    };
  }
};
</script>

<style scoped></style>
