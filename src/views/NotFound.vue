<template>
  <div class="container">
    <div class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div>
          <h1 class="title is-1 has-text-weight-medium">
            Huh? This path
            <span class="has-text-weight-semibold is-family-monospace">{{
              $route.path
            }}</span>
            does not exist.
          </h1>
          <h2 class="subtitle is-3 is-flex is-align-items-baseline">
            Get back to our
            <RouterLink
              to="/"
              class="button is-large is-rounded is-white p-4 mx-2"
            >
              <span class="has-text-weight-semibold">Home</span>
            </RouterLink>
            page ♥
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'NotFound',
  components: {
    RouterLink,
  },
});
</script>

<style scoped></style>
