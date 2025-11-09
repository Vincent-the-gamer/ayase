import asyncio
from websockets.asyncio.client import connect
import json
import pyautogui

""" https://2048game.com/ """

async def game_2048():
    uri = "ws://localhost:8081/websocket"
    
    try:
        async with connect(uri) as websocket:
            print(f"Websocket connected: {uri}")
            
            while True:
                recv_msg = await websocket.recv()
                recv_json = json.loads(recv_msg)
                print(f"Received: {recv_json}")

                # 检查是否有退出消息
                if recv_json.get("type") == "exit":
                    print("收到退出消息，关闭连接")
                    break
                    
                if recv_json.get("type") == "2048":
                    text = recv_json.get("text", "")
                    if text == "上":
                        pyautogui.press("up")
                    elif text == "下":
                        pyautogui.press("down")
                    elif text == "左":
                        pyautogui.press("left")
                    elif text == "右":
                        pyautogui.press("right")
                        
    except Exception as e:
        print(f"WebSocket错误: {e}")

if __name__ == "__main__":
    asyncio.run(game_2048())