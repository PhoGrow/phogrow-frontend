<template>
  <div>
    <h1 class="title is-1 amaranth">{{ text.title }}</h1>
    <h2 class="subtitle is-3 amaranth">{{ text.subtitle }}</h2>
    <p class="subtitle">{{ text.message }}</p>
    <div class="is-flex is-align-items-center">
      <a href="#whatWeDo" class="button is-medium is-rounded">{{
        text.buttonMsg
      }}</a>
      <p class="has-text-grey ml-3">{{ text.buttonMsgSide }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPageText',
  props: {
    text: {
      type: Object,
      default: () => ({
        title: '',
        subtitle: '',
        message: '',
        buttonMsg: '',
        buttonMsgSide: ''
      })
    }
  }
};
</script>

<style scoped></style>
