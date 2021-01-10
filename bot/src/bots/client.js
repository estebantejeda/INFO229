const {TOKEN} = require('../config/config');
const {WebClient} = require('@slack/web-api');

const slackClient = new WebClient(TOKEN);

async function sendMessage(message){
    await slackClient.chat.postMessage({
        channel: "#general",
        text: message
    });
}

module.exports = {
    sendMessage
}