<template>
  <o-collapse
    class="card mb-6"
    animation="slide"
    :aria-id="aria"
    :open="isInitOpen"
    @open="isOpen = true"
    @close="isOpen = false"
  >
    <template #trigger="{ open }">
      <div
        class="card-header is-shadowless is-clickable"
        role="button"
        :aria-controls="aria"
        :aria-expanded="open"
      >
        <h1
          class="card-header-title title has-text-weight-medium amaranth is-unselectable p-6 mb-0"
        >
          <slot name="title"></slot>
        </h1>
        <a class="card-header-icon px-6">
          <IconItem
            :icon="open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            size="is-large"
            class="has-text-grey"
          />
        </a>
      </div>
    </template>
    <div :class="['card-content pt-0', { content: useContentClass }]">
      <slot name="content"></slot>
    </div>
  </o-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconItem } from '@/components';

export default defineComponent({
  name: 'CollapseItem',
  components: {
    IconItem,
  },
  props: {
    aria: {
      type: String,
      required: true,
    },
    isInitOpen: {
      type: Boolean,
      default: true,
    },
    useContentClass: Boolean,
  },
  data() {
    return {
      isOpen: this.isInitOpen,
    };
  },
});
</script>

<style scoped></style>
