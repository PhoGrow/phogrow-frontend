<template>
  <div>
    <InformationTitle :title="title" />
    <div
      class="columns is-vcentered is-mobile is-multiline is-justify-content-space-evenly has-background-white br-2 p-3 m-0"
    >
      <div
        v-for="{ logo, alt, link } of organizations"
        :key="logo"
        class="column is-2-tablet is-6-mobile"
      >
        <a :href="link">
          <figure class="image">
            <img
              :src="require('@/assets/partners/' + logo)"
              :alt="alt"
              :title="alt"
            />
          </figure>
        </a>
      </div>
    </div>
    <div
      class="columns is-vcentered is-centered is-gapless is-mobile is-multiline m-4"
    >
      <div class="column is-narrow">
        <p class="is-size-4">
          Become part of the
          <span class="has-text-weight-semibold">#plontgang</span>
        </p>
      </div>
      <div class="column is-narrow-tablet is-12-mobile my-1"></div>
      <div class="column is-narrow">
        <span class="icon is-large has-text-grey">
          <i class="material-icons-round is-size-2">keyboard_arrow_right</i>
        </span>
      </div>
      <div class="column is-narrow">
        <a
          href="/contact"
          class="button is-medium is-rounded has-background-bright-green"
        >
          <span class="has-text-weight-medium">Contact</span>
        </a>
      </div>
    </div>
    <p class="has-text-centered has-text-grey my-6">
      You came this far? Check our IG 😉
    </p>
  </div>
</template>

<script>
import InformationTitle from '@/components/InformationTitle.vue';

export default {
  name: 'FinancialPartners',
  components: {
    InformationTitle
  },
  props: {
    title: String,
    organizations: Array
  }
};
</script>

<style scoped></style>
