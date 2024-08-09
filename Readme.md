# web-music-button

`web-music-button` 是一个简单且轻量级的 npm 包，它允许你快速在网页上添加一个音乐播放器按钮。通过这个按钮，用户可以一键控制背景音乐的播放和暂停。

## 功能特点

- **易于集成**：可以快速在网页上添加音乐播放器按钮。
- **简单控制**：允许用户播放和暂停背景音乐。
- **可定制**：可以轻松自定义按钮的外观和行为。

## 安装

你可以通过 npm 安装 `web-music-button`：

```bash
npm install web-music-button
```

```html
<div id="music-button"></div>
```

```javascript
require('web-music-button/dist/web-music-button.css')

const WebMusicButton = require('web-music-button')

const musicButton = new WebMusicButton({
    musicUrl: '', //替换为你实际的音乐地址
})

musicButton.init()
```
