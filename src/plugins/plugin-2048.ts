import { pushKey } from "../key"

/**
 * https://2048game.com/
 */
export function plugin2048(message: string) {
    const msg = JSON.parse(message)

    const { type, command } = msg
    if(type !== "2048") {
        return
    }

    switch(command.trim()) {
        case "上":
            pushKey("up")
            break
        case "下":
            pushKey("down")
            break
        case "左":
            pushKey("left")
            break
        case "右":
            pushKey("right")
            break
        default:
            break
    }

}