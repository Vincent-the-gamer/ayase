import { Danmaku, Game2048 } from "~~/types"

const clients: Record<string, any> = {}

export default defineWebSocketHandler({
  open(peer) {
    clients[peer.id] = peer
    console.log('[ayase-websocket] open')
  },

  message(peer, message) {
    const msg = JSON.parse(message.data as string)
    if (msg.type === "danmaku") {
      const { type, uname, text, img, replacement } = msg
      const danmaku: Danmaku = {
        type,
        uname: uname.replace(':', '').trim(),
        text,
        img,
        replacement,
      }
      console.log('[ayase-websocket] danmaku', danmaku)
    } else if (msg.type === "2048") {
      const { type, command } = msg
      const msg2048: Game2048 = {
        type,
        command
      }
      // broadcast
      for(let ws of Object.values(clients)) {
        ws.send(msg2048)
      }
      peer.send(msg2048)
      console.log('[ayase-websocket] 2048', msg2048)
    }
  },

  close(peer, event) {
    delete clients[peer.id]
    console.log('[ayase-websocket] close', event)
  },

  error(peer, error) {
    console.log('[ayase-websocket] error', error)
  },
})
