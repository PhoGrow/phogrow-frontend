<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
    Footer
  }
});
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4.75rem;
}

.hero.is-fullheight-with-navbar {
  min-height: calc(100vh - 8.25rem) !important;
}

.dashed-border {
  border: 2px dashed #dbdbdb;
}

.has-background-bright-green {
  background-color: #e1fead !important;
}

.amaranth {
  font-family: 'Amaranth', sans-serif !important;
}

.br-2 {
  border-radius: 2rem !important;
}

.bdb-clone {
  line-height: 1.5;
  box-decoration-break: clone;
}

.is-rounded {
  border-radius: 9999px !important;
}

.is-sticky {
  position: sticky !important;
}

.is-absolute {
  position: absolute !important;
}
</style>
