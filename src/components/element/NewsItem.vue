<script setup lang="ts">
  const props = defineProps({
    date: {
      type: Date,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
  })

  const formatDate = (date: Date) => {
    date.setHours(date.getHours() + 9);
    return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
  }
</script>

<template>
  <div class="newsItem">
    <time :datetime="String(props.date)" class="date">{{ formatDate(props.date) }}</time>
    <p class="title">{{ props.text }}</p>
  </div>
</template>

<style scoped>
.date {
  color: var(--color-strong);
}
</style>
