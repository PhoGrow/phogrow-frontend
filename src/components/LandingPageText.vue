<template>
  <div :class="{ 'px-6': text.buttons.length > 1 }">
    <h1 class="title is-1 amaranth">{{ text.title }}</h1>
    <h2 class="subtitle is-3 amaranth">{{ text.subtitle }}</h2>
    <p class="subtitle">{{ text.message }}</p>
    <div class="buttons">
      <a
        v-for="{ message, href } of text.buttons"
        :key="message"
        :href="href"
        class="button is-medium is-rounded mr-3 mb-3"
      >
        <span>{{ message }}</span>
        <figure v-if="href.includes('instagram')" class="image is-32x32 ml-3">
          <img :src="require('@/assets/instagram.png')" />
        </figure>
      </a>
      <p v-if="messageOnSide" class="has-text-grey mb-3">
        {{ messageOnSide }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPageText',
  props: {
    text: Object
  },
  data() {
    return {
      messageOnSide:
        this.text.buttons[this.text.buttons.length - 1].messageOnSide
    };
  }
};
</script>

<style scoped></style>
