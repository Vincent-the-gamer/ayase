export default defineWebSocketHandler({
  open(peer) {
    console.log("[ayase-websocket] open");
  },

  message(peer, message) {
    const msg = JSON.parse(message.data as string)
    console.log("[ws] message", msg);
  },

  close(peer, event) {
    console.log("[ws] close", event);
  },

  error(peer, error) {
    console.log("[ws] error", error);
  },
});

