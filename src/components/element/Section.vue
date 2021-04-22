<template>
  <section class="section">
    <div class="inner">
      <slot />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.section {
  margin: 50px 0;
  background: var(--color-light);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3),
    inset 0px -5px 5px rgba(255, 255, 255, 0.8),
    inset 5px 5px 5px var(--alpha-main);
  /* border-top: 20px solid transparent;
  border-bottom: 20px solid transparent; */
}

.inner {
  padding: 40px;
}

/* .section::before,
.section::after {
  content: '';
  display: block;
  height: 10px;
}
.section::before {
  background: linear-gradient(rgba(255, 255, 255, 1), transparent);
}
.section::after {
  background: linear-gradient(transparent, var(--alpha-main));
} */
</style>
