<template>
  <div class="columns is-centered is-gapless">
    <div class="column box"></div>
    <div class="column"></div>
    <div class="column box"></div>
    <div class="column"></div>
    <div class="column is-6-tablet">
      <div class="timeline box">
        <div v-for="{ year, items } of steps" :key="year">
          <header class="timeline-header">
            <span
              class="tag is-large is-rounded has-text-weight-medium has-background-bright-green"
              >{{ year }}</span
            >
          </header>
          <div
            v-for="{ marker, quarter, title, description } of items"
            :key="title"
            class="timeline-item"
          >
            <div class="timeline-marker is-icon">
              <ImageItem :src="'/icons/' + marker + '.svg'" />
            </div>
            <div class="timeline-content">
              <p class="heading mb-0">{{ quarter }} {{ year }}</p>
              <h2 class="subtitle has-text-weight-medium mb-3">
                {{ title }}
              </h2>
              <p class="has-text-grey">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
    <div class="column box"></div>
    <div class="column"></div>
    <div class="column box"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { ImageItem } from '@/components';
import type { IMilestone } from '@/types';

export default defineComponent({
  name: 'MileStones',
  components: {
    ImageItem,
  },
  props: {
    steps: Array as PropType<IMilestone[]>,
  },
});
</script>

<style scoped>
.timeline .timeline-item .timeline-marker.is-icon {
  background-color: #f5f5f5;
  height: 2.5rem;
  width: 2.5rem;
}
</style>
