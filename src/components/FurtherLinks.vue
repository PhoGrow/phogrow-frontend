<template>
  <div class="columns is-centered is-gapless">
    <div class="column is-10-tablet">
      <div
        class="columns is-centered is-vcentered is-variable is-6 is-multiline box p-5 m-0"
      >
        <div
          v-for="{ title, linkTo } of links"
          :key="linkTo"
          class="column is-6-tablet py-5"
        >
          <div
            class="columns is-vcentered is-gapless box has-background-bright-green"
          >
            <div class="column">
              <h1 class="title is-2 has-text-weight-medium amaranth mb-0">
                {{ title }}
              </h1>
            </div>
            <div class="column is-narrow my-6"></div>
            <div class="column is-narrow is-align-self-flex-end">
              <o-button
                tag="router-link"
                :to="'/' + linkTo.replace(' ', '').toLowerCase()"
                class="has-text-weight-medium"
                size="large"
                rounded
                expanded
              >
                {{ linkTo }}
              </o-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { IRedirect } from '@/types';

export default defineComponent({
  name: 'FurtherLinks',
  props: {
    links: {
      type: Array as PropType<IRedirect[]>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
