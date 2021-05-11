<template>
  <footer class="footer">
    <p class="inner">
      <small class="copy">Copyright 2021- Karachoco Code</small>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
}
.footer::before {
  content: '';
  display: block;
  margin: 0 auto;
  height: 20vh;
  width: 8px;
  background: var(--color-bg);
  box-shadow: 2px 0 2px var(--alpha-white), inset 2px 0 2px var(--alpha-main);
}

.inner {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.copy {
  font-size: 0.875em;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 1),
    10px 10px 1px rgba(3, 3, 3, 0.3);
}
</style>
