# Bilibili Notify Web

[Bilibili Notify](https://github.com/Akokk0/bilibili-notify) 的宣传站点 —— 一个基于 [Koishi](https://github.com/koishijs/koishi) 的 B 站推送插件。

直播开播、动态更新、Super Chat、大航海全部渲染成精美卡片，推送到 Discord / QQ / Telegram。本仓库只承载落地页本身，插件源码在上游仓库。

## 技术栈

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4**（`@tailwindcss/vite` 插件 + `@theme inline` 接入设计 tokens）
- **Biome** 代替 ESLint + Prettier
- **Lefthook** + **Commitlint**（Conventional Commits）
- **pnpm**

## 开发

```bash
pnpm install
pnpm dev      # 启动 dev server（默认 http://localhost:5181）
pnpm build    # tsc -b && vite build
pnpm preview  # 预览生产构建
pnpm lint     # biome check
pnpm fix      # biome check --write
```

首次 `pnpm install` 会自动注册 lefthook 钩子：

- `pre-commit`：Biome 自动 fix + 暂存修复，TS 类型检查
- `commit-msg`：commitlint 校验 Conventional Commits 格式

## 目录结构

```
src/
  App.tsx              页面装配
  main.tsx             入口
  components/
    Nav / Hero / Features / Gallery / Console / Quickstart / CtaBand / Footer
    icons.tsx          图标集
    cards/             推送卡片：Live / Dynamic / SuperChat / Guard / Offline
  styles/
    index.css          Tailwind 入口 + @theme 接入
    site.css           原项目沿用的全局样式（在 components 层引入）
    tokens.css         设计 tokens（颜色 / 字体 / 阴影 / 圆角）
```

### 设计 tokens 与 Tailwind 的对接

`tokens.css` 里的 CSS 变量在 `index.css` 通过 `@theme inline` 暴露成 Tailwind 的颜色 / 字体 / 阴影 token，所以可以直接写：

```tsx
<div className="bg-bn-pink text-bn-text-tertiary font-cjk shadow-bn-card" />
```

动态值（如卡片渐变色）走 CSS 变量注入：

```tsx
<div
  style={{ '--c1': gradStart, '--c2': gradEnd }}
  className="bg-[linear-gradient(135deg,var(--c1),var(--c2))]"
/>
```

> ⚠️ `site.css` 通过 `@import "./site.css" layer(components)` 落到 components 层，否则其中的 `* { margin: 0; padding: 0 }` 会越过 Tailwind utilities（v4 的层级规则下，未分层的 CSS 优先于所有 `@layer`）。

## 字体策略

CJK 字体走系统优先栈（PingFang SC / Microsoft YaHei / Source Han Sans / Noto Sans CJK），不再从 Google Fonts CDN 拉取，避免国内访问被拖慢。

## 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

```
feat: 新功能
fix: 修复
perf: 性能
chore: 杂项
docs: 文档
refactor: 重构
style: 仅样式 / 格式
test: 测试
```
