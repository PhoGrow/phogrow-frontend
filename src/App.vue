<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}

.has-background-bright-green {
  background-color: #e1fead !important;
}

.amaranth {
  font-family: 'Amaranth', sans-serif !important;
}

.transition-bg {
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.br-2 {
  border-radius: 2rem !important;
}

.bdb-clone {
  line-height: 1.5;
  box-decoration-break: clone;
}

.mt-5n {
  margin-top: -1.5rem;
}

.is-rounded {
  border-radius: 9999px !important;
}

.is-sticky {
  position: sticky !important;
}
</style>
