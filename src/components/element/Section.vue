<template>
  <section class="section" :class="{ block: block }">
    <div class="inner">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.section {
  margin-top: 32px;
}
.block {
  margin-top: 20vh;
  max-width: 600px;
  min-height: 50vh;
  /* background: var(--color-light); */
  /* box-shadow: inset 0 0 5px var(--alpha-main); */
  position: relative;
  box-shadow: inset -5px -5px 5px var(--alpha-white),
    inset 5px 5px 5px var(--alpha-main);
}

@media print, screen and (min-width: 768px) {
  .block {
    margin-right: auto;
    margin-left: auto;
    border-radius: 4px;
  }
}

.block::after {
  content: '';
  display: block;
  height: 20vh;
  width: 8px;
  background: var(--color-bg);
  position: absolute;
  box-shadow: 2px 0 2px var(--alpha-white), inset 2px 0 2px var(--alpha-main);
}
.block:nth-child(even):after {
  bottom: 100%;
  left: 10%;
}
.block:nth-child(odd)::after {
  bottom: 100%;
  right: 10%;
}

.block > .inner {
  padding: 20px;
}

@media print, screen and (min-width: 768px) {
  .block > .inner {
    padding: 40px;
  }
}
</style>
