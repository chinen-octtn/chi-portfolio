<template>
  <TheWrap>
    <TheHeader title="Styleguide" />
    <Section block="true">
      <Heading level="2" label="H2見出し" />
      <Text
        text="テキストサンプルテキストサンプルテキストサンプルテキストサンプル"
      />
      <Section>
        <Heading level="3" label="H3見出し" />
        <Text
          text="テキストサンプルテキストサンプルテキストサンプルテキストサンプル"
        />
        <Section>
          <Heading level="4" label="H4見出し" />
          <Text
            text="テキストサンプルテキストサンプルテキストサンプルテキストサンプル"
          />
          <Section>
            <Heading level="5" label="H5見出し" />
            <Text
              text="テキストサンプルテキストサンプルテキストサンプルテキストサンプル"
            />
          </Section>
        </Section>
      </Section>
    </Section>
    <Section block="true">
      <Heading level="2" label="テキスト" />
      <Text
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias, ea corporis natus consequuntur sint provident aperiam fugit perferendis culpa. Magni fugit eos repudiandae ad rem iusto ipsam tenetur in."
      />
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
import Text from '../element/Text.vue'

export default {
  name: 'Styleguide',
  components: {
    TheWrap,
    TheHeader,
    TheFooter,
    Section,
    Heading,
    Text,
  },
}
</script>
