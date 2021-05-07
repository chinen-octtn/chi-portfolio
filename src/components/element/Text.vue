<template>
  <p class="text">
    {{ text }}
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.text {
  color: var(--color-text);
}
</style>
