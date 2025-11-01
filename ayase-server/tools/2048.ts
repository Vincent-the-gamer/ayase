/**
 * https://2048game.com/
 */
import { Danmaku } from "~~/types"

// 记录上机用户
let currentUser: string | null = null

export default function game2048(danmaku: Danmaku) {
  if (danmaku.text === '2048上机') {
    currentUser = danmaku.uname
    console.log(`2048用户: [${danmaku.uname}] 已上机！`)
  }

  if (danmaku.uname === '诡锋Vincent' && danmaku.text === '强制下机') {
    currentUser = null
    console.log(`2048 -- 管理员已强制用户下机！`)
  }

  if (!currentUser) {
    return
  }

  if (currentUser === danmaku.uname) {
    if (danmaku.text === '2048下机') {
      currentUser = null
      console.log(`2048用户: [${danmaku.uname}] 已下机！`)
    }
    else {
      console.log(`2048用户: [${danmaku.uname}] 发送指令`, danmaku)
      const { text } = danmaku
      // switch (text) {
      //   case '上':
      //     robot.keyTap('up')
      //     break
      //   case '下':
      //     robot.keyTap('down')
      //     break
      //   case '左':
      //     robot.keyTap('left')
      //     break
      //   case '右':
      //     robot.keyTap('right')
      //     break
      //   default:
      //     break
      // }
    }
  }
}
