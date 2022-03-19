<template>
  <div :id="id">
    <InformationTitle :title="title" />
    <div class="columns is-centered is-gapless pb-6">
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
                <i class="material-icons-round">{{ marker }}</i>
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
  </div>
</template>

<script>
import InformationTitle from '@/components/InformationTitle.vue';

export default {
  name: 'Milestones',
  components: {
    InformationTitle
  },
  props: {
    title: String,
    steps: Array
  },
  computed: {
    id() {
      let id = '';
      for (const [i, word] of this.title.split(' ').entries()) {
        id +=
          i == 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1);
      }
      return id;
    }
  }
};
</script>

<style scoped>
.timeline .timeline-item .timeline-marker.is-icon {
  background-color: #f5f5f5;
  height: 2.5rem;
  width: 2.5rem;
}
</style>
