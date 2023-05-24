<template>
  <div class="columns is-centered is-gapless">
    <div class="column is-8-tablet">
      <o-collapse
        v-for="p of positions"
        :key="p.jobTitle"
        class="card mb-6"
        animation="slide"
        :aria-id="p.jobTitle"
        :open="false"
      >
        <template #trigger="{ open }">
          <div
            class="card-header is-shadowless is-clickable"
            role="button"
            :aria-controls="p.jobTitle"
            :aria-expanded="open"
          >
            <p
              class="card-header-title title has-text-weight-medium amaranth is-unselectable p-6 mb-0"
            >
              {{ p.jobTitle }}
            </p>
            <a class="card-header-icon px-6">
              <IconItem
                :icon="open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                size="is-large"
                class="has-text-grey"
              />
            </a>
          </div>
        </template>
        <div class="card-content content pt-0">
          <div class="columns">
            <div
              v-for="{ icon, info } of [
                { icon: 'schedule', info: p.employmentType },
                { icon: 'place', info: p.location },
                { icon: 'payments', info: p.salary },
              ]"
              :key="icon"
              class="column is-narrow"
            >
              <p class="is-flex is-align-items-start">
                <IconItem :icon="icon" class="has-text-grey mr-2" />
                <span>{{ Array.isArray(info) ? info.join('/') : info }}</span>
              </p>
            </div>
          </div>
          <p style="white-space: pre-line">{{ p.description }}</p>
          <template
            v-for="{ title, points } of [
              { title: 'responsibilities', points: p.responsibilities },
              { title: 'requirements', points: p.requirements },
              { title: 'benefits', points: p.benefits },
            ]"
            :key="title"
          >
            <p class="subtitle is-capitalized">{{ title }}</p>
            <ul>
              <li v-for="point of points" :key="point">{{ point }}</li>
            </ul>
          </template>

          Contact (with CV)
        </div>
      </o-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { IconItem } from '@/components';
import type { IJobPosting } from '@/types';

export default defineComponent({
  name: 'JobPostings',
  components: {
    IconItem,
  },
  props: {
    positions: Array as PropType<IJobPosting[]>,
  },
});
</script>

<style scoped></style>
