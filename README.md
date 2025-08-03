# Uravo Test Page

A React web application built with Vite and Tailwind CSS featuring a comprehensive guide about Uzbek Plov cuisine.

## 🚀 Quick Start / クイックスタート

### Prerequisites / 前提条件

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation / インストール

1. **Clone the repository / リポジトリをクローン**

   ```bash
   git clone https://github.com/saidojp/uravo-test-page.git
   cd uravo-test-page
   ```

2. **Install dependencies / 依存関係をインストール**

   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install
   ```

### Development / 開発

**Start development server / 開発サーバーを起動**

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

The application will be available at `http://localhost:5173`

アプリケーションは `http://localhost:5173` で利用できます

### Build / ビルド

**Build for production / 本番環境用にビルド**

```bash
# Using pnpm
pnpm build

# Or using npm
npm run build
```

**Preview production build / 本番ビルドをプレビュー**

```bash
# Using pnpm
pnpm preview

# Or using npm
npm run preview
```

### Linting / リンティング

**Run ESLint / ESLint を実行**

```bash
# Using pnpm
pnpm lint

# Or using npm
npm run lint
```

## 🛠️ Tech Stack / 技術スタック

- **React** - UI library / UI ライブラリ
- **Vite** - Build tool / ビルドツール
- **Tailwind CSS** - Styling / スタイリング
- **ESLint** - Code linting / コードリンティング

## 📁 Project Structure / プロジェクト構造

```
src/
├── main.jsx          # Application entry point / アプリケーションのエントリーポイント
├── App.jsx           # Main App component / メインAppコンポーネント
├── index.css         # Global styles / グローバルスタイル
└── pages/
    └── UzbekPlovPage.jsx  # Main page component / メインページコンポーネント
```

## 📝 Available Scripts / 利用可能なスクリプト

| Script    | Description                                       |
| --------- | ------------------------------------------------- |
| `dev`     | Start development server / 開発サーバーを起動     |
| `build`   | Build for production / 本番環境用にビルド         |
| `preview` | Preview production build / 本番ビルドをプレビュー |
| `lint`    | Run ESLint / ESLint を実行                        |
