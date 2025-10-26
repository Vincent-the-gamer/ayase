export default defineWebSocketHandler({
  open(peer) {
    console.log('[ayase-websocket] open')
  },

  message(peer, message) {
    const msg = JSON.parse(message.data as string)
    console.log('[ayase-websocket] message', msg)
  },

  close(peer, event) {
    console.log('[ayase-websocket] close', event)
  },

  error(peer, error) {
    console.log('[ayase-websocket] error', error)
  },
})
