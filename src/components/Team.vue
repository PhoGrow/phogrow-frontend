<template>
  <div class="pb-1">
    <InformationTitle :title="title" />
    <b-collapse
      v-for="({ workArea, developers }, i) of people"
      :key="workArea"
      :class="[isOpen[i] ? 'mb-6' : 'mb-5', 'has-background-white br-2']"
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
        >
          <p
            class="card-header-title title has-text-weight-medium amaranth p-5 mb-0"
          >
            {{ workArea }}
          </p>
          <a class="card-header-icon px-5">
            <i class="material-icons-round has-text-grey is-size-2">{{
              open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
            }}</i>
          </a>
        </div>
      </template>
      <div class="card-content pt-3">
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
          <div class="column is-narrow"></div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import InformationTitle from '@/components/InformationTitle.vue';

export default {
  name: 'Team',
  components: {
    InformationTitle
  },
  props: {
    title: String,
    people: Array
  },
  data() {
    return {
      isOpen: []
    };
  },
  created() {
    for (let i = 0; i < this.people.length; i++) {
      this.isOpen.push(true);
    }
  }
};
</script>

<style scoped></style>
