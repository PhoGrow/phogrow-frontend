<template>
  <div class="container is-sticky p-4" style="top: 0; z-index: 1">
    <nav
      class="navbar is-rounded has-shadow"
      style="border: 0.5rem solid white"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand ml-0">
        <RouterLink
          to="/"
          class="navbar-item has-background-bright-green is-rounded px-5"
        >
          <img src="/logos/logo_black.svg" />
          <h1 class="amaranth is-size-4 ml-3 mr-5">PhoGrow</h1>
        </RouterLink>
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
          <RouterLink
            v-for="{ path, name } of items"
            :key="path"
            :to="path"
            :active="$route.path === path"
            :class="[
              'navbar-item has-text-right px-4',
              {
                'has-text-weight-semibold': $route.path === path,
                'has-gradient-border': path.includes('join'),
              },
            ]"
            @click="hasOpenMenu = false"
          >
            {{ name }}
            <span
              v-if="path.includes('join')"
              class="is-absolute is-size-7 px-3 py-2 has-background-bright-green is-rounded has-text-weight-semibold"
              style="top: -0.75rem; right: -0.75rem"
              >2</span
            >
          </RouterLink>
          <div class="is-hidden-touch px-4"></div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'NavBar',
  components: {
    RouterLink,
  },
  data() {
    return {
      hasOpenMenu: false,
      items: [
        {
          path: '/',
          name: 'Home',
        },
        // {
        //   path: '/blog',
        //   name: 'Blog',
        // },
        {
          path: '/about',
          name: 'About',
        },
        // {
        //   path: '/roadmap',
        //   name: 'Roadmap'
        // },
        {
          path: '/contact',
          name: 'Contact',
        },
        {
          path: '/joinus',
          name: 'Join us',
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

.has-gradient-border {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right top, #e1fead, #56d000) 1;
}
</style>
