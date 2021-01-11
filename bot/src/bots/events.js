const {STSECRET} = require('../config/config');

const {createEventAdapter} = require('@slack/events-api');
const {sendMessage} = require('./client');
const {searchWiki} = require('../apis/wikipedia');
const {searchYoutube} = require('../apis/youtube');
const {postWordpress} = require('../apis/wordpress');

const slackEvents = createEventAdapter(STSECRET);

slackEvents.on('app_mention', event => {
    election(event.text);
});

function getType(text){
    if (text.indexOf('[') === -1) return -1;
    if (text.indexOf(']') === -1) return -1;
    let start = text.indexOf('[')+1;
    let end = text.indexOf(']');
    text = text.substring(start, end).trim();
    return text
}

function getText(text){
    if (text.indexOf(']') === -1) return -1;
    let start = text.indexOf(']')+1;
    let end = text.length;
    text = text.substring(start, end).trim();
    return text;
}

function election(data){
    let type = getType(data).trim();
    let text = getText(data).trim();
    if(text.length === 0) type = "Error";
    switch(type){
        case "Wikipedia":
            searchWiki(text);
            break;
        case "Youtube":
            searchYoutube(text);
            break;
        case "Wordpress":
            postWordpress(text);
            break;
        case "Error":
            sendMessage("Error: Debes ingresar un cuerpo\nEjemplo: [Wikipedia] Batman");
            break;
        default: sendMessage("Error: Opcion no encontrada.\nPuede ser [Wikipedia], [Youtube] o [Wordpress]");
    }
}

module.exports = {
    slackEvents,
    getText,
    getType
}