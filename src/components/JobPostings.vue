<template>
  <div class="columns is-centered is-gapless">
    <div class="column is-8-tablet">
      <CollapseItem
        v-for="p of positions"
        :key="p.jobTitle"
        :aria="p.jobTitle"
        :is-init-open="false"
        use-content-class
      >
        <template #title>
          <IconItem :icon="p.icon" size="is-large" class="has-text-grey mr-5" />
          {{ p.jobTitle }}
        </template>
        <template #content>
          <div class="tags are-medium">
            <span
              v-for="{ icon, info } of [
                { icon: 'schedule', info: p.employmentType },
                { icon: 'place', info: p.location },
                { icon: 'payments', info: p.salary },
              ]"
              :key="icon"
              class="tag is-rounded"
            >
              <IconItem :icon="icon" class="has-text-grey mr-2" />
              <span>{{ Array.isArray(info) ? info.join(' / ') : info }}</span>
            </span>
          </div>
          <template v-for="{ title, text } of p.description" :key="title">
            <p v-if="title" class="has-text-weight-semibold amaranth">
              {{ title }}
            </p>
            <p style="white-space: pre-line">{{ text }}</p>
          </template>
          <template
            v-for="{ title, points } of [
              { title: 'responsibilities', points: p.responsibilities },
              { title: 'requirements', points: p.requirements },
              { title: 'benefits', points: p.benefits },
            ]"
            :key="title"
          >
            <h2 class="subtitle is-4 amaranth is-capitalized">{{ title }}</h2>
            <ul>
              <li v-for="point of points" :key="point">{{ point }}</li>
            </ul>
          </template>
          <div class="box has-background-light mt-6">
            <p class="has-text-weight-semibold">Does this sound like you?</p>
            <p>
              Then we'd love to hear from you! Please send us your CV at
              <a href="mailto:info@phogrow3d.com">info@phogrow3d.com</a> and
              show us your motivation by briefly answering the following
              questions:
            </p>
            <ul>
              <li v-for="m of p.motivation" :key="m">{{ m }}</li>
            </ul>
          </div>
        </template>
      </CollapseItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { CollapseItem, IconItem } from '@/components';
import type { IJobPosting } from '@/types';

export default defineComponent({
  name: 'JobPostings',
  components: {
    CollapseItem,
    IconItem,
  },
  props: {
    positions: {
      type: Array as PropType<IJobPosting[]>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
