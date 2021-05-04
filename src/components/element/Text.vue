<template>
  <p class="text">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.text {
  color: var(--color-text);
}
</style>
