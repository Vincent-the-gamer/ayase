/**
 * https://2048game.com/
 */

// 记录上机用户
let currentUser: string | null = null
// 记录弹幕
let danmakuType: string | null = null

export default function game2048(ws: WebSocket, danmaku: Record<string, any>) {
  if (danmaku.text === '2048上机') {
    currentUser = danmaku.uname
    danmakuType = "2048"

    console.log(`2048用户: [${danmaku.uname}] 已上机！`)
  }

  if (danmaku.uname === '诡锋Vincent' && danmaku.text === '强制下机') {
    currentUser = null
    danmakuType = "danmaku"
    console.log(`2048 -- 管理员已强制用户下机！`)
  }

  if (!currentUser) {
    danmakuType = "danmaku"
    ws.send(
        JSON.stringify({
            ...danmaku,
            type: danmakuType
        })
    )
    return
  }

  if (currentUser === danmaku.uname) {
    if (danmaku.text === '2048下机') {
      currentUser = null
      danmakuType = "danmaku"
      console.log(`2048用户: [${danmaku.uname}] 已下机！`)
      ws.send(
        JSON.stringify({
            ...danmaku,
            type: danmakuType
        })
      )
    }
    else {
      danmakuType = "2048"
      console.log(`2048用户: [${danmaku.uname}] 发送指令`, danmaku)
      ws.send(
        JSON.stringify({
            ...danmaku,
            type: danmakuType
        })
      )
    }
  }
}