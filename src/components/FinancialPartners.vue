<template>
  <div class="columns is-centered is-gapless is-multiline m-0'">
    <div class="column is-10-tablet">
      <div
        class="columns is-vcentered is-centered is-variable is-6 is-mobile is-multiline has-background-white br-2 px-5 pt-6 pb-5 m-0"
      >
        <div
          v-for="{ logo, alt, link } of organizations"
          :key="logo"
          class="column is-3-tablet is-8-mobile py-0 mb-6"
        >
          <a :href="link" target="_blank" rel="noopener noreferrer">
            <b-image
              :src="'/partners/' + logo"
              :alt="alt"
              :title="alt"
            ></b-image>
          </a>
        </div>
        <div
          v-for="{ text, hashtag, to } of redirect"
          :key="to"
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
                :to="'/' + to.toLowerCase()"
                class="button is-medium is-rounded is-fullwidth"
              >
                <span class="has-text-weight-medium">{{ to }}</span>
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

export default Vue.extend({
  name: 'FinancialPartners',
  props: {
    organizations: Array,
    redirect: Array,
  },
});
</script>

<style scoped></style>
