<template>
  <div class="container">
    <LandingPage>
      <template #text>
        <LandingPageText
          :text="landingPage.text"
          :linkage="employerOverview.title"
        />
      </template>
      <template #image>
        <LandingPageImage :images="landingPage.images" />
      </template>
    </LandingPage>
    <hr />
    <SlotWithTitle :title="employerOverview.title">
      <InformationItem :info="employerOverview.info" />
    </SlotWithTitle>
    <hr />
    <SlotWithTitle :title="jobPostings.title">
      <JobPostings :positions="jobPostings.positions" />
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
  JobPostings,
} from '@/components';
import type { ILandingPageText, IInformation, IJobPosting } from '@/types';

export default defineComponent({
  name: 'JoinUs',
  components: {
    LandingPage,
    LandingPageText,
    LandingPageImage,
    SlotWithTitle,
    InformationItem,
    JobPostings,
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'Want to work with us?',
          subtitle: '– Join our mission!',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          buttons: [{ message: 'Learn more' }],
        } as ILandingPageText,
        images: ['team_collaboration.svg'],
      },
      employerOverview: {
        title: 'Our values',
        info: [
          {
            image: 'welcome.svg',
            title: 'How to describe us',
            message:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          },
          {
            image: 'investment_data.svg',
            title: 'Your opportunities',
            message:
              'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          },
          {
            image: 'happy_feeling.svg',
            title: 'We work together',
            message:
              'As a young and vibrant team, we provide a creative working environment with flat hierarchies and celebrate diversity, where everything you do matters.',
          },
        ] as IInformation[],
      },
      jobPostings: {
        title: 'Open positions',
        positions: [
          {
            jobTitle: 'Marketing Lead',
            employmentType: ['Full-time'],
            location: ['Office in Cologne', 'remote'],
            salary: 'Competitive salary (2500€ gross + bonus)',
            description: `You will have the unique opportunity to become co-founder of a Cologne based AI-startup, tackling the most challenging problems of today from a new perspective.\n
                Providing digital twins of plants, to help humans and robots make data-driven decisions in agriculture, is our contribution to ensure future food supply, despite the challenges of climate change and population growth. We have ambitious goals, but a clear vision, that we can only realize together, as a team.\n
                If you want to have an impact on modern agriculture practices, believe in the potential of smart digital twins and enjoy working in a startup environment, we would love to hear from you.`,
            responsibilities: [
              'We are experts in our fields and so should you be an expert in marketing related topics and enjoy the exchange with our customers.',
              'Business plan',
              'Talk to customers',
              'Acquire new customers',
              'Acquire founding',
            ],
            requirements: [
              'BWL',
              '2+ years of professional experience',
              'Excellent verbal + written communication',
              'Fluent in German/English',
              'Startup experience is a plus',
            ],
            benefits: [''],
          },
          {
            jobTitle: 'Creative Intern',
            employmentType: ['Full-time', 'part-time'],
            location: ['Office in Cologne', 'remote'],
            salary: 'Gratuitous',
            description: `You will have the unique opportunity to become intern of a Cologne based AI-startup, tackling the most challenging problems of today from a new perspective.\n
                Providing digital twins of plants, to help humans and robots make data-driven decisions in agriculture, is our contribution to ensure future food supply, despite the challenges of climate change and population growth. We have ambitious goals, but a clear vision, that we can only realize together, as a team.\n
                If you want to have an impact on modern agriculture practices, believe in the potential of smart digital twins and enjoy working in a startup environment, we would love to hear from you.`,
            responsibilities: [
              'We are experts in our fields and thus you will have a lot of opportunities to learn.',
              'Capturing objects in 3D',
            ],
            requirements: ['Enrolled in a university'],
            benefits: [''],
          },
        ] as IJobPosting[],
      },
    };
  },
});
</script>

<style scoped></style>
