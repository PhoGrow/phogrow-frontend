<template>
  <div class="container">
    <LandingPage>
      <template #text>
        <LandingPageText
          :text="landingPage.text"
          :linkage="information[0].title"
        />
      </template>
      <template #image>
        <LandingPageImage :images="landingPage.images" />
      </template>
    </LandingPage>
    <hr />
    <div v-for="{ title, info } of information" :key="title">
      <SlotWithTitle :title="title">
        <InformationItem :info="info" />
      </SlotWithTitle>
      <hr />
    </div>
    <SlotWithTitle :title="partners.title">
      <FinancialPartners
        :organizations="partners.organizations"
        :redirect="partners.redirect"
      />
    </SlotWithTitle>
    <hr />
    <SlotWithTitle :title="furtherLinks.title">
      <FurtherLinks :links="furtherLinks.links" />
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
  FinancialPartners,
  FurtherLinks,
} from '@/components';
import type {
  ILandingPageText,
  IInformation,
  IPartner,
  IRedirect,
} from '@/types';

export default defineComponent({
  name: 'HomeView',
  components: {
    LandingPage,
    LandingPageText,
    LandingPageImage,
    SlotWithTitle,
    InformationItem,
    FinancialPartners,
    FurtherLinks,
  },
  data() {
    return {
      landingPage: {
        text: {
          title: 'PhoGrow',
          subtitle: 'Experience plant growth in 3D.',
          message:
            'Providing digital twins of plants to help humans and robots make data-driven decisions in agriculture.',
          buttons: [{ message: 'Learn more' }],
        } as ILandingPageText,
        images: ['4EDj7kzX1CE'], // flowers.svg
      },
      information: [
        {
          title: 'We provide...',
          info: [
            {
              image: 'digital_twins.avif',
              title: 'Digital twins',
              message: `Our AI solution creates annotated representations of plants from all perspectives, which can be obtained via our app.`,
            },
            {
              image: 'forecasting_changes.avif',
              title: 'Change prognosis',
              message: `Given a set of parameters, our models can predict how plants will change, providing valuable insights from all perspectives.`,
            },
            {
              image: 'flexible_training_data.avif',
              title: 'Extension to fields',
              message: `We provide easy access to photorealistic digital replicas of fields, that can be edited and tailored to your needs.`,
            },
          ] as IInformation[],
        },
        {
          title: 'What makes us unique',
          info: [
            {
              image: 'team.jpg',
              title: 'Capture plants',
              message: `Our PhoGrow-Box captures real plant growth under controllable conditions and brings them into the digital world.
                The box operates completely autonomous and captures 24/7.`,
            },
            {
              animation: 'austernSeitling_reduced.glb',
              title: 'Interactive examples',
              message: `Feel free to explore an interactive example of the data we provide on the left.
                You can look at it from different perspectives by clicking and dragging.`,
            },
            {
              image: 'contact_us.svg',
              title: 'Reach out to us',
              message: `You need high quality data for your agriculture problems?
                - Simply reach out to us and we will find a custom solution.`,
              mail: 'info@phogrow3d.com',
            },
          ] as IInformation[],
        },
        // {
        //   title: 'What you can do',
        //   note: '',
        //   info: [
        //     {
        //       image: 'designer.svg',
        //       title: 'Assets for your game',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     },
        //     {
        //       image: 'crypto_flowers.svg',
        //       title: 'Get exclusive NFTs',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     },
        //     {
        //       image: 'gardening.svg',
        //       title: 'Make biology interesting again!',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     }
        //   ]
        // },
        // {
        //   title: 'What you get',
        //   note: 'Some examples below.',
        //   info: [
        //     {
        //       animation: 'reduced_tex.glb',
        //       title: 'Scientific plant name 1',
        //       subtitle: 'Common name',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     },
        //     {
        //       animation: 'reduced_tex.glb',
        //       title: 'Scientific plant name 2',
        //       subtitle: 'Common name',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     },
        //     {
        //       animation: 'reduced_tex.glb',
        //       title: 'Scientific plant name 3',
        //       subtitle: 'Common name',
        //       message:
        //         'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.'
        //     }
        //   ]
        // }
      ],
      partners: {
        title: 'Our financial partners',
        organizations: [
          {
            logo: 'th_koeln.svg',
            name: 'Technische Hochschule Köln',
            link: 'https://www.th-koeln.de',
          },
          {
            logo: 'cgl.svg',
            name: 'Cologne Game Lab',
            link: 'https://colognegamelab.de',
          },
          {
            logo: 'startUpLab.jpg',
            name: 'StartUpLab@TH Köln',
            link: 'https://www.th-koeln.de/forschung/startuplabth-koeln_76381.php',
          },
          {
            logo: 'bmbf.svg',
            name: 'Bundesministerium für Bildung und Forschung',
            link: 'https://www.bmbf.de/',
          },
        ] as IPartner[],
        redirect: [
          // {
          //   text: `Let's look into our`,
          //   hashtag: '#future',
          //   to: 'Roadmap',
          // },
          {
            text: 'Become part of our',
            hashtag: '#plantgang',
            linkTo: 'Contact',
          },
        ] as IRedirect[],
      },
      furtherLinks: {
        title: 'Who we are',
        links: [
          {
            title: 'Who is PhoGrow?',
            linkTo: 'About Us',
          },
          {
            title: 'Bump into PhoGrow?',
            linkTo: 'Contact',
          },
        ] as IRedirect[],
      },
    };
  },
});
</script>

<style scoped></style>
