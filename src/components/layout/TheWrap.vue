<template>
  <div class="wrap">
    <img alt="Vue logo" src="/img/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from '../element/HelloWorld.vue'
import '../../assets/var.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style scoped>
.wrap {
  background: var(--color-light);
}
</style>
