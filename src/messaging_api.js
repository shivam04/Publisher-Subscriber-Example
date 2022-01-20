/**
 * Created by shivam.si on 20/01/22 2:11 pm
 */

const axios = require('axios');
const WebSocket = require('ws');

function publish(message, topicId) {
    return axios.post(`http://localhost:3001/${topicId}`, message);
}

function subscribe(topicId) {
    return new WebSocket(`ws://localhost:3001/${topicId}`);
}

module.exports.publish = publish;
module.exports.subscribe = subscribe;