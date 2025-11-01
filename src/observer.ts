import { plugin2048 } from "./plugins/plugin-2048"

export function setupObserver(serverLink: string) {
  let observer: MutationObserver | null = null

  const startObserver = () => {
    try {
      // Connect websocket
      const ws = new WebSocket(serverLink)
      
      observer = new MutationObserver((mutations, _) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            const addedNodes = Array.from(mutation.addedNodes)
            const node = addedNodes[0] as HTMLElement
            const danmaku = {
              type: "danmaku",
              uname: node.querySelector('span.user-name')?.innerHTML,
              text: node.getAttribute('data-danmaku'),
              img: '',
              replacement: '',
            }
            const emoticon = node.querySelector('span.emoticon')
            if (emoticon) {
              danmaku.img = emoticon.querySelector('img.open-menu')?.getAttribute('src')!
              danmaku.replacement = emoticon.querySelector('span.open-menu')?.innerHTML!
            }

            ws.send(
              JSON.stringify(danmaku),
            )
          }
        })
      })

      const config = {
        attributes: false,
        childList: true,
        subtree: true,
      }

      const danmakuDOMList = document.querySelector('.chat-history-list')

      if (danmakuDOMList) {
        observer.observe(danmakuDOMList, config)
      }

      ws.onmessage = (event) => {
         // plugins
         plugin2048(event.data)
      }

      alert(`WebSocket连接: ${serverLink}`)
    }
    catch (e) {
      alert(`WebSocket连接错误: ${e}`)
    }
  }

  const stopObserver = () => {
    observer?.disconnect()
  }

  return { observer, startObserver, stopObserver }
}
