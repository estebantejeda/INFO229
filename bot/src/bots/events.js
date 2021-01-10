const {STSECRET} = require('../config/config');

const {createEventAdapter} = require('@slack/events-api');
const {sendMessage} = require('./client');
const {searchWiki} = require('../apis/wikipedia');
const {searchYoutube} = require('../apis/youtube');

const slackEvents = createEventAdapter(STSECRET);

slackEvents.on('app_mention', event => {
    election(event.text);
});

function getType(text){
    let start = text.indexOf('[')+1;
    let end = text.indexOf(']');
    text = text.substring(start, end).trim();
    return text
}

function getText(text){
    let start = text.indexOf(']')+1;
    let end = text.length;
    text = text.substring(start, end).trim();
    return text;
}

function election(data){
    let type = getType(data);
    let text = getText(data);
    switch(type){
        case "Wikipedia":
            searchWiki(text);
            break;
        case "Youtube":
            searchYoutube(text);
            break;
        default: sendMessage("Opcion no encontrada");
    }
}

module.exports = {
    slackEvents
}