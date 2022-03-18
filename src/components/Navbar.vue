<template>
  <div class="container is-sticky py-4 px-4" style="top: 0; z-index: 1">
    <b-navbar class="is-rounded" shadow>
      <template #brand>
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
          class="has-background-bright-green is-rounded px-5"
        >
          <img :src="require('@/assets/logo_black.svg')" />
          <h1 class="amaranth is-size-4 ml-3 mr-5">PhoGrow</h1>
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item
          v-for="{ path, active, name } of items"
          :key="path"
          tag="router-link"
          :to="{ path }"
          :active="active"
          :class="[{ 'has-text-weight-semibold': active }, 'has-text-right']"
          @click.native="setActive(path)"
        >
          {{ name }}
        </b-navbar-item>
        <div class="is-hidden-touch px-4"></div>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      items: [
        {
          path: '/',
          active: true,
          name: 'Home'
        },
        {
          path: '/aboutus',
          active: false,
          name: 'About Us'
        },
        {
          path: '/roadmap',
          active: false,
          name: 'Roadmap'
        },
        {
          path: '/contact',
          active: false,
          name: 'Contact'
        }
      ]
    };
  },
  watch: {
    $route(to) {
      this.setActive(to.path);
    }
  },
  methods: {
    setActive(path) {
      for (const [i, item] of this.items.entries()) {
        this.items[i].active = item.path == path ? true : false;
      }
      document.activeElement.blur();
    }
  }
};
</script>

<style scoped>
>>> .navbar-brand {
  background-color: white;
  border-radius: 9999px;
  margin-left: 0 !important;
}

>>> .navbar-menu.is-active {
  position: absolute;
  width: 100%;
  z-index: -1;
  border-radius: 0 0 1rem 1rem;
  padding-top: calc(3.25rem / 2 + 0.75rem);
  padding-bottom: 0.75rem;
  margin-top: calc(-3.25rem / 2);
}
</style>
