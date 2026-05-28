# Jouney_Logger version 1.0.0

## Overview

Jouney_Loggerは、旅行計画作成、記録保存のために使用できるアプリ。旅行前には旅行計画作成として、旅行中はスケジュール確認、写真や感想、また金額などを記録。旅行後は旅の軌跡を確認できる。

## Details

### 技術

- フロントエンド: React.js (App Router) / JavaScript / Tailwind CSS
- バックエンド: Node.js (Express) / JavaScript
- データベース: PostgreSQL (Knex)

### 機能

- 計画モード
  - 計画作成機能（イベント/移動ごと）

## Requirement

以下の環境で動作

- **OS:** macOS
- **Node.js:** v19.0.0 以上
- **npm:** v9.0.0 以上

## Usage

### 1. 依存関係のインストール

リポジトリをクローンし、必要なパッケージをインストール

```bash
git clone git@github.com:KosukeHiramatsu/solo-MVP.git
cd solo-MVP
npm insall
```

### 2. バックエンドとフロントエンドの起動

```bash
# バックエンドの起動
npm run dev
# フロントエンドの起動
cd front
npm run dev
```

### 3. ブラウザの起動

任意のブラウザで[http://localhost:5173]()を開く

## Furure Plan

- 計画モード
  - GoogleMapの連携機能
    - 場所を記入すると自動で所要時間の算出
    - 場所をクリックするとGoogleマップに飛ぶ
- 旅行中モード
  - 使用金額記入機能
  - 写真保存機能
  - 日記の記入機能
- 旅行後モード
  - 金額精算機能
  - 旅の記録作成機能
- 全般
  - ログイン
  - HTTPS化
  - WEB公開
  - SNSを通してのリンクのシェア
  - ユーザーごとの権限

## Author

作成者：Kosuke Hiramatsu

Github: [github](https://github.com/KosukeHiramatsu)

## Licence

[MIT](https://github.com/kotabrog/ft_mini_ls/blob/main/LICENSE)
