import { io } from 'socket.io-client';

const URL = 'wss://ws.postman-echo.com/raw';

export const socket = io(URL, {
    autoConnect: false
});

socket.on("connect", () => {
    console.log("connection established successfully")
});