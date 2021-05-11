<template>
  <p class="text" v-html="text"></p>
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
  line-height: 1.8;
}
</style>
