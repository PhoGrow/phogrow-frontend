<template>
  <div class="container">
    <LandingPage>
      <template #text>
        <LandingPageText
          :text="landingPage.text"
          :linkage="jobPostings.title"
        />
      </template>
      <template #image>
        <LandingPageImage :images="landingPage.images" />
      </template>
    </LandingPage>
    <hr />
    <SlotWithTitle :title="jobPostings.title">
      <JobPostings :positions="jobPostings.positions" />
    </SlotWithTitle>
    <hr />
    <SlotWithTitle :title="employerOverview.title">
      <InformationItem :info="employerOverview.info" />
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
          title: 'Grow with us',
          subtitle: 'Join our mission',
          message:
            'Providing digital twins of plants to help humans and robots make data-driven decisions in agriculture. We have ambitious goals, but a clear vision that can only be achieved together, as a team.',
          buttons: [{ message: 'Join us' }],
        } as ILandingPageText,
        images: ['team_collaboration.svg'],
      },
      employerOverview: {
        title: 'Our values',
        info: [
          {
            image: 'welcome.svg',
            title: 'We are PhoGrow',
            message:
              'We are a motivated team tackling the most ambitious challenges of our time from a new perspective by providing smart digital twins for agriculture.',
          },
          {
            image: 'investment_data.svg',
            title: 'Opportunities',
            message:
              'At PhoGrow, we strive to become the go-to platform for big agricultural companies looking for high quality digital twins of plants to optimize their operations in a more sustainable way.',
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
            icon: 'trending_up',
            employmentType: ['Full-time'],
            location: ['Office in Cologne', 'remote'],
            salary: 'Competitive salary (equal pay)',
            description: [
              {
                text: `You will have the unique opportunity to become the marketing lead and potentially co-founder of a Cologne-based AI startup, tackling today's most challenging problems from a new perspective.`,
              },
              {
                title: 'Opportunity',
                text: `To this end, agriculture is one of the least digitized industries, which is currently undergoing a radical change with autonomous machines starting to optimize conventional agriculture practices. The rapid development in this field is driven by corporate competition, where startups play an important role in exploring new ideas and potentially transforming the future of agriculture.\n
                  At PhoGrow, we strive to become the go-to platform for big agricultural companies looking for high quality digital twins of plants to optimize their processes.`,
              },
              {
                title: 'We offer...',
                text: 'As a young and ambitious team, we provide a creative working environment with flat hierarchies and celebrate diversity, where everything you do matters. We apply cutting-edge AI technologies and distributed systems IoT to improve modern agricultural practices for the better.',
              },
              {
                title: 'We are looking for...',
                text: `You should be a highly motivated marketing specialist, eager to establish PhoGrow as the go-to platform for big agricultural companies, looking for high quality digital twins of plants to optimize their processes. As we are experts in our fields, you should be an expert in marketing related topics, enjoy interacting with our customers, be efficient in raising new funds, and most importantly be a team player who believes in our common vision.\n
                  If you want to have an impact on more sustainable agricultural practices, believe in the potential of smart digital twins, and enjoy working in a fast moving startup environment with flat hierarchies, we would love to hear from you.`,
              },
            ],
            responsibilities: [
              'Branding + positioning of the company and identification of sales opportunities',
              'Lead generation, customer acquisition, and target group segmentation',
              'Development and implementation of marketing strategies',
              'Budget planning, sales activities, and acquiring new funding',
              'Support in management of tax matters and compliance with tax regulations',
            ],
            requirements: [
              'Completed studies in business administration, marketing, or related fields',
              '2+ years of professional experience',
              'Strong communication and negotiation skills',
              'Experience in dealing with distribution and sales processes',
              'Fluent oral and written communication in English and German',
            ],
            benefits: [
              'Mutual respect and openness',
              'Opportunity to have a direct influence on the success of the company',
              'Versatile tasks and responsibilities that allow for broad professional development',
              'Opportunity to work in an interdisciplinary environment and collaborate with different stakeholders',
              'Personal development through taking on responsibility and learning new skills',
            ],
            motivation: [
              'Why are you the right fit for this position?',
              'What is the role of plants as digital twins in modern agricultural practices?',
              'Which companies do you think are most likely to benefit from our service and how?',
            ],
          },
          {
            jobTitle: 'Creative Intern',
            icon: 'palette',
            employmentType: ['Part-time'],
            location: ['Office in Cologne', 'remote'],
            salary: 'Negotiable',
            description: [
              {
                text: `You will have the unique opportunity to become an intern of a Cologne-based AI startup, tackling today's most challenging problems from a new perspective.`,
              },
              {
                title: 'Opportunity',
                text: `To this end, agriculture is one of the least digitized industries, which is currently undergoing a radical change with autonomous machines starting to optimize conventional agriculture practices. The rapid development in this field is driven by corporate competition, where startups play an important role in exploring new ideas and potentially transforming the future of agriculture.\n
                At PhoGrow, we strive to become the go-to platform for big agricultural companies looking for high quality digital twins of plants to optimize their processes.`,
              },
              {
                title: 'We offer...',
                text: 'As a young and ambitious team, we provide a creative working environment with flat hierarchies and celebrate diversity, where everything you do matters. We apply cutting-edge AI technologies and distributed systems IoT to improve modern agricultural practices for the better.',
              },
              {
                title: 'We are looking for...',
                text: 'You should be a motivated student, eager to learn, and support experts in the field of digital content creation: From the creation of 3D content using AI technologies to hardware development (3D printing) and web technologies that make our services available to our customers at any time, we can teach you a lot. Depending on the field you are applying for, you should have some prior knowledge but major interest to deepen your skillset.',
              },
            ],
            responsibilities: [
              'Capturing objects in 3D',
              'Support in web development',
              'Supporting the team with various tasks and projects',
              'Data entry and management',
              'Support with administrative tasks and documentation',
            ],
            requirements: [
              'Ongoing studies in a relevant field',
              'Interest in 3D content creation, hardware development, or web development',
              'Fluent communication in English and German',
            ],
            benefits: [
              'Mutual respect and openness',
              'Versatile tasks and responsibilities that allow for broad professional development',
              'Opportunity to work in an interdisciplinary environment and collaborate with different stakeholders',
              'Personal development through taking on responsibility and learning new skills',
            ],
            motivation: [
              'What are your specialities and in which field do you strive to support and learn from the team?',
              'What are the benefits of digital twins for modern industrial practice?',
            ],
          },
        ] as IJobPosting[],
      },
    };
  },
});
</script>

<style scoped></style>
