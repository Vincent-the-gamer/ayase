<div align="center">
    <img src="./.github/ayase.png" style="height: 110px;"/>
    <h1>Ayase</h1>
    <p>A userscript + websocket server to observe and record Bilibili live danmakus.</p>
</div>

## Usage

1. Download userscript from [release](https://github.com/Vincent-the-gamer/ayase/releases)
or install from [greasyfork](https://greasyfork.org/zh-CN/scripts/553774-ayase).

2. Download websocket server from [release](https://github.com/Vincent-the-gamer/ayase/releases), and:
```shell
# start your server
NITRO_PORT=xxxx node .output/server/index.mjs"
```

3. Clone this project, run a game handler with Python(using pyautogui library).
```shell
cd ayase-handler

poetry install

source .venv/bin/activate

# 2048game: https://2048game.com/
# You need to open the page, then let pyautogui to control it.
python 2048.py
```

4. Open any Bilibili live room, set your server address, then the userscript will automatically send the danmaku to your websocket server.

![usage](./.github/usage.png)

## Demo

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=115518765861521&bvid=BV17pkQBmEJM&cid=33853933278&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## License

[MIT License](./LICENSE.md)

Copyright (c) 2025-present Vincent-the-gamer
