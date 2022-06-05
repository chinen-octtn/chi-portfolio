# 開発環境

- Node v16.13.0
- npm v8.1.0

初回のみ

```
npm i
```

## local 環境を起動

```
npm run dev
```

## 公開用ファイルの build

```
npm run build
```

## Vite

ローカル開発環境は Vite を採用
https://vitejs.dev/

- Select a framework: › vue
- Select a variant: › vue-ts

## ライブラリ

- vue-router
- sass

## eslint + autoformat

- eslint
- eslint-config-prettier
- eslint-plugin-vue@latest
- prettier

### npx eslint --init

- ✔ How would you like to use ESLint? · problems
- ✔ What type of modules does your project use? · esm
- ✔ Which framework does your project use? · vue
- ✔ Does your project use TypeScript? · No / Yes
- ✔ Where does your code run? · browser
- ✔ What format do you want your config file to be in? · JavaScript

## ディレクトリ

### /public/

assets 関連のファイルを設置する

※components からのパスは public を省略可

```
/public/img/ ・・・画像
```
