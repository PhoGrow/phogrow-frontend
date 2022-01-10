<template>
  <div class="columns is-vcentered is-gapless is-multiline">
    <div v-for="({ title, linkTo }, i) of links" :key="title" class="column">
      <div class="is-flex is-flex-direction-column is-align-items-center">
        <InformationTitle :title="title" />
        <span class="icon is-large mt-5n">
          <i class="material-icons-round is-size-1">keyboard_arrow_down</i>
        </span>
        <a
          :href="hrefs[i]"
          class="button is-large is-rounded has-background-bright-green"
          >{{ linkTo }}</a
        >
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
