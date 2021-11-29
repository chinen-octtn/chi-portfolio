<script setup lang="ts">
  const props = defineProps({
    date: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <dl class="newsItem">
    <dt>{{ date
     }}</dt>
    <dd>{{ text }}</dd>
  </dl>
</template>

<style scoped>
.newsItem {
  display: flex;

}
.newsItem > dt {
  margin-right: 1.5em;
}
</style>
