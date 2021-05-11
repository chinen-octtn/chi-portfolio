<template>
  <TheWrap>
    <TheHeader title="Karachoco Code" top="true" />
    <Section block="true">
      <Heading level="2" label="TOPページ" />
      <Text>
        <router-link to="/styleguide">Go to Styleguide</router-link>
      </Text>
    </Section>
    <TheFooter />
  </TheWrap>
</template>

<script>
import '../../assets/var.css'
import TheWrap from '../layout/TheWrap.vue'
import TheHeader from '../layout/TheHeader.vue'
import TheFooter from '../layout/TheFooter.vue'
import Section from '../element/Section.vue'
import Heading from '../element/Heading.vue'

export default {
  components: {
    TheWrap,
    TheHeader,
    TheFooter,
    Section,
    Heading,
  },
}
</script>
