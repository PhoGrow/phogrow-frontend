<template>
  <div class="columns is-centered is-gapless is-multiline m-0'">
    <div class="column is-10-tablet">
      <div
        class="columns is-vcentered is-centered is-variable is-6 is-mobile is-multiline box px-5 pb-5 m-0"
      >
        <div
          v-for="{ logo, name, link } of organizations"
          :key="name"
          class="column is-3-tablet is-8-mobile py-0 mb-6"
        >
          <a :href="link" target="_blank" rel="noopener noreferrer">
            <ImageItem :src="'/partners/' + logo" :alt="name" :title="name" />
          </a>
        </div>
        <div
          v-for="{ text, hashtag, linkTo } of redirect"
          :key="linkTo"
          class="column is-8-tablet pt-0"
        >
          <div
            class="columns is-vcentered is-gapless box has-background-bright-green p-5"
          >
            <div class="column">
              <p class="is-size-4">
                {{ text }}
                <span class="has-text-weight-semibold">{{ hashtag }}</span>
              </p>
            </div>
            <div class="column is-narrow my-5"></div>
            <div class="column is-narrow">
              <RouterLink
                :to="'/' + linkTo.toLowerCase()"
                class="button is-medium is-rounded is-fullwidth"
              >
                <span class="has-text-weight-medium">{{ linkTo }}</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { RouterLink } from 'vue-router';
import { ImageItem } from '@/components';
import type { IPartner, IRedirect } from '@/types';

export default defineComponent({
  name: 'FinancialPartners',
  components: {
    ImageItem,
    RouterLink,
  },
  props: {
    organizations: Array as PropType<IPartner[]>,
    redirect: Array as PropType<IRedirect[]>,
  },
});
</script>

<style scoped></style>
