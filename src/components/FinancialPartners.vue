<template>
  <div class="columns is-centered is-gapless is-multiline m-0'">
    <div class="column is-10-tablet">
      <div
        class="columns is-vcentered is-centered is-variable is-6 is-mobile is-multiline has-background-white br-2 px-5 pt-6 pb-5 m-0"
      >
        <div
          v-for="{ logo, name, link } of organizations"
          :key="name"
          class="column is-3-tablet is-8-mobile py-0 mb-6"
        >
          <a :href="link" target="_blank" rel="noopener noreferrer">
            <b-image
              :src="'/partners/' + logo"
              :alt="name"
              :title="name"
            ></b-image>
          </a>
        </div>
        <div
          v-for="{ text, hashtag, linkTo } of redirect"
          :key="linkTo"
          class="column is-8-tablet pt-0"
        >
          <div
            class="columns is-vcentered is-gapless has-background-bright-green br-2 p-5"
          >
            <div class="column">
              <p class="is-size-4">
                {{ text }}
                <span class="has-text-weight-semibold">{{ hashtag }}</span>
              </p>
            </div>
            <div class="column is-narrow my-5"></div>
            <div class="column is-narrow">
              <router-link
                :to="'/' + linkTo.toLowerCase()"
                class="button is-medium is-rounded is-fullwidth"
              >
                <span class="has-text-weight-medium">{{ linkTo }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import type { IPartner, IRedirect } from '@/types';

export default Vue.extend({
  name: 'FinancialPartners',
  props: {
    organizations: Array<IPartner>,
    redirect: Array<IRedirect>,
  },
});
</script>

<style scoped></style>
