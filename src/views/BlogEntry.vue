<template>
  <div>{{ $route.params.year_month_title }}</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogEntry',
});
</script>

<style scoped></style>
