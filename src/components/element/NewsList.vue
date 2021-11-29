<script setup lang="ts">
  import NewsItem from '../element/NewsItem.vue'

  const props = defineProps({
    list: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <ul class="newsList">
    <li v-for="item in props.list"
    >
      <NewsItem :date="item.date" :text="item.text" />
    </li>
  </ul>
</template>

<style scoped>
.newsList > li + li {
  margin-top: 1em;
}
</style>
