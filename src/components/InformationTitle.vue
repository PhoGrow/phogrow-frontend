<template>
  <div class="has-text-centered py-6">
    <h1
      :class="[{ 'mb-2': note }, 'title is-2 has-text-weight-medium amaranth']"
    >
      <span class="has-background-white is-rounded bdb-clone py-2 px-6">{{
        title
      }}</span>
    </h1>
    <p v-if="note" class="is-size-5 has-text-grey">{{ note }}</p>
  </div>
</template>

<script>
export default {
  name: 'InformationTitle',
  props: {
    title: String,
    note: String
  }
};
</script>

<style scoped></style>
