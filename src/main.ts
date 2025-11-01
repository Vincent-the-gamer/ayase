import { setupObserver } from './observer'
import './style.css'

(() => {
  const app = document.createElement('div')
  document.body.append(app)
  return app
})().innerHTML = `
  <div class="config" id="ayase-app">
      <img src="https://i0.hdslb.com/bfs/article/eba9c4eeae160d5f72edf1d0c1eb409a3dd8f4e7.png"/>
      <span>WebSocket地址: </span>
      <input id="ayase-link" type="text" value="ws://localhost:8081/websocket"/>
      <button id="start-ayase">连接</button>
  </div>
`

const input = document.querySelector<HTMLInputElement>('#ayase-link')
const button = document.querySelector<HTMLInputElement>('#start-ayase')
let inputValue = input!.value

input!.addEventListener('input', (event: any) => {
  inputValue = event.target.value
})

button!.addEventListener('click', () => {
  const { observer, startObserver, stopObserver } = setupObserver(inputValue)
  let ws: WebSocket | null = null
  if(!observer) {
    stopObserver()
  } 
  ws = startObserver()!
})
