<script setup lang="ts">
  const props = defineProps({
    top: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <header class="header">
    <div class="inner">
      <router-link to="/" class="logo">
        <h1 class="logo_text">
          {{ props.title }}<span v-if="!props.top" class="logo_sub"> - Karachoco Code</span>
        </h1>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 0 10px;
  min-height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 5px var(--alpha-main), inset 0 5px 5px var(--alpha-white);
}

.inner {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
}

.logo {
  color: var(--color-strong);
  text-decoration: none;
}

.logo_text {
  color: var(--color-strong);
  font-size: 1.8rem;
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9);
}
.logo_sub {
  font-size: 0.7em;
}
</style>
