<template>
  <div class="columns is-centered is-gapless">
    <div class="column is-8-tablet">
      <b-collapse
        v-for="({ workArea, developers }, i) of people"
        :key="workArea"
        class="has-background-white br-2 mb-6"
        animation="slide"
        :aria-id="workArea"
        @open="$set(isOpen, i, true)"
        @close="$set(isOpen, i, false)"
      >
        <template #trigger="{ open }">
          <div
            class="card-header is-shadowless"
            role="button"
            :aria-controls="workArea"
            :aria-expanded="open"
          >
            <p
              class="card-header-title title has-text-weight-medium amaranth p-6 mb-0"
            >
              {{ workArea }}
            </p>
            <a class="card-header-icon px-6">
              <b-image
                :src="
                  '/icons/' +
                  (open ? 'keyboard_arrow_up' : 'keyboard_arrow_down') +
                  '.svg'
                "
              ></b-image>
            </a>
          </div>
        </template>
        <div class="card-content px-6 pt-0 pb-6">
          <div
            v-for="({ image, name, task, message }, i) of developers"
            :key="name"
            class="columns is-vcentered"
          >
            <div class="column is-narrow">
              <div
                class="is-flex is-align-items-center has-background-bright-green is-rounded"
              >
                <b-image
                  :src="'/team/' + image"
                  class="is-96x96"
                  custom-class="is-rounded card"
                ></b-image>
                <div class="ml-5 mr-6">
                  <p class="is-size-5 has-text-weight-semibold">
                    {{ name }}
                  </p>
                  <p class="has-text-grey">{{ task }}</p>
                </div>
              </div>
            </div>
            <div class="column is-narrow is-hidden-mobile"></div>
            <div class="column">
              <p class="has-text-grey">{{ message }}</p>
            </div>
            <div
              :class="[
                'column is-narrow',
                { 'is-hidden-mobile': i === developers.length - 1 },
              ]"
            ></div>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import type { ITeam } from '@/types';

export default Vue.extend({
  name: 'TeamItem',
  props: {
    people: Array<ITeam>,
  },
  data() {
    return {
      isOpen: [] as boolean[],
    };
  },
  created() {
    for (let i = 0; i < this.people.length; i++) {
      this.isOpen.push(true);
    }
  },
});
</script>

<style scoped></style>
