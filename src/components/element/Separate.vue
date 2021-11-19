<script setup lang="ts">
  const props = defineProps({
    size: {
      type: Number,
      default: 0,
    }
  })

  const separate = props.size * 16
</script>

<template>
  <div :style="`margin-top: ${separate}px;`" aria-hidden="true">
    <slot />
  </div>
</template>
