<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <!-- <section class="hero is-fullheight has-background-bright-green">
      <div
        class="hero-body is-justify-content-center"
        style="min-height: 100vh"
      >
        <div class="has-text-centered">
          <img
            class="mb-5"
            :src="require('@/assets/logo_black.svg')"
            width="256"
          />
          <h1 class="title is-1 amaranth">PhoGrow</h1>
          <h3 class="subtitle is-3">Experience plant growth in 3D.</h3>
          <p class="has-text-weight-semibold mb-6">
            <span class="has-background-white py-2 px-4 is-rounded">
              {{ countdown }} days
            </span>
          </p>
          <span class="icon is-large has-text-grey">
            <i class="material-icons-round is-size-1">keyboard_arrow_down</i>
          </span>
        </div>
      </div>
      <div class="hero-foot">
        <figure class="image is-16by9">
          <iframe
            class="has-ratio br-2"
            src="https://youtube.com/embed/8lLOavvdYIc"
            allowfullscreen
          ></iframe>
        </figure>
      </div>
    </section> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import countdown from 'countdown';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      countdown: 0
    };
  },
  created() {
    const timerId = countdown(
      new Date(2022, 4, 2),
      ({ days }) => {
        this.countdown = days;
        if (new Date().getDay() == new Date(2022, 4, 2).getDay()) {
          window.clearInterval(timerId);
        }
      },
      countdown.DAYS
    );
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}

.hero.is-fullheight-with-navbar {
  min-height: calc(100vh - 7.25rem) !important;
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

.mb-6n {
  margin-bottom: -3rem !important;
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
