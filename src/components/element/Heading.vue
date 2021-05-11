<template>
  <component :is="`h${level}`" :class="`lv${level}`" class="heading">{{
    label
  }}</component>
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
.heading {
  color: var(--color-strong);
  font-weight: 400;
}
.lv1 {
  font-size: 1.8rem;
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9);
}
.lv2 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 8px;
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
