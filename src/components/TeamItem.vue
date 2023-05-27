<template>
  <div class="columns is-centered is-gapless">
    <div class="column is-8-tablet">
      <CollapseItem
        v-for="{ workArea, developers } of people"
        :key="workArea"
        :aria="workArea"
      >
        <template #title>
          {{ workArea }}
        </template>
        <template #content>
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
                  :alt="image.split('.')[0].replace('_', ' ')"
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
        </template>
      </CollapseItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { CollapseItem, ImageItem } from '@/components';
import type { ITeam } from '@/types';

export default defineComponent({
  name: 'TeamItem',
  components: {
    CollapseItem,
    ImageItem,
  },
  props: {
    people: {
      type: Array as PropType<ITeam[]>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
