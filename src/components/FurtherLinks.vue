<template>
  <div class="columns is-gapless is-multiline">
    <div class="column is-12">
      <InformationTitle :title="title" />
    </div>
    <div
      v-for="({ title, linkTo }, i) of links"
      :key="title"
      class="column is-6-tablet"
    >
      <div class="columns is-gapless is-centered">
        <div class="column is-10-tablet">
          <div
            class="columns is-vcentered is-gapless has-background-bright-green p-6 br-2"
          >
            <div class="column">
              <h1 class="title is-2 has-text-weight-medium amaranth mb-0 mr-6">
                {{ title }}
              </h1>
            </div>
            <div class="column is-narrow my-5"></div>
            <div class="column is-narrow is-align-self-flex-end">
              <a :href="hrefs[i]" class="button is-large is-rounded">
                <span class="has-text-weight-medium">{{ linkTo }}</span></a
              >
            </div>
          </div>
        </div>
        <div class="column is-narrow my-6"></div>
      </div>
    </div>
    <div class="column is-12">
      <p class="has-text-centered has-text-grey my-6">
        You came this far? Check our IG 😉
      </p>
    </div>
  </div>
</template>

<script>
import InformationTitle from '@/components/InformationTitle.vue';

export default {
  name: 'FurtherLinks',
  components: {
    InformationTitle
  },
  props: {
    title: String,
    links: Array
  },
  computed: {
    hrefs() {
      const hrefs = [];
      for (const { linkTo } of this.links) {
        hrefs.push('/' + linkTo.replace(' ', '').toLowerCase());
      }
      return hrefs;
    }
  }
};
</script>

<style scoped></style>
