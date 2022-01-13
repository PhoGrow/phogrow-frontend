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
          <h2 class="subtitle is-3">
            Get back to our
            <a href="/" class="is-inline-block"
              ><div
                @mouseover="isHovered = true"
                @mouseleave="isHovered = false"
                :class="[
                  { 'has-background-bright-green': isHovered },
                  'card is-shadowless transition-bg py-1 px-3 mx-1 mt-2'
                ]"
              >
                <p class="has-text-weight-semibold">Home</p>
              </div></a
            >
            page ♥
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      isHovered: false
    };
  }
};
</script>

<style scoped></style>
