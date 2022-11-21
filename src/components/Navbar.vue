<template>
  <div class="container is-sticky p-4" style="top: 0; z-index: 1">
    <nav
      class="navbar is-rounded has-shadow"
      style="border: 0.5rem solid white"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand ml-0">
        <router-link
          to="/"
          class="navbar-item has-background-bright-green is-rounded px-5"
        >
          <img src="/logos/logo_black.svg" />
          <h1 class="amaranth is-size-4 ml-3 mr-5">PhoGrow</h1>
        </router-link>
        <a
          role="button"
          :class="['navbar-burger', { 'is-active': hasOpenMenu }]"
          :aria-expanded="hasOpenMenu ? true : false"
          aria-label="menu"
          data-target="navbar"
          @click="hasOpenMenu = !hasOpenMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" :class="['navbar-menu', { 'is-active': hasOpenMenu }]">
        <div class="navbar-end">
          <router-link
            v-for="{ path, name } of items"
            :key="path"
            :to="path"
            :active="$route.path === path"
            :class="[
              'navbar-item has-text-right px-4',
              { 'has-text-weight-semibold': $route.path === path },
            ]"
            @click.native="hasOpenMenu = false"
          >
            {{ name }}
          </router-link>
          <div class="is-hidden-touch px-4"></div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',
  data() {
    return {
      hasOpenMenu: false,
      items: [
        {
          path: '/',
          name: 'Home',
        },
        {
          path: '/blog',
          name: 'Blog',
        },
        {
          path: '/aboutus',
          name: 'About Us',
        },
        // {
        //   path: '/roadmap',
        //   name: 'Roadmap'
        // },
        {
          path: '/contact',
          name: 'Contact',
        },
      ],
    };
  },
  updated() {
    (document.activeElement as HTMLElement).blur();
  },
});
</script>

<style scoped>
.navbar-menu.is-active {
  position: absolute;
  width: calc(100% + 1rem);
  left: -0.5rem;
  z-index: -1;
  border-radius: 2rem 2rem 1rem 1rem;
  padding-top: calc(4.25rem - 0.5rem + 0.75rem);
  padding-bottom: 0.75rem;
  margin-top: calc(-4.25rem + 0.5rem);
}
</style>
