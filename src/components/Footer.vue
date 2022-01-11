<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-vcentered is-gapless">
        <div class="column">
          <p class="subtitle has-text-white" style="line-height: 2">
            Made with <span class="is-size-4">♥</span> by
            <span class="amaranth is-size-4">PhoGrow</span> •
            <a href="/contact" class="is-inline-block">
              <div
                @mouseover="isHoveredContact = true"
                @mouseleave="isHoveredContact = false"
                :class="[
                  { 'has-background-bright-green': isHoveredContact },
                  'card transition-bg px-2'
                ]"
              >
                <p class="has-text-weight-semibold">Contact</p>
              </div>
            </a>
          </p>
        </div>
        <div class="column is-narrow m-5"></div>
        <div class="column is-narrow">
          <a href="https://instagram.com/phogrow3d">
            <div
              @mouseover="isHoveredIg = true"
              @mouseleave="isHoveredIg = false"
              :class="[
                { 'has-background-bright-green': isHoveredIg },
                'is-inline-flex is-align-items-center card transition-bg p-2'
              ]"
            >
              <p class="has-text-weight-semibold mr-2">@phogrow3d</p>
              <figure class="image is-32x32">
                <img :src="require('@/assets/instagram.png')" />
              </figure>
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isHoveredContact: false,
      isHoveredIg: false
    };
  }
};
</script>

<style scoped></style>
