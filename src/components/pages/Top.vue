<template>
  <TheWrap>
    <TheHeader title="Karachoco Code" top="true" />
    <Section block="true">
      <Heading level="2" label="Hello world !" />
      <Text
        text="デジタルエージェンシーの社員としてフロントエンドエンジニアをしています。個人ではフリーランスとしてWebに関する相談・運用サポートやフロントエンド開発をしています。"
      />
      <Separate size="1" />
      <Text text="希望や悩みを聞いて、一緒に解決していくことが得意です。" />
    </Section>
    <Section block="true">
      <Heading level="2" label="Contact" />
      <Text
        text="個人への仕事の依頼は、お問い合わせフォームかTwitterのDMでお願いします。気軽に相談してください。"
      />
      <Separate size="2" />
      <Button
        link="https://forms.gle/w8UwVtMrtS1D95sy7"
        blank="true"
        text="お問い合わせフォーム"
      />
      <Separate size="1" />
      <Button
        link="https://twitter.com/chocodogmagic"
        blank="true"
        text="Twitter"
      />
    </Section>
    <Section block="true">
      <Heading level="2" label="News" />
      <Text
        text="2021年は週に最大1日ほどしか空きがありません。規模の大きい依頼の場合は本業の方を紹介することも可能です。"
      />
    </Section>
    <Section block="true">
      <Heading level="2" label="Profile" />
      <Text
        text="まぁし<a href='https://twitter.com/chocodogmagic' target='_blank' rel='noreferrer'>@Twitter</a> / <a href='https://github.com/chinen-octtn' target='_blank' rel='noreferrer'>@GitHub</a>"
      />
      <Text text="MASASHI CHINEN" />
      <Text text="Tech Community運営：PWA Night / v-okinawa" />
      <Text
        text="著書：<a href='https://booth.pm/ja/items/1312648' target='_blank' rel='noreferrer'>実践PWA（共著）</a> / <a href='https://booth.pm/ja/items/1573699' target='_blank' rel='noreferrer'>すぐに現場で使えるフロントエンドTips集（共著）</a>"
      />
      <Separate size="2" />
      <Button
        link="https://twitter.com/chocodogmagic"
        blank="true"
        text="ご相談はDMまで"
      />
    </Section>
    <Section block="true">
      <Heading level="2" label="Skill" />

      <Section>
        <Heading level="3" label="HTML" />
        <Text text="パフォーマンス / セマンティック / アクセシビリティ" />
      </Section>
      <Section>
        <Heading level="3" label="CSS" />
        <Text text="CSS設計 / CSSアニメーション" />
      </Section>
      <Section>
        <Heading level="3" label="JavaScript" />
        <Text text="Vanilla JS / PWA / Vue.js / jQuery" />
      </Section>
      <Section>
        <Heading level="3" label="CMS" />
        <Text text="microCMS / Movable Type / WordPress" />
      </Section>
      <Section>
        <Heading level="3" label="Webコンサルティング" />
        <Text
          text="技術的な質問・相談 / Web運用サポート / SEO / テクニカルディレクション / フロントエンド人材育成"
        />
      </Section>
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
import Button from '../element/Button.vue'
import Text from '../element/Text.vue'
import Separate from '../element/Separate.vue'

export default {
  components: {
    TheWrap,
    TheHeader,
    TheFooter,
    Section,
    Heading,
    Button,
    Text,
    Separate,
  },
}
</script>
