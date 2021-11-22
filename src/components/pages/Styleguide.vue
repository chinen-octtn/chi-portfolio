<script setup lang="ts">
import '../../assets/var.css'
import TheWrap from '../layout/TheWrap.vue'
import TheHeader from '../layout/TheHeader.vue'
import TheFooter from '../layout/TheFooter.vue'
import Section from '../element/Section.vue'
import Heading from '../element/Heading.vue'
import Text from '../element/Text.vue'
import Button from '../element/Button.vue'
import Separate from '../element/Separate.vue'
</script>

<template>
  <TheWrap>
    <TheHeader title="Styleguide" />
    <Section :block="true">
      <Heading level="2" label="H2見出し" />
      <Text
        text="テキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプル"
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
    <Section :block="true">
      <Heading level="2" label="テキスト" />
      <Text
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias, ea corporis natus consequuntur sint provident aperiam fugit perferendis culpa. Magni fugit eos repudiandae ad rem iusto ipsam tenetur in."
      />
    </Section>
    <Section :block="true">
      <Heading level="2" label="ボタン" />
      <Button link="/styleguide" text="button" />
      <Separate :size="2" />
      <Button link="/styleguide" text="長いテキストの場合はこうなります" />
    </Section>
    <TheFooter />
  </TheWrap>
</template>
