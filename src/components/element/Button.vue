<template>
  <p>
    <router-link v-if="!blank" class="button" :to="link">{{
      text
    }}</router-link>
    <a v-else class="button" :href="link" target="_blank">{{ text }}</a>
  </p>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    blank: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.button {
  display: block;
  margin: 0 auto;
  max-width: 240px;
  padding: 1em 2em;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  color: var(--color-main);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9);
  box-shadow: -4px -4px 12px rgba(255, 255, 255, 0.6),
    4px 4px 12px var(--alpha-main);
  text-decoration: none;
  position: relative;
}

.button::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  right: 16px;
  transform: translateY(-50%) rotate(45deg);
  border-top: 2px solid var(--color-main);
  border-right: 2px solid var(--color-main);
}

@media (any-hover: hover) {
  .button:hover {
    box-shadow: inset -4px -4px 12px rgba(255, 255, 255, 0.6),
      inset 4px 4px 12px var(--alpha-main);
  }
  .button:hover::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    top: 50%;
    right: 14px;
    transform: translateY(0) rotate(45deg);
    border-top: 2px solid var(--alpha-main);
    border-right: 2px solid var(--alpha-main);
  }
}
</style>
