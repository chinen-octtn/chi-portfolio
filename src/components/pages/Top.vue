<template>
  <TheWrap>
    <TheHeader title="Karachoco Code" top="true" />
    <Section block="true">
      <Heading level="2" label="Hello world !" />
      <Text
        text="デジタルエージェンシーの社員としてフロントエンドエンジニアをしています。個人ではフリーランスとしてWebに関する相談・運用サポートやフロントエンド開発をしています。"
      />
      <Separate size="1" />
      <Text
        text="希望や悩みを聞いて、一緒に改善策を模索しながら解決します。クライアント様やデザイナーと直接話してWeb開発に取り組むことが得意です。"
      />
    </Section>
    <Section block="true">
      <Heading level="2" label="Contact" />
      <Text
        text="お仕事の相談は、TwitterのDMかお問い合わせフォームへお願いします。"
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
        text="2021年は週に最大1日ほどしか空きがありません。規模の大きい依頼は難しいかもしれません。本業の方を紹介することも可能です。"
      />
    </Section>
    <Section block="true">
      <Heading level="2" label="Profile" />
      <Text text="まぁし / MASASHI CHINEN" />
      <Section>
        <Heading level="3" label="SNS" />
        <Text
          text="<a href='https://twitter.com/chocodogmagic' target='_blank' rel='noreferrer'>Twitter</a> / <a href='https://github.com/chinen-octtn' target='_blank' rel='noreferrer'>GitHub</a>"
        />
      </Section>

      <Text
        text="Tech Community運営：<a href='https://pwanight.connpass.com/' target='_blank' rel='noreferrer'>PWA Night</a> / <a href='https://v-okinawa.connpass.com/' target='_blank' rel='noreferrer'>v-okinawa</a> / <a href='https://twitter.com/search?q=%23ohayo_engineer&amp;f=live' target='_blank' rel='noreferrer'>おはようエンジニア</a>"
      />
      <Section>
        <Heading level="3" label="著書" />
        <ul>
          <li>
            <a
              href="https://booth.pm/ja/items/1312648"
              target="_blank"
              rel="noreferrer"
              >実践PWA（共著）</a
            >
          </li>
          <li>
            <a
              href="https://booth.pm/ja/items/1573699"
              target="_blank"
              rel="noreferrer"
              >すぐに現場で使えるフロントエンドTips集（共著）</a
            >
          </li>
        </ul>
      </Section>
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
