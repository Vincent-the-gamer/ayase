export interface Danmaku {
    type: "danmaku",
    uname: string,
    text: string,
    img: string,
    replacement: string
}

export interface Game2048 {
    type: "2048",
    command: string
}