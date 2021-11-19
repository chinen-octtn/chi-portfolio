<script setup lang="ts">
  const props = defineProps({
    text: {
      type: String,
      default: '',
    }
  })
</script>


<template>
  <p class="text" v-html="props.text"></p>
</template>

<style scoped>
.text {
  color: var(--color-text);
  line-height: 1.8;
}
</style>
