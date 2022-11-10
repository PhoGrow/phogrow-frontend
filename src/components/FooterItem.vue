<template>
  <footer class="footer mt-5">
    <div class="columns is-vcentered">
      <div class="column">
        <p class="subtitle has-text-white">
          Made with <span class="is-size-4">♥</span> by
          <span class="amaranth is-size-4">PhoGrow</span>
        </p>
      </div>
      <div class="column is-narrow">
        <a
          href="https://instagram.com/phogrow3d"
          target="_blank"
          rel="noopener noreferrer"
          class="button is-medium p-2"
        >
          <span class="has-text-weight-semibold is-size-6 mr-2"
            >@phogrow3d</span
          >
          <b-image src="/logos/instagram.png" class="is-32x32"></b-image>
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FooterItem',
});
</script>

<style scoped></style>
