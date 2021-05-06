<template>
  <TheWrap>
    <TheHeader title="Karachoco Code" top="true" />
    <Section block="true">
      <Heading level="2" label="TOPページ" />
      <p><a href="/styleguide/">Styleguide</a></p>
    </Section>
  </TheWrap>
</template>

<script>
import './assets/var.css'
import TheWrap from './components/layout/TheWrap.vue'
import TheHeader from './components/layout/TheHeader.vue'
import Section from './components/element/Section.vue'
import Heading from './components/element/Heading.vue'

export default {
  name: 'App',
  components: {
    TheWrap,
    TheHeader,
    Section,
    Heading,
  },
}
</script>
