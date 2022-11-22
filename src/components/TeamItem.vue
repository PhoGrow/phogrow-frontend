<template>
  <div class="columns is-centered is-gapless">
    <div class="column is-8-tablet">
      <o-collapse
        v-for="{ workArea, developers } of people"
        :key="workArea"
        class="card mb-6"
        animation="slide"
        :aria-id="workArea"
      >
        <template #trigger="{ open }">
          <div
            class="card-header is-shadowless is-clickable"
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
              <ImageItem
                :src="
                  '/icons/' +
                  (open ? 'keyboard_arrow_up' : 'keyboard_arrow_down') +
                  '.svg'
                "
              />
            </a>
          </div>
        </template>
        <div class="card-content pt-0">
          <div
            v-for="({ image, name, task, message }, i) of developers"
            :key="name"
            class="columns is-vcentered"
          >
            <div class="column is-narrow">
              <div
                class="is-flex is-align-items-center has-background-bright-green is-rounded"
              >
                <ImageItem
                  :src="'/team/' + image"
                  class="is-96x96"
                  custom-class="is-rounded"
                />
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
      </o-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { ImageItem } from '@/components';
import type { ITeam } from '@/types';

export default defineComponent({
  name: 'TeamItem',
  components: {
    ImageItem,
  },
  props: {
    people: Array as PropType<ITeam[]>,
  },
});
</script>

<style scoped></style>
