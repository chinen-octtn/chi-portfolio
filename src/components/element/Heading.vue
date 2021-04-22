<template>
  <component :is="`h${level}`" :class="`lv${level}`">{{ label }}</component>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.lv1 {
  font-size: 1.8rem;
}
.lv2 {
  font-size: 1.6rem;
}
.lv3 {
  font-size: 1.4rem;
}
.lv4 {
  font-size: 1.2rem;
}
.lv5 {
  font-size: 1rem;
}
</style>
