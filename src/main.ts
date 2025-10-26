import {  setupObserver } from "./observer";
import "./style.css"
import ayaseLogo from "./assets/ayase.png"

(() => {
  const app = document.createElement('div');
  document.body.append(app);
  return app;
})().innerHTML = `
  <div class="config" id="ayase-app">
      <img src="${ ayaseLogo }"/>
      <span>WebSocket地址: </span>
      <input id="ayase-link" type="text" value="ws://localhost:8081/websocket"/>
      <button id="start-ayase">连接</button>
  </div>
`;

const input = document.querySelector<HTMLInputElement>("#ayase-link")

input!.addEventListener("change", (event: any) => {
  setupObserver(
    document.querySelector<HTMLButtonElement>('#start-ayase')!,
    event.target.value
  )
})
