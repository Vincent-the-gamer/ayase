import { Danmaku } from "~~/types"

const clients: Record<string, any> = {}

export default defineWebSocketHandler({
  open(peer) {
    clients[peer.id] = peer
    console.log('[ayase-websocket] open')
  },

  message(peer, message) {
    const msg = JSON.parse(message.data as string)

    const { type, uname, text, img, replacement } = msg
    const danmaku: Danmaku = {
      type,
      uname: uname.includes(":") ? uname.replace(':', '').trim() : uname,
      text,
      img,
      replacement,
    }
    // broadcast
    for (let ws of Object.values(clients)) {
      ws.send(danmaku)
    }
    peer.send(danmaku)
    console.log('[ayase-websocket] danmaku', danmaku)
  },

  close(peer, event) {
    delete clients[peer.id]
    console.log('[ayase-websocket] close', event)
  },

  error(peer, error) {
    console.log('[ayase-websocket] error', error)
  },
})
