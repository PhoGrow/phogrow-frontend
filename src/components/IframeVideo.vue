<template>
  <figure class="image is-16by9">
    <iframe
      class="has-ratio br-2"
      title="YouTube video player"
      :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`"
    ></iframe>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IframeVideo',
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
