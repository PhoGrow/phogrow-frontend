<template>
  <div id="app">
    <NavBar />
    <RouterView />
    <FooterItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { NavBar, FooterItem } from '@/components';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    RouterView,
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
