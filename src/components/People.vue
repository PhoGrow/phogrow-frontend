<template>
  <div>
    <InformationTitle title="We are ..." />
    <b-collapse
      v-for="{ workArea, developers } of people"
      :key="workArea"
      class="has-background-white mb-6"
      animation="slide"
      :aria-id="workArea"
    >
      <template #trigger="{ open }">
        <div
          class="card-header is-shadowless"
          role="button"
          :aria-controls="workArea"
        >
          <p
            class="card-header-title title has-text-weight-medium amaranth py-4 px-5 mb-0"
          >
            {{ workArea }} maniacs
          </p>
          <a class="card-header-icon px-5">
            <i class="material-icons-round has-text-grey is-size-2">{{
              open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
            }}</i>
          </a>
        </div>
      </template>
      <div class="card-content">
        <div
          v-for="{ image, name, task, message } of developers"
          :key="name"
          class="columns is-vcentered"
        >
          <div class="column is-narrow">
            <div
              class="is-inline-flex is-align-items-center has-background-bright-green is-rounded"
            >
              <figure class="image is-96x96">
                <img
                  class="card is-rounded"
                  :src="require('@/assets/team/' + image)"
                />
              </figure>
              <div class="ml-5 mr-6">
                <p class="is-size-5 has-text-weight-semibold">{{ name }}</p>
                <p class="has-text-grey">{{ task }}</p>
              </div>
            </div>
          </div>
          <div class="column is-6-tablet">
            <p class="has-text-grey">{{ message }}</p>
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import InformationTitle from '@/components/InformationTitle.vue';

export default {
  name: 'People',
  components: {
    InformationTitle
  },
  props: {
    people: Array
  }
};
</script>

<style scoped></style>
