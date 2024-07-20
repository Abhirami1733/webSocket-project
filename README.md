# webSocket-project
This project demonstrates a simple WebSocket server and client setup for processing messages. The WebSocket server performs three types of processing on received messages and returns the results to the client. The client, implemented in HTML and JavaScript, interacts with the WebSocket server and displays the results in a terminal-like interface.


 Features

- WebSocket Server
  - Listens for messages from clients.
  - Processes messages to:
    - Echo the message character by character with a delay.
    - Reverse the message and echo it character by character with a delay.
    - Count the occurrences of the last character in the message (excluding the last character itself).
  - Combines results into a single response and sends it back to the client.

- WebSocket Client
  - Connects to the WebSocket server.
  - Sends a message for processing and displays:
    - The original message.
    - The reversed message.
    - The count of occurrences of the last character.
  - Provides a terminal-like interface for interaction.

 How to Use

1. Setup WebSocket Server
   - Ensure Node.js is installed.
   - Save the server code to a file named `server.js`.
   - Install the WebSocket library using `npm install ws`.
   - Run the server using `node server.js`.

2. Run WebSocket Client
   - Open the `index.html` file in a web browser.


- Client Input: `Hello World`
- Server Response:
  - Original Message: `Hello World`
  - Reversed Message: `dlroW olleH`
  - Occurrences of Last Character (`d`): `1`
Requirements

- Node.js (for running the WebSocket server)
- Web browser (for running the WebSocket client)
