<template>
  <div>
    <InformationTitle :title="title" />
    <div
      class="columns is-vcentered is-mobile is-multiline is-justify-content-space-around has-background-white br-2 p-3 m-0"
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
    <div class="columns is-gapless my-4">
      <div
        v-for="{ text, hashtag, to } of redirect"
        :key="to"
        class="column is-6-tablet"
      >
        <div class="columns is-centered is-gapless">
          <div class="column is-10-tablet">
            <div
              class="is-flex is-align-items-center is-justify-content-space-between has-background-bright-green p-5 br-2"
            >
              <p class="is-size-4 mr-5">
                {{ text }}
                <span class="has-text-weight-semibold">{{ hashtag }}</span>
              </p>
              <a
                :href="'/' + to.toLowerCase()"
                class="button is-medium is-rounded is-align-self-flex-end"
              >
                <span class="has-text-weight-medium">{{ to }}</span>
              </a>
            </div>
          </div>
          <div class="column is-narrow my-4"></div>
        </div>
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
    organizations: Array,
    redirect: Array
  }
};
</script>

<style scoped></style>
