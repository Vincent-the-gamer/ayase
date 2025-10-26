(() => {
  const app = document.createElement('div');
  document.body.append(app);

  const observer = new MutationObserver((mutations, _) => {
      mutations.forEach((mutation) => {
        if(mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes)
          const node = addedNodes[0] as HTMLElement
          const danmaku = {
            uname: node.querySelector('span.user-name')?.innerHTML,
            text: node.getAttribute("data-danmaku"),
            img: "",
            replacement: ""
          }
          const emoticon = node.querySelector('span.emoticon')
          if(emoticon) {
            danmaku.img = emoticon.querySelector('img.open-menu')?.getAttribute('src')!
            danmaku.replacement = emoticon.querySelector('span.open-menu')?.innerHTML!
          }

          console.log(danmaku)
        }
      })
  })

  const config = {
    attributes: false,
    childList: true,
    subtree: true
  }

  const danmakuDOMList = document.querySelector(".chat-history-list")

  if(danmakuDOMList) {
      observer.observe(danmakuDOMList, config)
  }
  
  return app;
})();
