<template>
  <div class="columns is-centered is-gapless">
    <div class="column has-background-white br-2"></div>
    <div class="column"></div>
    <div class="column has-background-white br-2"></div>
    <div class="column"></div>
    <div class="column is-6-tablet">
      <div class="timeline has-background-white p-6 br-2">
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
              <b-image :src="'/icons/' + marker + '.svg'"></b-image>
            </div>
            <div class="timeline-content">
              <p class="heading">{{ quarter }} {{ year }}</p>
              <h2 class="subtitle has-text-weight-medium mb-2">
                {{ title }}
              </h2>
              <p class="has-text-grey">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
    <div class="column has-background-white br-2"></div>
    <div class="column"></div>
    <div class="column has-background-white br-2"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import type { IMilestone } from '@/types';

export default Vue.extend({
  name: 'MileStones',
  props: {
    steps: Array<IMilestone>,
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
