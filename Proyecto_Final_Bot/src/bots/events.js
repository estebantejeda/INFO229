const {sendMessage} = require('./client');
const {searchWiki} = require('../apis/wikipedia');
const {searchYoutube} = require('../apis/youtube');
const {postWordpress} = require('../apis/wordpress');
const amqp = require('amqplib/callback_api');

let queue = 'task_queue';

amqp.connect('amqp://localhost', (err, connection) => {
    if(err) throw err;
    connection.createChannel((err, channel) => {
        if(err) throw err;
        channel.assertQueue(queue, {durable: true});
        channel.consume(queue, (data) => {
            data = data.content.toString();
            election(data)
            console.log("[x] Received %s", data);
            setTimeout(() => console.log("[x] Done"), getTime(data) * 500);
        },{noAck: true});
    });
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

function getTime(text){
    if (text.indexOf('{') === -1) return 1;
    if (text.indexOf('}') === -1) return 1;
    let start = text.indexOf('{')+1;
    let end = text.indexOf('}');
    text = text.substring(start, end).trim();
    text = parseInt(text);
    if((text.toString() === 'NaN'|| text <= 0) ) return 1
    return text
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
    getText,
    getType,
    getTime
}