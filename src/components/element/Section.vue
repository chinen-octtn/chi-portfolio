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
  margin: 50px auto;
  max-width: 600px;
  background: var(--color-light);
  box-shadow: inset 0 0 5px var(--alpha-main);
  /* border-top: 20px solid transparent;
  border-bottom: 20px solid transparent; */
}

@media print, screen and (min-width: 768px) {
  .section {
    margin-top: 100px;
    border-radius: 4px;
    box-shadow: inset -5px -5px 5px rgba(255, 255, 255, 0.3),
      inset 5px 5px 5px var(--alpha-main);
  }
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
