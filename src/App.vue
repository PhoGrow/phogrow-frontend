<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterItem />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import FooterItem from '@/components/FooterItem.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
    FooterItem,
  },
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

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
