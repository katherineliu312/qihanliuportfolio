# 刘琦涵 · 个人网站

简洁美观的中英双语个人网站，第一人称介绍，排版宽松。

## 使用方式

1. 用浏览器直接打开 `index.html`
2. 或使用本地服务器：`python3 -m http.server 8080`，访问 http://localhost:8080

## 功能

- **语言切换**：点击导航栏的 EN/中 按钮切换中英文
- **第一人称介绍**：以「我」的视角呈现个人经历与特质
- **响应式**：适配手机与桌面端

## 自定义

- 替换头像：在 `.avatar-placeholder` 内添加 `<img>` 或使用背景图
- 修改内容：编辑 `index.html` 中的 `data-i18n` 对应文本，并在 `script.js` 的 `translations` 中同步更新
- 项目预览图：当前使用 [Thum.io](https://www.thum.io/) 自动生成。若加载失败，可将截图保存为 `images/` 文件夹下的 `break-the-ad.jpg`、`valentine.jpg`、`fiveyearsdiary.jpg`，并修改 `index.html` 中对应的 `img src`
