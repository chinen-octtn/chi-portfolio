<template>
  <TheWrap>
    <Heading level="1" label="Karachoco Code" />
    <Section>
      <Heading level="2" label="TOPページ" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit
        minus cum? Officiis sint ut, minus perspiciatis consequatur totam
        voluptatibus ab rem tempore fugit quo nisi deleniti maiores reiciendis
        at.
      </p>
    </Section>
  </TheWrap>
</template>

<script>
import './assets/var.css'
import TheWrap from './components/layout/TheWrap.vue'
import Section from './components/element/Section.vue'
import Heading from './components/element/Heading.vue'

export default {
  name: 'App',
  components: {
    TheWrap,
    Section,
    Heading,
  },
}
</script>
