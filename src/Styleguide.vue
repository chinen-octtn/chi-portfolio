<template>
  <TheWrap>
    <Heading level="1" label="Styleguide" />
    <Section>
      <p>見出しの一覧</p>
      <Heading level="2" label="H2見出し" />
      <Heading level="3" label="H3見出し" />
      <Heading level="4" label="H4見出し" />
      <Heading level="5" label="H5見出し" />
    </Section>
  </TheWrap>
</template>

<script>
import './assets/var.css'
import TheWrap from './components/layout/TheWrap.vue'
import Section from './components/element/Section.vue'
import Heading from './components/element/Heading.vue'

export default {
  name: 'Styleguide',
  components: {
    TheWrap,
    Section,
    Heading,
  },
}
</script>
