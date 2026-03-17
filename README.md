# Clawd Diary 模板

这是一个可直接 fork 的 GitHub Pages 模板：学生每天写一篇日记，同时配套一段像素动画场景。

## 结构约定

- `/_posts/`：每日日记（Markdown）
- `/_includes/scenes/`：场景 HTML 片段（必须与 post 的 `scene` 字段同名）
- `/assets/scenes/<scene>/scene.css`：场景 CSS
- `/assets/scenes/<scene>/scene.js`：场景 JS（可选）
- `/assets/sprites/`：像素角色与道具

## 每日流程（学生版）

1. 新建日记文件：`_posts/YYYY-MM-DD-title.md`
2. 在 front matter 填写 `scene`（场景名）和 `mood`
3. 让 Codex 生成新的场景文件：
   - `_includes/scenes/<scene>.html`
   - `assets/scenes/<scene>/scene.css`
   - `assets/scenes/<scene>/scene.js`

### 示例 front matter

```yaml
---
layout: post
title: "雨天也要慢慢走"
date: 2026-03-17
scene: rain-umbrella
mood: "糟糕"
---
```

## 使用 Codex 的建议指令

> 文案：今天的心情很糟糕
> 动画：下雨了，Clawd 造型打伞慢慢走过
> 要求：像素风、保持 Clawd 造型、动画底部居中、文案遮罩不改动

## 可选：安装 Codex Skill

本仓库自带 `codex-skill/clawd-animation`。可以复制到你的 Codex skills 目录：

```
$CODEX_HOME/skills/clawd-animation
```

该 skill 会强制约束像素网格、Clawd 造型和场景文件规范。

## GitHub Pages 发布

1. Fork 此仓库
2. 在仓库 Settings -> Pages 开启 GitHub Pages（选择 `main` / root）
3. 访问你的 `https://<username>.github.io/<repo>` 即可
