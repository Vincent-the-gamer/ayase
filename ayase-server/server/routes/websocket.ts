export default defineWebSocketHandler({
  open(peer) {
    console.log('[ayase-websocket] open')
  },

  message(peer, message) {
    const msg = JSON.parse(message.data as string)
    const { uname, text, img, replacement } = msg
    const danmaku = {
      uname: uname.replace(':', '').trim(),
      text,
      img,
      replacement,
    }
    console.log('[ayase-websocket] message', danmaku)
  },

  close(peer, event) {
    console.log('[ayase-websocket] close', event)
  },

  error(peer, error) {
    console.log('[ayase-websocket] error', error)
  },
})
