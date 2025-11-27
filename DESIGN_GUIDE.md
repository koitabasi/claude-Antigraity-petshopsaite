# Antigraity Pet Shop - デザインガイドライン

**作成日**: 2025年11月27日  
**バージョン**: 1.0

---

## 📐 デザインコンセプト

### テーマ
**"温かさと信頼"**

ペットと飼い主の幸せな出会いをサポートする、親しみやすく信頼できるペットショップ

### キーワード
- 親しみやすい
- 清潔感
- 安心感
- 明るい
- プロフェッショナル

---

## 🎨 カラーパレット

### メインカラー

#### プライマリーカラー
```
色: コーラルレッド
HEX: #FF6B6B
RGB: 255, 107, 107
用途: ボタン、見出し、アクセント
```

#### セカンダリーカラー
```
色: ターコイズ
HEX: #4ECDC4
RGB: 78, 205, 196
用途: サブアクセント、新着バッジ
```

#### アクセントカラー
```
色: イエロー
HEX: #FFE66D
RGB: 255, 230, 109
用途: 人気バッジ、ハイライト
```

### サポートカラー

#### ダークカラー
```
色: チャコールグレー
HEX: #2C3E50
RGB: 44, 62, 80
用途: テキスト、見出し
```

#### ライトカラー
```
色: ライトグレー
HEX: #F8F9FA
RGB: 248, 249, 250
用途: 背景、セクション区切り
```

#### テキストカラー
```
色: ダークグレー
HEX: #333333
RGB: 51, 51, 51
用途: 本文テキスト
```

#### ボーダーカラー
```
色: ミディアムグレー
HEX: #E0E0E0
RGB: 224, 224, 224
用途: 枠線、区切り線
```

---

## 📝 タイポグラフィ

### フォントファミリー

#### メインフォント
```
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```
- 本文テキスト
- ボタン
- フォーム要素

#### 見出しフォント
```
font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", 
             Meiryo, sans-serif;
```
- ページタイトル
- セクション見出し

### フォントサイズ

| 要素 | サイズ | 用途 |
|------|--------|------|
| h1 | 3rem (48px) | ヒーローセクション |
| h2 | 2.5rem (40px) | ページヘッダー |
| h2 (section) | 2rem (32px) | セクションタイトル |
| h3 | 1.5rem (24px) | サブ見出し |
| h4 | 1.25rem (20px) | カード見出し |
| body | 1rem (16px) | 本文 |
| small | 0.875rem (14px) | キャプション、補足 |

### 行間
```
line-height: 1.6
```
- 本文の読みやすさを重視

---

## 📏 スペーシング

### 基本スペーシング
```css
--spacing-xs: 0.5rem    /* 8px  */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 2rem      /* 32px */
--spacing-lg: 3rem      /* 48px */
--spacing-xl: 4rem      /* 64px */
```

### セクション間隔
- 標準セクション: `padding: 4rem 0;`
- 強調セクション: `padding: 5rem 0;`

### 要素間隔
- カード間: `gap: 2rem;`
- ボタン間: `gap: 1rem;`
- フォーム要素間: `margin-bottom: 2rem;`

---

## 🎯 UI コンポーネント

### ボタン

#### プライマリーボタン
```css
background: #FF6B6B;
color: white;
padding: 0.75rem 2rem;
border-radius: 50px;
font-weight: 600;
```
- メインアクション
- CTAボタン

#### セカンダリーボタン
```css
background: white;
color: #FF6B6B;
border: 2px solid #FF6B6B;
padding: 0.75rem 2rem;
border-radius: 50px;
font-weight: 600;
```
- サブアクション
- 補助的なボタン

### カード

#### スタンダードカード
```css
background: white;
border-radius: 16px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
padding: 2rem;
transition: all 0.3s ease;
```

#### ホバー効果
```css
transform: translateY(-8px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
```

### バッジ

#### 新着バッジ
```css
background: #4ECDC4;
color: white;
padding: 0.25rem 0.75rem;
border-radius: 20px;
font-size: 0.875rem;
```

#### 人気バッジ
```css
background: #FFE66D;
color: #2C3E50;
padding: 0.25rem 0.75rem;
border-radius: 20px;
font-size: 0.875rem;
```

---

## 🖼️ 画像ガイドライン

### 推奨サイズ

| 用途 | サイズ | アスペクト比 |
|------|--------|--------------|
| ヒーロー画像 | 1920x1080px | 16:9 |
| ペットカード画像 | 800x600px | 4:3 |
| サムネイル | 400x300px | 4:3 |
| ギャラリー画像 | 600x600px | 1:1 |
| スタッフ写真 | 300x300px | 1:1 |

### 画像スタイル
- 明るく温かみのある雰囲気
- 自然光での撮影
- ペットの表情が見える
- 背景はシンプルに

### 画像処理
```css
border-radius: 16px;
object-fit: cover;
```

---

## 📐 レイアウト

### コンテナ幅
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 1rem;
```

### グリッドシステム

#### ペットカードグリッド
```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 2rem;
```

#### サービスカードグリッド
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem;
```

---

## 🎭 アニメーション

### トランジション
```css
transition: all 0.3s ease;
```

### ホバーエフェクト
```css
/* カード */
transform: translateY(-8px);

/* ボタン */
transform: translateY(-2px);
```

### フェードイン
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## 📱 レスポンシブデザイン

### ブレークポイント
```css
/* モバイル */
@media (max-width: 768px)

/* タブレット */
@media (min-width: 769px) and (max-width: 1024px)

/* デスクトップ */
@media (min-width: 1025px)
```

### モバイル対応
- ナビゲーション: 縦並び
- グリッド: 1カラム
- フォントサイズ: やや縮小
- パディング: 縮小

---

## 🎨 アイコン

### 使用アイコン
- 絵文字を積極的に活用
- シンプルで分かりやすい
- サイズ: 2rem〜3rem

### 推奨アイコン
```
🐾 ペット関連
🏥 健康・病院
📚 教育・サポート
🛒 ショッピング
📞 連絡先
📍 場所
🕐 時間
✨ 特徴・ポイント
```

---

## 🔤 コピーライティング

### トーン＆マナー
- 親しみやすく温かい
- 専門用語は避ける
- 簡潔で分かりやすい
- ポジティブな表現

### 見出しの作り方
- 具体的に
- 短く簡潔に
- アクション志向

### 本文の書き方
- 1文は短く（30文字以内推奨）
- 箇条書きを活用
- 数字で具体的に

---

## ✅ デザインチェックリスト

### 色使い
- [ ] プライマリーカラーが適切に使用されている
- [ ] コントラスト比が十分（WCAG AA基準）
- [ ] 色だけに頼らない情報伝達

### タイポグラフィ
- [ ] フォントサイズが適切
- [ ] 行間が読みやすい
- [ ] 見出しの階層が明確

### レイアウト
- [ ] 余白が適切
- [ ] 要素が整列している
- [ ] グリッドシステムに沿っている

### レスポンシブ
- [ ] モバイルで表示確認
- [ ] タッチターゲットが十分なサイズ
- [ ] 横スクロールが発生しない

### パフォーマンス
- [ ] 画像が最適化されている
- [ ] 不要なアニメーションがない
- [ ] ページ読み込みが速い

---

## 🚀 今後の展開

### 追加予定デザイン要素
1. ロゴデザイン
2. ファビコン
3. オリジナルアイコンセット
4. イラスト素材
5. 店舗写真

### ブランディング強化
- ショップカードデザイン
- パンフレットデザイン
- SNS用画像テンプレート

---

## 📚 参考リソース

### カラーパレット生成
- Coolors.co
- Adobe Color

### フォント
- Google Fonts
- Adobe Fonts

### アイコン
- Font Awesome
- Material Icons
- 絵文字

### 画像素材
- Unsplash
- Pexels
- Adobe Stock

---

**このデザインガイドラインは、Antigraity Pet Shopのブランドアイデンティティを保ちながら、柔軟に進化していきます。**

**最終更新**: 2025年11月27日
