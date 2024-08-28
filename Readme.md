# web-music-button

`web-music-button` is a simple and lightweight npm package that allows you to quickly add a music player button to your webpage. This button enables users to control background music playback with a single click.

## Features

- **Easy Integration**: Quickly add a music player button to your webpage.
- **Simple Controls**: Allows users to play and pause background music effortlessly.
- **Customizable**: Easily customize the appearance and behavior of the button.

## Installation

You can install `web-music-button` via npm:

```bash
npm install web-music-button
```

```html
<div id="music-button"></div>
```

```javascript
require('web-music-button/dist/web-music-button.css');

const WebMusicButton = require('web-music-button');

const musicButton = new WebMusicButton({
    musicUrl: '', // Replace with your actual music URL
});

musicButton.init();
```
