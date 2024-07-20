const WebSocket = require('ws');
const port = 8765;
const server = new WebSocket.Server({ port });

server.on('connection', (ws) => {
    ws.on('message', async (message) => {
        const data = JSON.parse(message);
        const action = data.action;
        const msg = data.message;

        if (action === 'echo') {
            await echo(ws, msg);
        } else if (action === 'reverse_echo') {
            await reverseEcho(ws, msg);
        } else if (action === 'count_last_char') {
            countLastChar(ws, msg);
        }
    });
});

async function echo(ws, message) {
    for (let char of message) {
        ws.send(JSON.stringify({ action: 'echo', message: char }));
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

async function reverseEcho(ws, message) {
    const reversedMessage = message.split('').reverse().join('');
    for (let char of reversedMessage) {
        ws.send(JSON.stringify({ action: 'reverse_echo', message: char }));
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

function countLastChar(ws, message) {
    if (message) {
        const lastChar = message.slice(-1);
        const count = message.slice(0, -1).split(lastChar).length - 1;
        ws.send(JSON.stringify({ action: 'count_last_char', last_char: lastChar, count }));
    }
}

console.log(`WebSocket server is running on ws://localhost:${port}`);


