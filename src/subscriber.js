/**
 * Created by shivam.si on 20/01/22 2:25 pm
 */
const messageApi = require('./messaging_api');

const TOPIC_ID = process.env.TOPIC_ID;

function displayMessage(message) {
    console.log(`>${message.name}: ${message.text}`);
}

function streamMessages() {
    const messagingSocket = messageApi.subscribe(TOPIC_ID);

    messagingSocket.on('message', (data) => {
        const message = JSON.parse(data);
        displayMessage(message);
    });
}

streamMessages();
