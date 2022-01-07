<template>
  <div id="app" class="has-background-light">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
.amaranth {
  font-family: 'Amaranth', sans-serif;
}

.has-background-bright-green {
  background-color: #e1fead !important;
}

.is-rounded {
  border-radius: 9999px !important;
}

.is-sticky {
  position: sticky !important;
}
</style>
