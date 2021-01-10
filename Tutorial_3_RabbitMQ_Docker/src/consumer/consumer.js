const amqp = require('amqplib/callback_api');
const wiki = require('wikijs').default;
const youtube = require('youtube-sr');

amqp.connect('amqp://localhost', (err, connection) => {
    if(err) throw err;
    connection.createChannel((err, channel) => {
        if(err) throw err;
        let queueName = "technical";
        channel.assertQueue(queueName, {durable: false});
        channel.consume(queueName, message => {
            let type = getType(message);
            let text = getText(message);
            if(type === "Wikipedia") searchWiki(text);
            else if(type === "Youtube") searchYoutbe(text);
            else console.log("No encontrado. Solo se admite [Wikipedia] o [Youtube]");
        }, {noAck: true});
    });
});

function getType(message){
    let type = message.content.toString();
    let inicio = type.indexOf('[')+1;
    let fin = type.indexOf(']');
    return type.substring(inicio, fin);
}

function getText(message){
    let text = message.content.toString();
    let inicio = text.indexOf(']')+2;
    let fin = text.length;
    return text.substring(inicio, fin);
}

function searchWiki(text){
    wiki({apiUrl: "https://es.wikipedia.org/w/api.php"})
        .page(text)
        .then(page => data = page.summary())
        .then(data => console.log(data.split("\n")[0]))
        .catch(err => console.log("Articulo no encontrado"));
}

function searchYoutbe(text){
    youtube.search(text,{limit: 1})
        .then(data => {
            if(Object.entries(data) == 0) console.log("No encontrado");
            else console.log(`https://www.youtube.com/watch?v=${data[0].id}`);
        })
        .catch(console.error);
}